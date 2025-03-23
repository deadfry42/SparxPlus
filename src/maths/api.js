(async () => {
    var replacedLogo = false;
    var loadedSettings = false;

    function appendStyleContent(id, content) {
        if (!document.querySelector("#" + id)) {
            var head = document.head || document.getElementsByTagName("head")[0];
            head.appendChild(createStyleElementFromContent(id, content));
        }
    }

    function appendStyleSheet(id, url) {
        if (!document.querySelector("#" + id)) {
            var head = document.head || document.getElementsByTagName("head")[0];
            head.appendChild(createStyleElementFromFile(id, url));
        }
    }

    function createStyleElementFromFile(id, url) {
        var style = document.createElement("link");
        style.rel = "stylesheet"
        style.href = url

        return style;
    }

    function createStyleElementFromContent(id, content) {
        var style = document.createElement("style");
        style.type = "text/css";
        style.id = id;

        if (style.styleSheet) {
            style.styleSheet.cssText = content;
        } else {
            style.appendChild(document.createTextNode(content));
        }
        return style;
    }

    var customDropDownOptions = [];

    function getDescendants(node, accum) {
        var i;
        accum = accum || [];
        for (i = 0; i < node.childNodes.length; i++) {
            accum.push(node.childNodes[i])
            getDescendants(node.childNodes[i], accum);
        }
        return accum;
    }

    // function getDescendants(node) {
    //     var descList = Array.from(node.getElementsByTagName("*"));
    //     // for (var descendant of descList) {
    //     //     console.log(descendant)
    //     // }
    //     return descList;
    // }

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

    function jumpscare(url) {
        var audio = new Audio(browser.runtime.getURL(url+".mp3"));
        var imgElement = document.createElement("img")
        imgElement.style.zIndex = 99999999;
        imgElement.style.position = "absolute"
        imgElement.style.left = 0;
        imgElement.style.top = 0;
        imgElement.style.opacity = 1;
        var width = window.screen.width > window.outerWidth ? window.outerWidth : window.screen.width;
        var height = window.screen.height > window.outerHeight ? window.outerHeight : window.screen.height;
        imgElement.style.maxWidth = `${width}px`
        imgElement.style.maxHeight = `${height}px`
        imgElement.style.minWidth = `${width}px`
        imgElement.style.minHeight = `${height}px`
        // imgElement.style.background = `url(${browser.runtime.getURL(url)})`
        imgElement.style.pointerEvents = "none"
        imgElement.src = browser.runtime.getURL(url+".png")
        document.body.append(imgElement)
        setTimeout(() => {
            imgElement.animate(
                [
                    { opacity: "0" },
                ], {
                    duration: 1500,
                    fill: 'forwards',
                }
            );
            setTimeout(() => {
                imgElement.remove()
            }, 1500);
        }, 250);
        
        audio.play();
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

    

    browser.runtime.sendMessage("SP-Opened")

    addEventListener("load", (event) => {

        browser.storage.sync.get().then((res) => {
            for (let object of Object.entries(res)) {
                customSettings[object[0]] = object[1]
            }

            if (res.darkMode) {
                log("CSS", "Injecting darkMode css file!")
                appendStyleSheet("darkmodeSP", browser.runtime.getURL("src/css/darkmodemaths.css"));
            } else if (res.test) {
                addOptionToDDMenuSC("SparxPlus Test", () => {
                    sendNotification("Testing!", 2500)
                    jumpscare("assets/memes/wrong")
                })
            } else if (res.customCSS != null && res.customCSS != "") {
                log("CSS", "Injecting custom CSS!")
                baseLog(ss.customCSS)
                appendStyleContent("customCSS", ss.customCSS)
            }
        })

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
                        // console.log(realnode)
                        try {
                            if (name.includes("SectionContainer") && !name.includes("PreviewSectionContainer") && !name.includes("SPARXPLUS")) {
                                // 99% settings

                                var settings = realnode.parentNode.parentNode;

                                var SettingsHeader = document.createElement("h1")
                                SettingsHeader.textContent = "SparxPlus settings"

                                settings.append(SettingsHeader)

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
                                        case "settings":
                                            if (pContent == null) validConfig = false;
                                            else
                                            for (let setting of pContent) {
                                                let validConfig = true;
                                                let sType = setting.type == null ? validConfig = false : setting.type;
                                                let sName = setting.name == null ? validConfig = false : setting.name;
                                                let sVar = setting.variable == null ? validConfig = false : customSettings[setting.variable];
                                                let sDesc = setting.description == null ? "" : setting.description;
        
                                                if (!validConfig || sVar == null) {
                                                    log("Settings", "Invalid setting configuration error!")
                                                    baseLog(setting)
                                                    continue;
                                                }
        
                                                let settingDiv = document.createElement("div")
                                                settingDiv.style.display = "flex"
        
                                                // definetly not stolen from w3schools.com
        
                                                switch (sType) {
                                                    case "toggle":
                                                        let percentage = 90;
                                                        let labelDiv = document.createElement("div")
                                                        labelDiv.ariaOrientation = "vertical"
                                                        labelDiv.setAttribute("data-orientation", "vertical")
                                                        labelDiv.style.padding = "10px"
                                                        labelDiv.style.maxWidth = `${percentage}%`
                                                        // labelDiv.style.float = "right"
        
                                                        let title = document.createElement("h4")
                                                        title.innerHTML = sName
                                                        title.style.maxWidth = `${percentage}%`
                                                        
                                                        let desc = document.createElement("p")
                                                        desc.innerHTML = sDesc
                                                        desc.style.maxWidth = `${percentage}%`
        
                                                        labelDiv.append(title)
                                                        labelDiv.append(desc)
        
                                                        let switchlabel = document.createElement("label")
                                                        let inp = document.createElement("input")
                                                        let slider = document.createElement("span")
        
                                                        switchlabel.className = "switch"
                                                        slider.className = "slider round"
                                                        inp.type = "checkbox"
            
                                                        inp.checked = sVar
            
                                                        inp.addEventListener('change', e => {
                                                            console.log(inp.checked)
                                                            chrome.storage.sync.set({
                                                                [setting.variable]: inp.checked
                                                            })
                                                            
                                                        });
            
                                                        switchlabel.append(inp)
                                                        switchlabel.append(slider)
            
                                                        settingDiv.append(switchlabel)
                                                        settingDiv.append(labelDiv)
                                                    break;
                                                    
                                                    case "input":
                                                        let percentage2 = 90;
        
                                                        let title2 = document.createElement("h4")
                                                        title2.innerHTML = sName
                                                        title2.style.maxWidth = `${percentage2}%`
                                                        
                                                        let desc2 = document.createElement("p")
                                                        desc2.innerHTML = sDesc
                                                        desc2.style.maxWidth = `${percentage2}%`
        
                                                        let theDiv = document.createElement("div")
        
                                                        let switchlabel2 = document.createElement("label")
                                                        let inp2 = document.createElement("textarea")
            
                                                        inp2.value = sVar
            
                                                        inp2.addEventListener('change', (e) => {
                                                            chrome.storage.sync.set({
                                                                [setting.variable]: e.target.value
                                                            })
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
            
                                                        settingDiv.append(theDiv)
                                                    break;
                                                }
        
                                                panel.append(settingDiv)
                                            }
        
                                            
                                        break;

                                        case "descriptive":
                                            if (pText == null) validConfig = false;
                                            else
                                            var content = document.createElement("p")
                                            content.innerHTML = pText;

                                            panel.append(content)
                                        break;

                                        case "blank":

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

                                log("Settings", "Added settings page successfully!")
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
                                        var newOption = createNewOptionInDDM(cNameA, cNameDiv, Icon, o.string)

                                        newOption.onclick = (event) => {
                                            o.callback();
                                        };

                                        menu.append(newOption);
                                    }
                                } catch {

                                }
                            } else if (name.includes("QuestionScrollableContent")) {
                                log("Maths", "Question Changed! (Added)")

                                // console.log(getDescendants(realnode))
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
                            } else if (name.includes("ResultFullWidth")) {
                                // got question result
                                if (name.includes("Incorrect")) {
                                    log("Maths", "Got question wrong!");
                                    if (customSettings.jumpscareWhenWrong == true) jumpscare("assets/memes/wrong")
                                } else if (name.includes("Correct")) {
                                    log("Maths", "Got question wrong!")
                                    if (customSettings.jumpscareWhenCorrect == true) jumpscare("assets/memes/correct")
                                }
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
                                    log("CSS", "Changed the question background gradient to the dark variant!")
                                    // realnode.src = browser.runtime.getURL("assets/darkmode/gradients/maths.svg")
                                }
                            } else if (name.includes("PageBackgroundImage")) {
                                if (customSettings.darkMode) {
                                    log("CSS", "Changed the background gradient to the dark variant!")
                                    realnode.src = browser.runtime.getURL("assets/darkmode/gradients/maths.svg")
                                }
                            }
                        } catch(e) {
                            log("API", "Error parsing added object! "+e)
                        }
                        
                    }
                }

                var target = record.target

                try {
                    var node = target;
                    var nodename = node.className;
                    // console.log(node)
                    if (nodename == null || nodename.includes == null) return; 
                    if (nodename.includes("TaskItemLink")) {
                        if (!customSettings.progressiveDisclosure) return;
                        doProgressiveDisclosure(node.parentNode)
                    } else if (nodename.includes("TransitionPage")) {
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
                                if (name.includes("TextElement")) {
                                    if (!realnode.classList.contains("SparxPlusTextElement")) {
                                        // give the text elements a custom class to make the text colouring work
                                        realnode.classList.add("SparxPlusTextElement")
                                    }
                                }
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
                            if (name.includes("QuestionScrollableContent")) {
                                log("Maths", "Question Changed! (Removed)")
                            }
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
    });
})();