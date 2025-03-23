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

const settingsFrontend = [
    {
        header: "UI Tweaks",
        description: "Small UI tweaks to fix issues with Sparx.",
        panel: [
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
    },
    {
        header: "Fun Settings",
        description: "Fun small additions to make Sparx more enjoyable to use!",
        panel: [
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
    },
    {
        header: "Extension Settings",
        description: "Settings to do with the extension itself",
        panel: [
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
    },
]