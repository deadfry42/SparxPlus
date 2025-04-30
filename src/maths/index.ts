import { Actions, Conditions, jumpscare, KeyboardMapping, Panel, SettingsPanel, SettingWarning, InputSetting, ToggleSetting, DescriptivePanel, BlankPanel, setCustomSettings, ClassMapping, TextSetting, getQuestion, getQuestionID, deserialiseQuestionID, QuestionData, formatBytes} from "../lib/defaults"
import { getDiscordLink, getGithubLink, getGoogleLink, getVersion, getLastUpdated, getLogs, addChangedEvent, log, baseLog } from "../lib/index";
import { doWhiteboard } from "./features/whiteboard";

// settings which are set by the user
// and used to determine what features should be available

// note: this is not synced by default.
// they are synced when the page loads, in api.js
export const customSettings : { [key: string]: any } = { // default settings
    hideVideoButton: false, // hide video button for extreme++ mega challenge >:)
    jumpscareWhenWrong: false, // animation when q wrong (slighly broken)
    jumpscareWhenCorrect: false, // animation when q correct (slighly broken)
    enableStartupNotification: false, // show notification when sparx plus loads
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

    resetSyncNextRefresh: false,
    resetLocalNextRefresh: false,

    enableDebugByDefault: false,

    whiteboard: false, // add a draw button, and show a whiteboard on screen (similar to video popup) and let the user draw
    whiteboardDarkModeOverride: false, // if is dark mode, pretend is light mode anyway.
    whiteboardShowSize: false, // show the size of the whiteboard data (in bytes)

    // goals:
    // calculatorButton: true, // click the "Calculator Allowed" button and bring up a calculator
    // bookworkTracker: false, // track the bookwork codes in a list, so that you can write them down later
};

setCustomSettings(customSettings)

export var updateDebugMenu : Function | null; 
export var toggleDebugMenu : Function | null;

export function setUpdateDebugMenu(callback : Function) {
    updateDebugMenu = callback
}

export function setToggleDebugMenu(callback : Function) {
    toggleDebugMenu = callback
}

var loadedTextObject : HTMLElement | null = null;
var loadedShowObject : HTMLElement | null = null;
var loadedPanel : HTMLElement | null = null;
var textObjectExpanded = false;

var logLength = 25;

// settings panels
// this manages each panel seen in the settings page of SparxMaths
// i'm not going to explain how it works here: it's a bit too complex to feasibly do so
export const settingsFrontend : Panel[] = [
    new SettingsPanel("UI Tweaks", "Small UI tweaks to fix issues with Sparx.")
        .addSetting(new ToggleSetting("darkMode")
                    .setName("Dark mode")
                    .setDescription("Enable a native dark mode for the website (doesn't support images unfortunately)")
                    .setExperimental(true)
                    .setWarning(new SettingWarning("Dark mode is an experimental setting where it tries its best to adapt the CSS of the website. Do not expect this dark mode to be perfect - it will have issues.")))
        .addSetting(new ToggleSetting("progressiveDisclosure")
                    .setName("Progressive Disclosure")
                    .setDescription("Hide tasks which haven't yet completed, to motivate you to finish. Doesn't work on revision."))
        // .addSetting(new ToggleSetting("calculator")
        //             .setName("Enable built-in calculator")
        //             .setDescription("Allow you to press on the calculator button to show a calculator to work out your answer.")
        //             .setExperimental(true))
        .addSetting(new ToggleSetting("keyboardShortcuts")
                    .setName("Enable keyboard shortcuts")
                    .setDescription("Enable shortcuts to make using Sparx on a keyboard easier")
                    .setWarning(new SettingWarning("H - Open \"My Homework\" tab<br>R - Open \"Revision & Assessments\" tab<br>C - open Compulsary tab<br>X - open XP Boost tab<br>T - open Target tab<br>I - open Independent Learning tab<br>Q - Open the assignment at the top of the page<br>[1-9] - Open task 1-9<br>Esc - Use the back button, or press the logo if no back buttons exist.")
                        .setInformational(true)))
        .addSetting(new InputSetting("customCSS")
                    .setPlaceholder("Input custom CSS Code here.\nThis applies when you refresh the page.")
                    .setName("Custom CSS")
                    .setDescription("Input custom CSS code to style SparxMaths the way you want to.")
                    .setWarning(new SettingWarning("The website may not appear as originally intended with Custom CSS."))),

    new SettingsPanel("Hiding UI", "Hide certain parts of the UI for whatever reason")
        .addSetting(new ToggleSetting("hideVideoButton")
                    .setName("Disable help videos")
                    .setDescription("Remove the video button, so that you can't see the help (basically hardcode mode"))
        .addSetting(new ToggleSetting("disableNameInTopright")
                    .setName("Hide name")
                    .setDescription("Hide the name in the top right corner of the screen."))
        .addSetting(new ToggleSetting("disableXPInTopRight")
                    .setName("Hide XP Count")
                    .setDescription("Hide the XP in the top right corner of the screen."))
        .addSetting(new ToggleSetting("hideColourOverlay")
                    .setName("Hide Colour overlay")
                    .setDescription("Disable the colour overlay and the settings panel (so that if the extension fails or isn't available, you still have the colour overlay)")),

    new SettingsPanel("Whiteboard", "Settings for the Whiteboard feature in questions")
        .addSetting(new ToggleSetting("whiteboard")
                    .setName("Enable Whiteboard feature")
                    .setDescription("Show a whiteboard button which lets you work out your answer.")
                    .setExperimental(true))
        .addSetting(new ToggleSetting("whiteboardDarkModeOverride")
                    .setName("Dark mode override")
                    .setDescription("Use the light mode whiteboard even if in dark mode."))
        .addSetting(new ToggleSetting("whiteboardShowSize")
                    .setName("Show data size")
                    .setDescription("Show the size of the whiteboard data (in bytes)"))
        .addSetting(new TextSetting("blank")
                    .operate((setting) => {
                        // this is promise-ception

                        var byteCount : number = 0; 

                        chrome.storage.local.get() .then((res) => {
                            for (var key in res) {
                                var id = deserialiseQuestionID(key);
                                if (id == null) continue;

                                var data : QuestionData = new QuestionData(id);
                                data.syncData() .then(() => {
                                    data.getKey("Whiteboard") .then((val) => {
                                        var string = JSON.stringify(val);
                                        var bytes = string.length*8;
                                        byteCount += bytes;
                                        setting.setValue(formatBytes(byteCount))
                                    })
                                })
                                
                            }
                        })
                    })
                    .setName("Current size of all whiteboard data")),

    new SettingsPanel("Fun Settings", "Fun small additions to make Sparx more enjoyable to use!")
        .addSetting(new ToggleSetting("jumpscareWhenWrong")
                    .setName("Jumpscare upon incorrect answer")
                    .setDescription("Play a funny animation whenever you get a question wrong (it's scary) (requires audio)")
                    .setExperimental(true))
        .addSetting(new ToggleSetting("jumpscareWhenCorrect")
                    .setName("Jumpscare upon correct answer")
                    .setDescription("Play a funny animation whenever you get a question correct (it's scary) (requires audio)")
                    .setExperimental(true)),

    new SettingsPanel("Extension Settings", "Settings that manage the extension itself")
        .addSetting(new ToggleSetting("enableCustomLogo")
                    .setName("Enable Custom logo")
                    .setDescription("Whether or not to use the custom SparxPlus logo in the top left."))
        .addSetting(new ToggleSetting("enableStartupNotification")
                    .setName("Enable Startup Notification")
                    .setDescription("Whether or not to notify you whenever SparxPlus successfully loads."))
        .addSetting(new ToggleSetting("enableDebugByDefault")
                    .setName("Show debug menu by default")
                    .setDescription("Whether or not to enable the debug menu in the top left corner by default. Use \"Home\" to toggle."))
        .addSetting(new ToggleSetting("audio")
                    .setName("Play extension audio")
                    .setDescription("Allows the extension to play sound."))
        .addSetting(new ToggleSetting("test")
                    .setName("Enable development features")
                    .setDescription("Enable features which are in development.")
                    .setWarning(new SettingWarning("Development features are work in progress, and could cause issues with the website."))),

    new SettingsPanel("Data management", "Manage the extension data")
        .addSetting(new ToggleSetting("resetSyncNextRefresh")
                    .setName("Reset Extension settings upon next refresh")
                    .setDescription("Reset the settings that the Extension currently has when the page is refreshed.")
                    .setWarning(new SettingWarning("This setting will reset the extension's settings back to the defaults. Are you sure you want to continue?")))
        .addSetting(new ToggleSetting("resetLocalNextRefresh")
                    .setName("Reset Extension data upon next refresh")
                    .setDescription("Reset the data that the extension holds in regard to questions (eg. whiteboard data)")
                    .setWarning(new SettingWarning("This setting will reset everything that the extension holds about Questions, eg. whiteboard data. Are you sure you want to continue?"))),

    new DescriptivePanel("About", "About SparxPlus")
        .setText(`
            Thanks for trying SparxPlus!
            <br>If you have anything to say about the extension, please leave a review at the <a href="${getGoogleLink()}">Chrome Web Store</a> page for this extension, or alternatively just join my discord, linked below! (This is so I can hear your feedback, and I can improve!)
            <br>
            <br>SparxPlus is a browser extension which modifies Sparx homework platforms, for quality of life, or just for fun.
            <br>
            <br>Interested in the development of this plugin?
            <br>This project is fully open source! Available <a href="${getGithubLink()}">here</a>!
            <br>(I hope the code is at the very least readable)
            <br>
            <br>Want to join the discord, to see new updates and general Sparx(Plus) help?
            <br>Join the discord <a href="${getDiscordLink()}">here</a>!
            <br>
            <br>This project is not affiliated with Sparx, SparxMaths and/or Sparx-learning.
            <br>
            <br><h6>[SparxPlus version ${getVersion()}, last updated ${getLastUpdated()}]</h6>`),

    new BlankPanel("Logs", "Logs outputted by SparxPlus")
        .setInit((panel : HTMLElement) => {
            var logs = document.createElement("p")
            panel.append(logs);

            loadedPanel = panel;
            textObjectExpanded = false;
            loadedShowObject = null;

            const updateLogs = () => {
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
                                if (loadedShowObject != null) loadedShowObject.remove()
                                loadedShowObject = null;

                                var fullTxt = "";
                                for (var log of getLogs()) {
                                    fullTxt += log+"<br>";
                                }
                                fullTxt+="-- End of logs --"

                                if (loadedTextObject != null) loadedTextObject.innerHTML = fullTxt;
                            }
                            if (loadedPanel != null) loadedPanel.append(loadedShowObject)
                        } else {
                            truncatedTxt+="-- End of logs --"
                        }
                        loadedTextObject.innerHTML = truncatedTxt;
                    }
                }
            }

            if (loadedTextObject == null) {
                // avoid memory leaks ;)
                addChangedEvent(() => {
                    updateLogs()
                })
            }

            loadedTextObject = logs;

            updateLogs()
        })
]

// keyboard shortcuts
// each key is matched to a part of a class name, or element via the setCheckMatch function
// this then performs an action on that element
// setKeyStarted and setKeySuccessful functions are ran when the key is pressed and finished respectively.
export const keyboardMapping : KeyboardMapping[] = [
    new KeyboardMapping()
        .setKeys(["Escape"])
        .setAction(Actions.Button)
        .setClassMatches(["SparxPlusBackQuestionButton", "BackButton", "SMLogo"]),

    new KeyboardMapping()
        .setKeys(["p"])
        .setAction(Actions.Button)
        .setClassMatches(["SMLogo"]),

    new KeyboardMapping()
        .setKeys(["c"])
        .setAction(Actions.Button)
        .setClassMatches(["NavButton"])
        .setCheckMatch((element : HTMLElement) => {
            try {
                var name : string = "compulsory"
                var children = element.children;
                var child = children[1];
                if (child == null) return false; 
                var firstChild = child.firstChild;
                if (firstChild == null) return false;
                return (<any>firstChild).data.toLowerCase() == name
            } catch(e) {
                return false;
            }
        }),

    new KeyboardMapping()
        .setKeys(["x"])
        .setAction(Actions.Button)
        .setClassMatches(["NavButton"])
        .setCheckMatch((element : HTMLElement) => {
            try {
                var name : string = "xp boost"
                var children = element.children;
                var child = children[1];
                if (child == null) return false; 
                var firstChild = child.firstChild;
                if (firstChild == null) return false;
                return (<any>firstChild).data.toLowerCase() == name
            } catch(e) {
                return false;
            }
        }),

    new KeyboardMapping()
        .setKeys(["t"])
        .setAction(Actions.Button)
        .setClassMatches(["NavButton"])
        .setCheckMatch((element : HTMLElement) => {
            try {
                var name : string = "target"
                var children = element.children;
                var child = children[1];
                if (child == null) return false; 
                var firstChild = child.firstChild;
                if (firstChild == null) return false;
                return (<any>firstChild).data.toLowerCase() == name
            } catch(e) {
                return false;
            }
        }),

    new KeyboardMapping()
        .setKeys(["i"])
        .setAction(Actions.Button)
        .setClassMatches(["NavButton"])
        .setCheckMatch((element : HTMLElement) => {
            try {
                var name : string = "independent learning"
                var children = element.children;
                var child = children[1];
                if (child == null) return false; 
                var firstChild = child.firstChild;
                if (firstChild == null) return false;
                return (<any>firstChild).data.toLowerCase() == name
            } catch(e) {
                return false;
            }
        }),

    new KeyboardMapping()
        .setKeys(["q"])
        .setAction(Actions.Button)
        .setClassMatches(["PackageAccordionTrigger"]),

    new KeyboardMapping()
        .setKeys(["h"])
        .setAction(Actions.Click)
        .setClassMatches(["SparxPlusHomeworkButton"]),

    new KeyboardMapping()
        .setKeys(["r"])
        .setAction(Actions.Click)
        .setClassMatches(["SparxPlusRevisionButton"]),

    new KeyboardMapping()
        .setKeys(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
        .setAction(Actions.None)
        .setClassMatches(["AccordionContent"])
        .setKeySuccessful((element : HTMLElement, key : string) => {
            let taskToClick = parseInt(key)-1;

            let buttons : Node[] = []
            for (let node of element.querySelectorAll("*")) {
                let name = node.className;
                if (name == null) continue;
                if (name.includes == null) continue;

                if (name.includes("TaskClickable")) {
                    buttons.push(node);
                }
            }

            try {
                (<HTMLButtonElement>buttons[taskToClick]).click()
            } catch(e) {

            }
        }),
];

export const classMapping : ClassMapping[] = [
    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added, Conditions.Removed])
        .addClassMatch("QuestionScrollableContent")
        .setIfMatched((element : HTMLElement, condition : Conditions) => {
            if (updateDebugMenu != null) updateDebugMenu()
        }),

    new ClassMapping([Conditions.Added])
        .addClassMatch("TopicFilterLabel")
        .addNewClass("SparxPlusTopicFilterLabel"),

    new ClassMapping([Conditions.Added])
        .addClassMatch("SupportTipsItem")
        .addNewClass("SparxPlusSupportTipsItem")
        .addNewClassToChildren("SparxPlusSupportTipsText"),

    new ClassMapping([Conditions.Added])
        .addClassMatch("IndependentLearningNoContentMessage")
        .addNewClass("SparxPlusIndependentLearningNoContentMessageText"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Added])
        .addClassMatch("ButtonSecondary")
        .addNewClass("SparxPlusSecondaryButton")
        .setIfMatched((element : HTMLElement, condition : Conditions) => {
            if (!element.classList.contains("SparxPlusBackQuestionButton")) {
                for (var children of element.children) {
                    var cname = children.className;
                    if (cname == null || cname.includes == null) continue;
                    if (cname.includes("Content")) {
                        var firstChild = <any>children.firstChild;
                        if (firstChild == null) return;
                        if (firstChild.data != null) {
                            if (firstChild.data.toLowerCase() == "back") {
                                element.classList.add("SparxPlusBackQuestionButton")
                            }
                        }
                    }
                }
            }
        }),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("TextElement")
        .addNewClass("SparxPlusTextElement")
        .setIfMatched((element : HTMLElement, condition : Conditions) => {
            for (var child of element.children) {
                if (child.constructor.name == document.createElement("table").constructor.name) {
                    if (!child.classList.contains("SparxPlusTable")) {
                        child.classList.add("SparxPlusTable")
                    }
                }
            }
        }),

    new ClassMapping([Conditions.Added])
        .addClassMatch("MenuItemText")
        .addNewClass("SparxPlusHomeworkButton")
        .setElementCheck((element : HTMLElement, condition : Conditions) => {
            try {
                return (<any>element.firstChild).data.toLowerCase() == "my homework";
            } catch(e) {
                return false;
            }
        }),

    new ClassMapping([Conditions.Added])
        .addClassMatch("MenuItemText")
        .addNewClass("SparxPlusRevisionButton")
        .setElementCheck((element : HTMLElement, condition : Conditions) => {
            try {
                return (<any>element.firstChild).data.toLowerCase() == "revision & assessments";
            } catch(e) {
                return false;
            }
        }),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified])
        .addClassMatch("Option_")
        .addNewClass("SparxPlusOption"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified])
        .addClassMatch("OptionSelected_")
        .addNewClass("SparxPlusOptionSelected"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("CardContent_")
        .addNewClass("SparxPlusCardContent"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("CardContentSelected_")
        .addNewClass("SparxPlusCardContentSelected"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("TextFieldComponent")
        .addNewClass("SparxPlusTextFieldComponent"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("TextField")
        .addNewClass("SparxPlusTextField"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("InlineSlotOptions")
        .addNewClass("SparxPlusInlineSlotOptions"),

    new ClassMapping([Conditions.Modified, Conditions.Added])
        .addClassMatch("TimesTablesButton")
        .setIfMatched((element : HTMLElement, condition : Conditions) => {
            if (customSettings.darkMode) {
                element.style.backgroundImage = `url(${chrome.runtime.getURL("assets/darkmode/images/TimesTableCard.png")})`
            }
        }),

    new ClassMapping([Conditions.Modified, Conditions.Added])
        .addClassMatch("ColourOverlay")
        .addNewClass("SparxPlusColourOverlay")
        .setIfMatched((element : HTMLElement, condition : Conditions) => {
            if (customSettings.hideColourOverlay) {
                element.style.display = "none";
            }
        }),

    new ClassMapping([Conditions.Modified, Conditions.Added])
        .addClassMatch("OverlaySettingsContainer")
        .setIfMatched((element : HTMLElement, condition : Conditions) => {
            if (customSettings.hideColourOverlay) {
                var p = element.parentNode;
                // this might just be the hackiest fix possible
                if (p != null) {
                    var p2 = p.parentNode;
                    if (p2 != null) {
                        // display section
                        (<HTMLElement>p2).style.display = "none"
                    }
                }
            }
        }),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("Button")
        .addNewClass("SparxPlusKeypadButton")
        .setElementCheck((element : HTMLElement, condition : Conditions) => {
            var id = element.id;
            if (id == null || id.includes == null) return false;

            if (id.includes("button-")) {
                return true;
            }
        }),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("AnswerPart")
        .setIfMatched((element : HTMLElement, condition : Conditions) => {
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
        }),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Added])
        .addClassMatch("!SparxPlusQuestionInfo")
        .addClassMatch("QuestionInfo")
        .addNewClass("SparxPlusQuestionInfo")
        .setIfMatched((element : HTMLElement, condition : Conditions) => {
            doWhiteboard(element, condition)
        }),

    new ClassMapping([Conditions.Modified, Conditions.Added])
        .addClassMatch("!SparxPlusDisabled")
        .addClassMatch("Disabled")
        .addNewClass("SparxPlusDisabled")
];