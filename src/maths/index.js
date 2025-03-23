const customSettings = { // default settings
    hideVideoButton: false,
    jumpscareWhenWrong: false,
    jumpscareWhenCorrect: false,
    enableStartupNotification: true,
    enableCustomLogo: true,
    progressiveDisclosure: false,
    disableNameInTopright: false,
    disableXPInTopRight: false,
    customCSS: "",

    test: true,

    // TODO:
    darkMode: false,
    // 
};

var loadedTextObject = null;
var loadedShowObject = null;
var loadedPanel = null;
var textObjectExpanded = false;

const settingsFrontend = [
    {
        header: "UI Tweaks",
        description: "Small UI tweaks to fix issues with Sparx.",
        panel: {
            type: "settings",
            content: [
                {
                    type: "toggle",
                    variable: "darkMode",
                    name: "Dark mode",
                    description: "Enable a native dark mode for the website (doesn't support images unfortunately)",
                },
                {
                    type: "toggle",
                    variable: "hideVideoButton",
                    name: "Disable help videos",
                    description: "Remove the video button, so that you can't see the help (basically hardcore mode)",
                },
                {
                    type: "toggle",
                    variable: "progressiveDisclosure",
                    name: "Progressive Disclosure",
                    description: "Hide tasks which haven't yet, to motivate you to finish. Doesn't work on revision.",
                },
                {
                    type: "toggle",
                    variable: "disableNameInTopright",
                    name: "Hide name",
                    description: "Hide the name in the top right corner of the screen.",
                },
                {
                    type: "toggle",
                    variable: "disableXPInTopRight",
                    name: "Hide XP count",
                    description: "Hide the XP in the top right corner of the screen.",
                },
                {
                    type: "input",
                    variable: "customCSS",
                    name: "Custom CSS",
                    description: "Input custom CSS code to style SparxMaths the way you want to.",
                    typeSpecific: {
                        placeholder: "Input custom CSS Code here.\nThis applies when you refresh the page."
                    }
                }
            ]
        }
    },
    {
        header: "Fun Settings",
        description: "Fun small additions to make Sparx more enjoyable to use!",
        panel: {
            type: "settings",
            content: [
                {
                    type: "toggle",
                    variable: "jumpscareWhenWrong",
                    name: "Jumpscare upon incorrect answer",
                    description: "Play a funny animation whenever you get a question wrong (it's scary) (plays a sound)",
                },
                {
                    type: "toggle",
                    variable: "jumpscareWhenCorrect",
                    name: "Jumpscare upon correct answer",
                    description: "Play a funny animation whenever you get a question correct (it's scary) (plays a sound)",
                }
            ]
        }
    },
    {
        header: "Extension Settings",
        description: "Settings to do with the extension itself",
        panel: {
            type: "settings",
            content: [
                {
                    type: "toggle",
                    variable: "enableCustomLogo",
                    name: "Enable Custom logo",
                    description: "Whether or not to use the custom SparxPlus logo in the top left.",
                },
                {
                    type: "toggle",
                    variable: "enableStartupNotification",
                    name: "Enable Startup Notification",
                    description: "Whether or not to notify you whenever SparxPlus successfully loads.",
                },
                {
                    type: "toggle",
                    variable: "test",
                    name: "Enable Development features",
                    description: "Enable features which are in development.",
                }
            ]
        }
    },
    {
        header: "About",
        description: "About SparxPlus",
        panel: {
            type: "descriptive",
            text: `SparxPlus is a browser extension which modifies Sparx homework platforms, for quality of life, or just for fun. (because let's be honest: doing homework is boring)<br><br>This project is fully open source! The code available <a href="${getGithubLink()}">here</a>!<br>(Note: The code will not be very well written lol)<br><br>This project is not affiliated with Sparx, or any of its subsidiaries/brands.<br><br>SparxPlus version ${getVersion()}, last updated ${getLastUpdated()}`
        }
    },
    {
        header: "Logs",
        description: "Logs that SparxPlus has generated.",
        panel: {
            type: "blank",
            initialise: (section, header, description, panel) => {
                var logs = document.createElement("p")
                panel.append(logs);

                loadedPanel = panel;
                textObjectExpanded = false;
                loadedShowObject = null;

                if (loadedTextObject == null) {
                    addChangedEvent(() => {
                        if (loadedTextObject != null) {
                            if (textObjectExpanded) {
                                var fullTxt = "";
                                for (var log of getLogs()) {
                                    fullTxt += log+"<br>";
                                }
                                fullTxt+="-- End of logs --"

                                loadedTextObject.innerHTML = fullTxt;
                            } else {
                                var truncatedTxt = "";
                                var i = 0;
                                var isTruncated = false;
                                for (var log of getLogs()) {
                                    i++;
                                    if (i <= 5) truncatedTxt += log+"<br>";
                                    else isTruncated = true;
                                }
                                console.log(isTruncated)
                                console.log(textObjectExpanded)
                                console.log(loadedShowObject)
                                if (isTruncated && !textObjectExpanded && loadedShowObject == null) {
                                    loadedShowObject = document.createElement("a");
                                    loadedShowObject.textContent = "Click to show more"
                                    loadedShowObject.style.textDecoration = "underline"
                                    loadedShowObject.style.color = "blue";
                                    loadedShowObject.style.cursor = "pointer";
                                    loadedShowObject.onclick = (e) => {
                                        textObjectExpanded = true;
                                        loadedShowObject.remove()
                                        loadedShowObject = null;

                                        var fullTxt = "";
                                        for (var log of getLogs()) {
                                            fullTxt += log+"<br>";
                                        }
                                        fullTxt+="-- End of logs --"

                                        loadedTextObject.innerHTML = fullTxt;
                                    }
                                    loadedPanel.append(loadedShowObject)
                                } else {
                                    truncatedTxt+="-- End of logs --"
                                }
                                loadedTextObject.innerHTML = truncatedTxt;
                            }
                        }
                    })
                }

                loadedTextObject = logs;
            }
        }
    },
]