var updateDebugMenu;
var toggleDebugMenu;

(async () => {
    log("Maths", "Sparx Plus started with SparxMaths!")

    var replacedLogo = false;
    var customDropDownOptions = [];

    function addOptionToDDMenuISC(icon, string, callback) {
        var option = {}
        option.string = string;
        option.callback = callback;
        option.icon = icon
        customDropDownOptions.push(option)
    }

    function addOptionToDDMenuSC(string, callback) {
        var option = {}
        option.string = string;
        option.callback = callback;
        option.icon = null;
        customDropDownOptions.push(option)
    }

    function addOptionToDDMenuS(string) {
        var option = {}
        option.string = string;
        option.callback = () => {};
        option.icon = null;
        customDropDownOptions.push(option)
    }

    function doProgressiveDisclosure(realnode) {
        let tasks = realnode.childNodes;
        for (let task of tasks) {
            let clist = task.classList;
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
                task.style.display = "none"
            } else {
                task.style.display = "flex"
            }
        }
    }

    function doClassMapping(realnode, name, Condition) {
        for (var mapping of classMapping) {
            var valid = true;
            var mMatches = mapping.classMatches == null ? valid = false : mapping.classMatches;
            var mCondition = mapping.conditions == null ? valid = false : mapping.conditions;
            var mClasses = mapping.newClass;
            var mChildClasses = mapping.newClassesToChildren;
            var mElementCheck = mapping.elementCheck;
            var mIfMatched = mapping.ifMatched;

            if (!valid) {
                log("ClassMapping", "Invalid config!")
                baseLog(mapping)
                continue;
            };
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
                        } else if (mElementCheck(realnode)) {
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

        browser.storage.local.get() .then((res) => {
            for (var key in res) {
                var verdict = true;
                var data = null;
                // i fucked up here and i dont wanna touch it lol
                // TODO: fix this code
                for (var found in res) {
                    data = res[""+found]
                }
                try {
                    const lastUsed = data["lastUsed"]
                    const days = 7;
                    if (lastUsed < Date.now() - (days*24*60*1000)) {
                        // old data
                        (async () => {
                            // remove that data (asynchronously)
                            browser.storage.local.remove([key])
                        })();
                    }
                } catch (e) {
                    
                }
            }
        })

        log("Data", `Cleaned up expired data!`)
    }

    cleanUpExpiredData();

    // put it in this wrapeper thingy to visually distinguish from the rest
    // and also async
    (async () => {

        updateDebugMenu = () => {
            
            try {
                var questionID = getQuestionID(PlatformID.SparxMaths);
                qIDTag.innerText = `QuestionID: ${questionID.getID()}\nAlphabeticID: ${questionID.getAlphabeticID()}`
            } catch(e) {
                qIDTag.innerText = ""
            }
        }

        toggleDebugMenu = () => {
            if (debugMenu.classList.contains("SparxPlusDebugMenuHidden")) {
                debugMenu.classList.remove("SparxPlusDebugMenuHidden")
            } else {
                debugMenu.classList.add("SparxPlusDebugMenuHidden")
            }
        }

        const debugMenu = document.createElement("div")
        debugMenu.className = "SparxPlusDebugMenu SparxPlusDebugMenuHidden"

        const title = document.createElement("p")
        title.innerText = "SparxPlus Debug Menu:"

        const qIDTag = document.createElement("p")

        debugMenu.append(title)
        debugMenu.append(qIDTag)

        document.body.append(debugMenu)


    })()

    const loadedPage = () => {

        log("HTML", "Page finished loading!")

        const settingsLoaded = (res) => {
            if (res.darkMode) {
                appendStyleSheet("darkmodeSP", browser.runtime.getURL("src/css/darkmodemaths.css"));
            }
            if (res.test) {
                addOptionToDDMenuSC("SparxPlus Test", () => {
                    sendNotification("Testing!", 2500)
                    jumpscare("assets/memes/wrong", customSettings.audio)
                })
                addOptionToDDMenuSC("SparxPlus Test 2", () => {
                    sendNotification("Testing!", 2500)
                    jumpscare("assets/memes/correct", customSettings.audio)
                })
                addOptionToDDMenuSC("SparxPlus Test Yes", () => {
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
                toggleDebugMenu();
            }
        }

        browser.storage.sync.get().then((res) => {
            if (res.resetLocalNextRefresh) {
                res.resetLocalNextRefresh = false;
                chrome.storage.sync.set({resetLocalNextRefresh: false})
                chrome.storage.local.clear();
                log("Data", "Successfully cleared extension question data!")
            }
            if (!res.resetSyncNextRefresh) {
                for (let object of Object.entries(res)) {
                    customSettings[object[0]] = object[1]
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

        const callback = (mutationRecord, observer) => {
            
            for (let record of mutationRecord) {
                for (let node of record.addedNodes) {
                    let list = []
                    list.push(node)
                    for (let cnode of getDescendants(node)) {
                        list.push(cnode)
                    }
                    for (let realnode of list) {
                        if (realnode == null) continue;
                        var name = realnode.className;
                        if (name == null || name.includes == null) continue;
                        try {
                            if (name.includes("SectionContainer") && !name.includes("PreviewSectionContainer") && !name.includes("SPARXPLUS")) {
                                // 99% settings

                                var settings = realnode.parentNode.parentNode;

                                var SettingsHeader = document.createElement("h1")
                                SettingsHeader.textContent = "SparxPlus settings"

                                var settingsWarningBox = createWarningBox("Settings will apply after refreshing the page")
                                settingsWarningBox.style.display = "none"

                                settings.append(SettingsHeader)
                                settings.append(settingsWarningBox)

                                if (!getIsRelease()) {        
                                    settings.append(createWarningBox("This is not a tagged release version of Sparx Plus - some features may be unintentionally broken, or in the works!"))
                                }

                                for (var settingsSection of settingsFrontend) {
                                    var header = document.createElement("h2")
                                    header.textContent = settingsSection.header == null ? "Unknown" : settingsSection.header

                                    var section = document.createElement("section")
                                    
                                    var description = document.createElement("p")
                                    description.innerHTML = settingsSection.description == null ? "" : settingsSection.description

                                    var panel = createNewSettingsPanel(name)
                                    let validConfig = true;

                                    var psetting = settingsSection.panel == null ? validConfig = false : settingsSection.panel;

                                    if (!validConfig) {
                                        log("Settings", "Invalid panel configuration error!")
                                        baseLog(psetting);
                                        continue;
                                    }
                                    
                                    var pType = psetting.type == null ? validConfig = false : psetting.type;
                                    var pText = psetting.text;
                                    var pContent = psetting.content;
                                    var pInitialise = psetting.initialise;

                                    if (!validConfig) {
                                        log("Settings", "Invalid panel configuration error!")
                                        baseLog(psetting);
                                        continue;
                                    }

                                    switch (pType) {
                                        case PanelType.Settings:
                                            if (pContent == null) validConfig = false;
                                            else
                                            for (let setting of pContent) {
                                                let validConfig = true;
                                                let sType = setting.type == null ? validConfig = false : setting.type;
                                                let sName = setting.name == null ? validConfig = false : setting.name;
                                                let sVar = setting.variable == null ? validConfig = false : customSettings[setting.variable];
                                                let sDesc = setting.description == null ? "" : setting.description;
                                                let sExperimental = setting.experimental == null ? false : setting.experimental;

                                                let sWarning = setting.warning == null ? null : setting.warning;
        
                                                if (!validConfig || sVar == null) {
                                                    log("Settings", "Invalid setting configuration error!")
                                                    baseLog(setting)
                                                    continue;
                                                }
        
                                                let settingDiv = document.createElement("div")
        
                                                // definetly not stolen from w3schools.com
        
                                                switch (sType) {
                                                    case SettingsType.Toggle:
                                                        let mainDiv = document.createElement("div")
                                                        mainDiv.style.display = "flex";

                                                        let warning;
                                                        if (sWarning != null) warning = createWarningBox(sWarning.text == null ? "" : sWarning.text, sWarning.info == null ? false : sWarning.info);

                                                        let labelDiv = document.createElement("div")
                                                        labelDiv.ariaOrientation = "vertical"
                                                        labelDiv.setAttribute("data-orientation", "vertical")
                                                        labelDiv.style.padding = "10px"
                                                        labelDiv.style.maxWidth = "auto"
                                                        labelDiv.style.paddingBottom = "3px"
                                                        labelDiv.style.marginBottom = "3px"

                                                        let title = document.createElement("div")
                                                        title.ariaOrientation = "horizontal"
                                                        title.style.display = "flex";
        
                                                        let titleTxt = document.createElement("h4")
                                                        titleTxt.innerHTML = sName
                                                        titleTxt.style.maxWidth = "auto"

                                                        if (sExperimental) {
                                                            let experimental = getSVG("experimental", "experimental")
                                                            experimental.style.maxWidth = 20
                                                            experimental.style.maxHeight = 20;
                                                            title.append(experimental)
                                                        }
                                                        title.append(titleTxt)
                                                        
                                                        let desc = document.createElement("p")
                                                        desc.innerHTML = sDesc
                                                        desc.style.maxWidth = "auto"
                                                        desc.style.padding = 0
                                                        desc.style.margin = 0;
        
                                                        labelDiv.append(title)
                                                        labelDiv.append(desc)
        
                                                        let switchlabel = document.createElement("label")
                                                        let inp = document.createElement("input")
                                                        let slider = document.createElement("span")
        
                                                        switchlabel.className = "switch"
                                                        switchlabel.style.marginTop = "10px"
                                                        slider.className = "slider round"
                                                        inp.type = "checkbox"
            
                                                        inp.checked = sVar
            
                                                        inp.addEventListener('change', e => {
                                                            chrome.storage.sync.set({
                                                                [setting.variable]: inp.checked
                                                            })

                                                            settingsWarningBox.style.display = "block"
                                                            
                                                            if (sWarning != null) {
                                                                if (!sWarning.static) {
                                                                    if (!inp.checked) {
                                                                        warning.style.display = "none"
                                                                    } else {
                                                                        warning.style.display = "block"
                                                                    }
                                                                }
                                                            }
                                                        });

                                                        switchlabel.append(inp)
                                                        switchlabel.append(slider)
            
                                                        mainDiv.append(switchlabel)
                                                        mainDiv.append(labelDiv)
                                                        settingDiv.append(mainDiv)
                                                        
                                                        if (sWarning != null) {
                                                            if (sWarning.static) warning.style.display = "block"
                                                            else {
                                                                if (!inp.checked) {
                                                                    warning.style.display = "none"
                                                                } else {
                                                                    warning.style.display = "block"
                                                                }
                                                            }

                                                            settingDiv.append(warning)
                                                        }
                                                    break;
                                                    
                                                    case SettingsType.Input:
                                                        let warning2
                                                        if (sWarning != null) warning2 = createWarningBox(sWarning.text == null ? "" : sWarning.text, sWarning.info == null ? false : sWarning.info);
        
                                                        let title2 = document.createElement("div")
                                                        title2.ariaOrientation = "horizontal"
                                                        title2.style.display = "flex";

                                                        let title2Txt = document.createElement("h4")
                                                        title2Txt.innerHTML = sName
                                                        title2Txt.style.maxWidth = "auto"

                                                        if (sExperimental) {
                                                            let experimental = getSVG("experimental", "experimental")
                                                            experimental.style.maxWidth = 20
                                                            experimental.style.maxHeight = 20;
                                                            title2.append(experimental)
                                                        }
                                                        title2.append(title2Txt)
                                                        
                                                        let desc2 = document.createElement("p")
                                                        desc2.innerHTML = sDesc
                                                        desc2.style.maxWidth = "auto"
        
                                                        let theDiv = document.createElement("div")
        
                                                        let switchlabel2 = document.createElement("label")
                                                        let inp2 = document.createElement("textarea")
            
                                                        inp2.value = sVar
            
                                                        inp2.addEventListener('change', (e) => {
                                                            chrome.storage.sync.set({
                                                                [setting.variable]: e.target.value
                                                            })

                                                            settingsWarningBox.style.display = "block"

                                                            if (sWarning != null) {
                                                                if (sWarning.static == false) {
                                                                    if (e.target.value == "" || e.target.value == null) {
                                                                        warning2.style.display = "none"
                                                                    } else {
                                                                        warning2.style.display = "block"
                                                                    }
                                                                }
                                                            }
                                                            
                                                        });
        
                                                        if (setting.typeSpecific != null) {
                                                            var placeholder = setting.typeSpecific.placeholder;
                                                            if (placeholder != null) {
                                                                inp2.placeholder = placeholder
                                                            }
                                                        }
        
                                                        inp2.style.minWidth = `${100}%`
                                                        inp2.style.resize = "both"
        
                                                        settingDiv.ariaOrientation = "vertical"
                                                        settingDiv.setAttribute("data-orientation", "vertical")
            
                                                        switchlabel2.append(inp2)
        
                                                        theDiv.append(title2)
                                                        theDiv.append(desc2)
                                                        theDiv.append(switchlabel2)

                                                        if (sWarning != null) {
                                                            if (sWarning.static) {
                                                                warning2.style.display = "block"
                                                            } else {
                                                                if (inp2.value == "" || inp2.value == null) {
                                                                    warning2.style.display = "none"
                                                                } else {
                                                                    warning2.style.display = "block"
                                                                }
                                                            }
                                                            theDiv.append(warning2)
                                                        }

                                                        settingDiv.append(theDiv)
                                                    break;
                                                }

                                                panel.append(settingDiv)
                                            }
        
                                            
                                        break;

                                        case PanelType.Descriptive:
                                            if (pText == null) validConfig = false;
                                            else
                                            var content = document.createElement("p")
                                            content.innerHTML = pText;

                                            panel.append(content)
                                        break;

                                        case PanelType.Blank:
                                            // here so that he settings panel doesnt error out
                                        break;

                                        default:
                                            validConfig = false;
                                        break;
                                    }

                                    if (!validConfig) {
                                        log("Settings", "Invalid panel configuration error!")
                                        baseLog(psetting);
                                        continue;
                                    }
                                    
                                    section.append(header)
                                    section.append(description)
                                    section.append(panel)
        
                                    settings.append(section)

                                    if (pInitialise != null) {
                                        try {
                                            pInitialise(section, header, description, panel);
                                        } catch(e) {
                                            log("Settings", "Failed to run panel initialisation!")
                                            baseLog(e)
                                        }
                                    }
                                }
                            } else if (name.includes("DropdownMenuContent")) {
                                var menu = realnode;

                                try {
                                    // held together with hopes and prayers
                                    var firstOption = menu.childNodes[1];
                                    var cNameA = firstOption.className;
                                    var cNameDiv = firstOption.childNodes[0].className;
                                    var Icon = firstOption.childNodes[0].childNodes[0].cloneNode(true);

                                    for (let o of customDropDownOptions) {
                                        if (o.icon != null) Icon = o.icon;
                                        var newOption = createNewOptionInDDM(cNameA, cNameDiv, Icon.cloneNode(true), o.string)

                                        newOption.onclick = (event) => {
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
                                            newImg.src = browser.runtime.getURL("./assets/titles/sparxmaths.png")
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
                                let scores = realnode.textContent.split("/")
                                realnode.textContent = scores[0]
                            } else if (name.includes("StudentName")) {
                                if (customSettings.disableNameInTopright) {
                                    realnode.style.display = "none"
                                }
                            } else if (name.includes("XPCount")) {
                                if (customSettings.disableXPInTopRight) {
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
                                    realnode.src = browser.runtime.getURL("assets/darkmode/gradients/maths.svg")
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
                            var name = realnode.className;
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
                        var name = realnode.className;
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

    const doDebugMenuInput = (event) => {
        // hardcode debug menu:
        // because it has to work when keyboard shortcuts are disabled
        if (event.key == "Home") {
            if (toggleDebugMenu != null) {
                toggleDebugMenu()
            }
        }
    }

    const doKeyboardInput = (event) => {
        // i have to implement keyboard shortcuts in this way
        // because some elements are created then deleted
        // so we have to parse them when the key is pressed
        // it's not very performant but it is easy to do :p

        let matched = false;
        for (let mapping of keyboardMapping) {
            if (matched) break;
            var viable = true;
            var matches = mapping.classMatches == null ? viable = false : mapping.classMatches;
            var keys = mapping.keys == null ? viable = false : mapping.keys;
            var action = mapping.action == null ? viable = false : mapping.action;

            var elementCheck = mapping.elementCheck;
            var keyStarted = mapping.keyStarted;
            var keySuccessful = mapping.keySuccessful;

            if (!viable) continue;

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

            // match, key pressed

            switch(action.toLowerCase()) {
                case "click":
                    element.dispatchEvent(new MouseEvent("click", {
                        view: window,
                        button: 0,
                        cancelable: false,
                        bubbles: true,
                        relatedTarget: element
                    }));
                    if (keySuccessful != null) keySuccessful(element, foundKey)
                break;

                case "rightclick":
                    element.dispatchEvent(new MouseEvent("click", {
                        view: window,
                        button: 2,
                        cancelable: false,
                        bubbles: true,
                        relatedTarget: element
                    }));
                    if (keySuccessful != null) keySuccessful(element, foundKey)
                break;

                case "button":
                    element.click();
                    if (keySuccessful != null) keySuccessful(element, foundKey)
                break;

                case "none":
                    if (keySuccessful != null) keySuccessful(element, foundKey)
                break;
            }
            
            
        }
    }
})()