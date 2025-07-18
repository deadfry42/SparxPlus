import { KeyboardMapping, ClassMapping } from "../lib/classes/mappingClasses";
import { QuestionData } from "../lib/classes/questionClasses";
import { Panel, SettingsPanel, ToggleSetting, SettingWarning, InputSetting, TextSetting, DescriptivePanel, BlankPanel, SettingInformation, ButtonSetting } from "../lib/classes/settingsClasses";
import { Actions, ButtonType, Conditions } from "../lib/constants/enums";
import { formatBytes, getAsset, setCustomSettings } from "../lib/helpers/defaults";
import { deserialiseQuestionID } from "../lib/helpers/deserialisation";
import { jumpscare } from "../lib/helpers/elements";
import { getDiscordLink, getGithubLink, getGoogleLink, getVersion, getLastUpdated, getLogs, addChangedEvent } from "../lib/index";
import { doWhiteboard } from "./features/whiteboard";
import { confirmResetLocalData, confirmResetSyncData, openWhiteboardDataMenu } from "./features/data_management";

// settings which are set by the user
// and used to determine what features should be available

// note: this is not synced by default.
// they are synced when the page loads, in api.js
export const customSettings : {[index: string]:any} = { // default settings
    hideVideoButton: false, // hide video button for extreme++ mega challenge >:)
    enableStartupNotification: false, // show notification when sparx plus loads
    enableCustomLogo: true, // show logo in top left
    progressiveDisclosure: false, // hide incomplete questions
    disableNameInTopright: false, // hide name in top right
    disableXPInTopRight: false, // hide xp in top right
    disableNotificationsInTopRight: false, // hide notifications in top right
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
    whiteboardAutoClear: true, // delete week old whiteboard data

    addZoomFixes: false, // puts a percentage in zooming dialogue

    jumpscareWhenWrong: false, // animation when q wrong (slighly broken)
    jumpscareWhenCorrect: false, // animation when q correct (slighly broken)
    yippee: false, // play yippee sound when anything is pressed

    // saveAnswer: true // save the answer when you get it wrong
    // addZoomFixes: false

    // goals:
    // calculatorButton: true, // click the "Calculator Allowed" button and bring up a calculator
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
                    .setDisclosure(new SettingWarning("Dark mode is an experimental setting where it tries its best to adapt the CSS of the website. Do not expect this dark mode to be perfect - it will have issues.")))
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
                    .setDisclosure(new SettingInformation(
                        "H - Open \"My Homework\" tab<br>R - Open \"Revision & Assessments\" tab<br>C - open Compulsory tab<br>X - open XP Boost tab<br>T - open Target tab<br>I - open Independent Learning tab<br>Q - Open the assignment at the top of the page<br>[1-9] - Open task 1-9<br>Esc - Use the back button, or press the logo if no back buttons exist."
                    )))
        .addSetting(new InputSetting("customCSS")
                    .setPlaceholder("Input custom CSS Code here.\nThis applies when you refresh the page.")
                    .setName("Custom CSS")
                    .setDescription("Input custom CSS code to style SparxMaths the way you want to.")
                    .setDisclosure(new SettingWarning("The website may not appear as originally intended with Custom CSS."))),

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
        .addSetting(new ToggleSetting("disableNotificationsInTopRight")
                    .setName("Hide Notifications")
                    .setDescription("Hide the Notification button in the top right corner of the screen."))
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
                    .setDescription("Show the size of the whiteboard data in the menu."))
        .addSetting(new ToggleSetting("whiteboardAutoClear")
                    .setName("Clear out old data")
                    .setDescription("Automatically delete whiteboard data that is atleast one week old."))
        .addSetting(new ButtonSetting("blank")
                    .setName("Manage whiteboard data")
                    .setDescription("See old whiteboard data, and delete unused data to save space.")
                    .setButtonType(ButtonType.Secondary)
                    .setLabel("Open")
                    .onclick(() => {
                        openWhiteboardDataMenu()
                    })
                )
        .addSetting(new TextSetting("blank")
                    .setName("Current size of all whiteboard data")
                    .operate((setting) => {
                        // this is promise-ception

                        var byteCount : number = 0; 

                        setting.setValue("No data found!")

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
                    ),

    new SettingsPanel("Fun Settings", "Fun small additions to make Sparx more enjoyable to use!")
        .addSetting(new ToggleSetting("jumpscareWhenWrong")
                    .setName("Jumpscare upon incorrect answer")
                    .setDescription("Play a fullscreen jumpscare whenever you get a question wrong (it's scary and VERY LOUD) (May not always work)")
                    .setExperimental(true))
        .addSetting(new ToggleSetting("jumpscareWhenCorrect")
                    .setName("Jumpscare upon correct answer")
                    .setDescription("Play a fullscreen jumpscare whenever you get a question correct (it's scary and VERY LOUD) (May not always work)")
                    .setExperimental(true))
        .addSetting(new ToggleSetting("yippee")
                    .setName("yippee")
                    .setDescription("yippee (requires audio)")
                    .setExperimental(true))
        .addSetting(new ToggleSetting("oneko")
                    .setName("oneko")
                    .setDescription("A cat that chases around your cursor (inspired by the oneko.js implementation by adryd325)")
                    ),

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
                    .setDisclosure(new SettingWarning("Development features are work in progress, and could cause issues with the website."))),

    new SettingsPanel("Data management", "Manage the extension data")
        .addSetting(new ButtonSetting("deleteSync")
                    .setName("Reset Extension settings")
                    .setDescription("Reset the extensions' settings for SparxMaths.")
                    .setLabel("Reset")
                    .onclick(() => {
                        confirmResetSyncData()
                    })
            )
        .addSetting(new ButtonSetting("deleteLocal")
                    .setName("Reset Extension data")
                    .setDescription("Reset the extensions' data (eg. whiteboards) for SparxMaths.")
                    .setLabel("Reset")
                    .onclick(() => {
                        confirmResetLocalData()
                    }))
        .addSetting(new TextSetting("blank")
                    .setName("Disclosure")
                    .setValue("Your extension data will NEVER be shared externally to a server, unless you explicitly share it manually. If you reset your extension data, you are responsible for the data loss, and we cannot help you recover that data.")
                ),

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

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("MarkByPart")
        .addNewClass("SparxPlusMarkByPart"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("IsCorrect")
        .addNewClass("SparxPlusIsCorrect"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("ButtonGhost")
        .addNewClass("SparxPlusButtonGhost"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("ZoomDiv")
        .addNewClass("SparxPlusZoomDiv"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("SelectShared")
        .addNewClass("SparxPlusSelectShared"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("Warning")
        .addNewClass("SparxPlusWarning"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("SubHeading")
        .addNewClass("SparxPlusSubHeading"),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Modified, Conditions.Added])
        .addClassMatch("IsIncorrect")
        .addNewClass("SparxPlusIsIncorrect"),

    new ClassMapping([Conditions.Modified, Conditions.Added])
        .addClassMatch("TimesTablesButton")
        .setIfMatched((element : HTMLElement, condition : Conditions) => {
            if (customSettings.darkMode) {
                element.style.backgroundImage = `url(${getAsset("darkmode/images/TimesTableCard.png")})`
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
        .addClassMatch("ResultFullWidth")
        .setIfMatched((element : HTMLElement, condition : Conditions) => {
            // answerPart changed (this is the only way i could detect the answer being inputted :p)
            var result = document.body.querySelectorAll(`[class*="ResultFullWidth"]`)
            for (var res of result) {
                var name = res.className;
                if (name == null || name.includes == null) return;
                if (name.includes("Incorrect")) {
                    if (customSettings.jumpscareWhenWrong) jumpscare("assets/memes/wrong", customSettings.audio)
                    
                } else if (name.includes("Correct")) {
                    if (customSettings.jumpscareWhenCorrect) jumpscare("assets/memes/correct", customSettings.audio)
                }
            }
        }),

    new ClassMapping([Conditions.ModifiedTransitionPage, Conditions.Added])
        .addClassMatch("!SparxPlusQuestionInfo")
        .addClassMatch("QuestionInfo")
        .addNewClass("SparxPlusQuestionInfo")
        .setIfMatched((element : HTMLElement, condition : Conditions) => {
            if (customSettings.whiteboard) doWhiteboard(element)
        }),

    new ClassMapping([Conditions.Modified, Conditions.Added])
        .addClassMatch("!SparxPlusDisabled")
        .addClassMatch("Disabled")
        .addNewClass("SparxPlusDisabled")
];