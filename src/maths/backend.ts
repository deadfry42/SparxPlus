import { QuestionData, QuestionID } from "../lib/classes/questionClasses";
import { Conditions, PlatformID, Actions } from "../lib/constants/enums";
import { getAsset, getDescendants } from "../lib/helpers/defaults";
import { deserialiseQuestionID } from "../lib/helpers/deserialisation";
import { appendStyleSheet, sendNotification, jumpscare, appendStyleContent, createNewOptionInDDM } from "../lib/helpers/elements";
import { getQuestionID } from "../lib/helpers/question";
import { baseLog, getLastUpdated, log } from "../lib/index";
import { applySettingsPage } from "./features/settings";
import { doSplashScreen } from "./features/splashscreen";
import { classMapping, customSettings, keyboardMapping, setUpdateDebugMenu, setToggleDebugMenu, toggleDebugMenu } from "./index";

(async () => {
    log("Maths", "Sparx Plus started with SparxMaths!")

    var replacedLogo = false;
    var customDropDownOptions : any[] = [];

    function addOptionToDDMenu(icon : HTMLElement | null, string : string | null, callback : Function | null) {
        customDropDownOptions.push({
            string: string,
            callback: callback,
            icon: icon
        })
    }

    function doProgressiveDisclosure(realnode : HTMLElement) {
        let tasks = realnode.childNodes;
        for (let task of tasks) {
            let clist = (<HTMLElement>task).classList;
            let allowed = false;
            for (let name of clist) {
                if (name.includes("Selected")) {
                    allowed = true;
                } else if (name.includes("Summary")) {
                    allowed = true;
                } else if (name.includes("Correct")) {
                    allowed = true;
                }
            }
            if (allowed == false) {
                (<HTMLElement>task).style.display = "none"
            } else {
                (<HTMLElement>task).style.display = "flex"
            }
        }
    }

    function doClassMapping(realnode : HTMLElement, name : string, Condition : Conditions) {
        for (var mapping of classMapping) {
            let mMatches : string[] | null = mapping.getClassMatches();
            let mClasses : string[] | null = mapping.getNewClasses();
            let mChildClasses : string[] | null = mapping.getNewClassesToChildren();
            let mCondition : Conditions[] = mapping.getConditions();

            let mElementCheck : Function | null = mapping.elementCheck;
            let mIfMatched : Function | null = mapping.ifMatched;

            if (mMatches == null || mCondition == null) continue;
            
            var isCondition = false;

            for (var condition of mCondition) {
                if (condition == Condition) {
                    isCondition = true;
                    break;
                }
            }
            
            if (!isCondition) continue;

            var match = false;
            var opposed = false;

            for (var matches of mMatches) {
                if (matches.startsWith("!")) {
                    if (name.includes(matches.substring(1))) {
                        opposed = true;
                        break;
                    }
                }
                if (name.includes(matches)) {
                    // keep looping even if there is a match
                    // to find a non match
                    if (!match) {
                        if (mElementCheck == null) {
                            match = true;
                        } else if (mElementCheck(realnode, Condition)) {
                            match = true;
                        }
                    }
                }
            }

            if (!match || opposed) continue;

            try {
                if (mClasses != null) {
                    for (var mClass of mClasses) {
                        if (!realnode.classList.contains(mClass)) realnode.classList.add(mClass)
                    }
                }
            } catch(e) {

            }
            
            if (mChildClasses != null) {
                for (var mClass of mChildClasses) {
                    for (var child of realnode.children) {
                        if (!child.classList.contains(mClass)) {
                            child.classList.add(mClass);
                        }
                    }
                }
            }

            if (mIfMatched != null) {
                try {
                    mIfMatched(realnode, Condition);
                } catch(e) {
                    log("API", "Failed to run \"IfMatched\" function!")
                    baseLog(e)
                }
            }
        }
    }

    function cleanUpExpiredData() {
        // a function to clear up expired local data
        // to make sure we never run out of our 10MB limit
        // unless you just grind sparx that hard for some reason

        chrome.storage.local.get() .then((res) => {
            for (var key in res) {
                var questionID = deserialiseQuestionID(key);
                if (questionID == null) continue;

                var questionData = new QuestionData(questionID);
                if (questionData == null) continue;
                questionData.syncData() .then(() => {
                    (async () => {
                        const lastUsed : number = (<number>await questionData.getUseDate());
                        const days = 7;
                        if (lastUsed < Date.now() - (days*24*60*1000)) {
                            chrome.storage.local.remove([key])
                        }
                    })()
                })
            }
        })

        log("Data", `Cleaned up expired data!`)
    }

    cleanUpExpiredData();

    // put it in this wrapeper thingy to visually distinguish from the rest
    // and also async
    (async () => {

        setUpdateDebugMenu(() => {
            
            try {
                var questionID : QuestionID | null = getQuestionID(PlatformID.SparxMaths);
                if (questionID != null) qIDTag.innerText = `QuestionID: ${questionID.getID()}\nAlphabeticID: ${questionID.getAlphabeticID()}`
                else qIDTag.innerText = ""
            } catch(e) {
                qIDTag.innerText = ""
            }
        })

        setToggleDebugMenu(() => {
            if (debugMenu.classList.contains("SparxPlusDebugMenuHidden")) {
                debugMenu.classList.remove("SparxPlusDebugMenuHidden")
            } else {
                debugMenu.classList.add("SparxPlusDebugMenuHidden")
            }
        })

        const debugMenu = document.createElement("div")
        debugMenu.className = "SparxPlusDebugMenu SparxPlusDebugMenuHidden"

        const title = document.createElement("p")
        title.innerText = "SparxPlus Debug Menu:"

        const qIDTag = document.createElement("p")

        debugMenu.append(title)
        debugMenu.append(qIDTag)

        document.body.append(debugMenu)


    })()

    doSplashScreen();

    const loadedPage = () => {

        log("HTML", "Page finished loading!")

        const settingsLoaded = (res : any) => {
            if (res.darkMode) {
                appendStyleSheet("darkmodeSP", getAsset("css/darkmodemaths.css"));
            }
            if (res.test) {
                addOptionToDDMenu(null, "SparxPlus Test", () => {
                    sendNotification("Testing!", 2500)
                    jumpscare("assets/memes/wrong", customSettings.audio)
                })
                addOptionToDDMenu(null, "SparxPlus Test 2", () => {
                    sendNotification("Testing!", 2500)
                    jumpscare("assets/memes/correct", customSettings.audio)
                })
                addOptionToDDMenu(null, "SparxPlus Test Yes", () => {
                    sendNotification("Testing!", 2500)
                    jumpscare("assets/memes/wrong2", customSettings.audio)
                })
            }
            if (res.customCSS != null && res.customCSS != "") {
                baseLog(res.customCSS)
                appendStyleContent("customCSS", res.customCSS)
            }
            if (res.keyboardShortcuts) {
                addEventListener("keydown", (event) => {
                    doKeyboardInput(event)
                });
            }
            if (res.enableDebugByDefault) {
                if (toggleDebugMenu != null) toggleDebugMenu();
            }
        }

        chrome.storage.sync.get().then((res) => {
            if (res.resetLocalNextRefresh) {
                res.resetLocalNextRefresh = false;
                chrome.storage.sync.set({resetLocalNextRefresh: false})
                chrome.storage.local.clear();
                log("Data", "Successfully cleared extension question data!")
            }
            if (!res.resetSyncNextRefresh) {
                for (let object of Object.keys(res)) {
                    customSettings[object] = res[object]
                }

                settingsLoaded(res)
            } else {
                (async () => {
                    chrome.storage.sync.clear();
                    log("Data", "Successfully cleared extension settings!")
                })();
                
                settingsLoaded(customSettings)
            }

            log("Settings", "Successfully synced settings!")
        })

        addEventListener("keydown", (event) => {
            doDebugMenuInput(event)
        });

        const config = { attributes: true, childList: true, subtree: true };

        const callback = (mutationRecord : any, observer : any) => {
            
            for (let record of mutationRecord) {
                for (let node of record.addedNodes) {
                    let list : HTMLElement[] = []
                    list.push(node)
                    for (let cnode of getDescendants(node)) {
                        list.push(<HTMLElement>cnode)
                    }
                    for (let realnode of list) {
                        if (realnode == null) continue;
                        var name = realnode.className;
                        if (name == null || name.includes == null) continue;
                        try {
                            if (name.includes("SectionContainer") && !name.includes("PreviewSectionContainer") && !name.includes("SPARXPLUS")) {
                                // 99% settings

                                var settings : HTMLElement | null = null;
                                var parent = realnode.parentNode;
                                if (parent != null) settings = <HTMLElement>parent.parentNode;

                                if (settings == null) return;

                                applySettingsPage(settings, name)
                            } else if (name.includes("DropdownMenuContent")) {
                                var menu = realnode;

                                try {
                                    // held together with hopes and prayers
                                    var firstOption = <HTMLElement>menu.childNodes[1];
                                    var cNameA = firstOption.className;
                                    var cNameDiv = (<HTMLElement>firstOption.childNodes[0]).className;
                                    var Icon = firstOption.childNodes[0].childNodes[0].cloneNode(true);

                                    for (let o of customDropDownOptions) {
                                        if (o.icon != null) Icon = o.icon;
                                        var newOption = createNewOptionInDDM(cNameA, cNameDiv, Icon.cloneNode(true), o.string)

                                        newOption.onclick = (event : any) => {
                                            o.callback();
                                        };

                                        menu.append(newOption);
                                    }
                                } catch {

                                }
                            } else if (name.includes("SMLogo")) {
                                for (var n of realnode.children) {
                                    if (n.constructor.name == document.createElement("img").constructor.name) {

                                        if (customSettings.enableCustomLogo) {
                                            var newImg = document.createElement("img");
                                            newImg.alt = "Sparx Maths"
                                            newImg.src = getAsset("titles/sparxmaths.png")
                                            newImg.style.width = "150px";
                                            
                                            n.className = n.className
                                            n.remove();
                                            realnode.append(newImg);

                                            log("Logo", "Custom logo loaded and enabled!")
                                        } else {
                                            log("Logo", "Custom logo loaded, but not enabled!")
                                        }

                                        if (customSettings.enableStartupNotification) sendNotification("Sparx Plus successfully loaded! (Maths)", 2500)
                                        replacedLogo = true;
                                    }
                                }
                            } else if (name.includes("VideoNudgePopoverChildren")) {
                                if (customSettings.hideVideoButton) realnode.remove()
                            } else if (name.includes("TaskItemsContainer")) {
                                // q opened
                                if (!customSettings.progressiveDisclosure) continue;
                                doProgressiveDisclosure(realnode)
                            } else if (name.includes("SummaryProgressCounts")) {
                                if (!customSettings.progressiveDisclosure) continue;
                                var txt = realnode.textContent;
                                if (txt != null) {
                                    let scores = txt.split("/")
                                    realnode.textContent = scores[0]
                                }
                            } else if (name.includes("StudentName")) {
                                if (customSettings.disableNameInTopright) {
                                    realnode.style.display = "none"
                                }
                            } else if (name.includes("XPCount")) {
                                if (customSettings.disableXPInTopRight) {
                                    realnode.style.display = "none"
                                }
                            } else if (name.includes("NotificationsIconContainer")) {
                                if (customSettings.disableNotificationsInTopRight) {
                                    realnode.style.display = "none"
                                }
                            } else if (name.includes("LQDContainer")) {
                                if (customSettings.darkMode) {
                                    // i forgot what this was for but im keeping it incase i accidentally fuck something up
                                    // log("CSS", "Changed the question background gradient to the dark variant!")
                                }
                            } else if (name.includes("PageBackgroundImage")) {
                                if (customSettings.darkMode) {
                                    // log("CSS", "Changed the background gradient to the dark variant!")
                                    (<HTMLImageElement>realnode).src = getAsset("darkmode/gradients/maths.svg")
                                }
                            }

                            doClassMapping(realnode, name, Conditions.Added);
                        } catch(e) {
                            log("API", "Error parsing added object!")
                            baseLog(e)
                        }
                        
                    }
                }

                var target = record.target

                try {
                    var node = target;
                    var nodename = node.className;
                    if (nodename == null || nodename.includes == null) return; 
                    doClassMapping(node, nodename, Conditions.Modified);
                    if (nodename.includes("TaskItemLink")) {
                        if (!customSettings.progressiveDisclosure) return;
                        doProgressiveDisclosure(node.parentNode)
                    } else if (nodename.includes("TransitionPage") || nodename.includes("Activity") || nodename.includes("QuestionContainer")) {
                        var list = []
                        list.push(node)
                        for (let cnode of getDescendants(node)) {
                            list.push(cnode)
                        }

                        for (let realnode of list) {
                            if (realnode == null) continue;
                            var name = <string>realnode.className;
                            if (name == null || name.includes == null) continue;
                            try {
                                doClassMapping(realnode, name, Conditions.ModifiedTransitionPage);
                            } catch(e) {
                                log("API", "Error parsing modified object! "+e)
                            }
                        }
                    }
                } catch(e) {
                    log("API", "Error parsing modified object! "+e)
                }

                for (let node of record.removedNodes) {
                    let list = []
                    list.push(node)
                    for (let cnode of getDescendants(node)) {
                        list.push(cnode)
                    }
                    for (let realnode of list) {
                        if (realnode == null) continue;
                        var name = <string>realnode.className;
                        if (name == null || name.includes == null) continue;
                        try {
                            doClassMapping(realnode, name, Conditions.Removed)
                        } catch(e) {
                            log("API", "Error parsing removed object! "+e)
                        }
                    }
                }
            }
        };

        const observer = new MutationObserver(callback);
        observer.observe(document.body, config);

        setTimeout(() => {
            if (!replacedLogo) {
                log("Logo", "Logo check failed!")
                sendNotification("Sparx Plus failed to load! (Please report this to the developer!) This extension was last updated on: "+getLastUpdated(), 5000)
            }
        }, 5000);
    };

    addEventListener("pageshow", (event) => {
        loadedPage();
    });

    const doDebugMenuInput = (event : KeyboardEvent) => {
        // hardcode debug menu:
        // because it has to work when keyboard shortcuts are disabled
        if (event.key == "Home") {
            if (toggleDebugMenu != null) {
                toggleDebugMenu()
            }
        }
    }

    const doKeyboardInput = (event : KeyboardEvent) => {
        // i have to implement keyboard shortcuts in this way
        // because some elements are created then deleted
        // so we have to parse them when the key is pressed
        // it's not very performant but it is easy to do :p

        let matched = false;
        for (let mapping of keyboardMapping) {
            var matches = mapping.getClassMatches();
            var keys : string[] | null = mapping.getKeys();
            var action : Actions | null = mapping.getAction();

            if (matches == null || keys == null || action == null) continue;

            var elementCheck : Function | null = mapping.checkMatch;
            var keyStarted : Function | null = mapping.keyStarted;
            var keySuccessful : Function | null = mapping.keySuccessful;

            var foundKey = null;

            for (let key of keys) {
                if (key == event.key) {
                    foundKey = key;
                    break;
                }
            }

            if (foundKey == null) continue;

            if (keyStarted != null) keyStarted(foundKey)

            let element;

            for (let match of matches) {
                if (matched == true) break;
                for (let node of document.body.querySelectorAll("*")) {
                    if (matched == true) break;
                    let name = node.className;
                    if (name == null) continue;
                    if (name.includes == null) continue;

                    if (name.includes(match)) {
                        if (elementCheck == null) {
                            matched = true;
                            element = node;
                            break;
                        } else {
                            var res = elementCheck(node)
                            matched = res ? true : matched
                            if (res) {
                                element = node;
                                break;
                            }
                            
                        }
                        continue;
                    }
                }
            }

            if (!matched) break;
            if (element == null) break;

            // match, key pressed

            switch(action) {
                case Actions.Click:
                    element.dispatchEvent(new MouseEvent("click", {
                        view: window,
                        button: 0,
                        cancelable: false,
                        bubbles: true,
                        relatedTarget: element
                    }));
                    if (keySuccessful != null) keySuccessful(element, foundKey)
                break;

                case Actions.RightClick:
                    element.dispatchEvent(new MouseEvent("click", {
                        view: window,
                        button: 2,
                        cancelable: false,
                        bubbles: true,
                        relatedTarget: element
                    }));
                    if (keySuccessful != null) keySuccessful(element, foundKey)
                break;

                case Actions.Button:
                    if (element instanceof HTMLButtonElement) element.click();
                    if (keySuccessful != null) keySuccessful(element, foundKey)
                break;

                case Actions.None:
                    if (keySuccessful != null) keySuccessful(element, foundKey)
                break;
            }
            
            
        }
    }
})()