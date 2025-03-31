// settings which are set by the user
// and used to determine what features should be available

// note: this is not synced by default.
// they are synced when the page loads, in index.js
const customSettings = { // default settings
    hideVideoButton: false, // hide video button for extreme++ mega challenge >:)
    jumpscareWhenWrong: false, // animation when q wrong (slighly broken)
    jumpscareWhenCorrect: false, // animation when q correct (slighly broken)
    enableStartupNotification: true, // show notification when sparx plus loads
    enableCustomLogo: true, // show logo in top left
    progressiveDisclosure: false, // hide incomplete questions
    disableNameInTopright: false, // hide name in top right
    disableXPInTopRight: false, // hide xp in top right
    customCSS: "", // add custom css
    darkMode: false, // DARK MODE!!!
    audio: true, // extension audio
    test: false, // test idk
    keyboardShortcuts: false, // navigate Sparx with a keyboard
    hideColourOverlay: false, // hide colour overlay

    whiteboard: true, // add a draw button, and show a whiteboard on screen (similar to video popup) and let the user draw

    // goals:
    // calculatorButton: true, // click the "Calculator Allowed" button and bring up a calculator
    // bookworkTracker: false, // track the bookwork codes in a list, so that you can write them down later
};

var loadedTextObject = null;
var loadedShowObject = null;
var loadedPanel = null;
var textObjectExpanded = false;

var logLength = 25;

// enums (i would use typescript but it doesn't play nice with browser extensions)
// this is good enough
const Conditions = {
    Added: 'added',
    Modified: 'modified',
    ModifiedTransitionPage: 'modifiedTransitionPage'
};

const Actions = {
    Button: "button",
    Click: "click",
    LeftClick: "click",
    RightClick: "rightclick",
    None: "none",
};

const PanelType = {
    Settings: 'settings',
    Blank: 'blank',
    Descriptive: 'descriptive',
};

const SettingsType = {
    Toggle: "toggle",
    Input: "input",
};

// settings panels
// this manages each panel seen in the settings page of SparxMaths
// i'm not going to explain how it works here: it's a bit too complex to feasibly do so
const settingsFrontend = [
    {
        header: "UI Tweaks",
        description: "Small UI tweaks to fix issues with Sparx.",
        panel: {
            type: PanelType.Settings,
            content: [
                {
                    type: SettingsType.Toggle,
                    variable: "darkMode",
                    name: "Dark mode",
                    experimental: true,
                    description: "Enable a native dark mode for the website (doesn't support images unfortunately)",
                    warning: {
                        text: "Dark mode is an experimental setting where it tries its best to adapt the CSS of the website. Do not expect this dark mode to be perfect - it will have issues.",
                        static: false,
                    }
                },
                {
                    type: SettingsType.Toggle,
                    variable: "whiteboard",
                    experimental: true,
                    name: "Enable Whiteboard feature",
                    description: "Show a whiteboard button which lets you work out your answer.",
                },
                // {
                //     type: SettingsType.Toggle,
                //     variable: "calculator",
                //     experimental: true,
                //     name: "Enable Calculator feature",
                //     description: "Allow you to press on the calculator button to show a calculator to work out your answer.",
                // },
                {
                    type: SettingsType.Toggle,
                    variable: "keyboardShortcuts",
                    experimental: true,
                    name: "Enable keyboard shortcuts",
                    description: "Enable shortcuts to make using Sparx on a keyboard easier",
                    warning: {
                        text: "H - Open \"My Homework\" tab<br>R - Open \"Revision & Assessments\" tab<br>C - open Compulsary tab<br>X - open XP Boost tab<br>T - open Target tab<br>I - open Independent Learning tab<br>Q - Open the assignment at the top of the page<br>[1-9] - Open task 1-9<br>Esc - Use the back button, or press the logo if no back buttons exist.",
                        static: false,
                        info: true,
                    }
                },
                {
                    type: SettingsType.Input,
                    variable: "customCSS",
                    name: "Custom CSS",
                    description: "Input custom CSS code to style SparxMaths the way you want to.",
                    typeSpecific: {
                        placeholder: "Input custom CSS Code here.\nThis applies when you refresh the page."
                    },
                    warning: {
                        text: "The website may not appear as originally intended with Custom CSS.",
                        static: false,
                    }
                }
            ]
        }
    },
    {
        header: "Hiding UI",
        description: "Hide certain parts of the UI for whatever reason",
        panel: {
            type: PanelType.Settings,
            content: [
                {
                    type: SettingsType.Toggle,
                    variable: "hideVideoButton",
                    name: "Disable help videos",
                    description: "Remove the video button, so that you can't see the help (basically hardcore mode)",
                },
                {
                    type: SettingsType.Toggle,
                    variable: "progressiveDisclosure",
                    name: "Progressive Disclosure",
                    description: "Hide tasks which haven't yet completed, to motivate you to finish. Doesn't work on revision.",
                },
                {
                    type: SettingsType.Toggle,
                    variable: "disableNameInTopright",
                    name: "Hide name",
                    description: "Hide the name in the top right corner of the screen.",
                },
                {
                    type: SettingsType.Toggle,
                    variable: "disableXPInTopRight",
                    name: "Hide XP count",
                    description: "Hide the XP in the top right corner of the screen.",
                },
                {
                    type: SettingsType.Toggle,
                    variable: "hideColourOverlay",
                    name: "Hide Colour overlay",
                    description: "Disable the colour overlay and the settings panel (so that if the extension fails or isn't available, you still have the colour overlay)",
                },
            ]
        }
    },
    {
        header: "Fun Settings",
        description: "Fun small additions to make Sparx more enjoyable to use!",
        panel: {
            type: PanelType.Settings,
            content: [
                {
                    type: SettingsType.Toggle,
                    variable: "audio",
                    name: "Play extension audio",
                    description: "Allows the extension to play sound.",
                },
                {
                    type: SettingsType.Toggle,
                    experimental: true,
                    variable: "jumpscareWhenWrong",
                    name: "Jumpscare upon incorrect answer",
                    description: "Play a funny animation whenever you get a question wrong (it's scary) (plays a sound)",
                },
                {
                    type: SettingsType.Toggle,
                    experimental: true,
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
            type: PanelType.Settings,
            content: [
                {
                    type: SettingsType.Toggle,
                    variable: "enableCustomLogo",
                    name: "Enable Custom logo",
                    description: "Whether or not to use the custom SparxPlus logo in the top left.",
                },
                {
                    type: SettingsType.Toggle,
                    variable: "enableStartupNotification",
                    name: "Enable Startup Notification",
                    description: "Whether or not to notify you whenever SparxPlus successfully loads.",
                },
                {
                    type: SettingsType.Toggle,
                    variable: "test",
                    name: "Enable Development features",
                    description: "Enable features which are in development.",
                    warning: {
                        text: "Development features are work in progress, and could cause issues with the website.",
                        static: false,
                    }
                }
            ]
        }
    },
    {
        header: "About",
        description: "About SparxPlus",
        panel: {
            type: PanelType.Descriptive,
            text: `
            Thanks for trying SparxPlus! Hope you enjoy it!
            <br>
            <br>SparxPlus is a browser extension which modifies Sparx homework platforms, for quality of life, or just for fun. (because let's be honest: doing homework is boring)
            <br>
            <br>This project is fully open source! The code available <a href="${getGithubLink()}">here</a>!
            <br>(Note: The code will not be very well written lol)
            <br>
            <br>This project is not affiliated with Sparx, SparxMaths and/or Sparx-learning.
            <br>
            <br><h6>[SparxPlus version ${getVersion()}, last updated ${getLastUpdated()}]</h6>`
        }
    },
    {
        header: "Logs",
        description: "Logs that SparxPlus has generated.",
        panel: {
            type: PanelType.Blank,
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
                                    if (i <= logLength) truncatedTxt += log+"<br>";
                                    else isTruncated = true;
                                }
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

// keyboard shortcuts
// each key is matched to a part of a class name, or element via the elementCheck function
// this then performs an action on that element
// keyStarted and keySuccessful functions are ran when the key is pressed and finished respectively.
const keyboardMapping = [
    // see https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
    // for key names that aren't Key*
    {
        classMatches: ["SparxPlusBackQuestionButton", "BackButton", "SMLogo"],
        keys: ["Escape"],
        action: Actions.Button,
    },
    {
        classMatches: ["SMLogo"],
        keys: ["p"],
        action: Actions.Button,
    },
    {
        classMatches: ["NavButton"],
        elementCheck: (element) => {
            try {
                return element.children[1].firstChild.data.toLowerCase() == "compulsory"
            } catch(e) {
                return false;
            }
        },
        keys: ["c"],
        action: Actions.Button,
    },
    {
        classMatches: ["NavButton"],
        elementCheck: (element) => {
            try {
                return element.children[1].firstChild.data.toLowerCase() == "xp boost"
            } catch(e) {
                return false;
            }
        },
        keys: ["x"],
        action: Actions.Button,
    },
    {
        classMatches: ["NavButton"],
        elementCheck: (element) => {
            try {
                return element.children[1].firstChild.data.toLowerCase() == "target"
            } catch(e) {
                return false;
            }
        },
        keys: ["t"],
        action: Actions.Button,
    },
    {
        classMatches: ["NavButton"],
        elementCheck: (element) => {
            try {
                return element.children[1].firstChild.data.toLowerCase() == "independent learning"
            } catch(e) {
                return false;
            }
        },
        keys: ["i"],
        action: Actions.Button,
    },
    {
        classMatches: ["PackageAccordionTrigger"],
        keys: ["q"],
        action: Actions.Button,
    },
    {
        classMatches: ["SparxPlusHomeworkButton"],
        keys: ["h"],
        action: Actions.Click,
    },
    {
        classMatches: ["SparxPlusRevisionButton"],
        keys: ["r"],
        action: Actions.Click,
    },
    {
        classMatches: ["AccordionContent"],
        keySuccessful: (element, key) => {
            // we work around the system because yes
            let taskToClick = parseInt(key)-1;
            let current = 0;

            let buttons = []
            for (let node of element.querySelectorAll("*")) {
                let name = node.className;
                if (name == null) continue;
                if (name.includes == null) continue;

                if (name.includes("TaskClickable")) {
                    buttons.push(node);
                }
            }

            try {
                buttons[taskToClick].click()
            } catch(e) {

            }
        },
        keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        action: Actions.None,
    }
]

// whenever an element with a certain class is added/modified,
// it is assigned a custom class. (under the conditions of elementCheck, if it exists)
// (this is for styling / functionality / dark mode)
const classMapping = [
    {
        classMatches: ["TopicFilterLabel"],
        newClass: ["SparxPlusTopicFilterLabel"],
        conditions: [Conditions.Added],
    },
    {
        classMatches: ["SupportTipsItem"],
        newClass: ["SparxPlusSupportTipsItem"],
        newClassesToChildren: ["SparxPlusSupportTipsText"],
        conditions: [Conditions.Added],
    },
    {
        classMatches: ["IndependentLearningNoContentMessage"],
        newClass: [],
        newClassesToChildren: ["SparxPlusIndependentLearningNoContentMessageText"],
        conditions: [Conditions.Added],
    },

    {
        classMatches: ["ButtonSecondary"],
        newClass: ["SparxPlusSecondaryButton"],
        conditions: [Conditions.ModifiedTransitionPage, Conditions.Added],
        // elementCheck: (element) => {
        //     return true;
        // },
        ifMatched: (element, condition) => {
            if (!element.classList.contains("SparxPlusBackQuestionButton")) {
                for (var children of element.children) {
                    var cname = children.className;
                    if (cname == null || cname.includes == null) continue;
                    if (cname.includes("Content")) {
                        if (children.firstChild.data != null) {
                            if (children.firstChild.data.toLowerCase() == "back") {
                                element.classList.add("SparxPlusBackQuestionButton")
                            }
                        }
                    }
                }
            }
        }
    },
    {
        classMatches: ["TextElement"],
        newClass: ["SparxPlusTextElement"],
        conditions: [Conditions.ModifiedTransitionPage],
        ifMatched: (element, condition) => {
            for (var child of element.children) {
                if (child.constructor.name == document.createElement("table").constructor.name) {
                    if (!child.classList.contains("SparxPlusTable")) {
                        child.classList.add("SparxPlusTable")
                    }
                }
            }
        }
    },
    {
        classMatches: ["MenuItemText"],
        newClass: ["SparxPlusHomeworkButton"],
        conditions: [Conditions.Added],
        elementCheck: (element) => {
            try {
                return element.firstChild.data.toLowerCase() == "my homework";
            } catch(e) {
                return false;
            }
        }
    },
    {
        classMatches: ["MenuItemText"],
        newClass: ["SparxPlusRevisionButton"],
        conditions: [Conditions.Added],
        elementCheck: (element) => {
            try {
                return element.firstChild.data.toLowerCase() == "revision & assessments";
            } catch(e) {
                return false;
            }
        }
    },
    {
        classMatches: ["TextElement"],
        newClass: ["SparxPlusTextElement"],
        conditions: [Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added],
    },
    {
        classMatches: ["Option_"],
        newClass: ["SparxPlusOption"],
        conditions: [Conditions.ModifiedTransitionPage, Conditions.Modified],
    },
    {
        classMatches: ["OptionSelected_"],
        newClass: ["SparxPlusOptionSelected"],
        conditions: [Conditions.ModifiedTransitionPage, Conditions.Modified],
    },
    {
        classMatches: ["CardContent_"],
        newClass: ["SparxPlusCardContent"],
        conditions: [Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added],
    },
    {
        classMatches: ["CardContentSelected_"],
        newClass: ["SparxPlusCardContentSelected"],
        conditions: [Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added],
    },
    {
        classMatches: ["TextFieldComponent"],
        newClass: ["SparxPlusTextFieldComponent"],
        conditions: [Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added],
    },
    {
        classMatches: ["TextField"],
        newClass: ["SparxPlusTextField"],
        conditions: [Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added],
    },
    {
        classMatches: ["InlineSlotOptions"],
        newClass: ["SparxPlusInlineSlotOptions"],
        conditions: [Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added],
    },
    {
        classMatches: ["TimesTablesButton"],
        newClass: [],
        conditions: [Conditions.Added],
        ifMatched: (element, condition) => {
            if (customSettings.darkMode) {
                console.log(element)
                element.style.backgroundImage = `url(${browser.runtime.getURL("assets/darkmode/images/TimesTableCard.png")})`
            }
        }
    },
    {
        classMatches: ["ColourOverlay"],
        newClass: ["SparxPlusColourOverlay"],
        conditions: [Conditions.Modified, Conditions.Added],
        ifMatched: (element, condition) => {
            if (customSettings.hideColourOverlay) {
                element.style.display = "none";
            }
        }
    },
    {
        classMatches: ["OverlaySettingsContainer"],
        newClass: [],
        conditions: [Conditions.Modified, Conditions.Added],
        ifMatched: (element, condition) => {
            if (customSettings.hideColourOverlay) {
                var p = element.parentNode;
                // this might just be the hackiest fix possible
                if (p != null) {
                    var p2 = p.parentNode;
                    if (p2 != null) {
                        // display section
                        p2.style.display = "none"
                    }
                }
            }
        }
    },
    {
        classMatches: ["Button"],
        newClass: ["SparxPlusKeypadButton"],
        conditions: [Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added],
        elementCheck: (element, condition) => {
            var id = element.id;
            if (id == null || id.includes == null) return false;

            if (id.includes("button-")) {
                return true;
            }
        }
    },
    {
        classMatches: ["AnswerPart"],
        newClass: [], // no new classes,
        conditions: [Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added],
        ifMatched: (element, condition) => {
            // answerPart changed (this is the only way i could detect the answer being inputted :p)
            var result = document.body.querySelectorAll(`[class*="ResultFullWidth"]`)
            for (var res of result) {
                var name = res.className;
                if (name == null || name.includes == null) return;
                if (name.includes("Incorrect")) {
                    log("Maths", "Got question wrong!");
                    if (customSettings.jumpscareWhenWrong) jumpscare("assets/memes/wrong", customSettings.audio)
                } else if (name.includes("Correct")) {
                    log("Maths", "Got question wrong!")
                    if (customSettings.jumpscareWhenCorrect) jumpscare("assets/memes/correct", customSettings.audio)
                }
            }
        }
    },
]