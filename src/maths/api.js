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

    const loadedPage = () => {

        log("HTML", "Page finished loading!")

        browser.storage.sync.get().then((res) => {
            for (let object of Object.entries(res)) {
                customSettings[object[0]] = object[1]
            }

            if (res.darkMode) {
                log("CSS", "Injecting darkMode css file!")
                appendStyleSheet("darkmodeSP", browser.runtime.getURL("src/css/darkmodemaths.css"));
            }
            if (res.test) {
                addOptionToDDMenuSC("SparxPlus Test", () => {
                    sendNotification("Testing!", 2500)
                    jumpscare("assets/memes/wrong", customSettings.audio)
                })
            }
            if (res.customCSS != null && res.customCSS != "") {
                log("CSS", "Injecting custom CSS!")
                baseLog(res.customCSS)
                appendStyleContent("customCSS", res.customCSS)
            }

            log("Settings", "Successfully synced settings!")
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
                                        case "settings":
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
                                                // settingDiv.style.display = "flex"
        
                                                // definetly not stolen from w3schools.com
        
                                                switch (sType) {
                                                    case "toggle":
                                                        let mainDiv = document.createElement("div")
                                                        mainDiv.style.display = "flex";

                                                        let warning;
                                                        if (sWarning != null) warning = createWarningBox(sWarning.text == null ? "" : sWarning.text);

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
                                                            experimental.style.width = 20
                                                            experimental.style.height = 20;
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
                                                    
                                                    case "input":
                                                        let warning2
                                                        if (sWarning != null) warning2 = createWarningBox(sWarning.text == null ? "" : sWarning.text);
        
                                                        let title2 = document.createElement("div")
                                                        title2.ariaOrientation = "horizontal"
                                                        title2.style.display = "flex";

                                                        let title2Txt = document.createElement("h4")
                                                        title2Txt.innerHTML = sName
                                                        title2Txt.style.maxWidth = "auto"

                                                        if (sExperimental) {
                                                            let experimental = getSVG("experimental", "experimental")
                                                            experimental.style.width = 20
                                                            experimental.style.height = 20;
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
                            } else if (name.includes("ButtonSecondary")) {
                                if (!realnode.classList.contains("SparxPlusSecondaryButton")) {
                                    // give the text elements a custom class to make the text colouring work
                                    realnode.classList.add("SparxPlusSecondaryButton")
                                }
                            } else if (name.includes("TopicFilterLabel")) {
                                if (!realnode.classList.contains("SparxPlusTopicFilterLabel")) {
                                    // give the text elements a custom class to make the text colouring work
                                    realnode.classList.add("SparxPlusTopicFilterLabel")
                                }
                            }
                        } catch(e) {
                            log("API", "Error parsing added object!")
                            baseLog(e)
                        }
                        
                    }
                }

                var target = record.target

                try {
                    var node = target;
                    console.log(node);
                    var nodename = node.className;
                    if (nodename == null || nodename.includes == null) return; 
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
                                if (name.includes("TextElement")) {
                                    if (!realnode.classList.contains("SparxPlusTextElement")) {
                                        // give the text elements a custom class to make the text colouring work
                                        realnode.classList.add("SparxPlusTextElement")
                                    } 
                                } else if (name.includes("ButtonSecondary")) {
                                    if (!realnode.classList.contains("SparxPlusSecondaryButton")) {
                                        // give the text elements a custom class to make the text colouring work
                                        realnode.classList.add("SparxPlusSecondaryButton")
                                    }
                                } else if (name.includes("ResultFullWidth")) {
                                    if (name.includes("Incorrect")) {
                                        log("Maths", "Got question wrong!");
                                        if (customSettings.jumpscareWhenWrong) jumpscare("assets/memes/wrong", customSettings.audio)
                                    } else if (name.includes("Correct")) {
                                        log("Maths", "Got question wrong!")
                                        if (customSettings.jumpscareWhenCorrect) jumpscare("assets/memes/correct", customSettings.audio)
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
    };

    addEventListener("pageshow", (event) => {
        loadedPage();
    });
})()