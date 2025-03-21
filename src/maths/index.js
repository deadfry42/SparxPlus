const customSettings = { // default settings
    hideVideoButton: false,
    jumpscareWhenWrong: false,
    jumpscareWhenCorrect: false,
    enableStartupNotification: true,
    enableCustomLogo: true,
    progressiveDisclosure: false,
    disableNameInTopright: false,
    disableXPInTopRight: false,

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
                description: "Enable a darker version of the website (for late night homeworking)",
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

// SEE darkmodemaths.css
const darkModeCSS = `
:where(select) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E") no-repeat right center / 1em;
    border-radius: 0;
    padding-right: 1em
}

:root {
    --sxd-palette-white: #ffffff;
    --sxd-palette-brown-8: #cea37e;
    --sxd-palette-brown-11: #815e46;
    --sxd-palette-brown-12: #3e332e;
    --sxd-palette-red-8: #eb8e90;
    --sxd-palette-red-10: #dc3e42;
    --sxd-palette-red-11: #ce2c31;
    --sxd-palette-orange-3: #ffefd6;
    --sxd-palette-orange-6: #ffc182;
    --sxd-palette-orange-9: #f76b15;
    --sxd-palette-grass-8: #65ba74;
    --sxd-palette-grass-10: #3e9b4f;
    --sxd-palette-grass-11: #2a7e3b;
    --sxd-palette-sky-blue-10: #5373ff;
    --sxd-palette-grey-2: #f9f9f9;
    --sxd-palette-grey-3: #f0f0f0;
    --sxd-palette-grey-5: #e0e0e0;
    --sxd-palette-grey-9: #8d8d8d;
    --sxd-palette-grey-12: #202020;
    --sxd-palette-amber-8: #E2A336
}

html {
    --spx-unit-0-5: .125rem;
    --spx-unit-1: .25rem;
    --spx-unit-1-5: .375rem;
    --spx-unit-2: .5rem;
    --spx-unit-2-5: .625rem;
    --spx-unit-3: .75rem;
    --spx-unit-3-5: .875rem;
    --spx-unit-4: 1rem;
    --spx-unit-5: 1.25rem;
    --spx-unit-6: 1.5rem;
    --spx-unit-7: 1.75rem;
    --spx-unit-8: 2rem;
    --spx-unit-9: 2.25rem;
    --spx-unit-10: 2.5rem;
    --spx-unit-11: 2.75rem;
    --spx-unit-12: 3rem;
    --spx-unit-14: 3.5rem;
    --spx-unit-16: 4rem;
    --spx-unit-18: 4.5rem;
    --spx-unit-20: 5rem;
    --spx-unit-24: 6rem;
    --spx-unit-28: 7rem;
    --spx-unit-32: 8rem;
    --spx-unit-36: 9rem;
    --spx-unit-40: 10rem;
    --spx-unit-44: 11rem;
    --spx-unit-48: 12rem;
    --spx-unit-52: 13rem;
    --spx-unit-56: 14rem;
    --spx-unit-60: 15rem;
    --spx-unit-64: 16rem;
    --spx-unit-72: 18rem;
    --spx-unit-80: 20rem;
    --spx-unit-96: 24rem;
    --spx-font-size-xs: .75rem;
    --spx-font-size-sm: .875rem;
    --spx-font-size-base: 1rem;
    --spx-font-size-lg: 1.125rem;
    --spx-font-size-xl: 1.25rem;
    --spx-font-size-2xl: 1.5rem;
    --spx-font-size-3xl: 1.875rem;
    --spx-font-size-4xl: 2.25rem;
    --spx-font-size-5xl: 3rem;
    --spx-font-size-6xl: 3.75rem;
    --spx-font-size-7xl: 4.5rem;
    --spx-font-size-8xl: 6rem;
    --spx-font-size-9xl: 8rem;
    --spx-font-size-10xl: 10rem;
    --spx-radius-sm: .25rem;
    --spx-radius-base: .375rem;
    --spx-radius-md: .5rem;
    --spx-radius-lg: .75rem;
    --spx-radius-xl: 1rem;
    --spx-radius-full: 9999px;
    --spx-border-size-1: 1px;
    --spx-border-size-2: 2px;
    --spx-border-size-3: 5px;
    --spx-border-size-4: 10px;
    --spx-border-size-5: 25px;
    --spx-ease-1: cubic-bezier(.25, 0, .5, 1);
    --spx-ease-2: cubic-bezier(.25, 0, .4, 1);
    --spx-ease-3: cubic-bezier(.25, 0, .3, 1);
    --spx-ease-4: cubic-bezier(.25, 0, .2, 1);
    --spx-ease-5: cubic-bezier(.25, 0, .1, 1);
    --spx-ease-in-1: cubic-bezier(.25, 0, 1, 1);
    --spx-ease-in-2: cubic-bezier(.5, 0, 1, 1);
    --spx-ease-in-3: cubic-bezier(.7, 0, 1, 1);
    --spx-ease-in-4: cubic-bezier(.9, 0, 1, 1);
    --spx-ease-in-5: cubic-bezier(1, 0, 1, 1);
    --spx-ease-out-1: cubic-bezier(0, 0, .75, 1);
    --spx-ease-out-2: cubic-bezier(0, 0, .5, 1);
    --spx-ease-out-3: cubic-bezier(0, 0, .3, 1);
    --spx-ease-out-4: cubic-bezier(0, 0, .1, 1);
    --spx-ease-out-5: cubic-bezier(0, 0, 0, 1);
    --spx-ease-in-out-1: cubic-bezier(.1, 0, .9, 1);
    --spx-ease-in-out-2: cubic-bezier(.3, 0, .7, 1);
    --spx-ease-in-out-3: cubic-bezier(.5, 0, .5, 1);
    --spx-ease-in-out-4: cubic-bezier(.7, 0, .3, 1);
    --spx-ease-in-out-5: cubic-bezier(.9, 0, .1, 1);
    --spx-ease-elastic-1: cubic-bezier(.5, .75, .75, 1.25);
    --spx-ease-elastic-2: cubic-bezier(.5, 1, .75, 1.25);
    --spx-ease-elastic-3: cubic-bezier(.5, 1.25, .75, 1.25);
    --spx-ease-elastic-4: cubic-bezier(.5, 1.5, .75, 1.25);
    --spx-ease-elastic-5: cubic-bezier(.5, 1.75, .75, 1.25);
    --spx-ease-squish-1: cubic-bezier(.5, -.1, .1, 1.5);
    --spx-ease-squish-2: cubic-bezier(.5, -.3, .1, 1.5);
    --spx-ease-squish-3: cubic-bezier(.5, -.5, .1, 1.5);
    --spx-ease-squish-4: cubic-bezier(.5, -.7, .1, 1.5);
    --spx-ease-squish-5: cubic-bezier(.5, -.9, .1, 1.5);
    --spx-shadow-sm: 0px 2px 2px rgba(210, 221, 248, .5);
    --spx-shadow-sm-dark: 0px 2px 2px rgba(57, 60, 65, .3);
    --spx-shadow-md: 0px 3px 5px rgba(210, 221, 248, .6);
    --spx-shadow-md-dark: 0px 3px 5px rgba(57, 60, 65, .3);
    --spx-shadow-md-extradark: 0px 3px 5px rgba(45, 45, 45, 1);
    --spx-shadow-lg: 0px 4px 11px -1px rgba(210, 221, 248, .8);
    --spx-shadow-lg-dark-blue: 0px 4px 11px -1px var(--palette-dark-blue);
    --spx-shadow-lg-top: 0px -3px 11px rgba(128, 128, 128, .2);
    --spx-breakpoint-xs: 360px;
    --spx-breakpoint-sm: 480px;
    --spx-breakpoint-md: 768px;
    --spx-breakpoint-lg: 1024px;
    --spx-breakpoint-xl: 1440px;
    --spx-breakpoint-xxl: 1920px;
    --top-banner-height: var(--spx-unit-14);
    --top-banner-height-screen-sm: var(--spx-unit-12);
    --user-select-accessibility-setting: none;
    --training-banner-height: 45px;
    --training-box-bottom-left-radius: 10px;
    --training-mode-box-transition-length: .2s;
    --spx-layer-base-1: 10;
    --spx-layer-base-2: 20;
    --spx-layer-base-3: 30;
    --spx-layer-overlay-1: 100;
    --spx-layer-overlay-2: 200;
    --spx-layer-overlay-3: 300;
    --spx-layer-modal-1: 1000;
    --spx-layer-modal-2: 2000;
    --spx-layer-modal-3: 3000;
    --spx-layer-colour-overlay: 4000;
    --spx-size-max: max-content;
    --spx-size-min: min-content;
    --spx-size-full: 100%;
    --spx-size-3xs: 14rem;
    --spx-size-2xs: 16rem;
    --spx-size-xs: 20rem;
    --spx-size-sm: 24rem;
    --spx-size-md: 28rem;
    --spx-size-lg: 32rem;
    --spx-size-xl: 36rem;
    --spx-size-2xl: 42rem;
    --spx-size-3xl: 48rem;
    --spx-size-4xl: 56rem;
    --spx-size-5xl: 64rem;
    --spx-size-6xl: 72rem;
    --spx-size-7xl: 80rem;
    --spx-size-8xl: 90rem
}

:root {
    --swclient-background: linear-gradient( 120.87deg, var(--colours-page-background) 0%, var(--colours-page-background) 48%, var(--colours-page-background-gradient) 48%, var(--colours-page-background) 100% )
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

html,body,#root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0
}

#root {
    display: flex;
    flex-direction: column;
    overflow: hidden
}

svg:not([fill=none]) {
    fill: currentcolor
}

._ColourOverlay_msfx9_1 {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--spx-layer-colour-overlay);
    mix-blend-mode: multiply;
    pointer-events: none
}

html ._ReactQueryDevtools_msfx9_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._LargeLoading_1c4pv_1 {
    font-size: 100px;
    text-align: center;
    padding: var(--spx-unit-6) 0;
    -webkit-text-fill-color: initial;
    color: var(--colours-loading);
    opacity: .3;
    width: 100%
}

._Inline_1c4pv_10 {
    display: inline-block
}

._Green_1c4pv_14 {
    -webkit-text-fill-color: initial;
    color: var(--colours-complete)
}

._DarkGreen_1c4pv_18 {
    -webkit-text-fill-color: initial;
    color: var(--colours-complete-text)
}

._White_1c4pv_22 {
    -webkit-text-fill-color: initial;
    color: #fff
}

._Red_1c4pv_26 {
    -webkit-text-fill-color: initial;
    color: var(--colours-incorrect)
}

._None_1c4pv_30 {
    -webkit-text-fill-color: initial;
    color: default
}

._Grey_1c4pv_34 {
    -webkit-text-fill-color: initial;
    color: var(--colours-disabled-text)
}

._GoldHalf_1c4pv_38 {
    opacity: .3;
    -webkit-text-fill-color: initial;
    color: var(--colours-in-progress)
}

._Gold_1c4pv_38 {
    -webkit-text-fill-color: initial;
    color: var(--colours-in-progress)
}

._Purple_1c4pv_47 {
    -webkit-text-fill-color: initial;
    color: var(--colours-seek-help)
}

._Blue_1c4pv_51 {
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable)
}

html ._ReactQueryDevtools_1c4pv_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Spinner_8ufzi_1 {
    animation: _rotate_8ufzi_1 2s linear infinite;
    width: 50px;
    height: 50px;
    vertical-align: center
}

._Spinner_8ufzi_1 ._Path_8ufzi_8 {
    stroke-linecap: round;
    animation: _dash_8ufzi_1 1.5s ease-in-out infinite
}

@keyframes _rotate_8ufzi_1 {
    to {
        transform: rotate(360deg)
    }
}

@keyframes _dash_8ufzi_1 {
    0% {
        stroke-dasharray: 1,150;
        stroke-dashoffset: 0
    }

    50% {
        stroke-dasharray: 90,150;
        stroke-dashoffset: -35
    }

    to {
        stroke-dasharray: 90,150;
        stroke-dashoffset: -124
    }
}

html ._ReactQueryDevtools_8ufzi_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._TrainingBannerFocusTarget_1jqeh_3:focus {
    border: var(--spx-unit-1) solid var(--colours-transparent-glow);
    outline: none
}

._TrainingBanner_1jqeh_3 {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: var(--training-banner-height);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    z-index: 600;
    background-color: var(--colours-training-banner);
    pointer-events: all
}

._TrainingBannerLeft_1jqeh_24 {
    height: 100%;
    display: flex
}

._ExitTrainingButton_1jqeh_29 {
    display: flex;
    align-items: center;
    padding: 0 var(--spx-unit-5);
    background-color: transparent;
    border: var(--spx-unit-1) solid transparent;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    outline: none;
    cursor: pointer;
    font-weight: 700
}

._ExitTrainingButton_1jqeh_29>svg {
    margin-right: var(--spx-unit-2-5)
}

._ExitTrainingButtonSeparator_1jqeh_45 {
    height: 100%;
    border-right: var(--spx-border-size-1) solid var(--colours-separator)
}

._ExitTrainingButtonText_1jqeh_50 {
    display: block
}

@media (max-width: 768px) {
    ._ExitTrainingButtonText_1jqeh_50 {
        display:none
    }
}

._ExitTrainingButtonTextNarrow_1jqeh_58 {
    display: none
}

@media (max-width: 768px) {
    ._ExitTrainingButtonTextNarrow_1jqeh_58 {
        display:block
    }
}

._TrainingDropdownButton_1jqeh_66 {
    font-size: 85%;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 var(--spx-unit-5);
    background-color: transparent;
    border: var(--spx-unit-1) solid transparent;
    outline: none;
    height: calc(100% - var(--spx-unit-2));
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    cursor: pointer
}

._TrainingDropdownButton_1jqeh_66 ._TrainingProgress_1jqeh_80 {
    margin-right: var(--spx-unit-4)
}

._TrainingIndicators_1jqeh_84 {
    display: flex;
    align-items: center;
    margin-right: var(--spx-unit-4)
}

@media (max-width: 768px) {
    ._TrainingIndicators_1jqeh_84 {
        display:none
    }
}

._Indicator_1jqeh_94 {
    background-color: var(--colours-transparent-light);
    width: var(--spx-unit-6);
    height: var(--spx-unit-2);
    margin-right: 2px
}

._Indicator_1jqeh_94:first-child {
    border-radius: var(--spx-unit-1) 0 0 var(--spx-unit-1)
}

._Indicator_1jqeh_94:last-child {
    border-radius: 0 var(--spx-unit-1) var(--spx-unit-1) 0
}

._Indicator_1jqeh_94:only-child {
    border-radius: var(--spx-unit-1)
}

._IndicatorComplete_1jqeh_113 {
    background-color: var(--colours-complete)
}

._TrainingModeAnimate_1jqeh_117 {
    transition: all .2s
}

._TrainingModeMenuArrow_1jqeh_121 {
    transform: rotate(180deg)
}

._TrainingModeBox_1jqeh_125 {
    position: absolute;
    cursor: default;
    top: calc(var(--training-banner-height) - var(--spx-unit-2));
    right: calc(-1 * var(--spx-unit-1));
    background-color: var(--colours-training-banner);
    width: calc(100% + var(--spx-unit-1-5));
    border-bottom-left-radius: var(--training-box-bottom-left-radius);
    text-align: left;
    overflow: hidden;
    z-index: 201;
    box-shadow: var(--spx-shadow-md);
    transition: height .4s ease-in-out
}

@media (max-width: 768px) {
    ._TrainingModeBox_1jqeh_125 {
        width:100vw;
        max-width: var(--spx-unit-96)
    }
}

._TrainingModeBoxContents_1jqeh_151 {
    display: flex;
    align-items: flex-start;
    width: 200%;
    transform: translate(-50%);
    transition: transform .4s ease-in-out;
    height: 100%
}

._TrainingModeBoxContents_1jqeh_151._AllSteps_1jqeh_164 {
    transform: translate(0)
}

._TrainingModeBoxAllSteps_1jqeh_169 {
    flex: 1 1 50%;
    flex-direction: column;
    align-items: flex-start;
    max-height: 100%
}

._TrainingModeBoxTitle_1jqeh_176 {
    text-align: left;
    font-weight: 700;
    margin: var(--spx-unit-4) 0;
    font-size: 110%;
    padding: 0 var(--spx-unit-5)
}

._TrainingModeBoxStepDetails_1jqeh_184 {
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-height: 100%
}

._TrainingLinkButton_1jqeh_192 {
    -webkit-text-fill-color: initial;
    color: inherit;
    cursor: pointer;
    background: none;
    border: none;
    font-family: inherit;
    text-align: left
}

._AllStepsButton_1jqeh_201 {
    padding: 0 var(--spx-unit-5);
    margin-bottom: var(--spx-unit-2-5);
    font-size: var(--spx-font-size-lg);
    min-height: var(--spx-unit-10);
    border: var(--spx-unit-1) solid transparent
}

._VideoIconBlue_1jqeh_209 {
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable)
}

._TrainingModeStep_1jqeh_213 {
    margin: 0 var(--spx-unit-5)
}

._TrainingModeStepDetailsTitle_1jqeh_217 {
    display: block;
    border-bottom: var(--spx-border-size-1) solid var(--colours-transparent-glow);
    font-size: 100%;
    font-weight: 400;
    margin: 0;
    padding: var(--spx-unit-2) 0 var(--spx-unit-2-5) 0;
    text-align: left
}

._TrainingModeStepContext_1jqeh_227 {
    margin-bottom: var(--spx-unit-2-5);
    line-height: var(--spx-unit-6)
}

._TrainingModeStepContext_1jqeh_227 a {
    -webkit-text-fill-color: initial;
    color: var(--colours-plain-background)
}

._TrainingModeStepContext_1jqeh_227 ul {
    list-style-type: disc;
    margin: var(--spx-unit-2-5) 0 var(--spx-unit-2-5) var(--spx-unit-4);
    padding-left: 0;
    font-size: 120%;
    font-weight: 700
}

._TrainingModeStepContext_1jqeh_227 li {
    display: list-item;
    margin-bottom: var(--spx-unit-2-5)
}

._TrainingModeStepInstructions_1jqeh_249 {
    display: block;
    margin: var(--spx-unit-2-5) 0;
    line-height: 1.4rem
}

._TrainingModeStepCompleteActionButtons_1jqeh_255 {
    display: flex;
    align-items: center;
    margin: var(--spx-unit-2-5) 0
}

._TrainingModeStepCompleteActionButtons_1jqeh_255 ._ActionButton_1jqeh_261 {
    font-size: 90%;
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-sm);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-weight: 700;
    border: 0;
    padding: var(--spx-unit-2) var(--spx-unit-4);
    cursor: pointer;
    margin: var(--spx-unit-2-5) 0;
    display: flex;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    align-items: center
}

._TrainingModeStepCompleteActionButtons_1jqeh_255 ._NextStepButton_1jqeh_276 {
    margin-left: auto
}

._TrainingModeStepCompleteActionButtons_1jqeh_255 ._NextStepButton_1jqeh_276 svg {
    margin-left: var(--spx-unit-2);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._TrainingModeStepCompleteActionButtons_1jqeh_255 ._WatchVideoButton_1jqeh_285 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._TrainingModeStepCompleteActionButtons_1jqeh_255 ._WatchVideoButton_1jqeh_285 svg {
    margin-right: var(--spx-unit-2)
}

._TrainingModeStepCompleteActionButtons_1jqeh_255 ._ActionButton_1jqeh_261 ._WatchVideoIcon_1jqeh_293 {
    height: var(--spx-unit-5)
}

._TrainingModeShowMe_1jqeh_297 {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 90%;
    text-decoration: underline;
    margin: var(--spx-unit-2-5) 0;
    padding: 0
}

._ShowMeHowIcon_1jqeh_307 {
    margin-right: var(--spx-unit-1);
    height: var(--spx-unit-4)
}

._TrainingModeStepCompletion_1jqeh_312 {
    display: flex;
    background: var(--colours-plain-background);
    border-radius: var(--spx-unit-1);
    padding: var(--spx-unit-2)
}

._TrainingModeStepCompleteTitle_1jqeh_319 {
    display: flex;
    -webkit-text-fill-color: initial;
    color: var(--colours-complete);
    align-items: center;
    font-weight: 700;
    margin: 0
}

._TrainingModeStepCompleteIcon_1jqeh_327 {
    margin-right: var(--spx-unit-1-5)
}

@keyframes _CheckZoom_1jqeh_1 {
    0% {
        opacity: 0;
        transform: scale(.5) rotate(0)
    }

    30% {
        opacity: 1;
        transform: scale(1.4) rotate(30deg)
    }
}

._TrainingModeCheckAnimation_1jqeh_343 {
    animation: _CheckZoom_1jqeh_1 1s ease-out
}

._TrainingModeCheckIcon_1jqeh_347 {
    border-radius: var(--spx-radius-full);
    background-color: var(--colours-complete);
    padding: var(--spx-unit-1);
    height: 80%
}

._TrainingModeStepCompleteText_1jqeh_354 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary);
    margin: var(--spx-unit-1) 0
}

._TrainingModeUnfinishedBox_1jqeh_359 {
    padding: var(--spx-unit-2-5) 0;
    margin-top: var(--spx-unit-2-5);
    border-bottom: var(--spx-border-size-1) solid var(--colours-transparent-glow);
    border-top: var(--spx-border-size-1) solid var(--colours-transparent-glow)
}

._TrainingModeUnfinishedModule_1jqeh_366 {
    -webkit-text-fill-color: initial;
    color: var(--colours-plain-background);
    margin: 0
}

._TrainingModeUnfinishedModule_1jqeh_366:first-child {
    font-weight: 700;
    margin-bottom: var(--spx-unit-2)
}

._TrainingModeLink_1jqeh_376 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

._TrainingModeUnfinishedLink_1jqeh_380 {
    -webkit-text-fill-color: initial;
    color: inherit;
    cursor: pointer;
    background: none;
    border: var(--spx-unit-1) solid transparent;
    font-family: inherit;
    text-align: left;
    padding: 0;
    margin-right: var(--spx-unit-1);
    font-size: 100%;
    text-decoration: underline;
    font-weight: 700
}

._TrainingModeSummaryHeading_1jqeh_394 {
    text-align: left;
    font-weight: 700;
    font-size: 110%;
    margin: var(--spx-unit-1-5) var(--spx-unit-2-5) 0
}

._TrainingModeSummaryList_1jqeh_401 {
    list-style-type: disc;
    margin: var(--spx-unit-2-5) var(--spx-unit-2-5) var(--spx-unit-5) var(--spx-unit-4);
    padding-left: 0
}

._TrainingModeSummaryPoint_1jqeh_407 {
    display: list-item;
    margin-bottom: var(--spx-unit-2);
    font-weight: 700
}

._TrainingModeModuleComplete_1jqeh_413 {
    margin: var(--spx-unit-2-5) 0 var(--spx-unit-5) 0;
    border-top: var(--spx-border-size-1) solid var(--colours-transparent-glow)
}

._TrainingModeModuleCompleteHeading_1jqeh_418 {
    text-align: left;
    font-weight: 700;
    font-size: 110%;
    margin: var(--spx-unit-3-5) 0
}

._TrainingModeModuleCompleteButton_1jqeh_425 {
    display: block;
    box-sizing: border-box;
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-sm);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-weight: 700;
    border: 0;
    padding: var(--spx-unit-2-5);
    cursor: pointer;
    width: 100%;
    font-size: 90%;
    text-align: center
}

._TrainingModeVideoStepButton_1jqeh_440:hover,._TrainingModeModuleCompleteButton_1jqeh_425:hover {
    background-color: var(--colours-light-background)
}

._TrainingStep_1jqeh_445 {
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--spx-unit-2-5) var(--spx-unit-5);
    box-sizing: border-box;
    outline: none;
    border: var(--spx-border-size-2) solid var(--colours-training-banner);
    font-size: 100%;
    background-color: var(--colours-training-banner);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    cursor: pointer;
    width: 100%;
    text-align: left
}

._TrainingStep_1jqeh_445:not(:first-child):before {
    content: "";
    position: absolute;
    left: 0;
    top: -2px;
    height: var(--spx-border-size-1);
    width: 100%;
    border-bottom: var(--spx-border-size-1) solid var(--colours-transparent-glow)
}

._TrainingStep_1jqeh_445:hover {
    background-color: var(--colours-transparent-glow);
    border: var(--spx-border-size-2) solid transparent
}

._TrainingStep_1jqeh_445:focus {
    background-color: var(--colours-transparent-glow);
    border: var(--spx-border-size-2) solid var(--colours-transparent-glow)
}

._TrainingStepLeft_1jqeh_481 {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start
}

._TrainingStepTitle_1jqeh_488 {
    display: flex;
    align-self: stretch
}

._TrainingStepNumber_1jqeh_493 {
    flex: 0 0 var(--spx-unit-5)
}

._CompleteChip_1jqeh_497 {
    display: flex;
    align-items: center;
    font-size: 90%;
    font-weight: 700;
    background-color: var(--colours-complete);
    border-radius: var(--spx-radius-sm);
    margin: var(--spx-unit-1) 0 0 var(--spx-unit-5);
    padding: var(--spx-unit-1) var(--spx-unit-1) var(--spx-unit-1) 0
}

._CompleteChipIcon_1jqeh_508 {
    height: var(--spx-unit-3-5)
}

._TrainingStepArrow_1jqeh_512 {
    flex: 0 0 auto;
    margin: 0 var(--spx-unit-1)
}

._TrainingModeFeedbackContainer_1jqeh_517 {
    display: flex;
    padding-top: var(--spx-unit-4);
    padding-bottom: var(--spx-unit-6);
    border-top: var(--colours-transparent-glow) var(--spx-border-size-1) solid
}

._TrainingModeFeedbackIsThisModuleHelpful_1jqeh_524 {
    flex: 1 1
}

._TrainingModeFeedbackButtonsContainer_1jqeh_528 {
    display: flex
}

._TrainingModeFeedbackButtonsContainer_1jqeh_528>button:first-of-type {
    margin-right: var(--spx-unit-4)
}

._TrainingModeFeedbackButton_1jqeh_528 {
    background: transparent;
    border: var(--spx-unit-1) solid transparent;
    outline: none;
    -webkit-text-fill-color: initial;
    color: var(--colours-plain-background);
    cursor: pointer
}

._TrainingModeFeedbackButtonText_1jqeh_544 {
    margin-right: var(--spx-unit-2)
}

._TrainingModeFeedbackConfirmation_1jqeh_548 {
    margin: 0
}

html ._ReactQueryDevtools_1jqeh_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_w75ec_1 {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center
}

._Message_w75ec_11 {
    font-weight: 700;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    margin: var(--spx-unit-4);
    font-size: var(--spx-font-size-2xl);
    text-align: center;
    max-width: 600px
}

._LongLoadTimeMessage_w75ec_20 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    margin: var(--spx-unit-4) var(--spx-unit-2) 0 var(--spx-unit-2);
    text-align: center;
    max-width: 600px
}

html ._ReactQueryDevtools_w75ec_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._BreadcrumbLink_1hxft_1 {
    font-weight: 700;
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable);
    font-size: var(--spx-font-size-lg)
}

@media (max-width: 480px) {
    ._BreadcrumbLink_1hxft_1 {
        font-size:var(--spx-font-size-base)
    }
}

._BreadcrumbText_1hxft_11 {
    font-weight: 700;
    font-size: var(--spx-font-size-lg);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

@media (max-width: 480px) {
    ._BreadcrumbText_1hxft_11 {
        font-size:var(--spx-font-size-base)
    }
}

._BreadcrumbCaret_1hxft_21 {
    margin: 0 var(--spx-unit-2);
    -webkit-text-fill-color: initial;
    color: var(--colours-border)
}

html ._ReactQueryDevtools_1hxft_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._FocusTarget_1nxry_1:focus-visible {
    outline: none;
    box-shadow: 0 0 1px 2px var(--colours-selected) inset;
    border-color: var(--colours-selected)
}

html ._ReactQueryDevtools_1nxry_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._ButtonBase_nt2r3_1 {
    text-align: center;
    border-radius: var(--spx-button-border-radius, 1em);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--spx-button-font-weight, bold);
    font-family: inherit;
    transition: background-color .2s var(--spx-ease-1),background .2s var(--spx-ease-1),border-color .2s var(--spx-ease-1),opacity .2s var(--spx-ease-1),color .2s var(--spx-ease-1);
    cursor: pointer;
    position: relative;
    border: 1px solid white;
    text-decoration: none
}

._ButtonBase_nt2r3_1:focus-visible {
    box-shadow: 0 0 2px var(--colours-selected)
}

._ButtonSm_nt2r3_24 {
    --default-padding-y: var(--spx-unit-1);
    --default-padding-x: var(--spx-unit-3);
    padding-top: var(--spx-button-padding-t-sm, var(--spx-button-padding-y-sm, var(--spx-button-padding-sm, var(--default-padding-y))));
    padding-bottom: var(--spx-button-padding-b-sm, var(--spx-button-padding-y-sm, var(--spx-button-padding-sm, var(--default-padding-y))));
    padding-right: var(--spx-button-padding-r-sm, var(--spx-button-padding-x-sm, var(--spx-button-padding-sm, var(--default-padding-x))));
    padding-left: var(--spx-button-padding-l-sm, var(--spx-button-padding-x-sm, var(--spx-button-padding-sm, var(--default-padding-x))));
    font-size: var(--spx-button-font-size-sm, var(--spx-font-size-base))
}

._ButtonMd_nt2r3_35 {
    --default-padding-y: var(--spx-unit-1);
    --default-padding-x: var(--spx-unit-4);
    padding-top: var(--spx-button-padding-t-md, var(--spx-button-padding-y-md, var(--spx-button-padding-md, var(--default-padding-y))));
    padding-bottom: var(--spx-button-padding-b-md, var(--spx-button-padding-y-md, var(--spx-button-padding-md, var(--default-padding-y))));
    padding-right: var(--spx-button-padding-r-md, var(--spx-button-padding-x-md, var(--spx-button-padding-md, var(--default-padding-x))));
    padding-left: var(--spx-button-padding-l-md, var(--spx-button-padding-x-md, var(--spx-button-padding-md, var(--default-padding-x))));
    font-size: var(--spx-button-font-size-md, var(--spx-font-size-xl))
}

._ButtonLg_nt2r3_46 {
    --default-padding-y: var(--spx-unit-1);
    --default-padding-x: var(--spx-unit-5);
    padding-top: var(--spx-button-padding-t-lg, var(--spx-button-padding-y-lg, var(--spx-button-padding-lg, var(--default-padding-y))));
    padding-bottom: var(--spx-button-padding-b-lg, var(--spx-button-padding-y-lg, var(--spx-button-padding-lg, var(--default-padding-y))));
    padding-right: var(--spx-button-padding-r-lg, var(--spx-button-padding-x-lg, var(--spx-button-padding-lg, var(--default-padding-x))));
    padding-left: var(--spx-button-padding-l-lg, var(--spx-button-padding-x-lg, var(--spx-button-padding-lg, var(--default-padding-x))));
    font-size: var(--spx-button-font-size-lg, var(--spx-font-size-2xl))
}

._LeftIcon_nt2r3_57 {
    margin-right: var(--spx-unit-2)
}

._RightIcon_nt2r3_61 {
    margin-left: var(--spx-unit-2)
}

._LeftIcon_nt2r3_57,._RightIcon_nt2r3_61 {
    display: flex;
    align-items: center
}

._ButtonBlue_nt2r3_76 {
    --spx-button-contained-color: var(--colours-text-body-inverted);
    --spx-button-contained-color-hover: var(--colours-text-body-inverted);
    --spx-button-contained-background: var(--colours-interactable);
    --spx-button-contained-background-hover: var(--colours-selected);
    --spx-button-outlined-border-color: var(--colours-interactable);
    --spx-button-outlined-color: var(--colours-interactable);
    --spx-button-outlined-background: var(--colours-plain-background);
    --spx-button-outlined-background-hover: var(--colours-regular-background);
    --spx-button-plain-color: var(--colours-interactable);
    --spx-button-plain-background: var(--colours-plain-background);
    --spx-button-plain-background-hover: var(--colours-regular-background);
    --spx-button-text-color: var(--colours-interactable);
    --spx-button-text-color-hover: var(--colours-selected);
    --spx-button-text-background: transparent
}

._ButtonDarkBlue_nt2r3_93 {
    --spx-button-contained-color: var(--colours-text-body-inverted);
    --spx-button-contained-color-hover: var(--colours-text-body-inverted);
    --spx-button-contained-background: var(--colours-selected);
    --spx-button-contained-background-hover: var(--colours-interactable);
    --spx-button-outlined-border-color: var(--colours-selected);
    --spx-button-outlined-color: var(--colours-selected);
    --spx-button-outlined-background: var(--colours-plain-background);
    --spx-button-outlined-background-hover: var(--colours-regular-background);
    --spx-button-plain-color: var(--colours-selected);
    --spx-button-plain-background: var(--colours-plain-background);
    --spx-button-plain-background-hover: var(--colours-regular-background);
    --spx-button-text-color: var(--colours-selected);
    --spx-button-text-color-hover: var(--colours-interactable);
    --spx-button-text-background: transparent
}

._ButtonContained_nt2r3_111 {
    -webkit-text-fill-color: initial;
    color: var(--spx-button-contained-color);
    background: var(--spx-button-contained-background);
    border-color: transparent
}

._ButtonContained_nt2r3_111:visited {
    -webkit-text-fill-color: initial;
    color: var(--spx-button-contained-color)
}

._ButtonHoverTrigger_nt2r3_119:hover ._ButtonContained_nt2r3_111:not(._Disabled_nt2r3_119),._ButtonContained_nt2r3_111:not(._Disabled_nt2r3_119):hover {
    background: var(--spx-button-contained-background-hover);
    -webkit-text-fill-color: initial;
    color: var(--spx-button-contained-color-hover)
}

._ButtonContained_nt2r3_111:not(._Disabled_nt2r3_119):active {
    background: var(--spx-button-contained-background-hover);
    -webkit-text-fill-color: initial;
    color: var(--spx-button-contained-color-hover)
}

._ButtonOutlined_nt2r3_129 {
    -webkit-text-fill-color: initial;
    color: var(--spx-button-outlined-color);
    background: var(--spx-button-outlined-background);
    border-color: var(--spx-button-outlined-border-color)
}

._ButtonOutlined_nt2r3_129:visited {
    -webkit-text-fill-color: initial;
    color: var(--spx-button-outlined-color)
}

._ButtonHoverTrigger_nt2r3_119:hover ._ButtonOutlined_nt2r3_129:not(._Disabled_nt2r3_119),._ButtonOutlined_nt2r3_129:not(._Disabled_nt2r3_119):hover {
    background: var(--spx-button-outlined-background-hover)
}

._ButtonOutlined_nt2r3_129:not(._Disabled_nt2r3_119):active {
    background: var(--spx-button-outlined-background-hover)
}

._ButtonPlain_nt2r3_145 {
    -webkit-text-fill-color: initial;
    color: var(--spx-button-plain-color);
    background: var(--spx-button-plain-background);
    border-color: var(--spx-button-plain-background)
}

._ButtonPlain_nt2r3_145:visited {
    -webkit-text-fill-color: initial;
    color: var(--spx-button-plain-color)
}

._ButtonHoverTrigger_nt2r3_119:hover ._ButtonPlain_nt2r3_145:not(._Disabled_nt2r3_119),._ButtonPlain_nt2r3_145:not(._Disabled_nt2r3_119):hover {
    background: var(--spx-button-plain-background-hover);
    border-color: var(--spx-button-plain-background-hover)
}

._ButtonPlain_nt2r3_145:not(._Disabled_nt2r3_119):active {
    background: var(--spx-button-plain-background-hover);
    border-color: var(--spx-button-plain-background-hover)
}

._ButtonText_nt2r3_163 {
    border-color: var(--spx-button-text-background);
    -webkit-text-fill-color: initial;
    color: var(--spx-button-text-color);
    text-decoration: underline
}

._ButtonText_nt2r3_163._Disabled_nt2r3_119 {
    background-color: var(--spx-button-text-background);
    border-color: var(--spx-button-text-background)
}

._ButtonText_nt2r3_163:not(._Disabled_nt2r3_119):hover {
    -webkit-text-fill-color: initial;
    color: var(--spx-button-text-color-hover)
}

._Loading_nt2r3_176 {
    opacity: .7;
    pointer-events: none
}

._Disabled_nt2r3_119 {
    border-color: var(--colours-disabled);
    -webkit-text-fill-color: initial;
    color: var(--colours-disabled-text);
    background: var(--colours-disabled);
    cursor: not-allowed
}

._ButtonOutlined_nt2r3_129._Disabled_nt2r3_119 {
    background-color: var(--colours-plain-background)
}

._LeftIcon_nt2r3_57,._RightIcon_nt2r3_61,._Content_nt2r3_194 {
    opacity: 1;
    transition: opacity .1s var(--spx-ease-1)
}

._Loading_nt2r3_176 ._LeftIcon_nt2r3_57,._Loading_nt2r3_176 ._RightIcon_nt2r3_61,._Loading_nt2r3_176 ._Content_nt2r3_194 {
    opacity: 0
}

._LoadingOverlay_nt2r3_205 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center
}

html ._ReactQueryDevtools_nt2r3_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_1iird_1 {
    display: flex;
    align-items: center
}

._Container_1iird_1._LabelLeft_1iird_5 {
    flex-direction: row-reverse
}

._Container_1iird_1._LabelRight_1iird_8 {
    flex-direction: row
}

._Root_1iird_13 {
    position: relative;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    border: 1px solid var(--colours-interactable);
    border-radius: var(--spx-radius-sm);
    background-color: var(--colours-plain-background);
    cursor: pointer;
    transition-duration: .2s
}

._Root_1iird_13[data-state=checked] {
    background-color: var(--colours-interactable)
}

._Root_1iird_13[data-disabled] {
    opacity: .4;
    cursor: not-allowed
}

._Root_1iird_13._LabelLeft_1iird_5 {
    margin-left: var(--spx-unit-4)
}

._Root_1iird_13._LabelRight_1iird_8 {
    margin-right: var(--spx-unit-4)
}

._Root_1iird_13:focus {
    box-shadow: 0 0 0 1px var(--colours-interactable)
}

._Root_1iird_13._Inverted_1iird_48 {
    background-color: transparent;
    border-color: var(--colours-text-body-inverted);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

._InvertedBackground_1iird_60 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,.2)
}

._Icon_1iird_69 {
    height: 20px;
    width: auto;
    margin-top: -2px;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

._Label_1iird_5 {
    cursor: pointer
}

html ._ReactQueryDevtools_1iird_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Chip_bu06u_1 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    display: inline-flex;
    align-items: center;
    justify-content: center
}

._Chip_bu06u_1._Filled_bu06u_8._Interactable_bu06u_9 {
    background-color: var(--colours-interactable)
}

._Chip_bu06u_1._Filled_bu06u_8._Selected_bu06u_13 {
    background-color: var(--colours-selected)
}

._Chip_bu06u_1._Filled_bu06u_8._Complete_bu06u_17 {
    background-color: var(--colours-complete-text)
}

._Chip_bu06u_1._Filled_bu06u_8._Correct_bu06u_21 {
    background-color: var(--colours-complete)
}

._Chip_bu06u_1._Filled_bu06u_8._Incorrect_bu06u_25 {
    background-color: var(--colours-incorrect)
}

._Chip_bu06u_1._Filled_bu06u_8._Locked_bu06u_29 {
    background-color: var(--colours-locked);
    -webkit-text-fill-color: initial;
    color: var(--colours-locked-dark);
    font-weight: 400
}

._Chip_bu06u_1._Filled_bu06u_8._InProgress_bu06u_35 {
    background-color: var(--colours-in-progress)
}

._Chip_bu06u_1._Outlined_bu06u_40 {
    border-width: 1px;
    border-style: solid;
    font-weight: 700
}

._Chip_bu06u_1._Outlined_bu06u_40._Interactable_bu06u_9 {
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable);
    border-color: var(--colours-interactable)
}

._Chip_bu06u_1._Outlined_bu06u_40._Selected_bu06u_13 {
    -webkit-text-fill-color: initial;
    color: var(--colours-selected);
    border-color: var(--colours-selected)
}

._Chip_bu06u_1._Outlined_bu06u_40._Complete_bu06u_17 {
    -webkit-text-fill-color: initial;
    color: var(--colours-complete-text);
    border-color: var(--colours-border)
}

._Chip_bu06u_1._Outlined_bu06u_40._Correct_bu06u_21 {
    -webkit-text-fill-color: initial;
    color: var(--colours-correct);
    border-color: var(--colours-correct)
}

._Chip_bu06u_1._Outlined_bu06u_40._Incorrect_bu06u_25 {
    -webkit-text-fill-color: initial;
    color: var(--colours-incorrect);
    border-color: var(--colours-incorrect)
}

._Chip_bu06u_1._Outlined_bu06u_40._InProgress_bu06u_35 {
    -webkit-text-fill-color: initial;
    color: var(--colours-in-progress);
    border-color: var(--colours-in-progress)
}

._Chip_bu06u_1._Rounded_bu06u_71 {
    border-radius: var(--spx-radius-full)
}

._Chip_bu06u_1._Boxy_bu06u_75 {
    border-radius: var(--spx-radius-sm)
}

._Chip_bu06u_1._sm_bu06u_79 {
    padding: var(--spx-unit-1) var(--spx-unit-2);
    font-size: var(--spx-font-size-sm)
}

._Chip_bu06u_1._md_bu06u_84 {
    padding: var(--spx-unit-2) var(--spx-unit-3);
    font-size: var(--spx-font-size-base)
}

._Chip_bu06u_1._lg_bu06u_89 {
    padding: var(--spx-unit-2) var(--spx-unit-8);
    font-size: var(--spx-font-size-lg)
}

@media (max-width: 768px) {
    ._Chip_bu06u_1._sm_bu06u_79._Responsive_bu06u_94 {
        padding:var(--spx-unit-1) var(--spx-unit-1);
        font-size: var(--spx-font-size-xs)
    }
}

@media (max-width: 768px) {
    ._Chip_bu06u_1._md_bu06u_84._Responsive_bu06u_94 {
        padding:var(--spx-unit-1) var(--spx-unit-2);
        font-size: var(--spx-font-size-sm)
    }
}

@media (max-width: 768px) {
    ._Chip_bu06u_1._lg_bu06u_89._Responsive_bu06u_94 {
        padding:var(--spx-unit-2) var(--spx-unit-4);
        font-size: var(--spx-font-size-base)
    }
}

html ._ReactQueryDevtools_bu06u_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Root_z9ria_1 {
    display: flex;
    padding: var(--spx-unit-2);
    margin-top: var(--spx-unit-2);
    align-items: center;
    border-radius: var(--spx-radius-md);
    font-size: var(--spx-font-size-sm);
    line-height: var(--spx-unit-5);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-error-message);
    background-color: var(--colours-background-error-message)
}

._Icon_z9ria_13 {
    margin-right: var(--spx-unit-2);
    width: var(--spx-unit-4);
    height: var(--spx-unit-4);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-error-message)
}

._Message_z9ria_20 {
    flex: 1 1
}

html ._ReactQueryDevtools_z9ria_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._PieChart_90g8v_1 {
    margin-left: var(--spx-unit-2);
    height: var(--spx-unit-8);
    width: var(--spx-unit-8);
    border-radius: var(--spx-radius-full);
    background: conic-gradient(var(--colours-complete) 0% var(--percent-correct),var(--colours-transparent-glow) var(--percent-correct))
}

html ._ReactQueryDevtools_90g8v_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_1qhon_1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content
}

._Container_1qhon_1>:not(:first-child) {
    margin-left: var(--spx-unit-2)
}

._ContainerInline_1qhon_12 {
    display: inline
}

._ContainerInline_1qhon_12>svg {
    padding: 0 var(--spx-unit-1)
}

._Grey_1qhon_20 {
    -webkit-text-fill-color: initial;
    color: var(--colours-border)
}

._Started_1qhon_24 {
    opacity: .3
}

._AlmostTicked_1qhon_28 {
    opacity: .6
}

._GoldHalf_1qhon_32 {
    opacity: .3;
    -webkit-text-fill-color: initial;
    color: gold
}

._Gold_1qhon_32 {
    -webkit-text-fill-color: initial;
    color: gold
}

html ._ReactQueryDevtools_1qhon_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_oeif1_1 {
    background-color: var(--colours-plain-background);
    height: var(--spx-unit-4);
    position: relative;
    width: 100%;
    z-index: 1;
    overflow: hidden;
    border-radius: var(--spx-radius-full)
}

._Completion_oeif1_11 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(90deg,var(--colours-progress-gradient-start) 0%,var(--colours-progress-gradient-stop) 100%);
    height: 100%;
    left: 0;
    position: absolute;
    width: 50%;
    top: 0;
    z-index: 5;
    position: relative;
    border-radius: var(--spx-radius-full);
    background-clip: content-box
}

._Highlight_oeif1_32 {
    height: 15%;
    background-color: var(--colours-plain-background);
    opacity: 34%;
    position: absolute;
    top: 15%;
    left: var(--spx-unit-3);
    width: calc(100% - var(--spx-unit-6));
    border-radius: var(--spx-radius-full)
}

html ._ReactQueryDevtools_oeif1_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._ProgressContainer_1rfyg_1 {
    position: relative;
    width: calc(2 * var(--outer-circle-radius));
    height: calc(2 * var(--outer-circle-radius));
    display: inline-block
}

._SVG_1rfyg_8 {
    width: calc(2 * var(--outer-circle-radius));
    height: calc(2 * var(--outer-circle-radius))
}

._CircleOuter_1rfyg_13 {
    fill: var(--colours-dark-background);
    stroke: none
}

._CircleInner_1rfyg_18 {
    stroke: none;
    fill: var(--colours-regular-background)
}

._CircleProgress_1rfyg_23 {
    fill: none;
    stroke-width: var(--bar-width);
    stroke-linecap: round;
    stroke-dasharray: var(--progress-circle-circumference);
    transform: rotate(-90deg);
    transform-origin: var(--outer-circle-radius) var(--outer-circle-radius)
}

._GradientStart_1rfyg_32 {
    stop-color: var(--colours-correct-gradient-start)
}

._GradientStop_1rfyg_36 {
    stop-color: var(--colours-correct-gradient-stop)
}

._ProgressText_1rfyg_40 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-size: var(--spx-font-size-xl);
    font-weight: 700
}

html ._ReactQueryDevtools_1rfyg_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Stack_ux17q_1 {
    display: flex
}

._StackRow_ux17q_5 {
    flex-direction: row;
    align-items: center
}

._StackRow_ux17q_5>*:not(:last-child) {
    margin-right: var(--gap)
}

._StackColumn_ux17q_14 {
    flex-direction: column;
    align-items: stretch
}

._StackColumn_ux17q_14>*:not(:last-child) {
    margin-bottom: var(--gap)
}

html ._ReactQueryDevtools_ux17q_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._TooltipContent_jlefl_1 {
    max-width: min(var(--radix-tooltip-content-available-width),90vw);
    padding: var(--spx-unit-4);
    background-color: var(--colours-tooltip-background);
    border-radius: var(--spx-radius-lg);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    outline: none
}

._TooltipContent_jlefl_1 p {
    margin: 0
}

._TooltipContent_jlefl_1 p:not(:last-of-type) {
    margin-bottom: var(--spx-unit-1)
}

._TooltipContent_jlefl_1 p._Title_jlefl_17 {
    font-weight: 500;
    margin-bottom: var(--spx-unit-2)
}

._TooltipArrow_jlefl_24 {
    fill: var(--colours-tooltip-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-tooltip-background)
}

html ._ReactQueryDevtools_jlefl_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._DialogTitle_azdjy_1 {
    text-align: center;
    font-size: var(--spx-font-size-2xl);
    max-inline-size: 100%;
    padding: var(--spx-unit-6) var(--spx-unit-2);
    margin: 0 auto;
    font-weight: 500;
    flex-grow: 0
}

@media (max-height: 800px) {
    ._DialogTitle_azdjy_1 {
        padding:var(--spx-unit-4) 0
    }
}

@media (max-height: 700px) {
    ._DialogTitle_azdjy_1 {
        padding:var(--spx-unit-2) 0
    }
}

@media (max-height: 400px) {
    ._DialogTitle_azdjy_1 {
        padding:var(--spx-unit-1) 0
    }
}

._DialogSubtitle_azdjy_23 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--spx-font-size-base);
    padding: 0 var(--spx-unit-3);
    margin: 0 0 var(--spx-unit-6) 0
}

@media (max-height: 800px) {
    ._DialogSubtitle_azdjy_23 {
        margin:0 0 var(--spx-unit-4) 0
    }
}

@media (max-height: 700px) {
    ._DialogSubtitle_azdjy_23 {
        margin:0 0 var(--spx-unit-2) 0
    }
}

@media (max-height: 400px) {
    ._DialogSubtitle_azdjy_23 {
        font-size:var(--spx-font-size-sm);
        margin: 0 0 var(--spx-unit-1) 0
    }
}

._DialogButtonsContainer_azdjy_45 {
    flex-grow: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spx-unit-6) 0
}

._DialogOverlay_azdjy_53 {
    background-color: var(--colours-transparent-darken);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

._DialogContent_azdjy_60 {
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-sm);
    box-shadow: var(--spx-shadow-lg);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 90%;
    width: 90%;
    max-width: 1000px;
    max-height: 1000px;
    display: flex;
    flex-direction: column;
    z-index: 2;
    overflow-y: auto
}

@media (max-width: 480px) {
    ._DialogContent_azdjy_60 {
        height:100%;
        width: 100%;
        max-height: 100%;
        max-width: 100%;
        border-radius: 0
    }
}

._DialogContent_azdjy_60._ContentHeight_azdjy_86 {
    height: auto;
    max-height: min(1000px,90%)
}

@media (max-width: 480px) {
    ._DialogContent_azdjy_60._ContentHeight_azdjy_86 {
        max-height:100%;
        height: 100%
    }
}

._DialogContent_azdjy_60._WithZIndex_azdjy_96 {
    z-index: 10
}

._FullWidth_azdjy_101 {
    width: 90%
}

@media (max-width: 480px) {
    ._FullWidth_azdjy_101 {
        width:100%
    }
}

._FullScreen_azdjy_109 {
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    border-radius: 0
}

._DialogContent_azdjy_60:focus {
    outline: none
}

._IconButton_azdjy_121 {
    font-family: inherit;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary);
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer
}

._IconButton_azdjy_121:hover {
    background-color: var(--colours-regular-background);
    box-shadow: var(--spx-shadow-sm)
}

@keyframes _fadeIn_azdjy_1 {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes _fadeOut_azdjy_1 {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

._DialogOverlay_azdjy_53[data-state=open],._DialogContent_azdjy_60[data-state=open] {
    animation: _fadeIn_azdjy_1 .2s ease-out
}

._DialogOverlay_azdjy_53[data-state=closed],._DialogContent_azdjy_60[data-state=closed] {
    animation: _fadeOut_azdjy_1 .2s ease-in
}

html ._ReactQueryDevtools_azdjy_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._ScrollableContainer_4nfmt_1 {
    overflow: auto;
    flex-grow: 1;
    height: 100%
}

._DialogContainer_4nfmt_7 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%
}

._CloseButton_4nfmt_14 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spx-unit-3) 0
}

._ZoomButton_4nfmt_21 {
    line-height: var(--spx-font-size-lg);
    border: none;
    margin-bottom: var(--spx-unit-1);
    padding: var(--spx-unit-1-5)
}

._DialogTopBanner_4nfmt_28 {
    display: flex;
    justify-content: space-between;
    background-color: var(--colours-light-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    font-size: var(--spx-unit-5);
    font-weight: 600;
    padding: var(--spx-unit-4)
}

@media (max-width: 768px) {
    ._DialogTopBanner_4nfmt_28 {
        font-size:var(--spx-unit-4)
    }
}

._ZoomOptions_4nfmt_42 {
    display: flex;
    flex-direction: row;
    align-items: center
}

._ZoomButtonControls_4nfmt_48 {
    padding: var(--spx-unit-1);
    height: var(--spx-unit-5);
    width: var(--spx-unit-5);
    margin-left: var(--spx-unit-2)
}

._ZoomButtonControls_4nfmt_48._Content_4nfmt_55 {
    height: 50px
}

._ZoomControlIcon_4nfmt_59 {
    height: var(--spx-unit-4);
    width: var(--spx-unit-4)
}

._ChoicesControls_4nfmt_64 {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    font-weight: 400
}

._ChoicesControls_4nfmt_64>* {
    margin-left: var(--spx-unit-2)
}

._SelectButton_4nfmt_76 {
    width: var(--spx-unit-20)
}

._ZoomableDialogContent_4nfmt_80 {
    height: 90%
}

@media (max-width: 480px) {
    ._ZoomableDialogContent_4nfmt_80 {
        height:100%
    }
}

._ZoomDiv_4nfmt_88 {
    display: inline-block;
    padding: var(--spx-unit-3);
    max-height: -webkit-max-content;
    max-height: -moz-max-content;
    max-height: max-content;
    flex: 0 0 auto
}

._ZoomDiv_4nfmt_88>* {
    max-height: 100%
}

._ZoomDiv_4nfmt_88 .answer-part {
    align-items: center;
    display: flex;
    white-space: nowrap
}

._ZoomDiv_4nfmt_88 .answer-block {
    border-radius: var(--spx-unit-2);
    border: 1px solid var(--colours-text-body);
    display: inline-block;
    margin: 3px;
    padding: 5px;
    white-space: nowrap
}

html ._ReactQueryDevtools_4nfmt_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

:where(select) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E") no-repeat right center / 1em;
    border-radius: 0;
    padding-right: 1em
}

._Overlay_13yha_4 {
    z-index: var(--spx-layer-modal-3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation: _ShowOverlay_13yha_1 .2s var(--spx-ease-1) forwards;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px)
}

._Content_13yha_13 {
    z-index: var(--spx-layer-modal-3);
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: var(--colours-plain-background);
    padding: var(--spx-unit-8);
    border-radius: var(--spx-radius-md);
    box-shadow: var(--spx-shadow-md);
    display: flex;
    flex-direction: column;
    max-width: 600px;
    min-width: min(90%,400px);
    animation: _ShowContent_13yha_1 .2s var(--spx-ease-1) forwards
}

._Content_13yha_13>*:first-child {
    margin-top: 0
}

._Title_13yha_33 {
    text-align: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading)
}

._Description_13yha_38 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-size: var(--spx-font-size-lg);
    text-align: center;
    font-weight: 700
}

._Title_13yha_33+._Description_13yha_38 {
    font-weight: 400;
    margin-bottom: var(--spx-unit-6)
}

._ButtonContainer_13yha_50 {
    display: flex;
    justify-content: center
}

._ButtonContainer_13yha_50>:not(:first-child) {
    margin-left: var(--spx-unit-4)
}

@keyframes _ShowContent_13yha_1 {
    0% {
        box-shadow: 0 0 0 transparent;
        transform: translate(-50%,-45%) scale(.9)
    }

    to {
        box-shadow: var(--spx-shadow-lg-dark-blue);
        transform: translate(-50%,-50%) scale(1)
    }
}

@keyframes _ShowOverlay_13yha_1 {
    0% {
        background-color: transparent
    }

    to {
        background-color: var(--colours-disruptive-dialog-overlay)
    }
}

html ._ReactQueryDevtools_13yha_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._JoyrideTooltip_1h34l_1 {
    display: flex;
    flex-direction: column;
    max-width: 320px;
    padding: var(--spx-unit-6);
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-lg);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-size: var(--spx-font-size-lg);
    animation: _AnimationFadeIn_1h34l_1 .4s linear
}

._JoyrideTooltip_1h34l_1>p {
    margin-top: 0
}

._TooltipButton_1h34l_17 {
    align-self: flex-end
}

@keyframes _AnimationFadeIn_1h34l_1 {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

html ._ReactQueryDevtools_1h34l_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

@media (max-width: 360px) {
    ._HiddenAt_gk0gx_1._Xs_gk0gx_2 {
        display:none
    }

    ._HiddenAt_gk0gx_1._Xs_gk0gx_2._ShownUntil_gk0gx_6 {
        display: inline;
        display: initial
    }
}

@media (max-width: 480px) {
    ._HiddenAt_gk0gx_1._Sm_gk0gx_12 {
        display:none
    }

    ._HiddenAt_gk0gx_1._Sm_gk0gx_12._ShownUntil_gk0gx_6 {
        display: inline;
        display: initial
    }
}

@media (max-width: 768px) {
    ._HiddenAt_gk0gx_1._Md_gk0gx_22 {
        display:none
    }

    ._HiddenAt_gk0gx_1._Md_gk0gx_22._ShownUntil_gk0gx_6 {
        display: inline;
        display: initial
    }
}

@media (max-width: 1024px) {
    ._HiddenAt_gk0gx_1._Lg_gk0gx_32 {
        display:none
    }

    ._HiddenAt_gk0gx_1._Lg_gk0gx_32._ShownUntil_gk0gx_6 {
        display: inline;
        display: initial
    }
}

@media (max-width: 1440px) {
    ._HiddenAt_gk0gx_1._Xl_gk0gx_42 {
        display:none
    }

    ._HiddenAt_gk0gx_1._Xl_gk0gx_42._ShownUntil_gk0gx_6 {
        display: inline;
        display: initial
    }
}

@media (max-width: 1920px) {
    ._HiddenAt_gk0gx_1._Xxl_gk0gx_52 {
        display:none
    }

    ._HiddenAt_gk0gx_1._Xxl_gk0gx_52._ShownUntil_gk0gx_6 {
        display: inline;
        display: initial
    }
}

._HiddenAt_gk0gx_1._ShownUntil_gk0gx_6 {
    display: none
}

html ._ReactQueryDevtools_gk0gx_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._ButtonBase_1rtjz_1 {
    position: relative;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    font-family: inherit;
    cursor: pointer;
    display: inline-flex;
    transition: background-color .2s var(--spx-ease-1),background .2s var(--spx-ease-1),border-color .2s var(--spx-ease-1),opacity .2s var(--spx-ease-1),color .2s var(--spx-ease-1)
}

._ButtonBase_1rtjz_1:focus-visible {
    outline: 3px solid var(--sxd-palette-orange-9)
}

._ButtonShared_1rtjz_24 {
    border-radius: var(--spx-radius-full);
    font-weight: 700;
    line-height: normal;
    --button-border-width: 1px;
    --disabled-opacity: 1;
    --focus-width: 3px
}

._ButtonSmall_1rtjz_36 {
    padding: var(--spx-unit-1) var(--spx-unit-3);
    font-size: var(--spx-font-size-base)
}

._ButtonMedium_1rtjz_41 {
    padding: var(--spx-unit-1) var(--spx-unit-4);
    font-size: var(--spx-font-size-xl)
}

._ButtonLarge_1rtjz_46 {
    padding: var(--spx-unit-1) var(--spx-unit-5);
    font-size: var(--spx-font-size-2xl)
}

._ButtonDefault_1rtjz_53 {
    --primary-col: var(--sxd-palette-white);
    --primary-bg: var(--sxd-palette-brown-11);
    --primary-bg-hover: var(--sxd-palette-brown-8);
    --primary-border-col: var(--sxd-palette-brown-12);
    --primary-bg-active: var(--sxd-palette-brown-8);
    --primary-focus: var(--sxd-palette-orange-9);
    --primary-bg-hover-opacity: 1;
    --primary-col-disabled: var(--sxd-palette-grey-9);
    --primary-bg-disabled: var(--sxd-palette-grey-5);
    --primary-border-col-disabled: var(--sxd-palette-grey-5);
    --secondary-col: var(--sxd-palette-brown-11);
    --secondary-col-hover: var(--sxd-palette-brown-11);
    --secondary-border-col: var(--secondary-col);
    --secondary-bg: var(--sxd-palette-white);
    --secondary-bg-hover: var(--sxd-palette-grey-3);
    --secondary-bg-active: var(--sxd-palette-grey-3);
    --secondary-focus: var(--sxd-palette-orange-9);
    --secondary-bg-hover-opacity: 1;
    --secondary-col-disabled: var(--sxd-palette-grey-9);
    --secondary-bg-disabled: var(--sxd-palette-white);
    --secondary-border-col-disabled: var(--sxd-palette-grey-5);
    --ghost-focus: var(--sxd-palette-orange-9)
}

._ButtonPositive_1rtjz_82 {
    --primary-col: var(--sxd-palette-white);
    --primary-bg: var(--sxd-palette-grass-10);
    --primary-bg-hover: var(--sxd-palette-grass-8);
    --primary-border-col: var(--sxd-palette-grass-11);
    --primary-bg-active: var(--sxd-palette-grass-8);
    --primary-focus: var(--sxd-palette-orange-9);
    --primary-bg-hover-opacity: 1;
    --primary-col-disabled: var(--sxd-palette-grey-9);
    --primary-bg-disabled: var(--sxd-palette-grey-5);
    --primary-border-col-disabled: var(--sxd-palette-grey-5);
    --secondary-col: var(--sxd-palette-grass-10);
    --secondary-col-hover: var(--sxd-palette-grass-10);
    --secondary-border-col: var(--secondary-col);
    --secondary-bg: var(--sxd-palette-white);
    --secondary-bg-hover: var(--sxd-palette-grey-3);
    --secondary-bg-active: var(--sxd-palette-grey-3);
    --secondary-focus: var(--sxd-palette-orange-9);
    --secondary-bg-hover-opacity: 1;
    --secondary-col-disabled: var(--sxd-palette-grey-9);
    --secondary-bg-disabled: var(--sxd-palette-white);
    --secondary-border-col-disabled: var(--sxd-palette-grey-5);
    --ghost-focus: var(--sxd-palette-orange-9)
}

._ButtonNegative_1rtjz_111 {
    --primary-col: var(--sxd-palette-white);
    --primary-bg: var(--sxd-palette-red-10);
    --primary-bg-hover: var(--sxd-palette-red-8);
    --primary-border-col: var(--sxd-palette-red-11);
    --primary-bg-active: var(--sxd-palette-red-8);
    --primary-focus: var(--sxd-palette-orange-9);
    --primary-bg-hover-opacity: 1;
    --primary-col-disabled: var(--sxd-palette-grey-9);
    --primary-bg-disabled: var(--sxd-palette-grey-5);
    --primary-border-col-disabled: var(--sxd-palette-grey-5);
    --secondary-col: var(--sxd-palette-red-10);
    --secondary-col-hover: var(--sxd-palette-red-10);
    --secondary-border-col: var(--secondary-col);
    --secondary-bg: var(--sxd-palette-white);
    --secondary-bg-hover: var(--sxd-palette-grey-3);
    --secondary-bg-active: var(--sxd-palette-grey-3);
    --secondary-focus: var(--sxd-palette-orange-9);
    --secondary-bg-hover-opacity: 1;
    --secondary-col-disabled: var(--sxd-palette-grey-9);
    --secondary-bg-disabled: var(--sxd-palette-white);
    --secondary-border-col-disabled: var(--sxd-palette-grey-5);
    --ghost-focus: var(--sxd-palette-orange-9)
}

._ButtonNeutral_1rtjz_140 {
    --primary-col: var(--sxd-palette-grey-12);
    --primary-bg: var(--sxd-palette-white);
    --primary-bg-hover: var(--sxd-palette-grey-3);
    --primary-border-col: var(--sxd-palette-grey-2);
    --primary-bg-active: var(--sxd-palette-grey-3);
    --primary-focus: var(--sxd-palette-orange-9);
    --primary-bg-hover-opacity: 1;
    --primary-col-disabled: var(--sxd-palette-grey-9);
    --primary-bg-disabled: var(--sxd-palette-grey-5);
    --primary-border-col-disabled: var(--sxd-palette-grey-5);
    --secondary-col: var(--sxd-palette-grey-12);
    --secondary-col-hover: var(--sxd-palette-grey-12);
    --secondary-border-col: var(--secondary-col);
    --secondary-bg: var(--sxd-palette-white);
    --secondary-bg-hover: var(--sxd-palette-grey-3);
    --secondary-bg-active: var(--sxd-palette-grey-3);
    --secondary-focus: var(--sxd-palette-orange-9);
    --secondary-bg-hover-opacity: 1;
    --secondary-col-disabled: var(--sxd-palette-grey-9);
    --secondary-bg-disabled: var(--sxd-palette-white);
    --secondary-border-col-disabled: var(--sxd-palette-grey-5);
    --ghost-focus: var(--sxd-palette-orange-9)
}

._ButtonPrimary_1rtjz_171 {
    -webkit-text-fill-color: initial;
    color: var(--primary-col);
    background: var(--primary-bg);
    border: var(--button-border-width) solid var(--primary-border-col)
}

._ButtonPrimary_1rtjz_171:visited {
    -webkit-text-fill-color: initial;
    color: var(--primary-col)
}

._ButtonPrimary_1rtjz_171:not(._Disabled_1rtjz_180):hover {
    background: var(--primary-bg-hover);
    border: var(--button-border-width) solid var(--primary-bg-hover);
    opacity: var(--primary-bg-hover-opacity, 1)
}

._ButtonPrimary_1rtjz_171:not(._Disabled_1rtjz_180):active {
    background: var(--primary-bg-active, var(--primary-bg-hover));
    border: var(--button-border-width) solid var(--primary-bg-active, var(--primary-bg-hover))
}

._ButtonPrimary_1rtjz_171._Disabled_1rtjz_180 {
    -webkit-text-fill-color: initial;
    color: var(--primary-col-disabled);
    border-color: var(--primary-border-col-disabled);
    background: var(--primary-bg-disabled);
    cursor: not-allowed;
    opacity: var(--disabled-opacity)
}

._ButtonPrimary_1rtjz_171:not(._Disabled_1rtjz_180):focus-visible {
    outline: var(--focus-width) solid var(--primary-focus)
}

._ButtonSecondary_1rtjz_204 {
    -webkit-text-fill-color: initial;
    color: var(--secondary-col);
    background: var(--secondary-bg);
    border: var(--button-border-width) solid var(--secondary-border-col)
}

._ButtonSecondary_1rtjz_204:visited {
    -webkit-text-fill-color: initial;
    color: var(--secondary-col)
}

._ButtonSecondary_1rtjz_204:not(._Disabled_1rtjz_180):hover {
    background: var(--secondary-bg-hover);
    opacity: var(--secondary-bg-hover-opacity, 1)
}

._ButtonSecondary_1rtjz_204:not(._Disabled_1rtjz_180):active {
    background: var(--secondary-bg-active, var(--secondary-bg-hover))
}

._ButtonSecondary_1rtjz_204._Disabled_1rtjz_180 {
    -webkit-text-fill-color: initial;
    color: var(--secondary-col-disabled);
    border-color: var(--secondary-border-col-disabled);
    background: var(--secondary-bg-disabled);
    cursor: not-allowed;
    opacity: var(--disabled-opacity)
}

._ButtonSecondary_1rtjz_204:not(._Disabled_1rtjz_180):focus-visible {
    outline: var(--focus-width) solid var(--secondary-focus)
}

._ButtonGhost_1rtjz_235 {
    -webkit-text-fill-color: initial;
    color: var(--secondary-col);
    background: transparent;
    border: var(--button-border-width) solid transparent
}

._ButtonGhost_1rtjz_235:visited {
    -webkit-text-fill-color: initial;
    color: var(--secondary-col)
}

._ButtonGhost_1rtjz_235:not(._Disabled_1rtjz_180):hover {
    background: var(--secondary-bg-hover)
}

._ButtonGhost_1rtjz_235:not(._Disabled_1rtjz_180):active {
    background: var(--secondary-bg-active, var(--secondary-bg-hover))
}

._ButtonGhost_1rtjz_235._Disabled_1rtjz_180 {
    -webkit-text-fill-color: initial;
    color: var(--secondary-col-disabled);
    cursor: not-allowed;
    opacity: var(--disabled-opacity)
}

._ButtonGhost_1rtjz_235:not(._Disabled_1rtjz_180):focus-visible {
    outline: var(--focus-width) solid var(--ghost-focus)
}

._ButtonLink_1rtjz_263 {
    -webkit-text-fill-color: initial;
    color: var(--secondary-col);
    padding: 0;
    text-decoration: underline;
    border: none
}

._ButtonLink_1rtjz_263:visited {
    -webkit-text-fill-color: initial;
    color: var(--secondary-col)
}

._ButtonLink_1rtjz_263:not(._Disabled_1rtjz_180):hover {
    text-decoration: underline;
    -webkit-text-fill-color: initial;
    color: var(--secondary-col-hover)
}

._ButtonLink_1rtjz_263._Disabled_1rtjz_180 {
    -webkit-text-fill-color: initial;
    color: var(--secondary-col-disabled);
    cursor: not-allowed;
    opacity: var(--disabled-opacity)
}

._ButtonLink_1rtjz_263:not(._Disabled_1rtjz_180):focus-visible {
    outline: var(--focus-width) solid var(--secondary-focus)
}

._Loading_1rtjz_291 {
    opacity: .7;
    pointer-events: none
}

._LoadingOverlay_1rtjz_296 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center
}

._LeftIcon_1rtjz_307 {
    margin-right: var(--spx-unit-2)
}

._RightIcon_1rtjz_311 {
    margin-left: var(--spx-unit-2)
}

._LeftIcon_1rtjz_307,._RightIcon_1rtjz_311 {
    display: flex;
    align-items: center
}

._LeftIcon_1rtjz_307,._RightIcon_1rtjz_311,._Content_1rtjz_323 {
    opacity: 1;
    transition: opacity .1s var(--spx-ease-1)
}

._Loading_1rtjz_291 ._LeftIcon_1rtjz_307,._Loading_1rtjz_291 ._RightIcon_1rtjz_311,._Loading_1rtjz_291 ._Content_1rtjz_323 {
    opacity: 0
}

html ._ReactQueryDevtools_1rtjz_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._PageBackground_1qeyl_1 {
    width: 100%;
    height: 100%;
    flex: 1 1 auto;
    background-color: var(--colours-page-background);
    overflow: hidden
}

._PageGradient_1qeyl_9 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row
}

._PageGradient_1qeyl_9>* {
    position: relative
}

._PageBackgroundImage_1qeyl_21 {
    position: absolute;
    width: 100%;
    height: calc(100% - var(--top-banner-height));
    -o-object-fit: fill;
    object-fit: fill
}

@media (max-width: 480px) {
    ._PageBackgroundImage_1qeyl_21 {
        height:calc(100% - var(--top-banner-height-screen-sm))
    }
}

._PageBackgroundImageTrainingMode_1qeyl_32 {
    height: calc(100% - var(--top-banner-height) - var(--training-banner-height))
}

@media (max-width: 480px) {
    ._PageBackgroundImageTrainingMode_1qeyl_32 {
        height:calc(100% - var(--top-banner-height-screen-sm) - var(--training-banner-height))
    }
}

._MainContent_1qeyl_40 {
    flex: 1 1 auto;
    padding: 0 var(--spx-unit-5)
}

._MaxWidth_1qeyl_45 {
    max-width: 1000px;
    margin: 0 auto
}

html ._ReactQueryDevtools_1qeyl_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_p3b4y_1 {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto
}

._Background_p3b4y_8 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -o-object-fit: fill;
    object-fit: fill;
    width: 100%;
    height: 100%
}

._Content_p3b4y_16 {
    margin: var(--spx-unit-32) auto var(--spx-unit-8);
    padding: 0 var(--spx-unit-8);
    max-width: 450px;
    text-align: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

@media (max-height: 700px) {
    ._Content_p3b4y_16 {
        margin-top:var(--spx-unit-8)
    }
}

._Content_p3b4y_16._WithCard_p3b4y_27 {
    padding: var(--spx-unit-8);
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-lg);
    box-shadow: var(--spx-shadow-lg)
}

._Image_p3b4y_35 {
    width: var(--spx-unit-48)
}

@media (max-height: 700px) {
    ._Image_p3b4y_35 {
        width:var(--spx-unit-24)
    }
}

._Title_p3b4y_43 {
    margin: var(--spx-unit-4) 0;
    font-size: var(--spx-font-size-4xl);
    font-weight: 500;
    line-height: 1
}

@media (max-height: 700px) {
    ._Title_p3b4y_43 {
        font-size:var(--spx-font-size-2xl)
    }
}

._Message_p3b4y_54 {
    margin-top: var(--spx-unit-4);
    font-size: var(--spx-font-size-xl)
}

@media (max-height: 700px) {
    ._Message_p3b4y_54 {
        font-size:var(--spx-font-size-base)
    }
}

._ErrorDescription_p3b4y_63 {
    margin-top: var(--spx-unit-4);
    font-size: var(--spx-font-size-xl);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-warning)
}

@media (max-height: 700px) {
    ._ErrorDescription_p3b4y_63 {
        font-size:var(--spx-font-size-base)
    }
}

._InlineButton_p3b4y_73 {
    display: inline-block;
    padding: 0
}

._Button_p3b4y_78 {
    margin: var(--spx-unit-8) auto 0
}

html ._ReactQueryDevtools_p3b4y_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._RewardsPlaque_1n5g2_1 svg {
    width: 100%;
    height: 100%
}

._RewardsPlaque_1n5g2_1 svg text {
    font-weight: 700
}

._RewardsPlaque_1n5g2_1 ._LevelText_1n5g2_11 {
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    top: 50%;
    font-weight: 700;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-on-primary);
    font-size: var(--spx-font-size-5xl);
    line-height: var(--spx-font-size-5xl)
}

@media (min-width: 768px) {
    ._RewardsPlaque_1n5g2_1 ._LevelText_1n5g2_11 {
        font-size:var(--spx-font-size-4xl);
        line-height: var(--spx-font-size-4xl)
    }
}

._OldRewardsPlaque_1n5g2_29 {
    margin: -15% 0
}

html ._ReactQueryDevtools_1n5g2_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_1fswj_1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: var(--colours-plain-background-inverted)
}

._Container_1fswj_1 h1 {
    -webkit-text-fill-color: initial;
    color: var(--colours-correct)
}

._Container_1fswj_1 span {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    font-size: var(--spx-font-size-xl)
}

._Container_1fswj_1 button {
    margin-top: var(--spx-unit-8)
}

@media (max-height: 400px) {
    ._Container_1fswj_1 button {
        margin-top:var(--spx-unit-2)
    }
}

._PlaqueContainer_1fswj_26 {
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 50vh;
    flex: 0 1 auto;
    margin-bottom: max(-2%,-100px)
}

@media (max-height: 800px) {
    ._PlaqueContainer_1fswj_26 {
        max-width:70vh
    }
}

@media (max-height: 700px) {
    ._PlaqueContainer_1fswj_26 {
        max-width:60vh
    }
}

._PlaqueContainer_1fswj_26 ._RadialBackground_1fswj_42 {
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    max-width: var(--spx-size-3xl);
    overflow: hidden
}

._PlaqueContainer_1fswj_26 ._RadialBackground_1fswj_42 ._RadialBackgroundAnimateWrapper_1fswj_54 {
    height: auto
}

._PlaqueContainer_1fswj_26 ._RadialBackground_1fswj_42 ._RadialBackgroundAnimateWrapper_1fswj_54 svg {
    width: 100%;
    max-height: 570vh;
    height: 100%;
    margin: auto
}

._PlaqueContainer_1fswj_26 ._PlaqueBadge_1fswj_66 {
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%
}

._PlaqueContainer_1fswj_26 ._PlaqueBadge_1fswj_66 ._LevelUpBadge_1fswj_72 {
    width: 100%;
    height: 100%;
    filter: drop-shadow(var(--spx-shadow-md-extradark))
}

._InfoContainer_1fswj_80 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%
}

._ProgressBarContainer_1fswj_88 {
    flex-shrink: 0;
    max-width: var(--spx-unit-72);
    margin-bottom: var(--spx-unit-4)
}

._ConfettiContainer_1fswj_94 {
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%
}

html ._ReactQueryDevtools_1fswj_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

:root {
    --sw2-blue-100: rgb(223 236 248);
    --sw2-blue-60: rgb(33 121 222);
    --sw2-blue-20: rgb(46 60 113);
    --sw2-white: rgb(255 255 255);
    --sw2-grey-70: rgb(238 244 254);
    --sw2-grey-40: rgb(201 208 218)
}

._ButtonShared_ezpnu_11 {
    border-radius: var(--spx-radius-full);
    font-weight: 700;
    line-height: 1.5;
    --button-border-width: 1px;
    --disabled-opacity: 1;
    --focus-width: 3px
}

._ButtonDefault_ezpnu_21 {
    --primary-col: var(--sw2-white);
    --primary-bg: var(--sw2-blue-60);
    --primary-bg-hover: var(--sw2-blue-20);
    --primary-border-col: var(--sw2-blue-60);
    --primary-focus: var(--sw2-blue-20);
    --primary-bg-hover-opacity: 1;
    --primary-col-disabled: var(--sw2-grey-40);
    --primary-bg-disabled: var(--sw2-grey-70);
    --primary-border-col-disabled: var(--sw2-grey-70);
    --secondary-col: var(--sw2-blue-60);
    --secondary-col-hover: var(--sw2-blue-60);
    --secondary-bg: var(--sw2-white);
    --secondary-border-col: var(--sw2-blue-60);
    --secondary-bg-hover: var(--sw2-blue-100);
    --secondary-focus: var(--sw2-blue-20);
    --secondary-col-disabled: var(--sw2-grey-40);
    --secondary-bg-disabled: var(--sxd-palette-white);
    --secondary-border-col-disabled: var(--sxd-palette-white)
}

html ._ReactQueryDevtools_ezpnu_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._NotificationListItem_hu9ez_1 {
    display: flex;
    flex-direction: row;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary)
}

._NotificationListItem_hu9ez_1>:not(:first-child) {
    margin-left: var(--spx-unit-2)
}

._NotificationListItemImage_hu9ez_11 {
    width: var(--spx-unit-20);
    height: var(--spx-unit-20)
}

._Read_hu9ez_16 {
    -webkit-text-fill-color: initial;
    color: var(--colours-read-text)
}

._Read_hu9ez_16 ._NotificationListItemImage_hu9ez_11 {
    opacity: .4
}

._Interactive_hu9ez_24 {
    cursor: pointer
}

._NotificationListItemTextContainer_hu9ez_28 {
    display: flex;
    flex-direction: column
}

._NotificationListItemTextContainer_hu9ez_28 ._Title_hu9ez_32 {
    font-size: var(--spx-font-size-lg)
}

@media (max-width: 480px) {
    ._NotificationListItemTextContainer_hu9ez_28 ._Title_hu9ez_32 {
        font-size:var(--spx-font-size-base)
    }
}

._NotificationListItemTextContainer_hu9ez_28 ._Message_hu9ez_40 {
    font-size: var(--spx-font-size-base)
}

@media (max-width: 480px) {
    ._NotificationListItemTextContainer_hu9ez_28 ._Message_hu9ez_40 {
        font-size:var(--spx-font-size-sm)
    }
}

._NotificationListItemTextContainer_hu9ez_28 ._Date_hu9ez_48 {
    font-size: var(--spx-font-size-sm)
}

@media (max-width: 480px) {
    ._NotificationListItemTextContainer_hu9ez_28 ._Date_hu9ez_48 {
        font-size:var(--spx-font-size-xs)
    }
}

html ._ReactQueryDevtools_hu9ez_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._NotificationsIconContainer_1p7b9_1 {
    position: relative;
    height: var(--top-banner-height);
    width: var(--top-banner-height);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer
}

._NotificationsIconContainer_1p7b9_1:hover,._NotificationsIconContainer_1p7b9_1[data-state=open] {
    background: var(--colours-transparent-darken)
}

._NotificationsIconContainer_1p7b9_1>img {
    height: var(--spx-unit-8);
    width: auto
}

@media (max-width: 480px) {
    ._NotificationsIconContainer_1p7b9_1 {
        height:var(--top-banner-height-screen-sm);
        width: var(--top-banner-height-screen-sm)
    }

    ._NotificationsIconContainer_1p7b9_1>img {
        height: var(--spx-unit-6)
    }
}

._UnreadCount_1p7b9_30 {
    box-sizing: content-box;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    background-color: var(--colours-new);
    width: var(--spx-unit-5);
    height: var(--spx-unit-5);
    line-height: var(--spx-unit-5);
    font-size: var(--spx-font-size-sm);
    text-align: center;
    font-weight: 500;
    position: absolute;
    right: var(--spx-unit-2);
    top: var(--spx-unit-2);
    border-radius: var(--spx-radius-full);
    border-color: var(--colours-interactable);
    border-width: var(--spx-border-size-2);
    border-style: solid
}

@media (max-width: 480px) {
    ._UnreadCount_1p7b9_30 {
        right:0;
        top: 3px
    }
}

[data-radix-popper-content-wrapper] {
    z-index: 101!important
}

._NotificationList_1p7b9_58 {
    position: relative;
    background-color: var(--colours-plain-background);
    width: 500px;
    max-width: 80vw;
    max-height: min(600px,70vh);
    border-bottom-left-radius: var(--spx-radius-sm);
    border-bottom-right-radius: var(--spx-radius-sm);
    box-shadow: var(--spx-shadow-md-dark);
    padding: var(--spx-unit-2) 0
}

@media (max-width: 480px) {
    ._NotificationList_1p7b9_58 {
        max-width:100vw
    }
}

._NotificationList_1p7b9_58[data-state=open] {
    animation: _FadeIn_1p7b9_1 .1s var(--spx-ease-2)
}

._NotificationList_1p7b9_58[data-state=closed] {
    animation: _FadeOut_1p7b9_1 .1s var(--spx-ease-2)
}

._Separator_1p7b9_82 {
    width: 90%;
    margin: var(--spx-unit-2) auto;
    border-top: 1px solid var(--colours-separator)
}

._MenuItem_1p7b9_88 {
    padding: var(--spx-unit-3);
    outline: none
}

._MenuItem_1p7b9_88._LoadingContainer_1p7b9_92 {
    display: flex;
    justify-content: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-loading);
    opacity: .3
}

@keyframes _FadeIn_1p7b9_1 {
    0% {
        opacity: 0;
        top: -2px
    }

    to {
        opacity: 1;
        top: 0
    }
}

@keyframes _FadeOut_1p7b9_1 {
    0% {
        opacity: 1;
        top: 0
    }

    to {
        opacity: 0;
        top: -2px
    }
}

html ._ReactQueryDevtools_1p7b9_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._BackButton_1iso5_1 {
    background: var(--colours-transparent-glow);
    width: var(--top-banner-height);
    height: var(--top-banner-height);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--spx-font-size-3xl);
    flex: 0 0 auto;
    cursor: pointer
}

@media (max-width: 480px) {
    ._BackButton_1iso5_1 {
        width:var(--top-banner-height-screen-sm);
        height: var(--top-banner-height-screen-sm);
        font-size: var(--spx-font-size-2xl)
    }
}

._BackButton_1iso5_1:hover {
    background: var(--colours-transparent-darken)
}

._BackButtonIcon_1iso5_23 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    width: auto
}

html ._ReactQueryDevtools_1iso5_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._TopBanner_u9l2x_1 {
    background: linear-gradient(to right,var(--colours-primary-gradient-start) 0%,var(--colours-primary-gradient-stop) 100%);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    height: var(--top-banner-height);
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
}

@media (max-width: 480px) {
    ._TopBanner_u9l2x_1 {
        height:var(--top-banner-height-screen-sm)
    }
}

._BannerLeft_u9l2x_20,._BannerRight_u9l2x_21 {
    display: flex;
    height: 100%;
    align-items: center;
    flex: 0 1 auto
}

._BannerSpacing_u9l2x_29 {
    flex: 1 1 auto;
    display: flex;
    justify-content: center
}

._BannerRight_u9l2x_21 {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center
}

._SMLogo_u9l2x_42 {
    display: block;
    padding-left: var(--spx-unit-5);
    padding-top: 4px
}

@media (max-width: 768px) {
    ._SMLogo_u9l2x_42 {
        padding-top:2px;
        max-width: 150px
    }
}

._ILBanner_u9l2x_53 {
    font-size: var(--spx-font-size-sm);
    margin-left: var(--spx-unit-4);
    line-height: 1.2
}

@media (max-width: 480px) {
    ._ILBanner_u9l2x_53 {
        margin-left:var(--spx-unit-2)
    }
}

._LoadingIcon_u9l2x_63 {
    font-size: var(--spx-font-size-xl);
    margin-right: var(--spx-unit-4)
}

._StudentInfoContainer_u9l2x_68 {
    display: flex;
    flex-direction: row;
    align-items: center
}

._StudentName_u9l2x_74 {
    margin: 0 var(--spx-unit-2);
    flex: 1 1;
    text-align: center
}

._XPCount_u9l2x_80 {
    padding: var(--spx-unit-2);
    white-space: nowrap;
    text-decoration: none;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

._XPCount_u9l2x_80:hover {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-subtle)
}

html ._ReactQueryDevtools_u9l2x_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._MenuButton_1u1tt_1 {
    height: var(--top-banner-height);
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    padding: 0 var(--spx-unit-5);
    background: var(--colours-transparent-darken)
}

@media (max-width: 768px) {
    ._MenuButton_1u1tt_1 {
        padding:0;
        width: var(--spx-unit-14);
        height: var(--spx-unit-14)
    }
}

@media (max-width: 480px) {
    ._MenuButton_1u1tt_1 {
        width:var(--spx-unit-12);
        height: var(--spx-unit-12)
    }
}

._MenuButton_1u1tt_1:hover,._MenuButton_1u1tt_1[data-state=open] {
    background: var(--colours-transparent-darken);
    cursor: pointer
}

._MenuIcon_1u1tt_28 {
    font-size: var(--spx-font-size-2xl)
}

._MenuText_1u1tt_32 {
    font-weight: 700;
    margin-right: var(--spx-unit-4)
}

@media (max-width: 768px) {
    ._MenuText_1u1tt_32 {
        display:none
    }
}

._DropdownMenuContent_1u1tt_41 {
    min-width: 200px;
    background-color: var(--colours-nav-bar);
    border-radius: 0 0 0 var(--spx-radius-sm);
    padding: var(--spx-unit-2) 0;
    box-shadow: var(--spx-shadow-lg);
    animation-duration: .4s;
    animation-timing-function: cubic-bezier(.16,1,.3,1);
    will-change: transform,opacity;
    z-index: 2
}

._DropdownMenuContent_1u1tt_41[data-side=top] {
    animation-name: _SlideUpAndFade_1u1tt_1
}

._DropdownMenuContent_1u1tt_41[data-side=right] {
    animation-name: _SlideLeftAndFade_1u1tt_1
}

._DropdownMenuContent_1u1tt_41[data-side=bottom] {
    animation-name: _SlideDownAndFade_1u1tt_1
}

._DropdownMenuContent_1u1tt_41[data-side=left] {
    animation-name: _SlideRightAndFade_1u1tt_1
}

._DropdownMenuItem_1u1tt_69 {
    font-size: var(--spx-font-size-base);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    display: flex;
    align-items: center;
    padding: var(--spx-unit-2) var(--spx-unit-5);
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none
}

._DropdownMenuItem_1u1tt_69:hover {
    background-color: var(--colours-nav-bar-hover);
    cursor: pointer
}

._DropdownMenuItemIcon_1u1tt_85 {
    margin-right: var(--spx-unit-3);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-link)
}

._Link_1u1tt_90 {
    text-decoration: none
}

._UserRow_1u1tt_94 {
    display: flex;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary)
}

._UserRow_1u1tt_94:hover {
    cursor: default;
    background: transparent
}

._UserRow_1u1tt_94>*:not(:last-child) {
    margin-right: var(--spx-unit-5)
}

._DropdownMenuSeparator_1u1tt_108 {
    margin: var(--spx-unit-2) 0;
    border-top: 1px solid var(--colours-separator)
}

._DropdownMenuLabel_1u1tt_113 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary);
    font-size: var(--spx-font-size-sm);
    font-weight: 700;
    margin: var(--spx-unit-3) var(--spx-unit-2) var(--spx-unit-1) var(--spx-unit-5)
}

@keyframes _SlideUpAndFade_1u1tt_1 {
    0% {
        opacity: 0;
        transform: translateY(2px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes _SlideRightAndFade_1u1tt_1 {
    0% {
        opacity: 0;
        transform: translate(-2px)
    }

    to {
        opacity: 1;
        transform: translate(0)
    }
}

@keyframes _SlideDownAndFade_1u1tt_1 {
    0% {
        opacity: 0;
        transform: translateY(-2px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes _SlideLeftAndFade_1u1tt_1 {
    0% {
        opacity: 0;
        transform: translate(2px)
    }

    to {
        opacity: 1;
        transform: translate(0)
    }
}

html ._ReactQueryDevtools_1u1tt_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Video_cc8nw_1 {
    max-width: min(100%,800px);
    height: auto;
    max-height: min(100%,800px)
}

._PlayButton_cc8nw_7 {
    position: absolute;
    height: 70px;
    width: 70px;
    background-color: var(--colours-plain-background);
    left: calc(50% - 35px);
    top: calc(50% - 35px);
    border-radius: var(--spx-radius-full);
    box-shadow: var(--spx-shadow-md-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform .1s var(--spx-ease-in-out-1);
    z-index: 1
}

._PlayButton_cc8nw_7:hover {
    transform: scale(1.1)
}

._PlayButton_cc8nw_7 div {
    position: relative;
    left: 5px;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 30px solid var(--colours-interactable)
}

html ._ReactQueryDevtools_cc8nw_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._CheckIcon_p8xub_1 {
    background-color: var(--colours-complete);
    border-radius: var(--spx-radius-full);
    width: var(--spx-unit-6);
    height: var(--spx-unit-6);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: var(--spx-unit-2)
}

._CheckIcon_p8xub_1>svg {
    width: var(--spx-unit-4);
    height: var(--spx-unit-4)
}

._StepComplete_p8xub_17 {
    font-weight: 700;
    text-align: center;
    font-size: var(--spx-font-size-lg);
    padding: var(--spx-unit-3) 0;
    -webkit-text-fill-color: initial;
    color: var(--colours-complete);
    display: flex;
    align-items: center;
    justify-content: center
}

._DialogContent_p8xub_28 {
    z-index: 601;
    pointer-events: all!important
}

._TrainingDialogOverlap_p8xub_33 {
    z-index: 600
}

._VideoContainer_p8xub_38 {
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    background: var(--colours-plain-background-inverted)
}

._VideoCloseButton_p8xub_46 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spx-unit-1) 0 var(--spx-unit-4)
}

._VideoContext_p8xub_53 {
    font-size: var(--spx-font-size-lg);
    padding-top: var(--spx-unit-3);
    text-align: center
}

._VideoInstruction_p8xub_59 {
    font-weight: 700;
    text-align: center;
    padding: var(--spx-unit-3) 0;
    font-size: var(--spx-font-size-base)
}

._TrainingModeCheckAnimation_p8xub_66 {
    animation: _CheckZoom_p8xub_1 1s ease-out
}

@keyframes _CheckZoom_p8xub_1 {
    0% {
        opacity: 0;
        transform: scale(.5) rotate(0)
    }

    30% {
        opacity: 1;
        transform: scale(1.4) rotate(30deg)
    }
}

html ._ReactQueryDevtools_p8xub_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._DialogContent_16y2h_1 {
    z-index: 601
}

._TrainingDialogOverlap_16y2h_5 {
    z-index: 600
}

._VideoContainer_16y2h_10 {
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    background: var(--colours-plain-background-inverted)
}

._VideoCloseButton_16y2h_18 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spx-unit-4)
}

html ._ReactQueryDevtools_16y2h_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._WhatsNewContainer_1qen1_1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    max-height: 100%
}

._WhatsNewBlock_1qen1_9 {
    padding-bottom: var(--spx-unit-6)
}

._WhatsNewBlock_1qen1_9:last-child {
    padding-bottom: 0
}

@media (min-width: 768px) {
    ._WhatsNewText_1qen1_17 {
        padding:0 var(--spx-unit-8)
    }
}

._VideoContainer_1qen1_23 {
    background: var(--colours-plain-background-inverted);
    display: flex;
    justify-content: center;
    max-height: 100%
}

._Text_1qen1_30 {
    text-align: left;
    margin-block:0 var(--spx-unit-4)}

._Image_1qen1_35 {
    width: 100%
}

html ._ReactQueryDevtools_1qen1_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._ContentContainer_1rs2z_1 {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 0 var(--spx-unit-6)
}

._Subtitle_1rs2z_10 {
    text-align: center;
    font-size: var(--spx-font-size-base);
    margin: 0 var(--spx-unit-6) var(--spx-unit-6)
}

html ._ReactQueryDevtools_1rs2z_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._FileUploadContainer_wza6a_1 {
    background: #f7fafc;
    border-radius: var(--border-radius);
    width: 100%;
    padding: 15px;
    border: 1px solid #e2e8f0
}

._FileUploadContainer_wza6a_1>._Button_wza6a_9 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--button-colour);
    border-color: #fff;
    -webkit-text-fill-color: initial;
    color: #fff;
    font-weight: 700;
    padding: 15px;
    border-radius: var(--border-radius)
}

._FileUploadContainer_wza6a_1>._Button_wza6a_9:hover {
    opacity: .8
}

._FileUploadContainer_wza6a_1>._Button_wza6a_9 svg {
    margin-right: var(--question-spacing-small)
}

._FileUploadContainer_wza6a_1 img {
    border-radius: var(--border-radius);
    overflow: hidden;
    max-height: 50vh;
    margin: 0 auto var(--question-spacing-small) auto;
    pointer-events: none
}

._FileUploadContainerFixHeight_wza6a_38 {
    min-height: 50vh
}

._FileUploadReadonly_wza6a_42 {
    -webkit-text-fill-color: initial;
    color: var(--grey-text-colour);
    text-align: center
}

._FileUploadError_wza6a_47 {
    background: var(--incorrect-bg-colour);
    -webkit-text-fill-color: initial;
    color: #591021;
    padding: var(--question-spacing-small) var(--question-spacing);
    border-radius: var(--border-radius);
    margin-bottom: var(--question-spacing-small)
}

html ._ReactQueryDevtools_wza6a_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

@font-face {
    font-family: KaTeX_AMS;
    font-style: normal;
    font-weight: 400;
    src: url(./KaTeX_AMS-Regular-BQhdFMY1.woff2) format("woff2"),url(./KaTeX_AMS-Regular-DMm9YOAa.woff) format("woff"),url(./KaTeX_AMS-Regular-DRggAlZN.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Caligraphic;
    font-style: normal;
    font-weight: 700;
    src: url(./KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2) format("woff2"),url(./KaTeX_Caligraphic-Bold-BEiXGLvX.woff) format("woff"),url(./KaTeX_Caligraphic-Bold-ATXxdsX0.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Caligraphic;
    font-style: normal;
    font-weight: 400;
    src: url(./KaTeX_Caligraphic-Regular-Di6jR-x-.woff2) format("woff2"),url(./KaTeX_Caligraphic-Regular-CTRA-rTL.woff) format("woff"),url(./KaTeX_Caligraphic-Regular-wX97UBjC.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Fraktur;
    font-style: normal;
    font-weight: 700;
    src: url(./KaTeX_Fraktur-Bold-CL6g_b3V.woff2) format("woff2"),url(./KaTeX_Fraktur-Bold-BsDP51OF.woff) format("woff"),url(./KaTeX_Fraktur-Bold-BdnERNNW.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Fraktur;
    font-style: normal;
    font-weight: 400;
    src: url(./KaTeX_Fraktur-Regular-CTYiF6lA.woff2) format("woff2"),url(./KaTeX_Fraktur-Regular-Dxdc4cR9.woff) format("woff"),url(./KaTeX_Fraktur-Regular-CB_wures.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Main;
    font-style: normal;
    font-weight: 700;
    src: url(./KaTeX_Main-Bold-Cx986IdX.woff2) format("woff2"),url(./KaTeX_Main-Bold-Jm3AIy58.woff) format("woff"),url(./KaTeX_Main-Bold-waoOVXN0.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Main;
    font-style: italic;
    font-weight: 700;
    src: url(./KaTeX_Main-BoldItalic-DxDJ3AOS.woff2) format("woff2"),url(./KaTeX_Main-BoldItalic-SpSLRI95.woff) format("woff"),url(./KaTeX_Main-BoldItalic-DzxPMmG6.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Main;
    font-style: italic;
    font-weight: 400;
    src: url(./KaTeX_Main-Italic-NWA7e6Wa.woff2) format("woff2"),url(./KaTeX_Main-Italic-BMLOBm91.woff) format("woff"),url(./KaTeX_Main-Italic-3WenGoN9.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Main;
    font-style: normal;
    font-weight: 400;
    src: url(./KaTeX_Main-Regular-B22Nviop.woff2) format("woff2"),url(./KaTeX_Main-Regular-Dr94JaBh.woff) format("woff"),url(./KaTeX_Main-Regular-ypZvNtVU.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 700;
    src: url(./KaTeX_Math-BoldItalic-CZnvNsCZ.woff2) format("woff2"),url(./KaTeX_Math-BoldItalic-iY-2wyZ7.woff) format("woff"),url(./KaTeX_Math-BoldItalic-B3XSjfu4.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 400;
    src: url(./KaTeX_Math-Italic-t53AETM-.woff2) format("woff2"),url(./KaTeX_Math-Italic-DA0__PXp.woff) format("woff"),url(./KaTeX_Math-Italic-flOr_0UB.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_SansSerif;
    font-style: normal;
    font-weight: 700;
    src: url(./KaTeX_SansSerif-Bold-D1sUS0GD.woff2) format("woff2"),url(./KaTeX_SansSerif-Bold-DbIhKOiC.woff) format("woff"),url(./KaTeX_SansSerif-Bold-CFMepnvq.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_SansSerif;
    font-style: italic;
    font-weight: 400;
    src: url(./KaTeX_SansSerif-Italic-C3H0VqGB.woff2) format("woff2"),url(./KaTeX_SansSerif-Italic-DN2j7dab.woff) format("woff"),url(./KaTeX_SansSerif-Italic-YYjJ1zSn.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_SansSerif;
    font-style: normal;
    font-weight: 400;
    src: url(./KaTeX_SansSerif-Regular-DDBCnlJ7.woff2) format("woff2"),url(./KaTeX_SansSerif-Regular-CS6fqUqJ.woff) format("woff"),url(./KaTeX_SansSerif-Regular-BNo7hRIc.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Script;
    font-style: normal;
    font-weight: 400;
    src: url(./KaTeX_Script-Regular-D3wIWfF6.woff2) format("woff2"),url(./KaTeX_Script-Regular-D5yQViql.woff) format("woff"),url(./KaTeX_Script-Regular-C5JkGWo-.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Size1;
    font-style: normal;
    font-weight: 400;
    src: url(./KaTeX_Size1-Regular-mCD8mA8B.woff2) format("woff2"),url(./KaTeX_Size1-Regular-C195tn64.woff) format("woff"),url(./KaTeX_Size1-Regular-Dbsnue_I.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Size2;
    font-style: normal;
    font-weight: 400;
    src: url(./KaTeX_Size2-Regular-Dy4dx90m.woff2) format("woff2"),url(./KaTeX_Size2-Regular-oD1tc_U0.woff) format("woff"),url(./KaTeX_Size2-Regular-B7gKUWhC.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Size3;
    font-style: normal;
    font-weight: 400;
    src: url(data:font/woff2;base64,d09GMgABAAAAAA4oAA4AAAAAHbQAAA3TAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAAgRQIDgmcDBEICo1oijYBNgIkA14LMgAEIAWJAAeBHAyBHBvbGiMRdnO0IkRRkiYDgr9KsJ1NUAf2kILNxgUmgqIgq1P89vcbIcmsQbRps3vCcXdYOKSWEPEKgZgQkprQQsxIXUgq0DqpGKmIvrgkeVGtEQD9DzAO29fM9jYhxZEsL2FeURH2JN4MIcTdO049NCVdxQ/w9NrSYFEBKTDKpLKfNkCGDc1RwjZLQcm3vqJ2UW9Xfa3tgAHz6ivp6vgC2yD4/6352ndnN0X0TL7seypkjZlMsjmZnf0Mm5Q+JykRWQBKCVCVPbARPXWyQtb5VgLB6Biq7/Uixcj2WGqdI8tGSgkuRG+t910GKP2D7AQH0DB9FMDW/obJZ8giFI3Wg8Cvevz0M+5m0rTh7XDBlvo9Y4vm13EXmfttwI4mBo1EG15fxJhUiCLbiiyCf/ZA6MFAhg3pGIZGdGIVjtPn6UcMk9A/UUr9PhoNsCENw1APAq0gpH73e+M+0ueyHbabc3vkbcdtzcf/fiy+NxQEjf9ud/ELBHAXJ0nk4z+MXH2Ev/kWyV4k7SkvpPc9Qr38F6RPWnM9cN6DJ0AdD1BhtgABtmoRoFCvPsBAumNm6soZG2Gk5GyVTo2sJncSyp0jQTYoR6WDvTwaaEcHsxHfvuWhHA3a6bN7twRKtcGok6NsCi7jYRrM2jExsUFMxMQYuJbMhuWNOumEJy9hi29Dmg5zMp/A5+hhPG19j1vBrq8JTLr8ki5VLPmG/PynJHVul440bxg5xuymHUFPBshC+nA9I1FmwbRBTNHAcik3Oae0cxKoI3MOriM42UrPe51nsaGxJ+WfXubAsP84aabUlQSJ1IiE0iPETLUU4CATgfXSCSpuRFRmCGbO+wSpAnzaeaCYW1VNEysRtuXCEL1kUFUbbtMv3Tilt/1c11jt3Q5bbMa84cpWipp8Elw3MZhOHsOlwwVUQM3lAR35JiFQbaYCRnMF2lxAWoOg2gyoIV4PouX8HytNIfLhqpJtXB4vjiViUI8IJ7bkC4ikkQvKksnOTKICwnqWSZ9YS5f0WCxmpgjbIq7EJcM4aI2nmhLNY2JIUgOjXZFWBHb+x5oh6cwb0Tv1ackHdKi0I9OO2wE9aogIOn540CCCziyhN+IaejtgAONKznHlHyutPrHGwCx9S6B8kfS4Mfi4Eyv7OU730bT1SCBjt834cXsf43zVjPUqqJjgrjeGnBxSG4aYAKFuVbeCfkDIjAqMb6yLNIbCuvXhMH2/+k2vkNpkORhR59N1CkzoOENvneIosjYmuTxlhUzaGEJQ/iWqx4dmwpmKjrwTiTGTCVozNAYqk/zXOndWxuWSmJkQpJw3pK5KX6QrLt5LATMqpmPAQhkhK6PUjzHUn7E0gHE0kPE0iKkolgkUx9SZmVAdDgpffdyJKg3k7VmzYGCwVXGz/tXmkOIp+vcWs+EMuhhvN0h9uhfzWJziBQmCREGSIFmQIkgVpAnSBRmC//6hkLZwaVhwxlrJSOdqlFtOYxlau9F2QN5Y98xmIAsiM1HVp2VFX+DHHGg6Ecjh3vmqtidX3qHI2qycTk/iwxSt5UzTmEP92ZBnEWTk4Mx8Mpl78ZDokxg/KWb+Q0QkvdKVmq3TMW+RXEgrsziSAfNXFMhDc60N5N9jQzjfO0kBKpUZl0ZmwJ41j/B9Hz6wmRaJB84niNmQrzp9eSlQCDDzazGDdVi3P36VZQ+Jy4f9UBNp+3zTjqI4abaFAm+GShVaXlsGdF3FYzZcDI6cori4kMxUECl9IjJZpzkvitAoxKue+90pDMvcKRxLl53TmOKCmV/xRolNKSqqUxc6LStOETmFOiLZZptlZepcKiAzteG8PEdpnQpbOMNcMsR4RR2Bs0cKFEvSmIjAFcnarqwUL4lDhHmnVkwu1IwshbiCcgvOheZuYyOteufZZwlcTlLgnZ3o/WcYdzZHW/WGaqaVfmTZ1aWCceJjkbZqsfbkOtcFlUZM/jy+hXHDbaUobWqqXaeWobbLO99yG5N3U4wxco0rQGGcOLASFMXeJoham8M+/x6O2WywK2l4HGbq1CoUyC/IZikQhdq3SiuNrvAEj0AVu9x2x3lp/xWzahaxidezFVtdcb5uEnzyl0ZmYiuKI0exvCd4Xc9CV1KB0db00z92wDPde0kukbvZIWN6jUWFTmPIC/Y4UPCm8UfDTFZpZNon1qLFTkBhxzB+FjQRA2Q/YRJT8pQigslMaUpFyAG8TMlXigiqmAZX4xgijKjRlGpLE0GdplRfCaJo0JQaSxNBk6ZmMzcya0FmrcisDdn0Q3HI2sWSppYigmlM1XT/kLQZSNpMJG0WkjYbSZuDpM1F0uYhFc1HxU4m1QJjDK6iL0S5uSj5rgXc3RejEigtcRBtqYPQsiTskmO5vosV+q4VGIKbOkDg0jtRrq+Em1YloaTFar3EGr1EUC8R0kus1Uus00usL97ABr2BjXoDm/QGNhuWtMVBKOwg/i78lT7hBsAvDmwHc/ao3vmUbBmhjeYySZNWvGkfZAgISDSaDo1SVpzGDsAEkF8B+gEapViUoZgUWXcRIGFZNm6gWbAKk0bp0k1MHG9fLYtV4iS2SmLEQFARzRcnf9PUS0LVn05/J9MiRRBU3v2IrvW974v4N00L7ZMk0wXP1409CHo/an8zTRHD3eSJ6m8D4YMkZNl3M79sqeuAsr/m3f+8/yl7A50aiAEJgeBeMWzu7ui9UfUBCe2TIqZIoOd/3/udRBOQidQZUERzb2/VwZN1H/Sju82ew2H2Wfr6qvfVf3hqwDvAIpkQVFy4B9Pe9e4/XvPeceu7h3dvO56iJPf0+A6cqA2ip18ER+iFgggiuOkvj24bby0N9j2UHIkgqIt+sVgfodC4YghLSMjSZbH0VR/6dMDrYJeKHilKTemt6v6kvzvn3/RrdWtr0GoN/xL+Sex/cPYLUpepx9cz/D46UPU5KXgAQa+NDps1v6J3xP1i2HtaDB0M9aX2deA7SYff//+gUCovMmIK/qfsFcOk+4Y5ZN97XlG6zebqtMbKgeRFi51vnxTQYBUik2rS/Cn6PC8ADR8FGxsRPB82dzfND90gIcshOcYUkfjherBz53odpm6TP8txlwOZ71xmfHHOvq053qFF/MRlS3jP0ELudrf2OeN8DHvp6ZceLe8qKYvWz/7yp0u4dKPfli3CYq0O13Ih71mylJ80tOi10On8wi+F4+LWgDPeJ30msSQt9/vkmHq9/Lvo2b461mP801v3W4xTcs6CbvF9UDdrSt+A8OUbpSh55qAUFXWznBBfdeJ8a4d7ugT5tvxUza3h9m4H7ptTqiG4z0g5dc0X29OcGlhpGFMpQo9ytTS+NViZpNdvU4kWx+LKxNY10kQ1yqGXrhe4/1nvP7E+nd5A92TtaRplbHSqoIdOqtRWti+fkB5/n1+/VvCmz12pG1kpQWsfi1ftlBobm0bpngs16CHkbIwdLnParxtTV3QYRlfJ0KFskH7pdN/YDn+yRuSd7sNH3aO0DYPggk6uWuXrfOc+fa3VTxFVvKaNxHsiHmsXyCLIE5yuOeN3/Jdf8HBL/5M6shjyhxHx9BjB1O0+4NLOnjLLSxwO7ukN4jMbOIcD879KLSi6Pk61Oqm2377n8079PXEEQ7cy7OKEC9nbpet118fxweTafpt69x/Bt8UqGzNQt7aelpc44dn5cqhwf71+qKp/Zf/+a0zcizOUWpl/iBcSXip0pplkatCchoH5c5aUM8I7/dWxAej8WicPL1URFZ9BDJelUwEwTkGqUhgSlydVes95YdXvhh9Gfz/aeFWvgVb4tuLbcv4+wLdutVZv/cUonwBD/6eDlE0aSiKK/uoH3+J1wDE/jMVqY2ysGufN84oIXB0sPzy8ollX/LegY74DgJXJR57sn+VGza0x3DnuIgABFM15LmajjjsNlYj+JEZGbuRYcAMOWxFkPN2w6Wd46xo4gVWQR/X4lyI/R6K/YK0110GzudPRW7Y+UOBGTfNNzHeYT0fiH0taunBpq9HEW8OKSaBGj21L0MqenEmNRWBAWDWAk4CpNoEZJ2tTaPFgbQYj8HxtFilErs3BTRwT8uO1NXQaWfIotchmPkAF5mMBAliEmZiOGVgCG9LgRzpscMAOOwowlT3JhusdazXGSC/hxR3UlmWVwWHpOIKheqONvjyhSiTHIkVUco5bnji8m//zL7PKaT1Vl5I6UE609f+gkr6MZKVyKc7zJRmCahLsdlyA5fdQkRSan9LgnnLEyGSkaKJCJog0wAgvepWBt80+1yKln1bMVtCljfNWDueKLsWwaEbBSfSPTEmVRsUcYYMnEjcjeyCZzBXK9E9BYBXLKjOSpUDR+nEV3TFSUdQaz+ot98QxgXwx0GQ+EEUAKB2qZPkQQ0GqFD8UPFMqyaCHM24BZmSGic9EYMagKizOw9Hz50DMrDLrqqLkTAhplMictiCAx5S3BIUQdeJeLnBy2CNtMfz6cV4u8XKoFZQesbf9YZiIERiHjaNodDW6LgcirX/mPnJIkBGDUpTBhSa0EIr38D5hCIszhCM8URGBqImoWjpvpt1ebu/v3Gl3qJfMnNM+9V+kiRFyROTPHQWOcs1dNW94/ukKMPZBvDi55i5CttdeJz84DLngLqjcdwEZ87bFFR8CIG35OAkDVN6VRDZ7aq67NteYqZ2lpT8oYB2CytoBd6VuAx4WgiAsnuj3WohG+LugzXiQRDeM3XYXlULv4dp5VFYC) format("woff2"),url(./KaTeX_Size3-Regular-CTq5MqoE.woff) format("woff"),url(./KaTeX_Size3-Regular-DgpXs0kz.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Size4;
    font-style: normal;
    font-weight: 400;
    src: url(./KaTeX_Size4-Regular-Dl5lxZxV.woff2) format("woff2"),url(./KaTeX_Size4-Regular-BF-4gkZK.woff) format("woff"),url(./KaTeX_Size4-Regular-DWFBv043.ttf) format("truetype")
}

@font-face {
    font-family: KaTeX_Typewriter;
    font-style: normal;
    font-weight: 400;
    src: url(./KaTeX_Typewriter-Regular-CO6r4hn1.woff2) format("woff2"),url(./KaTeX_Typewriter-Regular-C0xS9mPB.woff) format("woff"),url(./KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf) format("truetype")
}

.katex {
    text-rendering: auto;
    font: 1.21em KaTeX_Main,Times New Roman,serif;
    line-height: 1.2;
    text-indent: 0
}

.katex * {
    -ms-high-contrast-adjust: none!important;
    border-color: currentColor
}

.katex .katex-version:after {
    content: "0.13.24"
}

.katex .katex-mathml {
    clip: rect(1px,1px,1px,1px);
    border: 0;
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px
}

.katex .katex-html>.newline {
    display: block
}

.katex .base {
    position: relative;
    white-space: nowrap;
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content
}

.katex .base,.katex .strut {
    display: inline-block
}

.katex .textbf {
    font-weight: 700
}

.katex .textit {
    font-style: italic
}

.katex .textrm {
    font-family: KaTeX_Main
}

.katex .textsf {
    font-family: KaTeX_SansSerif
}

.katex .texttt {
    font-family: KaTeX_Typewriter
}

.katex .mathnormal {
    font-family: KaTeX_Math;
    font-style: italic
}

.katex .mathit {
    font-family: KaTeX_Main;
    font-style: italic
}

.katex .mathrm {
    font-style: normal
}

.katex .mathbf {
    font-family: KaTeX_Main;
    font-weight: 700
}

.katex .boldsymbol {
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 700
}

.katex .amsrm,.katex .mathbb,.katex .textbb {
    font-family: KaTeX_AMS
}

.katex .mathcal {
    font-family: KaTeX_Caligraphic
}

.katex .mathfrak,.katex .textfrak {
    font-family: KaTeX_Fraktur
}

.katex .mathtt {
    font-family: KaTeX_Typewriter
}

.katex .mathscr,.katex .textscr {
    font-family: KaTeX_Script
}

.katex .mathsf,.katex .textsf {
    font-family: KaTeX_SansSerif
}

.katex .mathboldsf,.katex .textboldsf {
    font-family: KaTeX_SansSerif;
    font-weight: 700
}

.katex .mathitsf,.katex .textitsf {
    font-family: KaTeX_SansSerif;
    font-style: italic
}

.katex .mainrm {
    font-family: KaTeX_Main;
    font-style: normal
}

.katex .vlist-t {
    border-collapse: collapse;
    display: inline-table;
    table-layout: fixed
}

.katex .vlist-r {
    display: table-row
}

.katex .vlist {
    display: table-cell;
    position: relative;
    vertical-align: bottom
}

.katex .vlist>span {
    display: block;
    height: 0;
    position: relative
}

.katex .vlist>span>span {
    display: inline-block
}

.katex .vlist>span>.pstrut {
    overflow: hidden;
    width: 0
}

.katex .vlist-t2 {
    margin-right: -2px
}

.katex .vlist-s {
    display: table-cell;
    font-size: 1px;
    min-width: 2px;
    vertical-align: bottom;
    width: 2px
}

.katex .vbox {
    align-items: baseline;
    display: inline-flex;
    flex-direction: column
}

.katex .hbox {
    width: 100%
}

.katex .hbox,.katex .thinbox {
    display: inline-flex;
    flex-direction: row
}

.katex .thinbox {
    max-width: 0;
    width: 0
}

.katex .msupsub {
    text-align: left
}

.katex .mfrac>span>span {
    text-align: center
}

.katex .mfrac .frac-line {
    border-bottom-style: solid;
    display: inline-block;
    width: 100%
}

.katex .hdashline,.katex .hline,.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .rule,.katex .underline .underline-line {
    min-height: 1px
}

.katex .mspace {
    display: inline-block
}

.katex .clap,.katex .llap,.katex .rlap {
    position: relative;
    width: 0
}

.katex .clap>.inner,.katex .llap>.inner,.katex .rlap>.inner {
    position: absolute
}

.katex .clap>.fix,.katex .llap>.fix,.katex .rlap>.fix {
    display: inline-block
}

.katex .llap>.inner {
    right: 0
}

.katex .clap>.inner,.katex .rlap>.inner {
    left: 0
}

.katex .clap>.inner>span {
    margin-left: -50%;
    margin-right: 50%
}

.katex .rule {
    border: 0 solid;
    display: inline-block;
    position: relative
}

.katex .hline,.katex .overline .overline-line,.katex .underline .underline-line {
    border-bottom-style: solid;
    display: inline-block;
    width: 100%
}

.katex .hdashline {
    border-bottom-style: dashed;
    display: inline-block;
    width: 100%
}

.katex .sqrt>.root {
    margin-left: .27777778em;
    margin-right: -.55555556em
}

.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1 {
    font-size: 1em
}

.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2 {
    font-size: 1.2em
}

.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3 {
    font-size: 1.4em
}

.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4 {
    font-size: 1.6em
}

.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5 {
    font-size: 1.8em
}

.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6 {
    font-size: 2em
}

.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7 {
    font-size: 2.4em
}

.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8 {
    font-size: 2.88em
}

.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9 {
    font-size: 3.456em
}

.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10 {
    font-size: 4.148em
}

.katex .fontsize-ensurer.reset-size1.size11,.katex .sizing.reset-size1.size11 {
    font-size: 4.976em
}

.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1 {
    font-size: .83333333em
}

.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2 {
    font-size: 1em
}

.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3 {
    font-size: 1.16666667em
}

.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4 {
    font-size: 1.33333333em
}

.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5 {
    font-size: 1.5em
}

.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6 {
    font-size: 1.66666667em
}

.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7 {
    font-size: 2em
}

.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8 {
    font-size: 2.4em
}

.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9 {
    font-size: 2.88em
}

.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10 {
    font-size: 3.45666667em
}

.katex .fontsize-ensurer.reset-size2.size11,.katex .sizing.reset-size2.size11 {
    font-size: 4.14666667em
}

.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1 {
    font-size: .71428571em
}

.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2 {
    font-size: .85714286em
}

.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3 {
    font-size: 1em
}

.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4 {
    font-size: 1.14285714em
}

.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5 {
    font-size: 1.28571429em
}

.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6 {
    font-size: 1.42857143em
}

.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7 {
    font-size: 1.71428571em
}

.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8 {
    font-size: 2.05714286em
}

.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9 {
    font-size: 2.46857143em
}

.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10 {
    font-size: 2.96285714em
}

.katex .fontsize-ensurer.reset-size3.size11,.katex .sizing.reset-size3.size11 {
    font-size: 3.55428571em
}

.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1 {
    font-size: .625em
}

.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2 {
    font-size: .75em
}

.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3 {
    font-size: .875em
}

.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4 {
    font-size: 1em
}

.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5 {
    font-size: 1.125em
}

.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6 {
    font-size: 1.25em
}

.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7 {
    font-size: 1.5em
}

.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8 {
    font-size: 1.8em
}

.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9 {
    font-size: 2.16em
}

.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10 {
    font-size: 2.5925em
}

.katex .fontsize-ensurer.reset-size4.size11,.katex .sizing.reset-size4.size11 {
    font-size: 3.11em
}

.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1 {
    font-size: .55555556em
}

.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2 {
    font-size: .66666667em
}

.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3 {
    font-size: .77777778em
}

.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4 {
    font-size: .88888889em
}

.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5 {
    font-size: 1em
}

.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6 {
    font-size: 1.11111111em
}

.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7 {
    font-size: 1.33333333em
}

.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8 {
    font-size: 1.6em
}

.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9 {
    font-size: 1.92em
}

.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10 {
    font-size: 2.30444444em
}

.katex .fontsize-ensurer.reset-size5.size11,.katex .sizing.reset-size5.size11 {
    font-size: 2.76444444em
}

.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1 {
    font-size: .5em
}

.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2 {
    font-size: .6em
}

.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3 {
    font-size: .7em
}

.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4 {
    font-size: .8em
}

.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5 {
    font-size: .9em
}

.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6 {
    font-size: 1em
}

.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7 {
    font-size: 1.2em
}

.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8 {
    font-size: 1.44em
}

.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9 {
    font-size: 1.728em
}

.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10 {
    font-size: 2.074em
}

.katex .fontsize-ensurer.reset-size6.size11,.katex .sizing.reset-size6.size11 {
    font-size: 2.488em
}

.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1 {
    font-size: .41666667em
}

.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2 {
    font-size: .5em
}

.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3 {
    font-size: .58333333em
}

.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4 {
    font-size: .66666667em
}

.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5 {
    font-size: .75em
}

.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6 {
    font-size: .83333333em
}

.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7 {
    font-size: 1em
}

.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8 {
    font-size: 1.2em
}

.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9 {
    font-size: 1.44em
}

.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10 {
    font-size: 1.72833333em
}

.katex .fontsize-ensurer.reset-size7.size11,.katex .sizing.reset-size7.size11 {
    font-size: 2.07333333em
}

.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1 {
    font-size: .34722222em
}

.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2 {
    font-size: .41666667em
}

.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3 {
    font-size: .48611111em
}

.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4 {
    font-size: .55555556em
}

.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5 {
    font-size: .625em
}

.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6 {
    font-size: .69444444em
}

.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7 {
    font-size: .83333333em
}

.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8 {
    font-size: 1em
}

.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9 {
    font-size: 1.2em
}

.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10 {
    font-size: 1.44027778em
}

.katex .fontsize-ensurer.reset-size8.size11,.katex .sizing.reset-size8.size11 {
    font-size: 1.72777778em
}

.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1 {
    font-size: .28935185em
}

.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2 {
    font-size: .34722222em
}

.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3 {
    font-size: .40509259em
}

.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4 {
    font-size: .46296296em
}

.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5 {
    font-size: .52083333em
}

.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6 {
    font-size: .5787037em
}

.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7 {
    font-size: .69444444em
}

.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8 {
    font-size: .83333333em
}

.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9 {
    font-size: 1em
}

.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10 {
    font-size: 1.20023148em
}

.katex .fontsize-ensurer.reset-size9.size11,.katex .sizing.reset-size9.size11 {
    font-size: 1.43981481em
}

.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1 {
    font-size: .24108004em
}

.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2 {
    font-size: .28929605em
}

.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3 {
    font-size: .33751205em
}

.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4 {
    font-size: .38572806em
}

.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5 {
    font-size: .43394407em
}

.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6 {
    font-size: .48216008em
}

.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7 {
    font-size: .57859209em
}

.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8 {
    font-size: .69431051em
}

.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9 {
    font-size: .83317261em
}

.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10 {
    font-size: 1em
}

.katex .fontsize-ensurer.reset-size10.size11,.katex .sizing.reset-size10.size11 {
    font-size: 1.19961427em
}

.katex .fontsize-ensurer.reset-size11.size1,.katex .sizing.reset-size11.size1 {
    font-size: .20096463em
}

.katex .fontsize-ensurer.reset-size11.size2,.katex .sizing.reset-size11.size2 {
    font-size: .24115756em
}

.katex .fontsize-ensurer.reset-size11.size3,.katex .sizing.reset-size11.size3 {
    font-size: .28135048em
}

.katex .fontsize-ensurer.reset-size11.size4,.katex .sizing.reset-size11.size4 {
    font-size: .32154341em
}

.katex .fontsize-ensurer.reset-size11.size5,.katex .sizing.reset-size11.size5 {
    font-size: .36173633em
}

.katex .fontsize-ensurer.reset-size11.size6,.katex .sizing.reset-size11.size6 {
    font-size: .40192926em
}

.katex .fontsize-ensurer.reset-size11.size7,.katex .sizing.reset-size11.size7 {
    font-size: .48231511em
}

.katex .fontsize-ensurer.reset-size11.size8,.katex .sizing.reset-size11.size8 {
    font-size: .57877814em
}

.katex .fontsize-ensurer.reset-size11.size9,.katex .sizing.reset-size11.size9 {
    font-size: .69453376em
}

.katex .fontsize-ensurer.reset-size11.size10,.katex .sizing.reset-size11.size10 {
    font-size: .83360129em
}

.katex .fontsize-ensurer.reset-size11.size11,.katex .sizing.reset-size11.size11 {
    font-size: 1em
}

.katex .delimsizing.size1 {
    font-family: KaTeX_Size1
}

.katex .delimsizing.size2 {
    font-family: KaTeX_Size2
}

.katex .delimsizing.size3 {
    font-family: KaTeX_Size3
}

.katex .delimsizing.size4 {
    font-family: KaTeX_Size4
}

.katex .delimsizing.mult .delim-size1>span {
    font-family: KaTeX_Size1
}

.katex .delimsizing.mult .delim-size4>span {
    font-family: KaTeX_Size4
}

.katex .nulldelimiter {
    display: inline-block;
    width: .12em
}

.katex .delimcenter,.katex .op-symbol {
    position: relative
}

.katex .op-symbol.small-op {
    font-family: KaTeX_Size1
}

.katex .op-symbol.large-op {
    font-family: KaTeX_Size2
}

.katex .accent>.vlist-t,.katex .op-limits>.vlist-t {
    text-align: center
}

.katex .accent .accent-body {
    position: relative
}

.katex .accent .accent-body:not(.accent-full) {
    width: 0
}

.katex .overlay {
    display: block
}

.katex .mtable .vertical-separator {
    display: inline-block;
    min-width: 1px
}

.katex .mtable .arraycolsep {
    display: inline-block
}

.katex .mtable .col-align-c>.vlist-t {
    text-align: center
}

.katex .mtable .col-align-l>.vlist-t {
    text-align: left
}

.katex .mtable .col-align-r>.vlist-t {
    text-align: right
}

.katex .svg-align {
    text-align: left
}

.katex svg {
    fill: currentColor;
    stroke: currentColor;
    fill-rule: nonzero;
    fill-opacity: 1;
    stroke-width: 1;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-dashoffset: 0;
    stroke-opacity: 1;
    display: block;
    height: inherit;
    position: absolute;
    width: 100%
}

.katex svg path {
    stroke: none
}

.katex img {
    border-style: none;
    max-height: none;
    max-width: none;
    min-height: 0;
    min-width: 0
}

.katex .stretchy {
    display: block;
    overflow: hidden;
    position: relative;
    width: 100%
}

.katex .stretchy:after,.katex .stretchy:before {
    content: ""
}

.katex .hide-tail {
    overflow: hidden;
    position: relative;
    width: 100%
}

.katex .halfarrow-left {
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 50.2%
}

.katex .halfarrow-right {
    overflow: hidden;
    position: absolute;
    right: 0;
    width: 50.2%
}

.katex .brace-left {
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 25.1%
}

.katex .brace-center {
    left: 25%;
    overflow: hidden;
    position: absolute;
    width: 50%
}

.katex .brace-right {
    overflow: hidden;
    position: absolute;
    right: 0;
    width: 25.1%
}

.katex .x-arrow-pad {
    padding: 0 .5em
}

.katex .cd-arrow-pad {
    padding: 0 .55556em 0 .27778em
}

.katex .mover,.katex .munder,.katex .x-arrow {
    text-align: center
}

.katex .boxpad {
    padding: 0 .3em
}

.katex .fbox,.katex .fcolorbox {
    border: .04em solid;
    box-sizing: border-box
}

.katex .cancel-pad {
    padding: 0 .2em
}

.katex .cancel-lap {
    margin-left: -.2em;
    margin-right: -.2em
}

.katex .sout {
    border-bottom-style: solid;
    border-bottom-width: .08em
}

.katex .angl {
    border-right: .049em solid;
    border-top: .049em solid;
    box-sizing: border-box;
    margin-right: .03889em
}

.katex .anglpad {
    padding: 0 .03889em
}

.katex .eqn-num:before {
    content: "(" counter(katexEqnNo) ")";
    counter-increment: katexEqnNo
}

.katex .mml-eqn-num:before {
    content: "(" counter(mmlEqnNo) ")";
    counter-increment: mmlEqnNo
}

.katex .mtr-glue {
    width: 50%
}

.katex .cd-vert-arrow {
    display: inline-block;
    position: relative
}

.katex .cd-label-left {
    display: inline-block;
    position: absolute;
    right: calc(50% + .3em);
    text-align: left
}

.katex .cd-label-right {
    display: inline-block;
    left: calc(50% + .3em);
    position: absolute;
    text-align: right
}

.katex-display {
    display: block;
    margin: 1em 0;
    text-align: center
}

.katex-display>.katex {
    display: block;
    text-align: center;
    white-space: nowrap
}

.katex-display>.katex>.katex-html {
    display: block;
    position: relative
}

.katex-display>.katex>.katex-html>.tag {
    position: absolute;
    right: 0
}

.katex-display.leqno>.katex>.katex-html>.tag {
    left: 0;
    right: auto
}

.katex-display.fleqn>.katex {
    padding-left: 2em;
    text-align: left
}

body {
    counter-reset: katexEqnNo mmlEqnNo
}

html .ReactQueryDevtools {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Question_1yz81_5 {
    --question-font-family: "inherit";
    --question-font-size: 17;
    --question-text-colour: rgb(46 56 77);
    --question-filter: none;
    --question-line-height: 1.5em;
    --katex-font-size: 1.21em;
    --inline-question-spacing: .4em;
    --question-spacing: 1em;
    --question-spacing-small: .6em;
    --question-spacing-large: 1.5em;
    --slot-size: 5em;
    --border-radius: .3em;
    --grey-text-colour: #888;
    --button-colour: #4a95ff;
    --correct-bg-colour: rgb(145 191 128);
    --correct-icon-colour: rgb(84 175 167);
    --incorrect-bg-colour: rgb(234 91 123);
    --incorrect-icon-colour: rgb(70 82 95);
    --marking-error-icon-colour: rgb(169 169 169);
    --correct-part-icon-colour: rgb(0 191 118);
    --incorrect-part-icon-colour: rgb(191 33 90);
    --correct-part-bg-colour: rgb(204 242 227);
    --answered-part-bg-colour: rgb(249 249 249);
    --was-correct-option: #38a169;
    --incorrect-option: #e53e3e;
    --correct-option: #38a169;
    --font-size-multiplier: min(1.2px, calc(.5px + .05vw) );
    --scaled-font-size: calc(var(--question-font-size) * var(--font-size-multiplier));
    font-size: max(15px,var(--scaled-font-size));
    line-height: var(--question-line-height);
    -webkit-text-fill-color: initial;
    color: var(--question-text-colour);
    margin-bottom: var(--spx-unit-2)
}

@media (max-height: 800px) {
    ._Question_1yz81_5._WithImages_1yz81_44 {
        font-size:min(var(--scaled-font-size),var(--spx-font-size-2xl))
    }
}

._Question_1yz81_5 * {
    margin-block:0 0;margin-inline:0 0}

._QuestionCentered_1yz81_56 {
    align-items: center;
    text-align: center
}

._QuestionCentered_1yz81_56._QuestionAnswerOnly_1yz81_61 {
    align-items: flex-start
}

._QuestionCentered_1yz81_56 ._Option_1yz81_65 {
    text-align: center;
    justify-content: center
}

._QuestionCentered_1yz81_56 ._StackHorizontal_1yz81_70>div,._QuestionCentered_1yz81_56 ._ImageContainer_1yz81_71,._QuestionCentered_1yz81_56 ._ChoicesGroupSelectAll_1yz81_72 {
    justify-content: center
}

._Question_1yz81_5>div:not(:last-child) {
    margin-bottom: var(--question-spacing)
}

._Question_1yz81_5>._TextElement_1yz81_80 {
    display: block
}

.katex {
    font-size: var(--katex-font-size)
}

._TextElement_1yz81_80 {
    font-family: var(--question-font-family);
    filter: var(--question-filter)
}

._AnswerTextElement_1yz81_95 {
    display: flex;
    align-items: center;
    white-space: nowrap
}

._AnswerTextElement_1yz81_95>* {
    margin-left: .3em;
    margin-right: .3em
}

._Question_1yz81_5 table {
    border-collapse: collapse;
    border-style: hidden
}

._Question_1yz81_5 table td,._Question_1yz81_5 table th {
    padding: 5px 10px;
    border: 1px solid #bbb
}

._Question_1yz81_5 table th {
    background: #efefef;
    text-align: center
}

._Question_1yz81_5 table td {
    background: #fff;
    text-align: left
}

._Question_1yz81_5 code {
    white-space: nowrap;
    padding: .2em .4em;
    background: #efefef;
    border-radius: 4px;
    border: 1px solid #dedede;
    margin: 0 .2em
}

._Question_1yz81_5 blockquote {
    background: #efefef;
    padding: calc(var(--question-spacing) * .6) var(--question-spacing);
    border-radius: 8px;
    margin: var(--question-spacing) 0
}

._Question_1yz81_5 blockquote:first-child {
    margin-top: 0
}

._Question_1yz81_5 blockquote:last-child {
    margin-bottom: 0
}

._Question_1yz81_5 ul {
    margin-left: 30px
}

._Question_1yz81_5 li {
    padding-left: 5px
}

._Question_1yz81_5 h1 {
    font-size: 1.3em;
    line-height: 1.3em
}

._Question_1yz81_5 h2 {
    font-size: 1.2em;
    line-height: 1.2em
}

._LinkedCode_1yz81_169 {
    cursor: pointer
}

._LinkedCode_1yz81_169:hover {
    background: #e0e0e0
}

._LinkedCode_1yz81_169:active {
    box-shadow: 0 0 0 2px #efefef
}

._PartGroup_1yz81_181 {
    display: flex
}

._PartGroupPrefix_1yz81_185 {
    text-align: left;
    font-weight: 700;
    flex: 0 0 auto
}

._StackNormal_1yz81_191,._StackSmall_1yz81_192 {
    display: inline-block;
    flex: 1 1
}

._StackNormal_1yz81_191._StackWrap_1yz81_199 {
    margin-left: calc(var(--inline-question-spacing) * -1);
    margin-top: calc(var(--question-spacing) * -1)
}

._StackNormal_1yz81_191._StackWrap_1yz81_199>* {
    margin-left: var(--inline-question-spacing);
    margin-top: var(--question-spacing)
}

._StackSmall_1yz81_192._StackWrap_1yz81_199 {
    margin-left: calc(var(--question-spacing-small) * -1);
    margin-top: calc(var(--question-spacing-small) * -1)
}

._StackSmall_1yz81_192._StackWrap_1yz81_199>* {
    margin-left: var(--question-spacing-small);
    margin-top: var(--question-spacing-small)
}

._StackHorizontalRow_1yz81_222>*:not(:first-child) {
    margin-left: var(--inline-question-spacing)
}

._StackVerticalRow_1yz81_226>*:not(:first-child) {
    margin-top: var(--question-spacing)
}

._StackHorizontal_1yz81_70 {
    display: flex;
    flex-direction: row;
    align-items: center
}

._QuestionCentered_1yz81_56 ._StackHorizontal_1yz81_70 {
    justify-content: center
}

._StackHorizontal_1yz81_70:not(._QuestionCentered_1yz81_56 *) {
    justify-content: flex-start;
    flex: 0 0 auto;
    min-width: 0
}

._StackVertical_1yz81_226 {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: auto
}

._QuestionCentered_1yz81_56 ._StackVertical_1yz81_226 {
    align-items: center
}

._StackWrap_1yz81_199 {
    flex-wrap: wrap
}

._ChoicesGroup_1yz81_72 {
    flex: 1 1
}

._ChoicesGroup_1yz81_72:not(._QuestionCentered_1yz81_56)>._StackVertical_1yz81_226 {
    align-items: stretch
}

._ChoicesGroupSelectAll_1yz81_72 {
    -webkit-text-fill-color: initial;
    color: var(--question-text-colour);
    margin-bottom: var(--question-spacing);
    display: flex;
    position: relative
}

._MarkdownNode_1yz81_278 {
    font-family: var(--question-font-family);
    filter: var(--question-filter)
}

._MarkdownNode_1yz81_278 li {
    display: list-item;
    text-align: left
}

._MarkdownNode_1yz81_278>p:not(:last-child),._MarkdownNode_1yz81_278>ul:not(:last-child) {
    margin-bottom: var(--question-spacing)
}

._ScaledContainer_1yz81_293 {
    display: inline-block;
    margin-bottom: 0
}

._AnswerScreenAlignContainer_1yz81_298 {
    display: flex;
    flex-direction: column
}

._AnswerScreen_1yz81_298 {
    flex: 1 1 auto;
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center
}

._QuestionCentered_1yz81_56 ._AnswerScreenAlignContainer_1yz81_298 {
    align-items: center
}

._AnswerPart_1yz81_317 {
    width: 100%;
    padding: var(--question-spacing-small);
    display: flex;
    position: relative
}

._AnswerPart_1yz81_317._MarkByPart_1yz81_323 {
    position: relative;
    transition-property: background-color;
    transition-duration: .2s;
    transition-timing-function: var(--spx-ease-1);
    background: var(--answered-part-bg-colour);
    border-radius: .5em
}

._AnswerPart_1yz81_317._MarkByPart_1yz81_323._IsCorrect_1yz81_331 {
    background: #e8faf3
}

._AnswerPart_1yz81_317:not(:last-child) {
    margin-bottom: var(--question-spacing)
}

._QuestionCentered_1yz81_56 ._AnswerPart_1yz81_317 {
    align-items: center;
    justify-content: center
}

._AnswerPartVertical_1yz81_346 {
    flex-direction: column
}

._AnswerPartHorizontal_1yz81_350 {
    flex-direction: row
}

._TextAreaContainer_1yz81_354 {
    flex: 1 1
}

._TextAreaContainer_1yz81_354 ._TextFieldComponent_1yz81_358 {
    width: 100%;
    max-width: 700px
}

math-field::part(virtual-keyboard-toggle) {
    display: none
}

math-field::part(menu-toggle) {
    display: none
}

math-field::part(content) {
    justify-content: center
}

._TextFieldWrapper_1yz81_383 {
    position: relative
}

._TextAreaWrapper_1yz81_387 {
    width: 100%
}

._Diff_1yz81_391 {
    white-space: pre-line
}

._DiffAdded_1yz81_395 {
    padding: 0 2px;
    background-color: var(--correct-bg-colour);
    border-radius: 3px
}

._DiffRemoved_1yz81_401 {
    padding: 0 1px;
    -webkit-text-fill-color: initial;
    color: var(--incorrect-part-icon-colour);
    text-decoration: line-through
}

._TextAreaDiffComparison_1yz81_407 {
    margin-bottom: var(--question-spacing);
    border: 2px solid var(--answered-part-bg-colour)!important;
    background: var(--answered-part-bg-colour)!important;
    height: auto!important;
    position: relative
}

._DiffResultHeader_1yz81_415 {
    font-size: .9em;
    display: block;
    padding-top: var(--inline-question-spacing);
    padding-bottom: var(--inline-question-spacing)
}

@keyframes _DiffResultEnter_1yz81_1 {
    0% {
        opacity: 0;
        transform: translateY(-10px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

._DiffResult_1yz81_415 ._DiffResultDetail_1yz81_434 {
    padding: 5px 0;
    border-left: 3px solid #eee;
    max-width: 700px;
    margin-bottom: var(--inline-question-spacing);
    animation: _DiffResultEnter_1yz81_1 .5s 1 cubic-bezier(.77,0,.175,1);
    animation-fill-mode: both
}

._TextAreaWrapper_1yz81_387 textarea,._TextAreaWrapper_1yz81_387 ._TextAreaDiffComparison_1yz81_407 {
    width: 100%;
    max-width: 700px;
    height: 150px
}

._TextAreaWrapper_1yz81_387 textarea[readOnly] {
    background: #fefefe
}

._TextAreaWrapper_1yz81_387 textarea[readOnly]:focus {
    box-shadow: none
}

._TextAreaWrapper_1yz81_387 textarea._TextFieldInsightsPresentation_1yz81_458 {
    height: auto;
    font-size: 80%
}

._TextFieldComponent_1yz81_358 {
    position: relative
}

._SpeechToText_1yz81_467 {
    position: absolute;
    right: 5px;
    width: 28px;
    top: 4px;
    bottom: 4px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center
}

._SpeechToText_1yz81_467:hover {
    background-color: #efefef
}

._SpeechToText_1yz81_467._Listening_1yz81_483 {
    background-color: var(--button-colour);
    -webkit-text-fill-color: initial;
    color: #fff
}

._SpeechToText_1yz81_467._Loading_1yz81_488 {
    pointer-events: none
}

._TextFieldWrapperCorrection_1yz81_492 {
    font-style: italic;
    font-size: .9em;
    -webkit-text-fill-color: initial;
    color: var(--grey-text-colour);
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    animation: _CorrectionEnter_1yz81_1 .5s 1 cubic-bezier(.77,0,.175,1)
}

._TextFieldWarningTarget_1yz81_503 {
    position: absolute;
    bottom: calc(100% + 8px);
    pointer-events: none;
    display: flex;
    align-items: flex-end;
    opacity: 0;
    transition-property: opacity,top;
    transition-duration: .2s;
    padding-bottom: 5px;
    z-index: var(--spx-layer-overlay-1);
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    left: -50%
}

._TextFieldWarningTarget_1yz81_503._Below_1yz81_517 {
    bottom: auto;
    bottom: initial;
    top: calc(100% + 8px)
}

._TextFieldWarningTargetVisible_1yz81_523 {
    padding-bottom: 0;
    opacity: 1
}

._TextFieldWarningWrapper_1yz81_528 {
    font-style: italic;
    font-size: .7em;
    -webkit-text-fill-color: initial;
    color: var(--grey-text-colour);
    padding: 5px 10px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,.25)
}

._TextFieldWarningWrapper_1yz81_528 svg {
    margin-right: 5px
}

@keyframes _CorrectionEnter_1yz81_1 {
    0% {
        height: 0;
        opacity: 0
    }

    to {
        height: 26px;
        opacity: 1
    }
}

._TextFieldWrapperCorrection_1yz81_492 svg {
    margin-right: 5px;
    -webkit-text-fill-color: initial;
    color: var(--correct-icon-colour)
}

._CorrectIcon_1yz81_559,._IncorrectIcon_1yz81_560,._MarkingErrorIcon_1yz81_561,._FlagIcon_1yz81_562 {
    z-index: 10;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    border: 2px solid #fff;
    -webkit-text-fill-color: initial;
    color: #fff;
    margin-left: .6em;
    font-size: .9em;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: _IconEnter_1yz81_1 .5s 1 cubic-bezier(.77,0,.175,1)
}

._CorrectIconFloat_1yz81_577 {
    position: absolute;
    top: -.6em;
    right: -.6em;
    margin-left: 0
}

._CorrectIcon_1yz81_559 {
    background: var(--correct-icon-colour)
}

._IncorrectIcon_1yz81_560 {
    background: var(--incorrect-icon-colour)
}

._MarkByPart_1yz81_323 ._CorrectIcon_1yz81_559 {
    background: var(--correct-part-icon-colour);
    top: -.4em;
    right: -.4em
}

._MarkByPart_1yz81_323 ._IncorrectIcon_1yz81_560 {
    background: var(--incorrect-part-icon-colour);
    top: -.4em;
    right: -.4em
}

._MarkingErrorIcon_1yz81_561 {
    background: var(--marking-error-icon-colour);
    font-size: .9em
}

._FlagIcon_1yz81_562 {
    background: #fff;
    -webkit-text-fill-color: initial;
    color: var(--incorrect-option);
    border-color: var(--incorrect-option)
}

._FlagIcon_1yz81_562 svg {
    font-size: .7em
}

._OptionSmallIcon_1yz81_621 {
    width: 1.1em;
    height: 1.1em
}

._OptionSmallIcon_1yz81_621 svg {
    font-size: .6em
}

._OptionSmallIcon_1yz81_621._CorrectIconFloat_1yz81_577 {
    top: -.5em;
    right: -.5em
}

._OptionsSelectAllFeedback_1yz81_635 {
    font-weight: 700;
    -webkit-text-fill-color: initial;
    color: var(--incorrect-option);
    display: flex;
    justify-content: center;
    align-items: center
}

._OptionsSelectAllFeedback_1yz81_635 ._FlagIcon_1yz81_562 {
    margin-right: 4px
}

._OptionsSelectAllFeedback_1yz81_635 span {
    font-size: 80%
}

@keyframes _IconEnter_1yz81_1 {
    0% {
        transform: scale(0);
        opacity: 0
    }

    80% {
        transform: scale(1.1);
        opacity: 1
    }

    to {
        transform: scale(1);
        opacity: 1
    }
}

._TextField_1yz81_358 {
    padding: .5em 0;
    font-size: var(--question-font-size);
    font-family: var(--question-font-family);
    border-radius: var(--border-radius);
    border: 2px solid #cdcdcd;
    box-sizing: border-box;
    max-width: 24em;
    min-width: 14em;
    width: 100%;
    outline: none!important;
    background: #fff;
    transition: box-shadow .2s
}

._TextField_1yz81_358:not(:disabled,:-moz-read-only,:focus):hover {
    cursor: pointer;
    background: #fefefe;
    border-color: #a1abb2
}

._TextField_1yz81_358:not(:disabled,:read-only,:focus):hover {
    cursor: pointer;
    background: #fefefe;
    border-color: #a1abb2
}

._TextFieldNumeric_1yz81_689 {
    min-width: calc(6 * var(--question-font-size) * var(--font-size-multiplier));
    max-width: calc(6 * var(--question-font-size) * var(--font-size-multiplier));
    text-align: center
}

._TextFieldAlgebraic_1yz81_696 {
    min-width: calc(9 * var(--question-font-size) * var(--font-size-multiplier));
    max-width: calc(9 * var(--question-font-size) * var(--font-size-multiplier));
    text-align: center
}

._TextFieldText_1yz81_703 {
    padding: .5em .8em
}

._TextFieldNumeric_1yz81_689:not(._TextFieldCustomPlaceholder_1yz81_707)::-webkit-input-placeholder {
    font-size: .6em
}

._TextFieldNumeric_1yz81_689:not(._TextFieldCustomPlaceholder_1yz81_707)::-moz-placeholder {
    font-size: .6em
}

._TextFieldNumeric_1yz81_689:not(._TextFieldCustomPlaceholder_1yz81_707)::-ms-input-placeholder {
    font-size: .6em
}

._TextFieldNumeric_1yz81_689:not(._TextFieldCustomPlaceholder_1yz81_707)::placeholder {
    font-size: .6em
}

._TextFieldNumericSelected_1yz81_711 {
    z-index: 9;
    position: relative
}

._TextFieldInvalid_1yz81_716:not(:focus) {
    box-shadow: 0 0 0 3px #ffd2d2
}

._TextFieldFocussed_1yz81_720,._TextFieldText_1yz81_703:focus {
    box-shadow: 0 0 0 3px #a5dfff
}

._TextArea_1yz81_354 {
    width: 100%;
    max-width: 500px
}

._Option_1yz81_65 {
    --option-min-width: 5em;
    --option-padding-x: 1em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: .5em var(--option-padding-x);
    min-width: var(--option-min-width);
    border-radius: var(--border-radius);
    border: 2px solid #cdcdcd;
    transform: translateY(0);
    transition: transform .1s ease-out
}

._Option_1yz81_65:active {
    transform: translateY(1px)
}

._Option_1yz81_65:hover {
    background: #efefef;
    cursor: pointer
}

._Option_1yz81_65 img {
    min-width: calc(var(--option-min-width) - (var(--option-padding-x) * 2));
    max-width: max(calc(20vw - (var(--option-padding-x) * 2)),160px);
    width: 100%
}

._OptionSelected_1yz81_760 {
    background: var(--button-colour);
    -webkit-text-fill-color: initial;
    color: #fff;
    border: 2px solid var(--button-colour)
}

._OptionSelected_1yz81_760:hover {
    background: var(--button-colour);
    opacity: .8
}

._OptionDisabled_1yz81_771 {
    pointer-events: none;
    opacity: .9
}

._OptionCorrect_1yz81_776 {
    -webkit-text-fill-color: initial;
    color: #fff;
    background: var(--correct-option);
    border: 2px solid var(--correct-option)
}

._OptionIncorrect_1yz81_782 {
    -webkit-text-fill-color: initial;
    color: #fff;
    background: var(--incorrect-option);
    border: 2px solid var(--incorrect-option)
}

._OptionWasCorrect_1yz81_788 {
    border: 4px solid var(--was-correct-option);
    padding: calc(.5em - 2px) calc(var(--option-padding-x) - 2px)
}

._Image_1yz81_71 {
    border-radius: var(--border-radius);
    filter: var(--question-filter)
}

._Slidey_1yz81_798 ._AnswerTextElement_1yz81_95 {
    white-space: normal;
    display: inline-block
}

._Slidey_1yz81_798 ._AnswerTextElement_1yz81_95 .katex-mathml {
    display: none
}

._Slidey_1yz81_798 ._Image_1yz81_71 {
    width: 100%
}

._ImageWrapper_1yz81_816 {
    min-width: 9.4rem;
    min-height: 2.8rem;
    position: relative
}

._ImageLoadingWrapper_1yz81_822 {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center
}

._ImageLoading_1yz81_822 {
    display: flex;
    align-items: center;
    padding: var(--spx-unit-1) var(--spx-unit-2);
    border-radius: var(--spx-radius-md);
    background-color: rgba(255,255,255,.6)
}

._ImageLoading_1yz81_822>span {
    font-size: var(--spx-font-size-sm);
    margin-left: var(--spx-unit-2)
}

._ImageError_1yz81_846 {
    font-size: var(--spx-font-size-sm);
    -webkit-text-fill-color: initial;
    color: red;
    font-weight: 700
}

._Hidden_1yz81_852 {
    display: none
}

._Brackets_1yz81_856 {
    position: relative;
    padding: 0 20px
}

._Brackets_1yz81_856:before,._Brackets_1yz81_856:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 20px;
    top: 0;
    right: auto;
    bottom: 0;
    left: 0;
    border-radius: 50%
}

._Brackets_1yz81_856:before {
    top: 0;
    right: auto;
    bottom: 0;
    left: 0;
    border-left: 3px solid #808080
}

._Brackets_1yz81_856:after {
    top: 0;
    right: 0;
    bottom: 0;
    left: auto;
    border-right: 3px solid #808080
}

._InlineTextGroup_1yz81_886 {
    display: block;
    line-height: 2em
}

._InlineTextGroup_1yz81_886>div {
    margin-left: 0!important;
    display: inline
}

._InlineTextGroup_1yz81_886>div:not(:last-child) {
    margin-right: var(--question-spacing-small)
}

._InlineTextGroup_1yz81_886>div,._InlineTextGroup_1yz81_886 p,._InlineTextGroup_1yz81_886 ._MarkdownNode_1yz81_278 {
    display: inline
}

._InlineTextGroup_1yz81_886 ._TextFieldWrapper_1yz81_383,._InlineTextGroup_1yz81_886 ._TextFieldComponent_1yz81_358,._InlineTextGroup_1yz81_886 ._InlineSlotWrapper_1yz81_907 {
    display: inline-flex;
    flex-direction: column;
    margin-top: 2px;
    margin-bottom: 2px
}

._InlineTextGroup_1yz81_886 ._TextField_1yz81_358:not(._TextFieldNumeric_1yz81_689) {
    max-width: 10em;
    min-width: 10em;
    padding: 4px 16px;
    margin: 1px
}

._InlineTextGroup_1yz81_886 ._TextElement_1yz81_80 {
    display: inline
}

._InlineTextGroup_1yz81_886 ._TextElement_1yz81_80>p {
    display: inline
}

._InlineTextGroup_1yz81_886 ._TextFieldNumeric_1yz81_689,._InlineTextGroup_1yz81_886 ._InlineSlotWrapper_1yz81_907 {
    line-height: var(--question-line-height)
}

._InlineTextGroup_1yz81_886._CardSlot_1yz81_934 {
    display: inline
}

._InlineTextGroup_1yz81_886 ._CardContent_1yz81_938,._InlineTextGroup_1yz81_886 ._CardContentClickable_1yz81_939 {
    display: inline-block
}

._InlineSlotOutline_1yz81_944 {
    border-radius: var(--border-radius);
    position: absolute;
    display: inline-block;
    pointer-events: none;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0
}

._MatrixGroup_1yz81_956 {
    display: grid;
    gap: var(--question-spacing-small)
}

._MatrixGroup_1yz81_956 ._TextField_1yz81_358 {
    width: 10px
}

._Vinculum_1yz81_967 {
    height: 2px;
    background: var(--grey-text-colour);
    width: 100%
}

._CardContent_1yz81_938 {
    padding: .5em;
    border-radius: var(--border-radius);
    border: 2px solid #cdcdcd;
    outline: none;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    box-sizing: border-box;
    position: relative;
    touch-action: none;
    flex: 0 1 auto;
    min-width: 2em;
    max-width: 100vw
}

._Slidey_1yz81_798 ._FractionSlotGroup_1yz81_993 {
    margin-top: var(--spx-unit-20)
}

._Slot_1yz81_997 {
    position: relative;
    border-radius: var(--border-radius);
    min-width: var(--slot-size);
    box-sizing: border-box;
    background-color: var(--colours-light-background)
}

._CardContentSelected_1yz81_1007 {
    background: #dbefff
}

._CardContentClickable_1yz81_939 {
    cursor: pointer
}

._CardContentDraggable_1yz81_1015 {
    touch-action: none;
    cursor: -webkit-grab;
    cursor: grab;
    height: 100%
}

._CardContentDraggable_1yz81_1015:active,._CardContentDraggable_1yz81_1015[aria-pressed=true] {
    cursor: -webkit-grabbing;
    cursor: grabbing;
    z-index: 4;
    box-shadow: 0 2px 8px rgba(0,0,0,.25)
}

._CardContentLocked_1yz81_1028 {
    background: #fff;
    border-color: transparent;
    pointer-events: none
}

._CardContentReadonly_1yz81_1034 {
    pointer-events: none
}

._CardContentEmpty_1yz81_1038 {
    border: 3px dashed #bdbdbd
}

._CardContentEmpty_1yz81_1038._CardContent_1yz81_938 {
    padding: calc(.5em - 1px)
}

._CardContentEmpty_1yz81_1038 ._EmptySlotContent_1yz81_1045 {
    visibility: hidden;
    min-width: var(--slot-size)
}

._CardSlot_1yz81_934 {
    display: inline-block;
    position: relative;
    border-radius: var(--border-radius)
}

._CardSlot_1yz81_934 .katex {
    line-height: 1
}

._CardSlot_1yz81_934 ._InlineSlotFocus_1yz81_1063,._Slot_1yz81_997 ._InlineSlotFocus_1yz81_1063 {
    transition: box-shadow .2s;
    box-shadow: 0 0 #a5dfff
}

._CardSlotActive_1yz81_1069 ._InlineSlotFocus_1yz81_1063,._SlotActive_1yz81_1070 ._InlineSlotFocus_1yz81_1063 {
    box-shadow: 0 0 0 4px #a5dfff
}

._CardSlotClickable_1yz81_1074,._SlotClickable_1yz81_1075 {
    cursor: pointer
}

._CardContentHidden_1yz81_1079 {
    pointer-events: none;
    visibility: hidden
}

._Tile_1yz81_1084 {
    outline: none
}

._Tile_1yz81_1084:hover {
    cursor: pointer
}

._Tile_1yz81_1084:after {
    border: 3px dashed #bdbdbd
}

._Tile_1yz81_1084:hover:after {
    background: #efefef
}

._TileSelected_1yz81_1102 {
    box-shadow: 0 2px 8px rgba(0,0,0,.25)
}

._HorizontalSwipeEntryExit_1yz81_1106 {
    overflow: hidden
}

._VerticalSwipeEntryExit_1yz81_1110 {
    width: 100%;
    max-width: 100%
}

._KeypadBelow_1yz81_1115,._SlotsBelow_1yz81_1116 {
    position: relative;
    display: flex;
    width: 100%
}

._KeypadFloating_1yz81_1122,._SlotsFloating_1yz81_1123 {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    z-index: var(--spx-layer-modal-1)
}

._InlineSlot_1yz81_907 {
    position: relative
}

._InlineSlotOptions_1yz81_1135 {
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,.25);
    border-radius: var(--border-radius);
    display: flex;
    padding: 0 10px 10px 0;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 8px
}

._InlineSlotOptions_1yz81_1135._Floating_1yz81_1147 {
    margin-top: 5px
}

._SlotOptionsContainer_1yz81_1152 {
    max-width: 100%
}

._SlotOptionsContainer_1yz81_1152._InlineSlotOptionsVertical_1yz81_1155 {
    position: absolute;
    left: 8px
}

._InlineSlotOptions_1yz81_1135>* {
    min-height: 40px;
    margin: 10px 0 0 10px
}

._ImageContainer_1yz81_71 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: var(--border-radius);
    box-sizing: border-box
}

._ImageContainer_1yz81_71 img {
    max-width: 100%;
    max-height: 500px
}

@media (max-height: 800px) {
    ._ImageContainer_1yz81_71 img {
        max-height:300px
    }
}

@media (max-width: 480px) {
    ._ImageContainer_1yz81_71 img {
        max-width:100%
    }
}

._ZoomableImageContainer_1yz81_1187 {
    display: flex;
    flex-direction: column;
    align-items: flex-start
}

._QuestionCentered_1yz81_56 ._ZoomableImageContainer_1yz81_1187,._Option_1yz81_65 ._ZoomableImageContainer_1yz81_1187 {
    align-items: center
}

._ZoomableImageContainer_1yz81_1187>:not(:last-child) {
    margin-bottom: var(--spx-unit-2)
}

._ZoomableImageContainer_1yz81_1187>button>div:first-of-type {
    margin-right: var(--spx-unit-2)
}

._MarkingResults_1yz81_1206 {
    padding-top: var(--spx-unit-2)
}

._MarkingResultSummary_1yz81_1210 {
    font-weight: 700;
    margin-top: 5px;
    margin-bottom: 5px
}

._MarkingResultDetail_1yz81_1216 {
    padding: 5px 0;
    display: flex
}

._MarkingResultDetail_1yz81_1216 ._IncorrectIcon_1yz81_560,._MarkingResultDetail_1yz81_1216 ._CorrectIcon_1yz81_559,._MarkingResultDetail_1yz81_1216 ._MarkingErrorIcon_1yz81_561 {
    margin-left: 0
}

._MarkingResultFeedback_1yz81_1227 {
    flex: 1 1;
    margin-left: 15px;
    opacity: .8
}

._MarkingResultErrorContainer_1yz81_1233 {
    align-items: center
}

._MarkingResultError_1yz81_1233 {
    flex: 1 1;
    margin-left: 15px;
    font-size: .9rem;
    line-height: 1.3em;
    font-weight: 700
}

._MarkingResultsV2_1yz81_1245 {
    background-color: #edf2f7
}

._MarkingResultsV2_1yz81_1245 ._IncorrectIcon_1yz81_560 {
    background: #ed8936
}

._MarkingResultsV2_1yz81_1245 ._CorrectIcon_1yz81_559,._MarkingResultsV2_1yz81_1245 ._IncorrectIcon_1yz81_560,._MarkingResultsV2_1yz81_1245 ._MarkingErrorIcon_1yz81_561 {
    border: 0
}

._MarkingResultsV2_1yz81_1245 ._MarkingResultSummary_1yz81_1210 {
    background-color: #e2e8f0;
    display: flex;
    align-items: center;
    padding: 5px 15px
}

._MarkingResultsV2_1yz81_1245 ._MarkingResultDetail_1yz81_1216 {
    flex-direction: column;
    padding: 5px 30px
}

._MarkingResultsV2_1yz81_1245 ._MarkingResultDetail_1yz81_1216 h3 {
    font-weight: 700;
    margin-bottom: 10px
}

._MarkingResultsV2_1yz81_1245 ._MarkingResultFeedback_1yz81_1227 {
    display: flex;
    margin-left: 0;
    margin-bottom: 15px
}

._MarkingResultsV2_1yz81_1245 ._MarkingResultFeedback_1yz81_1227 ._Icon_1yz81_1282 {
    flex: 0 0 auto;
    width: 1.3em;
    margin-right: 10px
}

._MarkingResultsV2_1yz81_1245 ._MarkingResultSummary_1yz81_1210._Correct_1yz81_559 {
    background-color: var(--correct-icon-colour);
    -webkit-text-fill-color: initial;
    color: #fff
}

._MarkingResultsV2_1yz81_1245 ._MarkingResultSummary_1yz81_1210 ._Icon_1yz81_1282 {
    margin-right: 5px
}

._MarkingResultsV2_1yz81_1245 ._MarkingResultErrorContainer_1yz81_1233 {
    flex-direction: row
}

._SummaryFeedback_1yz81_1301 {
    display: flex;
    align-items: center;
    background-color: #e2e8f0;
    padding: 15px 5px;
    font-weight: 700
}

._SummaryFeedback_1yz81_1301._Correct_1yz81_559 {
    background-color: var(--correct-icon-colour);
    -webkit-text-fill-color: initial;
    color: #fff
}

._SummaryFeedback_1yz81_1301>div:first-child {
    margin-right: 10px
}

._ModelAnswerIcon_1yz81_1318 {
    -webkit-text-fill-color: initial;
    color: #276cc3;
    width: 1.5em;
    height: 1.5em;
    font-size: 1.2em;
    text-align: center;
    margin-left: -4px;
    animation: _IconEnter_1yz81_1 .5s 1 cubic-bezier(.77,0,.175,1)
}

._ReportButton_1yz81_1328,._ProblemReported_1yz81_1329 {
    margin-left: 30px;
    font-weight: 400;
    -webkit-text-fill-color: initial;
    color: var(--grey-text-colour)
}

._ReportButton_1yz81_1328 {
    text-decoration: underline
}

._ReportButton_1yz81_1328:hover {
    cursor: pointer;
    text-decoration: none
}

._RightImage_1yz81_1344._Active_1yz81_1344 {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: flex-end;
    justify-content: space-between
}

._RightImage_1yz81_1344._Active_1yz81_1344>*:first-child {
    max-width: calc(50% - 20px);
    min-width: 30%;
    margin-left: var(--question-spacing-large);
    display: flex;
    justify-content: center
}

._RightImage_1yz81_1344._Active_1yz81_1344>*:first-child ._Image_1yz81_71 {
    max-width: 100%;
    max-height: none
}

._RightImage_1yz81_1344._Active_1yz81_1344>*:last-child {
    margin: 0;
    flex: 1 1 50%;
    max-width: 70%
}

._RightImage_1yz81_1344:not(._Active_1yz81_1344)>*:first-child {
    margin-bottom: var(--question-spacing)
}

._SpeechBox_1yz81_1375 {
    padding: var(--question-spacing-small) var(--question-spacing);
    background: #f8f9fc;
    margin-bottom: var(--question-spacing-small);
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.05) inset;
    font-size: .9em
}

._SpeechBoxSpeaker_1yz81_1384 {
    font-weight: 700;
    opacity: .8
}

._SpeechBoxTyping_1yz81_1389 {
    float: left;
    opacity: .5;
    font-size: .8em
}

._TemplatedContent_1yz81_1395._GridFill_1yz81_1395._Marked_1yz81_1395 {
    padding-right: 26px
}

._TemplatedContent_1yz81_1395 th:empty {
    background-color: inherit;
    border: 0
}

._TemplatedContent_1yz81_1395 table {
    border-style: solid
}

._TemplatedContent_1yz81_1395._GridFill_1yz81_1395 table tr th {
    text-align: center
}

._TemplatedContent_1yz81_1395._GridFill_1yz81_1395 table tr th:first-child,._TemplatedContent_1yz81_1395._GridFill_1yz81_1395 table tr td:first-child {
    text-align: left
}

._TemplatedContent_1yz81_1395 table tr:has(._CheckboxOptionWrapper_1yz81_1424 ._CorrectIcon_1yz81_559) td:first-child {
    -webkit-text-fill-color: initial;
    color: var(--correct-icon-colour)
}

._TemplatedContent_1yz81_1395 table tr:has(._CheckboxOptionWrapper_1yz81_1424 ._IncorrectIcon_1yz81_560) td:first-child {
    -webkit-text-fill-color: initial;
    color: var(--incorrect-icon-colour)
}

._CheckboxOptionResultIcon_1yz81_1432 {
    right: -2.5em;
    top: .6em
}

._TemplatedContent_1yz81_1395 td:not(:last-child) ._CheckboxOptionWrapper_1yz81_1424 ._CheckboxOptionResultIcon_1yz81_1432 {
    display: none
}

._CheckboxOptionWrapper_1yz81_1424 {
    --option-min-width: 5em;
    --option-padding-x: .8em;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(0);
    transition: transform .1s ease-out
}

._CheckboxOption_1yz81_1424 {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: .8em var(--option-padding-x);
    cursor: pointer
}

._CheckboxOptionDisabled_1yz81_1460 {
    cursor: inherit
}

._CheckboxCheckIcon_1yz81_1464 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    font-size: .8em
}

._CheckboxCheckBox_1yz81_1469 button {
    line-height: 1em;
    border-color: var(--button-colour)
}

._CheckboxCheckBox_1yz81_1469 button[data-state=checked] {
    background-color: var(--button-colour)
}

._CheckboxCheckBox_1yz81_1469._Correct_1yz81_559 button[data-state=checked] {
    border-color: var(--correct-icon-colour);
    background: var(--correct-icon-colour)
}

._CheckboxCheckBox_1yz81_1469._Incorrect_1yz81_560 button[data-state=checked] {
    border-color: var(--incorrect-icon-colour);
    background: var(--incorrect-icon-colour)
}

._Question_1yz81_5:not(._QuestionCentered_1yz81_56),._Question_1yz81_5:not(._QuestionCentered_1yz81_56) ._PartGroup_1yz81_181 {
    width: 100%
}

._Question_1yz81_5:not(._QuestionCentered_1yz81_56) ._StackVertical_1yz81_226 {
    align-items: stretch
}

._Question_1yz81_5:not(._QuestionCentered_1yz81_56) ._AnswerPart_1yz81_317 {
    padding: 0 0 var(--question-spacing-small) 0
}

._Question_1yz81_5:not(._QuestionCentered_1yz81_56) ._AnswerPart_1yz81_317>._StackHorizontal_1yz81_70>div:last-child {
    flex: 1 1
}

._Question_1yz81_5:not(._QuestionCentered_1yz81_56) ._FractionAnswerContent_1yz81_1506 {
    flex: 0 1!important
}

._FractionAnswerContent_1yz81_1506,._MatrixGroup_1yz81_956,._VectorGroup_1yz81_881 {
    margin-top: 12px;
    margin-bottom: 12px
}

._HintWrapper_1yz81_1518 {
    display: flex;
    flex-direction: column
}

._HintInner_1yz81_1523 {
    display: flex;
    flex-direction: row
}

html ._ReactQueryDevtools_1yz81_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._HintIcon_1bwzh_1 {
    font-size: var(--spx-font-size-4xl);
    position: relative;
    top: 5px;
    right: -10px;
    align-self: flex-start;
    transform: rotate(55deg);
    margin-top: 0;
    height: 10px;
    transition: opacity .3s ease
}

._ResetButtonContainer_1bwzh_13 {
    margin-top: 0!important;
    height: calc(var(--question-spacing) + 10px);
    transition: opacity .3s ease;
    opacity: 1
}

._ResetButton_1bwzh_13 {
    font-size: var(--spx-font-size-xl);
    text-decoration: underline;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-link);
    cursor: pointer;
    font-weight: inherit
}

._Hidden_1bwzh_28 {
    opacity: 0
}

._HintContainer_1bwzh_32 {
    margin: auto;
    overflow: hidden
}

._Hint_1bwzh_1 {
    font-size: var(--spx-font-size-xl);
    line-height: 1em;
    border-radius: var(--spx-radius-sm);
    background-color: var(--colours-hint);
    padding: var(--spx-unit-2)
}

._HintModalLink_1bwzh_45 {
    cursor: pointer;
    white-space: nowrap;
    display: inline-flex
}

._HintModalLink_1bwzh_45 svg {
    -webkit-margin-start: var(--spx-unit-2);
    margin-inline-start:var(--spx-unit-2)}

@media (max-width: 480px) {
    ._HintModalLink_1bwzh_45 {
        white-space:normal
    }
}

._Text_1bwzh_59 {
    font-weight: 700;
    line-height: 1.6em
}

._HintCaption_1bwzh_64 {
    font-size: var(--spx-font-size-xl);
    -webkit-text-fill-color: initial;
    color: #e19435;
    font-weight: 700
}

._HintPrompt_1bwzh_70 {
    margin-left: auto;
    margin-right: auto;
    margin-top: var(--spx-unit-2)
}

html ._ReactQueryDevtools_1bwzh_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

:where(select) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E") no-repeat right center / 1em;
    border-radius: 0;
    padding-right: 1em
}

._KeypadContainer_ruch7_4 {
    position: relative
}

._KeypadContainer_ruch7_4._Floating_ruch7_7 {
    padding-bottom: 10px
}

._Keypad_ruch7_4 {
    transition-property: opacity,left;
    transition-duration: .2s;
    transition-timing-function: var(--spx-ease-1)
}

._Keypad_ruch7_4._Floating_ruch7_7 {
    padding: 10px;
    border-radius: var(--spx-radius-md);
    background: var(--colours-plain-background);
    margin-top: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,.25)
}

._Button_ruch7_26 {
    border: 0;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: var(--spx-radius-md);
    background: var(--colours-regular-background);
    box-shadow: 0 2px 0 0 var(--colours-keypad-shadow);
    display: flex;
    align-items: center;
    justify-content: center;
    transition-property: background-color,colour,top,box-shadow;
    transition-duration: .2s;
    transition-timing-function: var(--spx-ease-5);
    top: 0;
    font-weight: 700
}

._BackspaceIcon_ruch7_43 {
    height: .75em;
    width: 1.4375em;
    stroke: var(--colours-keypad-backspace)
}

._Button_ruch7_26:hover:not(._Disabled_ruch7_49) {
    cursor: pointer;
    opacity: .9
}

._Disabled_ruch7_49 {
    -webkit-text-fill-color: initial;
    color: var(--colours-disabled-text);
    background-color: var(--colours-disabled);
    opacity: .5;
    box-shadow: none
}

._Disabled_ruch7_49 svg path {
    stroke: var(--colours-disabled-text)
}

._Readonly_ruch7_65 {
    opacity: .7;
    pointer-events: none
}

._ButtonPress_ruch7_70 {
    box-shadow: 0 0 0 0 var(--colours-keypad-shadow);
    top: 2px
}

html ._ReactQueryDevtools_ruch7_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

:where(select) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E") no-repeat right center / 1em;
    border-radius: 0;
    padding-right: 1em
}

._ButtonsContainer_1a1la_4 {
    display: grid;
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable);
    grid-template: "seven eight nine back" 1fr "four five six minus" 1fr "one two three plus" 1fr "zero point times equals" 1fr "squared cubed openbracket closebracket" 1fr "x y z pi" 1fr "lt le gt ge" 1fr / 1fr 1fr 1fr 1fr;
    width: 13.2em;
    height: calc(8.7em + 2px);
    gap: .4em;
    padding-bottom: 2px
}

._ButtonSecondary_1a1la_29 {
    -webkit-text-fill-color: initial;
    color: #257bde;
    background: #bedffd
}

._ButtonTertiary_1a1la_34 {
    -webkit-text-fill-color: initial;
    color: #fff;
    background: #67aff2
}

._ButtonTertiarySymbol_1a1la_39 {
    font-size: 25px
}

html ._ReactQueryDevtools_1a1la_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

:where(select) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E") no-repeat right center / 1em;
    border-radius: 0;
    padding-right: 1em
}

._ButtonsContainer_wrymw_4 {
    display: grid;
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable);
    grid-template: "seven eight nine back" 1fr "four five six minus" 1fr "one two three enter" 1fr "zero zero point enter" 1fr / 1fr 1fr 1fr 1fr;
    width: 13.2em;
    height: calc(6.9em + 2px);
    gap: .4em;
    padding-bottom: 2px
}

html ._ReactQueryDevtools_wrymw_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._LinkBoxesWrapper_1nexm_1 {
    --lb-border-colour: #cdcdcd;
    --lb-line-colour: #000;
    --lb-correct-colour: var(--correct-icon-colour);
    --lb-incorrect-colour: var(--incorrect-icon-colour);
    position: relative
}

._LinkBoxesWrapper_1nexm_1._ReadOnly_1nexm_10 {
    --lb-line-colour: #777
}

._LinkBoxesWrapper_1nexm_1 table th {
    border: none;
    background-color: inherit;
    padding: 0;
    padding-bottom: var(--question-spacing)
}

._LinkBoxesWrapper_1nexm_1 table td {
    border: none;
    padding: 0
}

._MiddleSpacing_1nexm_26 {
    min-width: 40px
}

@media (min-width: 360px) {
    ._MiddleSpacing_1nexm_26 {
        width:100px
    }
}

@media (min-width: 480px) {
    ._MiddleSpacing_1nexm_26 {
        width:150px
    }
}

._LinkBoxesBox_1nexm_38 {
    position: relative;
    border: 2px solid var(--lb-border-colour);
    border-radius: var(--border-radius);
    padding: 10px 15px;
    text-align: center;
    touch-action: none;
    background-color: #fff;
    z-index: 1;
    display: flex;
    justify-content: center
}

@media (min-width: 360px) {
    ._LinkBoxesBox_1nexm_38 {
        min-width:100px
    }
}

@media (min-width: 480px) {
    ._LinkBoxesBox_1nexm_38 {
        min-width:150px
    }
}

@media (min-width: 768px) {
    ._LinkBoxesBox_1nexm_38 {
        min-width:200px
    }
}

._LinkBoxesWrapper_1nexm_1:not(._ReadOnly_1nexm_10) ._LinkBoxesBox_1nexm_38 {
    cursor: pointer
}

._LinkBoxesBox_1nexm_38._Selected_1nexm_67 {
    background-color: #dbefff
}

._LinkBoxesBox_1nexm_38 ._DotContainer_1nexm_71 {
    --dot-size: 11px;
    --click-padding: 4px;
    --dot-outer-size: calc(var(--dot-size) + var(--click-padding) * 2);
    position: absolute;
    top: calc((50% - (var(--dot-outer-size) / 2)));
    padding: var(--click-padding);
    border-radius: 9999px;
    background-color: transparent
}

._DotContainer_1nexm_71._Left_1nexm_83 {
    right: calc((var(--dot-outer-size) / -2) - 2px)
}

._DotContainer_1nexm_71._Right_1nexm_87 {
    left: calc((var(--dot-outer-size) / -2) - 2px)
}

._LinkBoxesWrapper_1nexm_1:not(._ReadOnly_1nexm_10) ._Linked_1nexm_91 ._DotContainer_1nexm_71 {
    cursor: -webkit-grab;
    cursor: grab
}

._LinkBoxesBox_1nexm_38 ._Dot_1nexm_71 {
    width: var(--dot-size);
    height: var(--dot-size);
    border-radius: 9999px;
    border: 2px solid var(--lb-line-colour);
    background-color: #fff
}

._Selected_1nexm_67 ._Dot_1nexm_71 {
    background-color: #dbefff
}

._Linked_1nexm_91 ._Dot_1nexm_71 {
    background-color: var(--lb-line-colour)
}

._LinkBoxesBox_1nexm_38._Linked_1nexm_91 {
    border-color: #000
}

._LinkBoxesBox_1nexm_38._DisableHover_1nexm_115 {
    pointer-events: none
}

._LinkBoxesWrapper_1nexm_1:not(._ReadOnly_1nexm_10) ._LinkBoxesBox_1nexm_38:hover ._Dot_1nexm_71>div {
    background-color: var(--lb-line-colour)
}

._LinkBoxesBox_1nexm_38._Correct_1nexm_123 {
    --lb-line-colour: var(--lb-correct-colour);
    border-color: var(--lb-correct-colour);
    background-color: var(--correct-bg-colour)
}

._LinkBoxesBox_1nexm_38._Incorrect_1nexm_130 {
    --lb-line-colour: var(--lb-incorrect-colour);
    border-color: var(--lb-incorrect-colour);
    background-color: var(--incorrect-bg-colour)
}

._LinkBoxesBox_1nexm_38 img {
    max-width: 150px;
    max-height: 150px
}

._LinesContainer_1nexm_142 {
    position: relative;
    padding-bottom: 16px
}

._LinesSVG_1nexm_147 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: all
}

._LinkBoxesWrapper_1nexm_1:not(._ReadOnly_1nexm_10) ._LinesSVG_1nexm_147 line {
    cursor: pointer
}

._ButtonContainer_1nexm_160 {
    display: flex;
    justify-content: center
}

._Button_1nexm_160 {
    position: relative;
    text-decoration: underline;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    padding: 10px;
    z-index: 1
}

._ReadOnly_1nexm_10 ._Button_1nexm_160 {
    opacity: 0
}

._Button_1nexm_160:disabled {
    -webkit-text-fill-color: initial;
    color: #666;
    display: none
}

._Button_1nexm_160:enabled:hover {
    opacity: .8
}

html ._ReactQueryDevtools_1nexm_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_1u0ov_1 {
    background: #f7fafc;
    border-radius: var(--border-radius);
    width: 100%;
    padding: 15px;
    border: 1px solid #e2e8f0;
    transition: all .2s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start
}

@media (max-width: 768px) {
    ._Container_1u0ov_1 {
        flex-direction:column
    }
}

._ContainerComplete_1u0ov_18 {
    box-shadow: 0 0 0 2px var(--correct-bg-colour);
    border: 1px solid #f7fafc
}

._Controls_1u0ov_23 {
    display: flex;
    align-items: center
}

._TrackContainer_1u0ov_28 {
    width: 100%;
    margin-top: 8px
}

._Track_1u0ov_28 {
    width: 100%;
    height: 6px;
    background: #e2e8f0;
    position: relative;
    border-radius: 2px;
    overflow: hidden
}

._TrackReached_1u0ov_42 {
    background: #cbd5e0;
    position: absolute;
    top: 0;
    right: auto;
    bottom: 0;
    left: 0
}

._TrackCurrent_1u0ov_48 {
    background: #2b6cb0;
    position: absolute;
    top: 0;
    right: auto;
    bottom: 0;
    left: 0
}

._ContainerComplete_1u0ov_18 ._TrackCurrent_1u0ov_48 {
    background: var(--correct-icon-colour)
}

._PlayButton_1u0ov_58 {
    width: 50px;
    height: 50px;
    font-size: 20px
}

._RewindButton_1u0ov_64 {
    height: 35px;
    width: 35px;
    font-size: 15px
}

._ButtonIcon_1u0ov_70 {
    display: flex;
    align-items: center;
    justify-content: center
}

._Container_1u0ov_1 ._ModeSelectButton_1u0ov_76 {
    width: 140px;
    border-radius: var(--spx-radius-lg)
}

@media (max-width: 360px) {
    ._Container_1u0ov_1 ._ModeSelectButton_1u0ov_76 {
        width:115px;
        font-size: var(--spx-font-size-sm);
        margin-right: 0
    }
}

._Container_1u0ov_1 button {
    margin-right: 10px;
    border-radius: 50%;
    transition: opacity .1s,background .2s
}

._ContainerComplete_1u0ov_18 ._PlayButton_1u0ov_58,._ContainerComplete_1u0ov_18 ._RewindButton_1u0ov_64 {
    background: var(--correct-icon-colour)
}

._Subtitles_1u0ov_100 {
    margin-top: 6px;
    font-size: var(--spx-font-size-lg)
}

._DropdownMenuItem_1u0ov_105 {
    font-size: var(--spx-font-size-base);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    display: flex;
    align-items: center;
    padding: var(--spx-unit-2) var(--spx-unit-5);
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none
}

._DropdownMenuItem_1u0ov_105:hover {
    background-color: var(--colours-nav-bar-hover);
    cursor: pointer
}

._DropdownMenuItemIcon_1u0ov_121 {
    margin-right: var(--spx-unit-3);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-link)
}

._DropdownMenuContent_1u0ov_126 {
    min-width: 200px;
    background-color: var(--colours-nav-bar);
    border-radius: 0 0 0 var(--spx-radius-sm);
    padding: var(--spx-unit-2) 0;
    box-shadow: var(--spx-shadow-lg);
    animation-duration: .4s;
    animation-timing-function: cubic-bezier(.16,1,.3,1);
    will-change: transform,opacity;
    z-index: 2
}

._ErrorLoading_1u0ov_138 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-warning);
    font-size: var(--spx-font-size-lg)
}

html ._ReactQueryDevtools_1u0ov_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._SortingListElementGrid_l7o5e_1 {
    --sle-border-colour: #cdcdcd;
    --sle-border-colour-locked: #cdcdcd4c;
    --sle-interaction-colour: #285e61;
    --sle-dragging-colour: #dbefff;
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: 1fr;
    gap: 8px;
    min-width: min(100%,600px)
}

._SortingListElementGrid_l7o5e_1._WithLabels_l7o5e_14 {
    grid-template-columns: auto 1fr
}

._SortingListElementCard_l7o5e_18 {
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--sle-border-colour);
    height: 100%;
    width: 100%;
    position: relative;
    background-color: #fff;
    scroll-margin: 16px
}

._SortingListElementCard_l7o5e_18._Locked_l7o5e_30 {
    border-color: var(--sle-border-colour-locked)
}

._SortingListElementCard_l7o5e_18 ._DragHandle_l7o5e_34 {
    display: flex;
    align-items: center;
    flex: 1 1;
    height: 100%;
    touch-action: none;
    z-index: 1
}

._SortingListElementCard_l7o5e_18 ._Draggable_l7o5e_43 {
    cursor: -webkit-grab;
    cursor: grab
}

._SortingListElementCard_l7o5e_18._ReadOnly_l7o5e_47 ._Draggable_l7o5e_43 {
    cursor: default
}

._SortingListElementCard_l7o5e_18._Dragging_l7o5e_51 {
    background-color: var(--sle-dragging-colour);
    border-color: var(--sle-dragging-colour);
    box-shadow: 0 0 10px rgba(0,0,0,.15)
}

._SortingListElementCard_l7o5e_18._Dragging_l7o5e_51 ._Draggable_l7o5e_43 {
    cursor: -webkit-grabbing;
    cursor: grabbing
}

._SortingListElementCard_l7o5e_18 ._Handle_l7o5e_61 {
    margin-left: 16px;
    -webkit-text-fill-color: initial;
    color: var(--sle-interaction-colour)
}

._SortingListElementCard_l7o5e_18._Locked_l7o5e_30 ._Handle_l7o5e_61,._SortingListElementCard_l7o5e_18._ReadOnly_l7o5e_47 ._Handle_l7o5e_61 {
    opacity: .3
}

._SortingListElementCard_l7o5e_18 ._Content_l7o5e_74 {
    flex: 1 1;
    padding: 8px 16px
}

._SortingListElementCard_l7o5e_18 ._ButtonsContainer_l7o5e_79 {
    display: flex;
    flex-direction: column;
    border-left: 1px solid var(--sle-border-colour);
    height: 100%
}

._SortingListElementCard_l7o5e_18._Locked_l7o5e_30 ._ButtonsContainer_l7o5e_79 {
    border-color: var(--sle-border-colour-locked)
}

._SortingListElementCard_l7o5e_18._Dragging_l7o5e_51 ._ButtonsContainer_l7o5e_79 {
    border-color: #fff
}

._SortingListElementCard_l7o5e_18 ._ButtonsContainer_l7o5e_79 button {
    width: 36px;
    flex: 1 1;
    font-size: 65%;
    -webkit-text-fill-color: initial;
    color: var(--sle-interaction-colour)
}

._SortingListElementCard_l7o5e_18 ._ButtonsContainer_l7o5e_79 button:disabled {
    cursor: default
}

._SortingListElementCard_l7o5e_18 ._ButtonsContainer_l7o5e_79 button:first-child {
    border-bottom: 1px solid var(--sle-border-colour);
    border-top-right-radius: 8px
}

._SortingListElementCard_l7o5e_18 ._ButtonsContainer_l7o5e_79 button:last-child {
    border-bottom-right-radius: 8px
}

._SortingListElementCard_l7o5e_18._Locked_l7o5e_30 ._ButtonsContainer_l7o5e_79 button:first-child {
    border-color: var(--sle-border-colour-locked)
}

@media (hover: hover) {
    ._SortingListElementCard_l7o5e_18 ._ButtonsContainer_l7o5e_79 button:hover:enabled {
        background-color:#e6fffa
    }
}

._SortingListElementCard_l7o5e_18 ._ButtonsContainer_l7o5e_79 button:disabled svg {
    opacity: .3
}

._SortingListElementCard_l7o5e_18 ._ButtonsContainer_l7o5e_79 button div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6.5px 0
}

._SortingListElementCard_l7o5e_18._Dragging_l7o5e_51 ._ButtonsContainer_l7o5e_79 button:first-child {
    border-color: #fff
}

._SortingListElementGrid_l7o5e_1 ._RowLabel_l7o5e_139 {
    display: flex;
    align-items: center;
    font-weight: 700
}

._SortingListElementGrid_l7o5e_1 ._FullHeightLabel_l7o5e_145 {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    justify-content: space-between;
    align-items: center
}

._SortingListElementGrid_l7o5e_1 ._DownArrow_l7o5e_153 {
    display: flex;
    flex-direction: column;
    flex: 1 1;
    align-items: center;
    margin: 16px 0
}

._SortingListElementGrid_l7o5e_1 ._DownTriangle_l7o5e_161 {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 6px 0;
    border-color: #000 transparent transparent
}

._SortingListElementGrid_l7o5e_1 ._Line_l7o5e_169 {
    width: 0;
    border: 1px solid #000;
    flex: 1 1
}

._SortingListElementCard_l7o5e_18 ._MarkIcon_l7o5e_175 {
    font-size: 14px
}

html ._ReactQueryDevtools_l7o5e_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._QuestionContainer_ypayp_1 {
    flex: 1 1 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: auto auto var(--spx-unit-4) auto;
    background-color: var(--colours-question-background);
    border-radius: var(--spx-radius-lg);
    max-width: 1280px;
    width: 100%;
    height: calc(100% - var(--spx-unit-8));
    box-shadow: var(--spx-shadow-lg)
}

@media (max-width: 1440px) {
    ._QuestionContainer_ypayp_1 {
        max-width:960px
    }
}

@media (max-width: 1024px),(max-height: 700px) {
    ._QuestionContainer_ypayp_1 {
        margin:0 auto;
        box-shadow: none
    }
}

._QuestionScrollableContent_ypayp_24 {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
    overflow-x: hidden;
    scrollbar-gutter: stable both-edges;
    padding: var(--spx-unit-2) var(--spx-unit-2) 0 var(--spx-unit-2)
}

@media (max-width: 1024px),(max-height: 700px) {
    ._QuestionScrollableContent_ypayp_24 {
        padding:0 var(--spx-unit-10)
    }
}

@media (max-width: 768px) {
    ._QuestionScrollableContent_ypayp_24 {
        padding:0 var(--spx-unit-5)
    }
}

@media (max-width: 480px) {
    ._QuestionScrollableContent_ypayp_24 {
        padding:0 var(--spx-unit-2)
    }
}

._QuestionWrapper_ypayp_46 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 auto;
    padding: 0 var(--spx-unit-6)
}

@media (max-width: 1024px) {
    ._QuestionWrapper_ypayp_46 {
        padding:0
    }
}

._SubmitErrorContent_ypayp_58 {
    padding: var(--spx-unit-4);
    border-width: var(--spx-border-size-2);
    border-color: var(--colours-incorrect);
    outline-color: var(--colours-incorrect);
    border-style: solid;
    border-radius: var(--spx-radius-md);
    margin: var(--spx-unit-8) var(--spx-unit-4);
    background-color: var(--colours-plain-background);
    max-width: calc(100vw - var(--spx-unit-4) * 2)
}

@media (max-width: 480px) {
    ._SubmitErrorContent_ypayp_58 {
        font-size:var(--spx-font-size-sm);
        padding: var(--spx-unit-2)
    }
}

._SubmitErrorContent_ypayp_58 ._ErrorMessage_ypayp_74 {
    margin: 0;
    -webkit-text-fill-color: initial;
    color: var(--colours-incorrect)
}

._SubmitErrorContent_ypayp_58 ._RefreshLink_ypayp_79 {
    text-decoration: underline;
    cursor: pointer;
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable)
}

._PreviousButton_ypayp_86 {
    white-space: nowrap
}

._VideoContainer_ypayp_90 {
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    background: var(--colours-plain-background-inverted)
}

._HintContentContainer_ypayp_98 {
    display: flex;
    justify-content: center;
    height: 100%;
    width: auto;
    overflow: hidden
}

._HintContentContainer_ypayp_98 img {
    max-width: 100%;
    max-height: 100%;
    -o-object-fit: contain;
    object-fit: contain
}

._HintVideoContainer_ypayp_112 {
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    background: var(--colours-plain-background-inverted)
}

._VideoCloseButton_ypayp_120 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spx-unit-3) 0
}

@media (max-height: 400px) {
    ._VideoCloseButton_ypayp_120 {
        display:none
    }
}

._VideoCloseX_ypayp_131 {
    display: none
}

@media (max-height: 400px) {
    ._VideoCloseX_ypayp_131 {
        display:inline-flex
    }
}

._VideoButtonsContainer_ypayp_139 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--spx-unit-3)
}

._TipBadge_ypayp_147 {
    background-color: var(--colours-tip-badge-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    padding: var(--spx-unit-0-5) var(--spx-unit-2);
    border-radius: var(--spx-radius-sm);
    margin-right: var(--spx-unit-2);
    margin-top: 0
}

html ._ReactQueryDevtools_ypayp_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._HintContentContainer_1xhpi_1 {
    display: flex;
    justify-content: center;
    height: 100%;
    width: auto;
    overflow: hidden
}

._HintContentContainer_1xhpi_1 img {
    max-width: 100%;
    max-height: 100%;
    -o-object-fit: contain;
    object-fit: contain
}

._HintVideoContainer_1xhpi_15 {
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    background: var(--colours-plain-background-inverted)
}

html ._ReactQueryDevtools_1xhpi_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._BannerContainer_ci5sk_1 {
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center
}

._BannerContainer_ci5sk_1>p {
    margin: 0;
    padding: var(--spx-unit-1) var(--spx-unit-4);
    width: 100%;
    text-align: center;
    border-radius: 5px;
    background-color: var(--colours-regular-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._QuestionSwapped_ci5sk_18 {
    margin: auto;
    max-width: 50%
}

._QuestionSwapped_ci5sk_18>p {
    background-color: var(--colours-q-swap);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    padding-left: var(--spx-unit-1)
}

._SwapIcon_ci5sk_29 {
    transform: rotate(90deg)
}

._NewQuestion_ci5sk_33 {
    margin-bottom: var(--spx-unit-4)
}

._NewQuestion_ci5sk_33>p {
    background-color: var(--colours-selected);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

html ._ReactQueryDevtools_ci5sk_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._VideoNudgePopoverChildren_10bcu_2 {
    z-index: 1;
    position: relative
}

._VideoNudgeContainer_10bcu_7 {
    position: relative;
    box-shadow: var(--spx-shadow-lg);
    border: var(--spx-border-size-1) solid var(--colours-popover-border);
    border-radius: var(--spx-radius-md);
    outline: none
}

._VideoNudgeContent_10bcu_15 {
    z-index: 1;
    position: relative;
    width: 300px;
    padding: var(--spx-unit-4);
    border-radius: var(--spx-radius-md);
    background-color: var(--colours-plain-background);
    display: flex;
    flex-direction: column;
    align-items: center
}

._VideoNudgeContent_10bcu_15>*:not(:last-child) {
    margin-bottom: var(--spx-unit-2)
}

._VideoNudgeContent_10bcu_15 h3 {
    font-size: var(--spx-font-size-xl);
    font-weight: 700;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading)
}

._VideoNudgeContent_10bcu_15 span {
    font-size: var(--spx-font-size-lg);
    font-weight: 400;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    text-align: center
}

._VideoNudgeContent_10bcu_15 span._Link_10bcu_43 {
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable);
    text-decoration: underline;
    cursor: pointer
}

._VideoNudgeContentAltTitleColor_10bcu_50 h3 {
    -webkit-text-fill-color: initial;
    color: var(--colours-in-progress)
}

._VideoNudgePosterContainer_10bcu_56 {
    position: relative;
    margin-top: var(--spx-unit-2);
    margin-bottom: var(--spx-unit-4)!important
}

._VideoNudgePoster_10bcu_56 {
    width: 100%
}

._VideoNudgePlayArrow_10bcu_69 {
    position: absolute;
    height: 70px;
    width: 70px;
    background-color: var(--colours-plain-background);
    left: calc(50% - 35px);
    top: calc(50% - 35px);
    border-radius: var(--spx-radius-full);
    box-shadow: var(--spx-shadow-md-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform .1s var(--spx-ease-in-out-1)
}

._VideoNudgePlayArrow_10bcu_69:hover {
    transform: scale(1.1)
}

._VideoNudgePlayArrow_10bcu_69 div {
    position: relative;
    left: 5px;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 30px solid var(--colours-interactable)
}

._Overlay_10bcu_97 {
    position: fixed;
    background-color: var(--colours-popover-overlay-background);
    width: 100vw;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px)
}

._VideoNudgeOverlay_10bcu_108 {
    height: calc(100vh - 60px - var(--spx-unit-4));
    top: 0;
    left: 0
}

@media (max-width: 1024px) {
    ._VideoNudgeOverlay_10bcu_108 {
        height:calc(100vh - 60px)
    }
}

._BottomBarOverlay_10bcu_118 {
    height: calc(60px + var(--spx-unit-4));
    left: 0;
    bottom: 0
}

@media (max-width: 1024px) {
    ._BottomBarOverlay_10bcu_118 {
        height:60px
    }
}

._VideoNudgeArrow_10bcu_128 {
    height: var(--spx-unit-4);
    width: var(--spx-unit-4);
    background-color: var(--colours-plain-background);
    box-shadow: var(--spx-shadow-lg);
    position: absolute;
    bottom: calc(-1 * var(--spx-unit-2) + 1px);
    left: calc(50% - var(--spx-unit-2));
    transform: rotate(45deg)
}

html ._ReactQueryDevtools_10bcu_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._QBarResultsContainer_q9uq9_1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    margin: 0 auto;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._AdditionalInfo_q9uq9_10 {
    max-width: 66%;
    margin: 10px auto;
    text-align: center
}

@media (max-width: 768px) {
    ._AdditionalInfo_q9uq9_10 {
        max-width:100%
    }
}

._QSwapIconWidget_q9uq9_20 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 10px auto 20px
}

@media (max-width: 480px) {
    ._QSwapIconWidget_q9uq9_20 {
        flex-direction:column;
        text-align: center
    }
}

._SwapCardIconWrapper_q9uq9_34 {
    display: flex;
    flex-direction: row-reverse;
    margin: 10px 20px 20px 10px
}

._SwapCardIconWrapper_q9uq9_34>:not(:last-child) {
    margin-left: -10px
}

@media (max-width: 480px) {
    ._SwapCardIconWrapper_q9uq9_34 {
        margin-right:0
    }
}

._SwapCardIcon_q9uq9_34 {
    filter: drop-shadow(-1px 5px 5px rgb(0 0 0 / 25%))
}

html ._ReactQueryDevtools_q9uq9_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._AssessmentLQD_17iyj_1 {
    display: flex;
    height: 100%;
    overflow: hidden;
    --top-bar-height: 56px
}

._ActivityDisplayContainer_17iyj_9 {
    flex: 1 1 auto;
    padding: var(--spx-unit-4) var(--spx-unit-4) 0;
    height: 100%
}

@media (max-width: 1024px),(max-height: 700px) {
    ._ActivityDisplayContainer_17iyj_9 {
        background-color:var(--colours-plain-background);
        padding: 0
    }
}

@media (max-width: 480px) {
    ._ActivityDisplayContainer_17iyj_9 {
        margin-top:var(--top-bar-height);
        height: calc(100% - var(--top-bar-height))
    }
}

html ._ReactQueryDevtools_17iyj_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_npaks_1 {
    --spacing: var(--spx-unit-8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: var(--spx-unit-8);
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-lg);
    max-width: 1280px;
    width: 100%;
    height: calc(100% - var(--spx-unit-4));
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

@media (max-width: 1440px) {
    ._Container_npaks_1 {
        max-width:1024px
    }
}

._Container_npaks_1 ._TaskTitle_npaks_21 {
    margin-bottom: var(--spacing);
    font-size: var(--spx-font-size-3xl);
    font-weight: 500
}

._Completion_npaks_28 {
    --size: var(--spx-unit-28);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    margin-bottom: var(--spacing);
    background-color: var(--colours-light-background);
    border-radius: var(--spx-radius-full);
    text-align: center;
    font-size: var(--spx-font-size-4xl)
}

._Completion_npaks_28 p {
    margin: 0
}

._Completion_npaks_28 ._Stat_npaks_47 {
    line-height: 1
}

._Completion_npaks_28 ._Title_npaks_51 {
    font-size: var(--spx-font-size-xs)
}

._SeekHelpMessage_npaks_56 {
    position: relative;
    margin: var(--spx-unit-4) 0 var(--spacing);
    padding: var(--spx-unit-8);
    background-color: var(--colours-light-background);
    text-align: center
}

._SeekHelpMessage_npaks_56 p {
    margin: 0
}

._SeekHelpMessage_npaks_56 ._Title_npaks_51 {
    margin-bottom: var(--spx-unit-2);
    font-weight: 700
}

._SeekHelpMessage_npaks_56 ._IconContainer_npaks_72 {
    text-align: center;
    height: 0
}

._SeekHelpMessage_npaks_56 ._IconContainer_npaks_72 ._Icon_npaks_72 {
    height: 40px;
    width: 40px;
    margin-top: -80px;
    padding: var(--spx-unit-2);
    background-color: var(--colours-seek-help);
    border-radius: var(--spx-radius-full)
}

._TaskCompleteMessage_npaks_87 {
    margin: 0 0 var(--spacing);
    font-size: var(--spx-font-size-3xl);
    -webkit-text-fill-color: initial;
    color: var(--colours-complete)
}

._Buttons_npaks_93 {
    display: flex;
    justify-content: center;
    margin: var(--spx-unit-4) 0
}

._Buttons_npaks_93 ._Button_npaks_93 {
    margin: 0 var(--spx-unit-2)
}

html ._ReactQueryDevtools_npaks_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._AccordionRoot_9fvag_3 {
    width: 100%
}

._AccordionItem_9fvag_7 {
    overflow: hidden;
    margin: var(--spx-unit-4) 0;
    border-radius: var(--spx-radius-md);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    font-size: var(--spx-font-size-lg);
    font-weight: 700;
    box-shadow: var(--spx-shadow-md)
}

._AccordionItem_9fvag_7 ._AccordionChevron_9fvag_16 {
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable);
    transition: transform .3s cubic-bezier(.87,0,.13,1);
    width: var(--spx-unit-4);
    height: var(--spx-unit-4);
    font-weight: 700
}

._AccordionItem_9fvag_7 ._AccordionTrigger_9fvag_24 {
    padding: var(--spx-unit-3) var(--spx-unit-4) var(--spx-unit-3) var(--spx-unit-3);
    flex: 1 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-height: 1;
    background-color: var(--colours-item)
}

._AccordionItem_9fvag_7 ._AccordionTrigger_9fvag_24[data-state=open] ._AccordionChevron_9fvag_16 {
    transform: rotate(180deg)
}

._AccordionItem_9fvag_7:not(._Locked_9fvag_38) ._AccordionTrigger_9fvag_24:hover {
    background-color: var(--colours-item-hover)
}

._AccordionItem_9fvag_7._WithStatus_9fvag_42 {
    border-left-width: 10px;
    border-left-style: solid
}

@media (max-width: 480px) {
    ._AccordionItem_9fvag_7._WithStatus_9fvag_42 {
        border-left-width:8px
    }
}

._AccordionItem_9fvag_7._WithStatus_9fvag_42._Completed_9fvag_50 {
    border-color: var(--colours-complete)
}

._AccordionItem_9fvag_7._WithStatus_9fvag_42._InProgress_9fvag_54 {
    border-color: var(--colours-in-progress)
}

._AccordionItem_9fvag_7._WithStatus_9fvag_42._NotStarted_9fvag_58 {
    border-color: var(--colours-interactable)
}

._AccordionItem_9fvag_7._WithStatus_9fvag_42._Locked_9fvag_38 {
    border-color: var(--colours-locked);
    -webkit-text-fill-color: initial;
    color: var(--colours-locked)
}

._AccordionItem_9fvag_7._WithStatus_9fvag_42._Locked_9fvag_38 ._AccordionChevron_9fvag_16 {
    -webkit-text-fill-color: initial;
    color: var(--colours-locked)
}

._AccordionItem_9fvag_7:focus-within {
    position: relative
}

._AccordionHeader_9fvag_77 {
    display: flex;
    cursor: pointer
}

._AccordionContent_9fvag_82 {
    overflow: hidden;
    background-color: var(--colours-item)
}

._AccordionContent_9fvag_82[data-state=open] {
    animation: _SlideDown_9fvag_1 .3s cubic-bezier(.87,0,.13,1)
}

._AccordionContent_9fvag_82[data-state=closed] {
    animation: _SlideUp_9fvag_1 .3s cubic-bezier(.87,0,.13,1)
}

._AccordionContentText_9fvag_95 {
    padding: 0 var(--spx-unit-3) var(--spx-unit-3) var(--spx-unit-3)
}

._AccordionChevronContainer_9fvag_99 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--spx-unit-8);
    margin-right: var(--spx-unit-3)
}

@keyframes _SlideDown_9fvag_1 {
    0% {
        height: 0
    }

    to {
        height: var(--radix-accordion-content-height)
    }
}

@keyframes _SlideUp_9fvag_1 {
    0% {
        height: var(--radix-accordion-content-height)
    }

    to {
        height: 0
    }
}

html ._ReactQueryDevtools_9fvag_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Sidebar_170z2_1 {
    flex: 0 0 auto;
    width: var(--spx-unit-28);
    height: calc(100%,var(--top-banner-height));
    background-color: var(--colours-plain-background-inverted);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    overflow-y: auto
}

._ProgressWheelContainer_170z2_10 {
    display: flex;
    justify-content: center;
    margin-top: var(--spx-unit-4)
}

._Title_170z2_16 {
    margin-top: var(--spx-unit-2);
    text-align: center;
    font-weight: 700
}

._NavTab_170z2_22 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: var(--spx-unit-2) var(--spx-unit-4);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    text-decoration: none;
    font-weight: 700;
    border-top: 1px solid var(--colours-nav-bar-link)
}

._NavTab_170z2_22 ._Chevron_170z2_33 {
    margin-right: var(--spx-unit-2)
}

._NavTab_170z2_22 ._SeekHelpIconContainer_170z2_37 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    background-color: var(--colours-background-seek-help);
    border-radius: var(--spx-radius-full)
}

._NavTab_170z2_22 ._SeekHelpIconContainer_170z2_37 ._SeekHelpIcon_170z2_37 {
    height: 14px;
    width: 14px
}

._NavTab_170z2_22._Selected_170z2_52 {
    background-color: var(--colours-nav-bar-link);
    cursor: default
}

._NavTab_170z2_22._Selected_170z2_52 ._Chevron_170z2_33 {
    fill: var(--colours-complete)
}

._NavTab_170z2_22._Interactive_170z2_61 {
    cursor: pointer
}

._NavTab_170z2_22._Interactive_170z2_61:hover {
    background-color: var(--colours-nav-bar-link)
}

._NavTab_170z2_22._Complete_170z2_69 {
    -webkit-text-fill-color: initial;
    color: var(--colours-complete)
}

._NavTab_170z2_22._Incorrect_170z2_73 {
    -webkit-text-fill-color: initial;
    color: var(--colours-incorrect)
}

._NavTab_170z2_22._Disabled_170z2_77 {
    -webkit-text-fill-color: initial;
    color: var(--colours-locked-dark)
}

._Topbar_170z2_82 ._NavTab_170z2_22 {
    width: 100%;
    border: 1px solid var(--colours-nav-bar-link);
    border-radius: var(--spx-radius-sm)
}

._Topbar_170z2_82 ._ProgressContainer_170z2_89 {
    display: flex;
    align-items: center
}

._AccordionRoot_170z2_95 {
    position: absolute;
    z-index: 2
}

._AccordionRootScrollable_170z2_100 {
    top: 0;
    bottom: 0;
    overflow: auto
}

._AccordionRoot_170z2_95>div {
    border-radius: 0;
    margin: 0
}

._AccordionTriggerContent_170z2_111 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center
}

._AccordionContent_170z2_118>div {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3,1fr);
    gap: var(--spx-unit-2) var(--spx-unit-3);
    background-color: var(--colours-plain-background-inverted);
    z-index: var(--spx-layer-overlay-2);
    padding: var(--spx-unit-2)
}

@media (max-width: 360px) {
    ._AccordionContent_170z2_118>div {
        grid-template-columns:repeat(2,1fr)
    }
}

._AccordionTrigger_170z2_111 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    background-color: var(--colours-plain-background-inverted)!important;
    border-radius: 0
}

._AccordionTrigger_170z2_111:hover {
    opacity: .9
}

html ._ReactQueryDevtools_170z2_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._ListCard_9ep2f_1 {
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-md);
    box-shadow: var(--spx-shadow-lg)
}

._WithStatus_9ep2f_7 {
    border-left: 10px solid var(--colours-unstarted)
}

._WithStatus_9ep2f_7._StatusComplete_9ep2f_10 {
    border-color: var(--colours-complete)
}

._WithStatus_9ep2f_7._StatusInProgress_9ep2f_14 {
    border-color: var(--colours-in-progress)
}

._WithStatus_9ep2f_7._StatusNotStarted_9ep2f_18 {
    border-color: var(--colours-interactable)
}

._WithStatus_9ep2f_7._StatusNoAction_9ep2f_22 {
    border-color: var(--colours-unstarted)
}

._WithStatus_9ep2f_7._StatusDisabled_9ep2f_26 {
    border-color: var(--colours-locked)
}

html ._ReactQueryDevtools_9ep2f_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._StatusCard_jmcti_1 {
    position: relative;
    overflow: hidden;
    border-radius: var(--spx-radius-md);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    transition: background .2s ease-in-out
}

._StatusCard_jmcti_1._Complete_jmcti_8 {
    background: linear-gradient(311deg,var(--colours-correct-gradient-start) 0%,var(--colours-correct-gradient-stop) 50%,var(--colours-correct-gradient-start) 100%)
}

._StatusCard_jmcti_1._InProgress_jmcti_17 {
    background: linear-gradient(314deg,var(--colours-in-progress-gradient-start) 0%,var(--colours-in-progress-gradient-stop) 50%,var(--colours-in-progress-gradient-start) 100%)
}

._StatusCard_jmcti_1._NotStarted_jmcti_26 {
    background: linear-gradient(141deg,var(--colours-primary-gradient-start) 0%,var(--colours-primary-gradient-stop) 50%,var(--colours-primary-gradient-start) 100%)
}

._StatusCard_jmcti_1._NotStarted_jmcti_26,._StatusCard_jmcti_1._InProgress_jmcti_17,._StatusCard_jmcti_1._Complete_jmcti_8 {
    background-size: 200%
}

._StatusCard_jmcti_1._NotStarted_jmcti_26:hover,._StatusCard_jmcti_1._InProgress_jmcti_17:hover,._StatusCard_jmcti_1._Complete_jmcti_8:hover {
    background-position-x: 100%
}

._StatusCard_jmcti_1._Locked_jmcti_45 {
    background-color: var(--colours-background-locked);
    -webkit-text-fill-color: initial;
    color: var(--colours-locked-dark)
}

._StatusCard_jmcti_1 ._Icon_jmcti_50 {
    position: absolute;
    bottom: -30px;
    right: -30px;
    mix-blend-mode: multiply
}

html ._ReactQueryDevtools_jmcti_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._AssessmentCardContainer_1g4x7_1 {
    padding-bottom: var(--spx-unit-4)
}

._AssessmentCard_1g4x7_1 {
    padding: var(--spx-unit-6)
}

@media (max-width: 480px) {
    ._AssessmentCard_1g4x7_1 {
        padding:var(--spx-unit-4) var(--spx-unit-2)
    }
}

._AssessmentCard_1g4x7_1>._Title_1g4x7_12 {
    font-size: var(--spx-font-size-2xl);
    font-weight: 700
}

._AssessmentCard_1g4x7_1>._Content_1g4x7_17 {
    display: grid;
    grid-template-columns: repeat(2,1fr)
}

@media (max-width: 768px) {
    ._AssessmentCard_1g4x7_1>._Content_1g4x7_17 {
        grid-template-columns:1fr
    }
}

._AssessmentCard_1g4x7_1 p {
    margin: 0
}

._PackageCardContainer_1g4x7_31 {
    text-decoration: none;
    margin: var(--spx-unit-4) var(--spx-unit-2) 0
}

._PackageCard_1g4x7_31 {
    height: 100%;
    padding: var(--spx-unit-6)
}

._PackageCard_1g4x7_31 :not(img) {
    z-index: 1
}

@media (max-width: 480px) {
    ._PackageCard_1g4x7_31 {
        margin:0 0 var(--spx-unit-4) 0
    }
}

._PackageCard_1g4x7_31._Locked_1g4x7_48 {
    cursor: not-allowed
}

._PackageCard_1g4x7_31 ._Header_1g4x7_52 {
    display: flex;
    justify-content: space-between
}

@media (max-width: 480px) {
    ._PackageCard_1g4x7_31 ._Header_1g4x7_52 {
        flex-direction:column;
        align-items: flex-start
    }
}

._PackageCard_1g4x7_31 ._Header_1g4x7_52 ._Title_1g4x7_12 {
    font-size: var(--spx-font-size-2xl);
    font-weight: 500;
    margin-right: var(--spx-unit-2)
}

@media (max-width: 768px) {
    ._PackageCard_1g4x7_31 ._Header_1g4x7_52 ._Title_1g4x7_12 {
        margin-bottom:var(--spx-unit-2)
    }
}

._PackageCard_1g4x7_31 ._Chip_1g4x7_72 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--colours-plain-background);
    border: none;
    transition: box-shadow .2s ease-in-out
}

._PackageCard_1g4x7_31 ._Chip_1g4x7_72._ChipLocked_1g4x7_80 {
    background-color: var(--colours-locked);
    -webkit-text-fill-color: initial;
    color: var(--colours-locked-dark)
}

._PackageCard_1g4x7_31 ._Chip_1g4x7_72 ._ChipIcon_1g4x7_85 {
    margin-left: var(--spx-unit-4)
}

._PackageCardContainer_1g4x7_31._Clickable_1g4x7_91:hover ._Chip_1g4x7_72 {
    box-shadow: var(--spx-shadow-md-dark)
}

._StatsContainer_1g4x7_95 {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2,1fr);
    margin-top: var(--spx-unit-4);
    font-size: var(--spx-font-size-lg);
    font-weight: 500
}

._StatsContainer_1g4x7_95 ._Message_1g4x7_103 {
    align-self: self-end;
    margin-bottom: var(--spx-unit-2);
    font-size: var(--spx-font-size-xl)
}

._RevisionStat_1g4x7_110 {
    font-size: var(--spx-font-size-4xl)
}

._FixUpStat_1g4x7_114 {
    font-size: var(--spx-font-size-2xl)
}

._FixUpStat_1g4x7_114>span:first-of-type {
    font-size: var(--spx-font-size-5xl)
}

._RevisionStat_1g4x7_110,._FixUpStat_1g4x7_114 {
    text-shadow: var(--spx-shadow-sm-dark)
}

@media (max-width: 480px) {
    ._RevisionStat_1g4x7_110 ._Stat_1g4x7_95,._FixUpStat_1g4x7_114 ._Stat_1g4x7_95 {
        margin-right:var(--spx-unit-1)
    }

    ._RevisionStat_1g4x7_110 p:last-of-type,._FixUpStat_1g4x7_114 p:last-of-type {
        margin-left: var(--spx-unit-1)
    }
}

._PackageCard_1g4x7_31._Locked_1g4x7_48 ._RevisionStat_1g4x7_110,._PackageCard_1g4x7_31._Locked_1g4x7_48 ._FixUpStat_1g4x7_114 {
    text-shadow: none
}

html ._ReactQueryDevtools_1g4x7_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._PageContainer_to3jy_1 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._PageHead_to3jy_5 {
    display: flex;
    align-items: center;
    margin-top: var(--spx-unit-12)
}

._PageHead_to3jy_5 ._IconContainer_to3jy_10 {
    max-height: 240px;
    max-width: 240px;
    width: 100%
}

._HeadContent_to3jy_17 {
    padding-right: var(--spx-unit-4);
    font-size: var(--spx-font-size-lg)
}

._HeadContent_to3jy_17 ._Title_to3jy_21 {
    font-weight: 500
}

@media (max-width: 768px) {
    ._HeadContent_to3jy_17 {
        font-size:var(--spx-font-size-base)
    }
}

._AssessmentListTitle_to3jy_30 {
    margin-bottom: var(--spx-unit-4)
}

html ._ReactQueryDevtools_to3jy_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Table_g3ws1_1 {
    border-radius: var(--spx-unit-4);
    border-collapse: collapse;
    overflow: hidden;
    width: 100%;
    box-shadow: var(--spx-shadow-lg)
}

._Table_g3ws1_1 th,._Table_g3ws1_1 td {
    padding: var(--spx-unit-4)
}

._TableHead_g3ws1_14 {
    background-color: var(--colours-plain-background-inverted);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    text-align: left
}

._TableHead_g3ws1_14 th:first-child,._TableRow_g3ws1_21 td:first-child {
    padding-left: var(--spx-unit-8)
}

._TableHead_g3ws1_14 th:last-child,._TableRow_g3ws1_21 td:last-child {
    padding-right: var(--spx-unit-8)
}

._TableBody_g3ws1_30 {
    background-color: var(--colours-plain-background)
}

._TableRow_g3ws1_21:not(:last-child) {
    border-bottom: 1px solid var(--colours-border)
}

html ._ReactQueryDevtools_g3ws1_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._VideoContainer_x088v_1 {
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    background: var(--colours-plain-background-inverted)
}

._VideoButtonsContainer_x088v_9 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--spx-unit-3)
}

._VideoButtonsContainerSingleButton_x088v_17 {
    justify-content: center
}

html ._ReactQueryDevtools_x088v_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

@media (max-width: 480px) {
    ._SmallScreenNoPadding_esnnh_1 {
        padding:0
    }
}

._Wrapper_esnnh_7 {
    padding-bottom: var(--spx-unit-6)
}

._Title_esnnh_11 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    font-size: var(--spx-font-size-4xl);
    font-weight: 700
}

@media (max-width: 768px) {
    ._Title_esnnh_11 {
        font-size:var(--spx-font-size-2xl);
        font-weight: 500
    }
}

._Header_esnnh_22 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--spx-unit-8);
    margin-bottom: var(--spx-unit-6)
}

@media (max-width: 768px) {
    ._Header_esnnh_22 {
        margin:var(--spx-unit-3) var(--spx-unit-4)
    }
}

._NothingToFixUp_esnnh_34 {
    text-align: right
}

._NothingToFixUp_esnnh_34 p {
    margin: 0
}

._NothingToFixUp_esnnh_34 p:first-of-type {
    font-size: var(--spx-font-size-xl);
    -webkit-text-fill-color: initial;
    color: var(--colours-complete-text);
    font-weight: 500
}

._NothingToFixUp_esnnh_34 ._Link_esnnh_47 {
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable)
}

._NothingToFixUp_esnnh_34 ._Link_esnnh_47:hover,._NothingToFixUp_esnnh_34 ._Link_esnnh_47:active {
    -webkit-text-fill-color: initial;
    color: var(--colours-selected)
}

._HeaderButtonContainer_esnnh_57 {
    display: flex;
    align-items: center
}

._HeaderButtonContainer_esnnh_57>:not(:first-child) {
    margin-left: var(--spx-unit-5)
}

._Button_esnnh_66 {
    white-space: pre;
    padding: var(--spx-unit-2) var(--spx-unit-5);
    border-radius: var(--spx-radius-full)
}

._Table_esnnh_73 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

@media (max-width: 768px) {
    ._Table_esnnh_73 {
        border-radius:var(--spx-radius-md)
    }
}

@media (max-width: 480px) {
    ._Table_esnnh_73 {
        font-size:var(--spx-font-size-sm)
    }
}

._TableRow_esnnh_85 th {
    padding: var(--spx-unit-3) var(--spx-unit-2);
    white-space: nowrap
}

._TableRow_esnnh_85 td {
    height: var(--spx-unit-16);
    padding: var(--spx-unit-1-5) var(--spx-unit-2)
}

@media (max-width: 480px) {
    ._TableRow_esnnh_85 td {
        padding:var(--spx-unit-1-5) var(--spx-unit-1-5)
    }
}

._FixUpCombinedEnd_esnnh_99 td {
    padding-top: 0
}

@media (max-width: 768px) {
    ._TableRow_esnnh_85 td:first-child {
        padding-left:var(--spx-unit-3)
    }
}

@media (max-width: 480px) {
    ._TableRow_esnnh_85 td:first-child {
        padding-left:var(--spx-unit-1-5)
    }
}

@media (max-width: 768px) {
    ._TableRow_esnnh_85 td:last-child {
        padding-right:var(--spx-unit-3)
    }
}

@media (max-width: 480px) {
    ._TableRow_esnnh_85 td:last-child {
        padding-right:var(--spx-unit-1-5)
    }
}

._FixUpCombinedStart_esnnh_123 {
    border-bottom: none!important
}

._FixUpCombinedStart_esnnh_123 td:not(:last-child) {
    padding-bottom: 0
}

._FixUpCombinedEnd_esnnh_99 td:last-child {
    padding-right: var(--spx-unit-4)
}

._TableMaxWidth_esnnh_136 {
    max-width: 1200px
}

._TopicName_esnnh_141,._TopicCode_esnnh_142 {
    display: block
}

._TopicDetails_esnnh_146 {
    display: flex;
    flex-direction: column
}

._TopicNameList_esnnh_151 {
    padding: 0;
    margin: var(--spx-unit-1) 0
}

@media (max-width: 768px) {
    ._TopicNameList_esnnh_151 {
        margin:0
    }
}

._TopicNameSmallScreen_esnnh_160 {
    font-weight: 500
}

._TopicSubheadingSmallScreen_esnnh_164 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary);
    font-size: var(--spx-font-size-sm)
}

@media (max-width: 480px) {
    ._TopicSubheadingSmallScreen_esnnh_164 {
        font-size:var(--spx-font-size-xs)
    }
}

._MarkContainer_esnnh_173 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: var(--spx-radius-full)
}

._ZeroMarks_esnnh_180 {
    background-color: var(--colours-incorrect);
    border: 1px solid var(--colours-incorrect)
}

._SomeMarks_esnnh_185 {
    background-color: var(--colours-in-progress);
    border: 1px solid var(--colours-in-progress)
}

._FullMarks_esnnh_190 {
    background-color: var(--colours-correct);
    border: 1px solid var(--colours-correct)
}

._StudentMark_esnnh_195 {
    border-radius: var(--spx-radius-full) 0 0 var(--spx-radius-full);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    text-align: center;
    width: 50%;
    padding: 0 var(--spx-unit-2)
}

@media (max-width: 480px) {
    ._StudentMark_esnnh_195 {
        width:100%
    }
}

._AvailableMark_esnnh_207 {
    background-color: var(--colours-plain-background);
    border-radius: 0 var(--spx-radius-full) var(--spx-radius-full) 0;
    text-align: center;
    width: 50%;
    padding: 0 var(--spx-unit-2);
    white-space: nowrap
}

@media (max-width: 480px) {
    ._AvailableMark_esnnh_207 {
        display:none
    }
}

._Tick_esnnh_220 {
    width: var(--spx-unit-6);
    height: var(--spx-unit-6);
    padding: 0!important
}

._Tick_esnnh_220>svg {
    width: var(--spx-unit-4);
    height: var(--spx-unit-4)
}

html ._ReactQueryDevtools_esnnh_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._PageTitleContainer_zjt7c_1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--spx-unit-16);
    margin-bottom: var(--spx-unit-8)
}

._PageTitle_zjt7c_1 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._TaskListTrigger_zjt7c_13 {
    padding: var(--spx-unit-2) 0
}

._TaskListTitle_zjt7c_17 {
    margin: 0 0 var(--spx-unit-2) 0
}

._TaskListDescription_zjt7c_21 {
    margin: 0;
    font-size: var(--spx-font-size-base);
    font-weight: 300;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary)
}

._TaskRowLink_zjt7c_28 {
    text-decoration: none;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._TaskRow_zjt7c_28 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--spx-unit-4);
    margin-bottom: var(--spx-unit-1);
    background-color: var(--colours-nested-item);
    border-radius: var(--spx-radius-sm);
    font-size: var(--spx-font-size-base);
    font-weight: 400;
    transition: background-color .2s
}

._TaskRow_zjt7c_28:hover {
    background-color: var(--colours-nested-item-hover)
}

._TaskRow_zjt7c_28 ._RightSection_zjt7c_49 {
    display: flex;
    align-items: center;
    padding-left: var(--spx-unit-4)
}

._TaskRow_zjt7c_28 ._Chip_zjt7c_55 {
    margin-left: var(--spx-unit-8);
    width: 140px
}

@media (max-width: 480px) {
    ._TaskRow_zjt7c_28 ._Chip_zjt7c_55 {
        margin-left:var(--spx-unit-4);
        min-width: auto;
        padding-left: var(--spx-unit-2);
        padding-right: var(--spx-unit-2)
    }
}

._TaskRow_zjt7c_28 ._Chip_zjt7c_55 ._ChipIcon_zjt7c_66 {
    height: var(--spx-unit-4)
}

html ._ReactQueryDevtools_zjt7c_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_1cwfm_1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto
}

._Heading_1cwfm_10 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    flex: 0 0 auto
}

._Title_1cwfm_19 {
    font-size: var(--spx-font-size-4xl);
    font-weight: 700;
    margin-bottom: 0
}

@media (max-width: 480px) {
    ._Title_1cwfm_19 {
        font-size:var(--spx-font-size-2xl);
        margin-top: var(--spx-unit-4);
        line-height: 1
    }
}

._Subtitle_1cwfm_31 {
    font-size: var(--spx-font-size-2xl);
    margin: 0
}

@media (max-width: 480px) {
    ._Subtitle_1cwfm_31 {
        font-size:var(--spx-font-size-lg);
        margin-top: 0
    }
}

._MenuItemsContainer_1cwfm_41 {
    margin-top: var(--spx-unit-3);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: var(--spx-unit-4) var(--spx-unit-16);
    flex: 0 0 auto
}

@media (max-width: 480px) {
    ._MenuItemsContainer_1cwfm_41 {
        margin:0;
        flex-direction: column;
        align-items: center;
        padding: var(--spx-unit-4) var(--spx-unit-2)
    }
}

._MenuItemsContainerOtherSubjects_1cwfm_58 {
    margin-top: var(--spx-unit-2)
}

._MenuItem_1cwfm_41 {
    margin: var(--spx-unit-3) var(--spx-unit-4);
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-md);
    box-shadow: var(--spx-shadow-md-dark);
    padding: var(--spx-unit-5);
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    cursor: pointer;
    text-decoration: none;
    max-width: var(--spx-unit-96);
    justify-content: space-around;
    align-items: center;
    white-space: nowrap
}

@media (max-width: 1024px) {
    ._MenuItem_1cwfm_41 {
        max-width:var(--spx-unit-72)
    }
}

@media (max-width: 480px) {
    ._MenuItem_1cwfm_41 {
        max-width:var(--spx-unit-96);
        flex-direction: row;
        margin: var(--spx-unit-2) 0;
        padding: var(--spx-unit-2) var(--spx-unit-3)
    }
}

._MenuItemOtherSubject_1cwfm_91 {
    display: flex;
    justify-content: center;
    align-items: center
}

@media (max-width: 480px) {
    ._MenuItemOtherSubject_1cwfm_91>div {
        width:60%
    }
}

._MenuItemOtherSubject_1cwfm_91>img {
    height: var(--spx-unit-8);
    margin-bottom: var(--spx-unit-5)
}

@media (max-width: 480px) {
    ._MenuItemOtherSubject_1cwfm_91>img {
        display:none
    }
}

._MenuItemIcon_1cwfm_112 {
    max-height: 300px;
    max-width: 300px
}

@media (max-width: 768px) {
    ._MenuItemIcon_1cwfm_112 {
        max-height:100px;
        max-width: 100px
    }
}

._MenuItemText_1cwfm_122 {
    background-color: var(--colours-interactable);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    font-size: var(--spx-font-size-lg);
    padding: var(--spx-unit-3) var(--spx-unit-6);
    border-radius: var(--spx-radius-full);
    font-weight: 700;
    margin-bottom: var(--spx-unit-3);
    text-align: center;
    max-width: 100%
}

@media (max-width: 480px) {
    ._MenuItemText_1cwfm_122 {
        font-size:var(--spx-font-size-base);
        padding: var(--spx-unit-3);
        width: 100%;
        margin-bottom: 0;
        font-weight: 400
    }
}

._MenuItem_1cwfm_41:hover ._MenuItemText_1cwfm_122 {
    background-color: var(--colours-plain-background-inverted)
}

html ._ReactQueryDevtools_1cwfm_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_1ornk_1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto
}

._Header_1ornk_10 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    flex: 0 0 auto
}

._Title_1ornk_19 {
    font-size: var(--spx-font-size-4xl);
    font-weight: 700;
    margin-bottom: 0
}

@media (max-width: 480px) {
    ._Title_1ornk_19 {
        font-size:var(--spx-font-size-2xl);
        margin-top: var(--spx-unit-4);
        line-height: 1
    }
}

._Subtitle_1ornk_31 {
    font-size: var(--spx-font-size-2xl);
    margin: 0
}

@media (max-width: 480px) {
    ._Subtitle_1ornk_31 {
        font-size:var(--spx-font-size-lg);
        margin-top: 0
    }
}

._CodeDisplay_1ornk_41 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: var(--spx-unit-8) 0;
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-md);
    box-shadow: var(--spx-shadow-md-dark);
    font-size: var(--spx-font-size-3xl);
    font-weight: 700;
    width: 200px;
    height: 61px
}

._KeyPad_1ornk_55 {
    display: flex;
    flex-direction: column;
    margin-top: var(--spx-unit-2)
}

._KeyPadRow_1ornk_61 {
    display: flex;
    flex-direction: row
}

._KeyPadRow_1ornk_61>button {
    margin: var(--spx-unit-2)
}

._KeyPadButton_1ornk_70 {
    width: 60px;
    height: 50px
}

._Footer_1ornk_75 {
    margin-top: var(--spx-unit-8)
}

._Error_1ornk_79 {
    font-size: var(--spx-font-size-lg);
    margin-top: var(--spx-unit-4)
}

html ._ReactQueryDevtools_1ornk_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._FeedbackCard_1k55b_1 {
    --spacing: var(--spx-unit-6);
    padding: var(--spx-unit-10) var(--spx-unit-12);
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-lg)
}

@media (max-width: 480px) {
    ._FeedbackCard_1k55b_1 {
        border-radius:none;
        padding: var(--spx-unit-10) var(--spx-unit-4)
    }
}

._Prompt_1k55b_14 {
    margin-top: 0;
    margin-bottom: var(--spacing)
}

._SentimentContainer_1k55b_19 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: var(--spacing)
}

._SentimentContainer_1k55b_19 input[type=radio] {
    display: none
}

._SentimentButton_1k55b_30 {
    margin: 0 var(--spx-unit-1);
    border-radius: var(--spx-radius-full);
    border: 0
}

._SentimentButton_1k55b_30:focus {
    outline: 2px solid var(--colours-interactable)
}

._SentimentIcon_1k55b_40 {
    height: 60px;
    width: 60px;
    cursor: pointer
}

._SentimentIcon_1k55b_40 * {
    transition-property: all;
    transition-duration: .3s
}

@media (max-width: 768px) {
    ._SentimentIcon_1k55b_40 {
        height:40px;
        width: 40px
    }
}

._SentimentIcon_1k55b_40._Selected_1k55b_55 .detail-stroke,._SentimentIcon_1k55b_40:hover .detail-stroke {
    stroke: var(--sentiment-color)
}

._SentimentIcon_1k55b_40._Selected_1k55b_55 .detail-fill,._SentimentIcon_1k55b_40:hover .detail-fill {
    fill: var(--sentiment-color)
}

._Textarea_1k55b_67 {
    display: block;
    height: 120px;
    width: 100%;
    margin-top: var(--spacing);
    padding: var(--spx-unit-4);
    border: 1px solid var(--colours-border);
    border-radius: var(--spx-radius-sm);
    resize: none
}

._Textarea_1k55b_67:focus {
    outline: 2px solid var(--colours-interactable)
}

._CheckboxContainer_1k55b_82 {
    margin-top: var(--spacing)
}

._Button_1k55b_86 {
    margin: var(--spacing) auto 0;
    padding-left: var(--spx-unit-8);
    padding-right: var(--spx-unit-6)
}

._Success_1k55b_92 {
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-complete);
    font-size: var(--spx-font-size-lg);
    font-weight: 700;
    margin: 0
}

._Success_1k55b_92>span {
    margin-right: var(--spx-unit-2)
}

._SuccessLimit_1k55b_106 {
    -webkit-text-fill-color: initial;
    color: var(--colours-read-text);
    text-align: center;
    margin: var(--spx-unit-4) 0 0
}

._Error_1k55b_112 {
    margin: var(--spacing) auto 0;
    padding: var(--spx-unit-4);
    border-radius: var(--spx-radius-md);
    background-color: var(--colours-incorrect);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

html ._ReactQueryDevtools_1k55b_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._FullHeight_ocxs7_2 {
    height: 100%;
    max-height: 100%
}

._Content_ocxs7_7 {
    flex: 1 1 auto;
    overflow-y: auto;
    max-height: 100%
}

._NavButton_ocxs7_13 {
    cursor: pointer
}

._TopBar_ocxs7_17 {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    text-align: center
}

._TopBar_ocxs7_17 ._NavButton_ocxs7_13 {
    padding: var(--spx-unit-4) var(--spx-unit-1);
    padding-bottom: calc(var(--spx-unit-4) - var(--arrow-size))!important
}

._TopBar_ocxs7_17 ._NavButton_ocxs7_13:before,._TopBar_ocxs7_17 ._NavButton_ocxs7_13:after {
    bottom: calc(-1 * var(--arrow-size));
    border-top-width: var(--arrow-size);
    border-top-style: solid
}

._TopBar_ocxs7_17 ._NavButton_ocxs7_13.active:before,._TopBar_ocxs7_17 ._NavButton_ocxs7_13._Active_ocxs7_35:before {
    border-right: var(--arrow-size) solid transparent!important
}

._TopBar_ocxs7_17 ._NavButton_ocxs7_13.active:after,._TopBar_ocxs7_17 ._NavButton_ocxs7_13._Active_ocxs7_35:after {
    border-left: var(--arrow-size) solid transparent!important
}

._BottomBar_ocxs7_47 {
    display: grid;
    grid-template-columns: repeat(var(--nav-item-count),1fr)
}

._BottomBar_ocxs7_47 ._NavButton_ocxs7_13 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--spx-unit-2) var(--spx-unit-1)
}

._BottomBar_ocxs7_47 ._NavButton_ocxs7_13:before,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13:after {
    top: calc(-1 * var(--arrow-size));
    border-bottom-width: var(--arrow-size);
    border-bottom-style: solid
}

._BottomBar_ocxs7_47 ._NavButton_ocxs7_13.active:before,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13._Active_ocxs7_35:before {
    border-right: var(--arrow-size) solid transparent!important
}

._BottomBar_ocxs7_47 ._NavButton_ocxs7_13.active:after,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13._Active_ocxs7_35:after {
    border-left: var(--arrow-size) solid transparent!important
}

._BottomBar_ocxs7_47 ._NavButton_ocxs7_13 ._NavButtonIcon_ocxs7_76 {
    width: var(--spx-unit-6);
    height: var(--spx-unit-6)
}

._BottomBar_ocxs7_47 ._NavButton_ocxs7_13 ._NavButtonLabel_ocxs7_81 {
    margin-top: var(--spx-unit-1);
    text-align: center
}

._TopBar_ocxs7_17 ._NavButton_ocxs7_13,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13 {
    position: relative;
    background-color: var(--colours-nav-bar-link);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    text-decoration: none;
    font-size: var(--spx-font-size-sm)
}

._TopBar_ocxs7_17 ._NavButton_ocxs7_13:before,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13:before,._TopBar_ocxs7_17 ._NavButton_ocxs7_13:after,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13:after {
    content: "";
    height: var(--arrow-size);
    position: absolute;
    display: block;
    width: 50%;
    z-index: 1;
    border-color: var(--colours-nav-bar-link)
}

._TopBar_ocxs7_17 ._NavButton_ocxs7_13:before,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13:before {
    left: 0
}

._TopBar_ocxs7_17 ._NavButton_ocxs7_13:after,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13:after {
    right: 0
}

._TopBar_ocxs7_17 ._NavButton_ocxs7_13.active,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13.active,._TopBar_ocxs7_17 ._NavButton_ocxs7_13._Active_ocxs7_35,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13._Active_ocxs7_35 {
    background-color: var(--colours-nav-bar-link-active);
    font-weight: 600
}

._TopBar_ocxs7_17 ._NavButton_ocxs7_13.active:after,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13.active:after,._TopBar_ocxs7_17 ._NavButton_ocxs7_13._Active_ocxs7_35:after,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13._Active_ocxs7_35:after,._TopBar_ocxs7_17 ._NavButton_ocxs7_13.active:before,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13.active:before,._TopBar_ocxs7_17 ._NavButton_ocxs7_13._Active_ocxs7_35:before,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13._Active_ocxs7_35:before {
    border-color: var(--colours-nav-bar-link-active)
}

._TopBar_ocxs7_17 ._NavButton_ocxs7_13._Locked_ocxs7_128,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13._Locked_ocxs7_128 {
    cursor: not-allowed;
    -webkit-text-fill-color: initial;
    color: var(--colours-locked)
}

._TopBar_ocxs7_17 ._NavButton_ocxs7_13._Locked_ocxs7_128 ._LockIcon_ocxs7_132,._BottomBar_ocxs7_47 ._NavButton_ocxs7_13._Locked_ocxs7_128 ._LockIcon_ocxs7_132 {
    margin-right: var(--spx-unit-1);
    margin-bottom: var(--spx-unit-1);
    width: var(--spx-unit-4);
    fill: var(--colours-locked)
}

._Sidebar_ocxs7_142 {
    flex: 0 0 auto;
    height: 100%;
    background-color: var(--colours-nav-bar);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    overflow-y: auto
}

._Sidebar_ocxs7_142 ._NavButton_ocxs7_13 {
    position: relative;
    width: var(--spx-unit-28);
    height: var(--spx-unit-28);
    padding: 0 var(--spx-unit-2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: var(--spx-font-size-base);
    border-left: var(--spx-border-size-3) solid transparent;
    border-right: var(--spx-border-size-3) solid transparent;
    text-align: center;
    text-decoration: none;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

@media (max-width: 768px) {
    ._Sidebar_ocxs7_142 ._NavButton_ocxs7_13 {
        width:var(--spx-unit-20);
        border-left: var(--spx-border-size-2) solid transparent;
        border-right: var(--spx-border-size-2) solid transparent
    }
}

._Sidebar_ocxs7_142 ._NavButton_ocxs7_13:visited {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._Sidebar_ocxs7_142 ._NavButton_ocxs7_13:hover:not(._Locked_ocxs7_128) {
    background-color: var(--colours-nav-bar-hover)
}

._Sidebar_ocxs7_142 ._NavButton_ocxs7_13._Selected_ocxs7_180 {
    background-color: var(--colours-nav-bar-hover);
    border-left: var(--spx-border-size-3) solid var(--colours-selected);
    -webkit-text-fill-color: initial;
    color: var(--colours-selected)
}

@media (max-width: 768px) {
    ._Sidebar_ocxs7_142 ._NavButton_ocxs7_13._Selected_ocxs7_180 {
        width:var(--spx-unit-20);
        border-left: var(--spx-border-size-2) solid var(--colours-selected)
    }
}

._Sidebar_ocxs7_142 ._NavButton_ocxs7_13._Locked_ocxs7_128 {
    -webkit-text-fill-color: initial;
    color: var(--colours-locked);
    cursor: not-allowed
}

._Sidebar_ocxs7_142 ._NavButton_ocxs7_13._Locked_ocxs7_128 svg {
    fill: var(--colours-locked)
}

._Sidebar_ocxs7_142 ._NavButton_ocxs7_13._Locked_ocxs7_128 ._LockIcon_ocxs7_132 {
    position: absolute;
    top: 0;
    right: 0;
    margin: var(--spx-unit-1);
    width: var(--spx-unit-4)
}

._Sidebar_ocxs7_142 ._NavButton_ocxs7_13 ._NavButtonLabel_ocxs7_81 {
    margin-bottom: var(--spx-unit-1);
    font-size: var(--spx-font-size-base)
}

@media (max-width: 768px) {
    ._Sidebar_ocxs7_142 ._NavButton_ocxs7_13 ._NavButtonLabel_ocxs7_81 {
        font-size:var(--spx-font-size-xs)
    }
}

._Sidebar_ocxs7_142 ._NavButton_ocxs7_13 ._NavButtonIcon_ocxs7_76 {
    width: var(--spx-unit-8);
    height: var(--spx-unit-8);
    margin-bottom: var(--spx-unit-2);
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable)
}

@media (max-width: 768px) {
    ._Sidebar_ocxs7_142 ._NavButton_ocxs7_13 ._NavButtonIcon_ocxs7_76 {
        width:var(--spx-unit-7);
        height: var(--spx-unit-7)
    }
}

._SmallScreenFrame_ocxs7_231 {
    --arrow-size: 6px;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    width: 100vw;
    flex-grow: 1
}

._SmallScreenFrame_ocxs7_231 ._TopBar_ocxs7_17,._SmallScreenFrame_ocxs7_231 ._BottomBar_ocxs7_47 {
    flex: 0 0 auto
}

._SmallScreenFrame_ocxs7_231 ._Content_ocxs7_7 {
    padding: var(--arrow-size) 0
}

html ._ReactQueryDevtools_ocxs7_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_l94wp_1 {
    max-width: 600px;
    margin: 0 auto;
    padding: var(--spx-unit-8);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

@media (max-width: 480px) {
    ._Container_l94wp_1 {
        padding:var(--spx-unit-8) 0
    }
}

._Header_l94wp_12 {
    display: flex;
    align-items: center;
    margin-bottom: var(--spx-unit-8)
}

@media (max-width: 480px) {
    ._Header_l94wp_12 {
        padding:0 var(--spx-unit-4)
    }
}

._Image_l94wp_22 {
    width: 80px
}

._Title_l94wp_26 {
    margin-left: var(--spx-unit-2);
    font-size: var(--spx-font-size-4xl);
    font-weight: 700
}

@media (max-width: 768px) {
    ._Title_l94wp_26 {
        font-size:var(--spx-font-size-3xl)
    }
}

._PromptText_l94wp_36 {
    margin: 0
}

html ._ReactQueryDevtools_l94wp_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._StrandView_1xxlk_1 {
    margin: var(--spx-unit-4) 0;
    padding-bottom: var(--spx-unit-2)
}

._Badge_1xxlk_6 {
    display: flex;
    align-items: center;
    padding: var(--spx-unit-1) var(--spx-unit-2-5) var(--spx-unit-1) 0;
    border: var(--spx-border-size-1) solid var(--colours-border);
    border-radius: var(--spx-radius-full);
    font-size: smaller
}

._Badge_1xxlk_6>* {
    margin-left: var(--spx-unit-2)
}

._BadgeWithLevel_1xxlk_19 {
    padding-left: var(--spx-unit-1)
}

._BadgeWithLevel_1xxlk_19>* {
    margin-left: 0
}

._Breadcrumb_1xxlk_27 {
    margin: var(--spx-unit-6) 0
}

._Chevron_1xxlk_31 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    background-color: var(--colours-interactable);
    border-radius: var(--spx-radius-full);
    width: var(--spx-unit-8);
    height: var(--spx-unit-8);
    display: flex;
    align-items: center;
    justify-content: center
}

@media (max-width: 480px) {
    ._Chevron_1xxlk_31 {
        width:var(--spx-unit-6);
        height: var(--spx-unit-6)
    }
}

._Substrand_1xxlk_47 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
}

._SubstrandLeft_1xxlk_55 {
    flex: 0 1 auto
}

._Topic_1xxlk_59 {
    border-radius: var(--spx-radius-sm);
    margin: var(--spx-unit-2) 0;
    text-decoration: none;
    padding: var(--spx-unit-3) var(--spx-unit-4);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--colours-nested-item)
}

._Topic_1xxlk_59:hover {
    background-color: var(--colours-nested-item-hover)
}

._TopicLeft_1xxlk_75 {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._TopicRight_1xxlk_84 {
    padding-left: var(--spx-unit-4);
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-weight: 400;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-size: var(--spx-font-size-base)
}

._TopicRight_1xxlk_84>:not(:first-child) {
    margin-left: var(--spx-unit-2)
}

._TopicTitle_1xxlk_98 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-weight: 400;
    font-size: var(--spx-font-size-base)
}

html ._ReactQueryDevtools_1xxlk_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._SelectTrigger_11j1p_1 {
    background-color: var(--colours-plain-background);
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--colours-border);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-size: 100%;
    height: var(--spx-unit-12);
    padding: var(--spx-unit-2) var(--spx-unit-3);
    border-radius: var(--spx-unit-1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer
}

._SelectContent_11j1p_17 {
    width: 390px;
    background-color: var(--colours-nav-bar);
    border-radius: var(--spx-radius-sm);
    padding: var(--spx-unit-2);
    box-shadow: var(--spx-shadow-lg);
    animation-duration: .4s;
    animation-timing-function: cubic-bezier(.16,1,.3,1);
    will-change: transform,opacity;
    z-index: 2
}

@media (max-width: 480px) {
    ._SelectContent_11j1p_17 {
        width:334px
    }
}

._SelectContent_11j1p_17[data-side=top] {
    animation-name: _SlideUpAndFade_11j1p_1
}

._SelectContent_11j1p_17[data-side=right] {
    animation-name: _SlideLeftAndFade_11j1p_1
}

._SelectContent_11j1p_17[data-side=bottom] {
    animation-name: _SlideDownAndFade_11j1p_1
}

._SelectContent_11j1p_17[data-side=left] {
    animation-name: _SlideRightAndFade_11j1p_1
}

._SelectItem_11j1p_51 {
    font-size: var(--spx-font-size-base);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    border-radius: var(--spx-radius-sm);
    display: flex;
    align-items: center;
    padding: var(--spx-unit-2) var(--spx-unit-4) var(--spx-unit-2) var(--spx-unit-6);
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none
}

._SelectItem_11j1p_51[data-highlighted] {
    background-color: var(--colours-nav-bar-hover) important;
    cursor: pointer
}

._SelectItemIndicator_11j1p_68 {
    position: absolute;
    left: 0;
    width: var(--spx-unit-6);
    display: inline-flex;
    align-items: center;
    justify-content: center
}

@keyframes _SlideUpAndFade_11j1p_1 {
    0% {
        opacity: 0;
        transform: translateY(2px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes _SlideRightAndFade_11j1p_1 {
    0% {
        opacity: 0;
        transform: translate(-2px)
    }

    to {
        opacity: 1;
        transform: translate(0)
    }
}

@keyframes _SlideDownAndFade_11j1p_1 {
    0% {
        opacity: 0;
        transform: translateY(-2px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes _SlideLeftAndFade_11j1p_1 {
    0% {
        opacity: 0;
        transform: translate(2px)
    }

    to {
        opacity: 1;
        transform: translate(0)
    }
}

html ._ReactQueryDevtools_11j1p_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._DialogTrigger_1s4w4_1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%
}

._LearningPathSelectionDialog_1s4w4_8 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    z-index: 1
}

._LevelsContainer_1s4w4_13 {
    overflow: auto
}

._LearningPath_1s4w4_8 {
    display: flex;
    margin: 0 var(--spx-unit-5) var(--spx-unit-3);
    align-items: center;
    padding: var(--spx-unit-3);
    border-radius: var(--spx-radius-sm);
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: background .1s linear
}

._LearningPath_1s4w4_8:hover,._LearningPath_1s4w4_8._LearningPathSelected_1s4w4_33 {
    background: var(--colours-nested-item-hover)
}

._LevelBadgeContainer_1s4w4_38 {
    display: flex;
    border-radius: var(--spx-radius-full);
    align-items: center;
    white-space: nowrap
}

._LevelBadge_1s4w4_38 {
    display: inline-block;
    border-radius: var(--spx-radius-full);
    padding: var(--spx-unit-1-5) var(--spx-unit-3-5);
    font-size: smaller;
    margin: 0 var(--spx-unit-1);
    font-weight: 700;
    flex: 0 0 auto
}

._LevelSelectItem_1s4w4_55 {
    display: flex
}

._LevelSelectDescription_1s4w4_59 {
    padding-left: var(--spx-unit-3);
    flex: 1 1 auto;
    font-size: var(--spx-font-size-sm)
}

@media (max-width: 480px) {
    ._LevelSelectDescription_1s4w4_59 {
        font-size:var(--spx-font-size-xs)
    }
}

._SelectItemDefault_1s4w4_71 {
    border: var(--spx-border-size-2) solid var(--colours-popover-border);
    cursor: pointer
}

._LevelSelectMenu_1s4w4_76 {
    max-height: var(--radix-select-content-available-height)
}

._LevelBadge_1s4w4_38._LevelStyle1_1s4w4_84 {
    background-color: var(--colours-level-badge-1-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-level-badge-1-text)
}

._LevelBadge_1s4w4_38._LevelStyle2_1s4w4_89 {
    background-color: var(--colours-level-badge-2-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-level-badge-2-text)
}

._LevelBadge_1s4w4_38._LevelStyle3_1s4w4_94 {
    background-color: var(--colours-level-badge-3-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-level-badge-3-text)
}

._LevelBadge_1s4w4_38._LevelStyle4_1s4w4_99 {
    background-color: var(--colours-level-badge-4-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-level-badge-4-text)
}

._LevelBadge_1s4w4_38._LevelStyle5_1s4w4_104 {
    background-color: var(--colours-level-badge-5-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-level-badge-5-text)
}

._IndependentLearningLevelChoiceUnavailable_1s4w4_109 {
    cursor: default;
    opacity: .3
}

._IndependentLearningLevelChoiceUnavailable_1s4w4_109:hover {
    background: none
}

html ._ReactQueryDevtools_1s4w4_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._SeenInHomework_1t6hx_1 {
    display: block;
    font-size: var(--spx-font-size-sm);
    border-radius: 9999px;
    border: var(--spx-border-size-1) solid var(--colours-border);
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 0 var(--spx-unit-2);
    margin-top: var(--spx-unit-1);
    text-align: center
}

@media (max-width: 480px) {
    ._SeenInHomework_1t6hx_1 {
        font-size:var(--spx-font-size-xs)
    }
}

html ._ReactQueryDevtools_1t6hx_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Header_1slcq_1 {
    display: flex;
    justify-content: space-between;
    margin: var(--spx-unit-8) 0
}

@media (max-width: 480px) {
    ._Header_1slcq_1 {
        flex-direction:column;
        align-items: flex-start
    }
}

._BreadcrumbContainer_1slcq_12 {
    display: flex;
    align-items: baseline;
    justify-content: space-between
}

._Breadcrumb_1slcq_12 {
    margin-top: var(--spx-unit-8)
}

@media (max-width: 480px) {
    ._Breadcrumb_1slcq_12 {
        margin-top:var(--spx-unit-4)
    }
}

._TitleContainer_1slcq_26 {
    flex: 1 1 auto;
    font-size: var(--spx-font-size-2xl);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading)
}

@media (max-width: 480px) {
    ._TitleContainer_1slcq_26 {
        font-size:var(--spx-font-size-lg);
        margin-bottom: var(--spx-unit-2)
    }
}

._Title_1slcq_26 {
    font-weight: 700
}

._Code_1slcq_41 {
    font-weight: 400;
    opacity: .43
}

._IndependentLearningProgress_1slcq_46 {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._IndependentLearningProgressInfo_1slcq_53 {
    margin-left: var(--spx-unit-2);
    cursor: pointer
}

._IndependentLearningProgressDialogContent_1slcq_58 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    padding: 0 var(--spx-unit-4) var(--spx-unit-4);
    height: auto
}

._IndependentLearningProgressDialogContent_1slcq_58 ._ProgressDialogObjective_1slcq_63 {
    display: list-item
}

._IndependentLearningPackagesContainer_1slcq_68 {
    padding: var(--spx-unit-2) 0 var(--spx-unit-4)
}

._IndependentLearningPackagesContainer_1slcq_68 ._IndependentLearningTasks_1slcq_71 {
    padding: 0;
    list-style-type: none;
    margin: var(--spx-unit-2) 0 0 0
}

._IndependentLearningPackagesContainer_1slcq_68 * {
    box-sizing: border-box
}

._IndependentLearningNoContentMessage_1slcq_84 {
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-unit-3);
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: var(--spx-unit-2);
    margin: var(--spx-unit-4) auto
}

._IndependentLearningNoContentMessage_1slcq_84>img {
    margin: var(--spx-unit-2)
}

._IndependentLearningNoContentMessage_1slcq_84>div {
    max-width: 300px
}

._IndependentLearningPackage_1slcq_68 {
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-md);
    box-shadow: var(--spx-shadow-lg);
    padding: var(--spx-unit-4);
    margin-bottom: var(--spx-unit-4)
}

._TopicLinksAccordionTrigger_1slcq_111>div {
    flex: none
}

._TopicLinksSectionContainer_1slcq_115 {
    margin: var(--spx-unit-2) 0;
    background-color: var(--colours-nested-item);
    padding: var(--spx-unit-4);
    border-radius: var(--spx-radius-md)
}

._TopicLinksAccordionIcon_1slcq_122 {
    padding-right: var(--spx-unit-3)
}

._NoTopicLinksMessage_1slcq_126 {
    margin-bottom: var(--spx-unit-4)
}

._Badge_1slcq_130 {
    display: flex;
    align-items: center;
    padding: var(--spx-unit-1);
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-full);
    cursor: pointer
}

._BadgeIcon_1slcq_139 {
    margin: 0 var(--spx-unit-2);
    font-weight: 700;
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable)
}

._IndependentLearningPackageTitle_1slcq_145 {
    font-size: var(--spx-font-size-xl);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    font-weight: 700;
    margin: var(--spx-unit-4)
}

._IndependentLearningTask_1slcq_71 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin: var(--spx-unit-2) 0;
    padding: var(--spx-unit-2) 0
}

._IndependentLearningTask_1slcq_71 ._IndependentLearningTaskTitle_1slcq_160 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    padding: var(--spx-unit-2);
    flex: 0 0 auto;
    min-height: var(--spx-unit-24)
}

._IndependentLearningTask_1slcq_71 ._IndependentLearningTaskTitle_1slcq_160 ._TaskIconWrapper_1slcq_170 {
    position: relative
}

._IndependentLearningTask_1slcq_71 ._IndependentLearningTaskTitle_1slcq_160 ._TaskIconWrapper_1slcq_170 ._TaskIcon_1slcq_170 {
    padding: var(--spx-unit-2) var(--spx-unit-8)
}

._IndependentLearningTask_1slcq_71 ._IndependentLearningTaskTitle_1slcq_160 ._TaskIconWrapper_1slcq_170 ._TaskCompleteIconLargeScreen_1slcq_177 {
    display: block;
    position: absolute;
    width: 25%;
    right: 15%;
    bottom: 10%
}

._IndependentLearningTask_1slcq_71 ._IndependentLearningTaskTitle_1slcq_160 ._TaskCompleteIconSmallScreenWrapper_1slcq_186 {
    display: none
}

@media (max-width: 480px) {
    ._IndependentLearningTask_1slcq_71 {
        flex-direction:column;
        padding-top: 0
    }

    ._IndependentLearningTask_1slcq_71 ._IndependentLearningTaskTitle_1slcq_160 {
        flex-direction: row;
        justify-content: flex-start;
        min-height: 0;
        min-height: initial;
        width: 100%;
        position: relative;
        background-color: var(--colours-regular-background);
        border-radius: var(--spx-radius-sm) var(--spx-radius-sm) 0 0
    }

    ._IndependentLearningTask_1slcq_71 ._IndependentLearningTaskTitle_1slcq_160 ._TaskIconWrapper_1slcq_170 ._TaskIcon_1slcq_170 {
        height: var(--spx-unit-10);
        padding: var(--spx-unit-2)
    }

    ._IndependentLearningTask_1slcq_71 ._IndependentLearningTaskTitle_1slcq_160 ._TaskIconWrapper_1slcq_170 ._TaskCompleteIconLargeScreen_1slcq_177 {
        display: none
    }

    ._IndependentLearningTask_1slcq_71 ._IndependentLearningTaskTitle_1slcq_160 ._TaskCompleteIconSmallScreenWrapper_1slcq_186 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        padding: 0 var(--spx-unit-4) var(--spx-unit-2) var(--spx-unit-4)
    }

    ._IndependentLearningTask_1slcq_71 ._IndependentLearningTaskTitle_1slcq_160 ._TaskCompleteIconSmallScreenWrapper_1slcq_186 ._TaskCompleteIconSmallScreen_1slcq_186 {
        height: 25px
    }

    ._IndependentLearningTask_1slcq_71 ._IndependentLearningTaskTitle_1slcq_160 ._TopicLinksSectionContainer_1slcq_115 {
        border-radius: var(--spx-radius-sm)
    }
}

._IndependentLearningTask_1slcq_71 ._IndependentLearningTaskItems_1slcq_237 {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    flex: 1 1 auto;
    margin-bottom: var(--spx-unit-2)
}

@media (max-width: 480px) {
    ._IndependentLearningTask_1slcq_71 ._IndependentLearningTaskItems_1slcq_237 {
        padding-left:var(--spx-unit-2);
        padding-top: var(--spx-unit-2)
    }
}

._IndependentLearningTaskItem_1slcq_237,._IndependentLearningTaskItemDummy_1slcq_254 {
    flex: 1 1 12.5%;
    min-width: 120px
}

._IndependentLearningTaskItem_1slcq_237 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 var(--spx-unit-2) var(--spx-unit-2) 0;
    padding: var(--spx-unit-2);
    min-height: var(--spx-unit-24);
    font-size: 95%;
    cursor: pointer;
    background-color: var(--colours-nested-item);
    border-radius: var(--spx-radius-md)
}

._IndependentLearningTaskItem_1slcq_237:hover {
    background-color: var(--colours-nested-item-hover)
}

._IndependentLearningTaskItem_1slcq_237 ._IndependentLearningTaskItemName_1slcq_279 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading)
}

._IndependentLearningTaskItem_1slcq_237 ._Pill_1slcq_283 {
    margin-top: var(--spx-unit-2);
    font-weight: 700;
    cursor: pointer;
    padding: var(--spx-unit-1) var(--spx-unit-2);
    border-radius: var(--spx-radius-full);
    outline: none;
    background: var(--colours-plain-background);
    border: solid 1px var(--colours-interactable);
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable)
}

._IndependentLearningTaskItem_1slcq_237 ._Pill_1slcq_283._Done_1slcq_294 {
    border: solid 1px var(--colours-correct);
    -webkit-text-fill-color: initial;
    color: var(--colours-correct)
}

._IndependentLearningTaskItem_1slcq_237 ._Pill_1slcq_283._Wrong_1slcq_299 {
    border: solid 1px var(--colours-incorrect);
    -webkit-text-fill-color: initial;
    color: var(--colours-incorrect)
}

._IndependentLearningTaskItem_1slcq_237 ._Pill_1slcq_283._SeeTeacher_1slcq_304 {
    border: solid 1px var(--colours-seek-help);
    -webkit-text-fill-color: initial;
    color: var(--colours-seek-help)
}

._IndependentLearningTaskItemDone_1slcq_311 {
    background-color: var(--colours-nested-item-correct)
}

._IndependentLearningTaskItemDummy_1slcq_254 {
    height: 0;
    margin: 0 var(--spx-unit-2) 0 0
}

._CurriculumLabel_1slcq_320 {
    cursor: pointer;
    margin-left: var(--spx-unit-2)
}

html ._ReactQueryDevtools_1slcq_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._ActivityFeed_1f6w3_1 {
    margin: var(--spx-unit-3) 0;
    padding-bottom: var(--spx-unit-3)
}

._ActivitySection_1f6w3_6 {
    display: flex
}

._ActivityDay_1f6w3_10 {
    display: flex;
    flex-direction: column;
    flex: 1 1;
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-sm);
    margin-bottom: var(--spx-unit-2);
    overflow: hidden
}

._LastDay_1f6w3_20 {
    margin-bottom: 0
}

._Activity_1f6w3_1 {
    display: flex;
    width: 100%;
    padding: var(--spx-unit-3) var(--spx-unit-3);
    text-decoration: none;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary)
}

._Activity_1f6w3_1._Disabled_1f6w3_31 {
    pointer-events: none
}

@media (max-width: 480px) {
    ._Activity_1f6w3_1 {
        flex-direction:column;
        border-top: 1px solid var(--colours-border);
        align-items: center
    }
}

._Activity_1f6w3_1:hover {
    background-color: var(--colours-item-hover)
}

._ActivityLeft_1f6w3_46 {
    display: flex;
    align-items: center;
    flex: 1 1
}

._ActivityLeft_1f6w3_46>:not(:first-child) {
    margin-left: var(--spx-unit-4)
}

@media (max-width: 480px) {
    ._ActivityLeft_1f6w3_46 {
        flex-direction:column
    }

    ._ActivityLeft_1f6w3_46>:not(:first-child) {
        margin-left: 0;
        margin-top: var(--spx-unit-4)
    }
}

._ActivityLeft_1f6w3_46 ._ActivityText_1f6w3_64 {
    display: flex
}

._ActivityRight_1f6w3_69 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: var(--spx-unit-4)
}

@media (max-width: 480px) {
    ._ActivityRight_1f6w3_69 {
        margin-left:0;
        margin-top: var(--spx-unit-4)
    }
}

._Chip_1f6w3_81 {
    font-size: small;
    border-radius: var(--spx-radius-sm);
    padding: var(--spx-unit-1);
    width: var(--spx-unit-24);
    text-align: center
}

._IlChip_1f6w3_89 {
    background-color: var(--colours-plain-background-inverted);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

._HwkChip_1f6w3_94 {
    background-color: var(--colours-plain-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    border: var(--spx-border-size-1) solid var(--colours-border)
}

._Chevron_1f6w3_100 {
    border-radius: var(--spx-radius-full);
    background-color: var(--colours-plain-background-inverted);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    width: var(--spx-unit-5);
    height: var(--spx-unit-5);
    font-size: var(--spx-font-size-xs);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: var(--spx-unit-2)
}

._CurriculumLevelChip_1f6w3_113 {
    font-size: var(--spx-font-size-xs);
    background-color: var(--colours-plain-background);
    border: var(--spx-border-size-1) solid var(--colours-border);
    border-radius: var(--spx-radius-sm);
    padding: var(--spx-unit-1);
    margin-left: var(--spx-unit-2);
    opacity: .6;
    flex-shrink: 0;
    align-self: center
}

._Timeline_1f6w3_125 {
    margin-right: var(--spx-unit-3);
    position: relative;
    padding-top: var(--spx-unit-4)
}

._Timeline_1f6w3_125:before {
    content: "";
    display: block;
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0;
    left: 50%;
    margin-left: -1px;
    z-index: 1;
    background: var(--colours-page-background-gradient)
}

._StarIcon_1f6w3_144 {
    border-radius: var(--spx-radius-full);
    background-color: var(--colours-achievement);
    width: var(--spx-unit-10);
    height: var(--spx-unit-10);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--spx-unit-10);
    z-index: 20;
    position: relative
}

@media (max-width: 480px) {
    ._StarIcon_1f6w3_144 {
        width:var(--spx-unit-6);
        height: var(--spx-unit-6)
    }
}

._StarIcon_1f6w3_144>svg {
    width: var(--spx-unit-4)
}

._Date_1f6w3_166 {
    padding: var(--spx-unit-2) var(--spx-unit-2) 0;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary)
}

html ._ReactQueryDevtools_1f6w3_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._MainContent_bay8e_3 {
    width: 100%;
    padding-bottom: var(--spx-unit-3)
}

._Filters_bay8e_8 {
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-flow: row wrap;
    align-items: stretch;
    margin-bottom: 16px
}

@media (max-width: 480px) {
    ._Filters_bay8e_8 {
        flex-direction:column
    }
}

._SettingsBar_bay8e_21 div {
    flex-grow: 1
}

._CurriculumSelect_bay8e_25 {
    width: 100%
}

._TopicFilterContainer_bay8e_29 {
    display: flex;
    flex-direction: column;
    margin-top: 16px
}

._TopicFilterContainerSearch_bay8e_35 {
    flex: 1 1;
    margin-right: 20px;
    order: 1;
    min-width: 220px
}

@media (max-width: 768px) {
    ._TopicFilterContainerSearch_bay8e_35 {
        min-width:100%;
        order: 3
    }
}

@media not (max-width: 768px) {
    ._TopicFilterContainerSearch_bay8e_35 {
        max-width:50%;
        min-width: 220px
    }
}

._TopicFilterContainerCurriculum_bay8e_53 {
    flex: 1 1;
    margin-right: 20px;
    order: 2
}

._TopicFilterContainerLevel_bay8e_59 {
    flex: 1 1;
    max-width: 180px;
    min-width: 125px;
    order: 2
}

@media (max-width: 480px) {
    ._TopicFilterContainerLevel_bay8e_59 {
        max-width:100%
    }
}

._TopicFilterLabel_bay8e_70 {
    margin-bottom: 10px
}

._LevelSelect_bay8e_75 {
    display: flex;
    background-color: var(--colours-plain-background);
    border-radius: 40px;
    align-items: center;
    white-space: nowrap;
    width: 100%;
    font-size: 100%;
    height: 46px;
    margin: 0;
    padding: 0;
    justify-content: space-evenly
}

._SearchContainer_bay8e_90 {
    flex: 1 1
}

._SearchResults_bay8e_94 {
    background: var(--colours-regular-background);
    border-radius: 5px;
    position: absolute;
    width: 100%;
    top: 100%;
    box-sizing: border-box;
    box-shadow: var(--spx-shadow-lg);
    margin-top: var(--spx-unit-2);
    z-index: var(--spx-layer-overlay-3);
    transition: margin-top .2s ease-out,opacity .2s ease-out
}

._SearchLoadingText_bay8e_109 {
    margin-left: var(--spx-unit-3)
}

._SearchResultsHide_bay8e_113 {
    pointer-events: none;
    margin-top: -20px;
    opacity: 0
}

._SearchSummary_bay8e_119 {
    font-size: 17px;
    padding: 10px 15px;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary);
    display: flex;
    justify-content: space-between;
    align-items: center
}

._SearchSummaryClear_bay8e_128 {
    text-decoration: underline;
    cursor: pointer
}

._SearchSummaryClear_bay8e_128:hover {
    text-decoration: none
}

._SearchResultsList_bay8e_137 {
    padding: 10px;
    border-top: 1px solid var(--palette-white)
}

._SearchResult_bay8e_94 {
    background: var(--colours-item);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    padding: 10px 25px 10px 15px;
    font-size: 18px;
    margin-bottom: 5px;
    border-radius: 3px;
    position: relative
}

._SearchResult_bay8e_94:hover {
    background: var(--colours-item-hover);
    cursor: pointer
}

._SearchResult_bay8e_94:last-of-type {
    margin-bottom: 0
}

._SearchResultLocation_bay8e_161 {
    font-size: .7em;
    display: block;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary)
}

._SearchResultLocation_bay8e_161>i {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary)
}

._SearchResultChevron_bay8e_172 {
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    width: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center
}

._SearchInputContainer_bay8e_184 {
    position: relative
}

._SearchClear_bay8e_188 {
    border-radius: 20px;
    top: 50%;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    margin-top: -15px;
    right: 10px;
    cursor: pointer
}

._SearchClear_bay8e_188:hover {
    opacity: .9
}

._Search_bay8e_90 {
    background-color: var(--colours-plain-background);
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--colours-border);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-size: 100%;
    height: 48px;
    padding: 8px 12px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center
}

._SearchResultCode_bay8e_222 {
    opacity: .8
}

._SearchResultCode_bay8e_222:before {
    content: "-";
    padding: 0 5px
}

._SearchResultCodeHighlight_bay8e_231 {
    font-weight: 700
}

._StrandsList_bay8e_236 {
    display: grid;
    padding: 8px 0;
    gap: 16px 16px;
    grid-template-columns: 1fr 1fr
}

@media (max-width: 768px) {
    ._StrandsList_bay8e_236 {
        grid-template-columns:1fr
    }
}

._StrandButton_bay8e_247 {
    background: linear-gradient(126.42deg,var(--colours-primary-gradient-start) 29.08%,var(--colours-primary-gradient-stop) 96.52%);
    box-shadow: var(--spx-shadow-lg);
    border-radius: 12px;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    display: flex;
    align-items: center;
    font-size: var(--spx-font-size-2xl);
    font-weight: 700;
    padding: var(--spx-unit-4) var(--spx-unit-7);
    cursor: pointer
}

._StrandButton_bay8e_247:hover {
    background: linear-gradient(126.42deg,var(--colours-primary-gradient-stop) 29.08%,var(--colours-primary-gradient-start) 96.52%)
}

._StrandButton_bay8e_247 ._StrandName_bay8e_271 {
    flex: 1 1 auto;
    grid-area: text;
    margin-left: var(--spx-unit-2);
    order: 1
}

._StrandButton_bay8e_247 ._StrandIcon_bay8e_278 {
    flex: 0 0 auto;
    grid-area: icon;
    opacity: .3;
    margin: 16px auto;
    height: 55px;
    order: 2
}

._StrandButton_bay8e_247 ._StrandChevron_bay8e_287 {
    flex: 0 0 auto;
    display: none;
    justify-content: center;
    align-items: center;
    margin: 0;
    border-radius: 100%;
    background-color: var(--colours-text-body-inverted);
    -webkit-text-fill-color: initial;
    color: var(--colours-primary-gradient-stop);
    width: var(--spx-unit-8);
    height: var(--spx-unit-8);
    order: 3
}

._StrandButton_bay8e_247 ._StrandChevron_bay8e_287>svg {
    height: var(--spx-unit-5);
    margin-left: 2px
}

@media (max-width: 480px) {
    ._StrandButton_bay8e_247 {
        grid-template-areas:"icon text chevron";
        grid-template-columns: 10% 80% 10%;
        padding: var(--spx-unit-2) var(--spx-unit-4)
    }

    ._StrandButton_bay8e_247 ._StrandName_bay8e_271 {
        padding: var(--spx-unit-2);
        order: 2
    }

    ._StrandButton_bay8e_247 ._StrandIcon_bay8e_278 {
        height: var(--spx-font-size-2xl);
        margin: 0 auto;
        order: 1
    }

    ._StrandButton_bay8e_247 ._StrandChevron_bay8e_287 {
        display: flex
    }
}

._OtherCurriculaResultsText_bay8e_328 {
    opacity: .8
}

._CurriculumText_bay8e_332 {
    display: block;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    padding: var(--spx-unit-1)
}

._Separator_bay8e_338 {
    display: inline;
    margin: 0 var(--spx-unit-2)
}

@media (max-width: 768px) {
    ._Separator_bay8e_338 {
        display:none
    }
}

._SearchContext_bay8e_347 {
    display: flex;
    flex-direction: row
}

@media (max-width: 768px) {
    ._SearchContext_bay8e_347 {
        flex-direction:column
    }
}

._ExtrasList_bay8e_356 {
    display: grid;
    padding: 8px 0;
    gap: 16px 16px;
    grid-template-columns: 1fr
}

._TimesTablesButton_bay8e_363 {
    box-shadow: var(--spx-shadow-lg);
    border-radius: 12px;
    font-size: var(--spx-font-size-2xl);
    font-weight: 700;
    cursor: pointer;
    padding: var(--spx-unit-6) var(--spx-unit-7);
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable);
    background-color: var(--colours-background-info);
    background-repeat: no-repeat;
    background-position: right;
    background-image: url(./ILTimesTablesCardBackground-Wkz2vrP0.png);
    background-size: 65%
}

._TimesTablesButton_bay8e_363:hover {
    background-color: var(--colours-background-highlighted)
}

html ._ReactQueryDevtools_bay8e_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Title_ppldj_3 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    font-size: var(--spx-font-size-4xl);
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 32px
}

._TabList_ppldj_11 {
    width: 100%;
    display: flex;
    border-bottom: 1px solid var(--colours-border);
    align-items: flex-end
}

._TabList_ppldj_11>:not(:first-child) {
    margin-left: var(--spx-unit-5)
}

._Tab_ppldj_11 {
    text-align: center;
    background-color: var(--colours-plain-background);
    height: 48px;
    width: 168px;
    border-radius: 6px 6px 0 0;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    font-size: var(--spx-font-size-lg);
    font-weight: 700;
    cursor: pointer
}

._Tab_ppldj_11:hover {
    background-color: var(--colours-tab-hover)
}

._Tab_ppldj_11[data-state=active] {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    background-color: var(--colours-selected);
    height: 53px
}

html ._ReactQueryDevtools_ppldj_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Leaderboard_p8oan_1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 700px;
    max-height: 100%;
    margin: 0 auto;
    padding: var(--spx-unit-8);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    width: 100%
}

@media (max-width: 768px) {
    ._Leaderboard_p8oan_1 {
        padding:var(--spx-unit-4)
    }
}

._Leaderboard_p8oan_1 h1 {
    margin: 0
}

._Table_p8oan_22 {
    min-width: 90%;
    border-collapse: collapse;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto
}

._Row_p8oan_32 {
    flex: 0 0 auto;
    display: flex;
    font-size: var(--spx-font-size-base);
    align-items: center;
    margin-bottom: 5px;
    width: 98%
}

._Row_p8oan_32 ._RowInformation_p8oan_40 {
    display: flex;
    align-items: center;
    background-color: var(--colours-plain-background);
    border-radius: 5px;
    box-shadow: var(--library-dropshadow);
    flex: 1 1;
    padding: var(--spx-unit-0-5) 5px
}

._Row_p8oan_32 ._RowInformation_p8oan_40._NoXP_p8oan_49 {
    background: var(--colours-regular-background)
}

._Row_p8oan_32 ._RowInformation_p8oan_40._Clickable_p8oan_53 {
    cursor: pointer
}

._Row_p8oan_32 ._RowInformation_p8oan_40._Clickable_p8oan_53:hover {
    background-color: var(--colours-light-background)
}

._RowYou_p8oan_63 {
    width: 100%
}

._RowYou_p8oan_63 ._RowInformation_p8oan_40 {
    background: var(--colours-secondary);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-on-primary)
}

._RowYou_p8oan_63 ._Name_p8oan_71 {
    font-weight: 700
}

._RowYou_p8oan_63 ._PositionNumber_p8oan_75 {
    background-color: var(--colours-plain-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._RowClickable_p8oan_81 {
    cursor: pointer
}

._RowClickable_p8oan_81:hover {
    background-color: var(--colours-light-background)
}

._Position_p8oan_75 {
    font-weight: 700;
    width: 40px;
    font-size: var(--spx-font-size-base);
    text-align: left;
    flex: 0 0 auto
}

._Position_p8oan_75._Numerical_p8oan_96 {
    padding-left: var(--spx-unit-2-5)
}

._Position_p8oan_75._Numerical_p8oan_96[data-digits="3"] {
    padding-left: var(--spx-unit-1-5)
}

._Position_p8oan_75._Numerical_p8oan_96[data-digits="4"] {
    padding-left: 0
}

._PositionNumber_p8oan_75 {
    display: inline-block;
    min-width: 24px;
    background-color: var(--colours-light-background);
    border-radius: 100px;
    text-align: center
}

[data-digits="2"] ._PositionNumber_p8oan_75 {
    width: 25px;
    line-height: 25px
}

[data-digits="3"] ._PositionNumber_p8oan_75 {
    width: 35px;
    line-height: 35px
}

[data-digits="4"] ._PositionNumber_p8oan_75 {
    width: 45px;
    line-height: 45px
}

._Name_p8oan_71 {
    padding: var(--spx-unit-2-5) var(--spx-unit-2-5);
    flex: 1 1 auto;
    text-align: left;
    display: flex;
    align-items: center;
    flex-wrap: wrap
}

._Name_p8oan_71 ._SecondaryName_p8oan_146 {
    -webkit-text-fill-color: initial;
    color: var(--colours-read-text)
}

._Experience_p8oan_151 {
    width: 100px;
    text-align: right;
    padding-right: var(--spx-unit-2-5);
    white-space: nowrap
}

._Title_p8oan_158 {
    font-size: var(--spx-font-size-2xl);
    text-align: center;
    margin: 0 auto var(--spx-unit-8);
    flex: 0 0 auto
}

._PercentileBar_p8oan_165 {
    isolation: isolate;
    width: 100%;
    background-color: var(--colours-seek-help);
    font-weight: 700;
    text-align: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-on-primary);
    margin: 10px 0;
    border-radius: 5px;
    position: relative
}

._PercentileBar_p8oan_165:after {
    z-index: -1;
    content: "";
    position: absolute;
    top: -6px;
    left: calc(50% - 5px);
    height: 20px;
    width: 20px;
    background-color: var(--colours-seek-help);
    border-radius: 2px;
    transform: rotate(150deg) skew(30deg) scaleY(.85)
}

._SelectorContainer_p8oan_190 {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    margin: 0 auto 15px;
    width: 100%;
    border-bottom: var(--spx-border-size-2) solid var(--colours-disabled-text)
}

@media (max-width: 768px) {
    ._SelectorContainer_p8oan_190 {
        font-size:var(--spx-font-size-sm)
    }
}

@media (max-width: 480px) {
    ._SelectorContainer_p8oan_190 {
        font-size:var(--spx-font-size-xs);
        border-bottom: none
    }
}

._OptedOutLeaderboardImage_p8oan_209 {
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-md);
    max-width: 100%
}

html ._ReactQueryDevtools_p8oan_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

button {
    all: unset
}

._SelectTrigger_1hssg_6 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--spx-radius-base);
    padding: 0 var(--spx-unit-1-5) 0 var(--spx-unit-2-5);
    margin: auto 0 auto var(--spx-unit-2-5);
    line-height: 1;
    min-width: 110px;
    height: var(--spx-unit-9);
    background-color: var(--colours-plain-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-primary);
    cursor: pointer
}

._SelectTrigger_1hssg_6._Wide_1hssg_20 {
    min-width: 230px
}

._SelectTrigger_1hssg_6:hover {
    outline: solid 1px var(--colours-primary)
}

@media (max-width: 768px) {
    ._SelectTrigger_1hssg_6 {
        min-width:90px
    }
}

@media (max-width: 480px) {
    ._SelectTrigger_1hssg_6 {
        min-width:80px
    }
}

._SelectIcon_1hssg_37 {
    -webkit-text-fill-color: initial;
    color: var(--colours-primary)
}

._SelectContent_1hssg_41 {
    overflow: hidden;
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-base);
    box-shadow: var(--spx-shadow-sm-dark)
}

@media (max-width: 768px) {
    ._SelectContent_1hssg_41 {
        font-size:var(--spx-font-size-sm)
    }
}

@media (max-width: 480px) {
    ._SelectContent_1hssg_41 {
        font-size:var(--spx-font-size-xs)
    }
}

._SelectViewport_1hssg_56 {
    padding: var(--spx-unit-1-5) 0 var(--spx-unit-1-5) var(--spx-unit-1-5)
}

._SelectItem_1hssg_60 {
    line-height: 1.5em;
    border-radius: var(--spx-radius-sm);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: var(--spx-unit-1-5);
    margin-right: 0;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-text-fill-color: initial;
    color: var(--colours-primary)
}

._SelectItem_1hssg_60:hover {
    font-weight: 700;
    outline: none
}

._SelectItemIndicator_1hssg_79 {
    position: absolute;
    right: 0;
    width: var(--spx-unit-6);
    display: inline-flex;
    align-items: center;
    justify-content: center
}

html ._ReactQueryDevtools_1hssg_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Tabs_1q254_1 {
    display: flex;
    justify-content: center;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    margin: 0 auto 0 0;
    font-weight: 700
}

._Tabs_1q254_1>button {
    cursor: pointer;
    padding: var(--spx-unit-2-5);
    margin-right: var(--spx-unit-6)
}

@media (max-width: 768px) {
    ._Tabs_1q254_1>button {
        margin-right:var(--spx-unit-2)
    }
}

._Tabs_1q254_1>button._Active_1q254_18 {
    margin-bottom: -1px;
    border-bottom: var(--spx-border-size-3) solid var(--colours-selected)
}

._Pills_1q254_25 {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: var(--spx-unit-1-5) 0;
    border-radius: var(--spx-radius-full);
    margin: 0 0 0 auto;
    font-weight: 700;
    background-color: var(--colours-plain-background);
    border: none
}

._Pills_1q254_25>button {
    flex: 1 1 content;
    cursor: pointer;
    margin: 0 var(--spx-unit-1);
    padding: var(--spx-unit-2) var(--spx-unit-1);
    border-radius: var(--spx-radius-full);
    width: 100%;
    text-align: center
}

._Pills_1q254_25>button._Active_1q254_18 {
    background-color: var(--colours-primary);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-on-primary)
}

html ._ReactQueryDevtools_1q254_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._NameChooser_1vaew_1 {
    flex: 0 0 auto;
    padding: var(--spx-unit-1) var(--spx-unit-1) var(--spx-unit-1) var(--spx-unit-4);
    background: var(--colours-regular-background);
    border-radius: var(--spx-radius-base);
    width: 100%;
    box-shadow: var(--library-dropshadow);
    display: flex;
    align-items: center;
    margin-bottom: var(--spx-unit-4)
}

._NameChooser_1vaew_1 ._NameChooserName_1vaew_12 {
    flex: 1 1 auto
}

._NameChooser_1vaew_1 strong {
    margin-right: var(--spx-unit-3)
}

._NameChooser_1vaew_1 button {
    cursor: pointer
}

._TriggerButton_1vaew_25 {
    font-size: var(--spx-font-size-base);
    text-align: center;
    margin-left: var(--spx-unit-2)
}

@media (max-width: 768px) {
    ._TriggerButton_1vaew_25 {
        font-size:var(--spx-font-size-sm);
        margin-left: var(--spx-unit-1)
    }
}

._DialogContent_1vaew_36 {
    padding: var(--spx-unit-10) var(--spx-unit-16);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-size: var(--spx-font-size-lg);
    max-width: var(--spx-size-3xl)
}

@media (max-width: 480px) {
    ._DialogContent_1vaew_36 {
        max-width:none;
        max-width: initial;
        padding: var(--spx-unit-5) var(--spx-unit-8);
        font-size: var(--spx-font-size-sm)
    }
}

._DialogContent_1vaew_36 ._DialogContent_1vaew_36:focus {
    outline: none
}

._DialogContent_1vaew_36 ._DialogTitle_1vaew_52 {
    text-align: center;
    margin: 0;
    font-weight: 700;
    font-size: var(--spx-font-size-3xl)
}

@media (max-width: 768px) {
    ._DialogContent_1vaew_36 ._DialogTitle_1vaew_52 {
        font-size:var(--spx-font-size-2xl)
    }
}

._DialogContent_1vaew_36 ._DialogDescription_1vaew_63 {
    margin: var(--spx-unit-5) 0
}

._DialogContent_1vaew_36 ._DialogDescription_1vaew_63 ._Subheader_1vaew_66 {
    font-size: var(--spx-font-size-xl);
    font-weight: 700;
    margin: 0 0 var(--spx-unit-4)
}

@media (max-width: 768px) {
    ._DialogContent_1vaew_36 ._DialogDescription_1vaew_63 ._Subheader_1vaew_66 {
        font-size:var(--spx-font-size-xl)
    }
}

._DialogContent_1vaew_36 ._DialogDescription_1vaew_63 span {
    display: block;
    margin: 0
}

._DialogContent_1vaew_36 ._DialogDescription_1vaew_63 a {
    -webkit-text-fill-color: initial;
    color: var(--colours-primary)
}

._DialogContent_1vaew_36 ._DialogDescription_1vaew_63 a:hover {
    -webkit-text-fill-color: initial;
    color: var(--colours-primary-dark)
}

._DialogContent_1vaew_36 ._DialogButtonContainer_1vaew_90 {
    display: flex;
    justify-content: center;
    margin-top: var(--spx-unit-8)
}

._DialogContent_1vaew_36 ._DialogButtonContainer_1vaew_90 button {
    margin: 0 var(--spx-unit-2-5)
}

@media (max-width: 480px) {
    ._DialogContent_1vaew_36 ._DialogButtonContainer_1vaew_90 {
        margin-top:var(--spx-unit-8)
    }
}

._NameRandomiserBar_1vaew_105 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--spx-font-size-xl);
    background: var(--colours-regular-background);
    border-radius: var(--spx-radius-xl);
    width: 100%;
    padding: var(--spx-unit-1) var(--spx-unit-1) var(--spx-unit-1) var(--spx-unit-4)
}

@media (max-width: 480px) {
    ._NameRandomiserBar_1vaew_105 {
        font-size:var(--spx-font-size-lg);
        flex-direction: column;
        padding: var(--spx-unit-2) var(--spx-unit-2) var(--spx-unit-2) var(--spx-unit-4)
    }

    ._NameRandomiserBar_1vaew_105 span {
        margin-bottom: var(--spx-unit-1)
    }
}

._SwitchContainer_1vaew_126 {
    display: flex;
    align-items: center
}

._SwitchContainer_1vaew_126>:first-child:after {
    content: "On";
    font-weight: 700;
    visibility: hidden;
    display: block;
    height: 0
}

._SwitchContainer_1vaew_126 ._Bold_1vaew_139 {
    font-weight: 700
}

._Switch_1vaew_126 {
    margin: 0 var(--spx-unit-2)
}

._SwitchRoot_1vaew_148 {
    width: 59px;
    height: 35px;
    border-radius: var(--spx-radius-full);
    position: relative;
    box-shadow: 0 0 0 1px var(--colours-interactable) inset
}

._SwitchThumb_1vaew_156 {
    display: block;
    width: 23px;
    height: 23px;
    background-color: var(--colours-opted-in);
    border-radius: var(--spx-radius-full);
    box-shadow: 0 2px 2px var(--black-a7);
    transition-property: transform,background-color;
    transition-duration: .1s;
    transform: translate(6px)
}

._SwitchThumb_1vaew_156[data-state=checked] {
    transform: translate(30px);
    background-color: var(--colours-opted-out)
}

html ._ReactQueryDevtools_1vaew_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._RibbonContainer_nh9ba_1 {
    flex: 0 0 auto;
    position: relative;
    width: 90%;
    margin-bottom: 15px
}

._RibbonContainer_nh9ba_1 ._RibbonBar_nh9ba_10 {
    position: relative;
    width: 100%;
    margin: 10px 0;
    background-color: var(--colours-correct);
    padding: 6px 0;
    border-radius: 5px;
    height: 57px
}

._RibbonContainer_nh9ba_1 ._Tassel_nh9ba_20 {
    position: absolute;
    top: 20px
}

._RibbonContainer_nh9ba_1 ._Tassel_nh9ba_20._Left_nh9ba_24 {
    left: -25px
}

._RibbonContainer_nh9ba_1 ._Tassel_nh9ba_20._Right_nh9ba_28 {
    right: -25px
}

html ._ReactQueryDevtools_nh9ba_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._BannerHeading_1563y_1 h1 {
    font-size: var(--spx-font-size-lg);
    font-weight: 700;
    text-align: center;
    margin-top: 5px;
    line-height: 1;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    text-shadow: 2px 2px var(--colours-transparent-darken-20)
}

._BannerHeading_1563y_1 p {
    font-size: var(--spx-font-size-sm);
    font-weight: 700;
    text-align: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-complete-text-dark);
    margin: 0
}

._BannerHeading_1563y_1 ._Crown_1563y_20 {
    margin: 0 auto;
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    top: -20px
}

html ._ReactQueryDevtools_1563y_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._IncorrectTextContainer_t572i_1 {
    text-align: center;
    padding: var(--spx-unit-5) var(--spx-unit-16) var(--spx-unit-10) var(--spx-unit-16)
}

@media (max-width: 480px) {
    ._IncorrectTextContainer_t572i_1 {
        padding:var(--spx-unit-5) 0 var(--spx-unit-10)
    }
}

._IncorrectHeading_t572i_10 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    font-weight: 500;
    font-size: 24px
}

._IncorrectMessage_t572i_16 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-size: 17px;
    padding-top: var(--spx-unit-3)
}

html ._ReactQueryDevtools_t572i_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._TextContainer_1gvq7_8 {
    text-align: center;
    padding: var(--spx-unit-5) var(--spx-unit-32) var(--spx-unit-10) var(--spx-unit-32)
}

@media (max-width: 1024px) {
    ._TextContainer_1gvq7_8 {
        padding:var(--spx-unit-5) var(--spx-unit-5) var(--spx-unit-10) var(--spx-unit-5)
    }
}

@media (max-width: 768px) {
    ._TextContainer_1gvq7_8 {
        padding:var(--spx-unit-5) 0 var(--spx-unit-10) 0
    }
}

._Heading_1gvq7_21 {
    -webkit-text-fill-color: initial;
    color: var(--colours-complete);
    font-weight: 500;
    font-size: var(--spx-font-size-6xl)
}

@media (max-width: 768px) {
    ._Heading_1gvq7_21 {
        font-size:var(--spx-font-size-4xl)
    }
}

._SubHeading_1gvq7_31 {
    font-size: var(--spx-font-size-3xl);
    margin-bottom: var(--spx-unit-5);
    font-weight: 500
}

@media (max-width: 768px) {
    ._SubHeading_1gvq7_31 {
        font-size:var(--spx-font-size-2xl)
    }
}

._AccuracyText_1gvq7_41 {
    background: var(--colours-light-background);
    padding: var(--spx-unit-5);
    border-radius: var(--spx-radius-md);
    font-size: var(--spx-font-size-xl);
    font-weight: 700
}

._AccuracyText_1gvq7_41._Correct_1gvq7_48 {
    -webkit-text-fill-color: initial;
    color: var(--colours-complete-text)
}

._AccuracyText_1gvq7_41._Incorrect_1gvq7_52 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-warning)
}

@media (max-width: 768px) {
    ._AccuracyText_1gvq7_41 {
        font-size:var(--spx-font-size-lg)
    }
}

._Message_1gvq7_61 {
    padding: var(--spx-unit-5);
    font-size: var(--spx-font-size-xl);
    font-weight: 400
}

@media (max-width: 768px) {
    ._Message_1gvq7_61 {
        font-size:var(--spx-font-size-md)
    }
}

html ._ReactQueryDevtools_1gvq7_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._CorrectTextContainer_1hymp_1 {
    text-align: center;
    padding: var(--spx-unit-5) 0 var(--spx-unit-10) 0
}

._CorrectHeading_1hymp_6 {
    -webkit-text-fill-color: initial;
    color: var(--colours-complete);
    font-weight: 500;
    font-size: 32px
}

._CorrectMessage_1hymp_12 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-size: 17px
}

html ._ReactQueryDevtools_1hymp_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._WACContainer_1cxo7_1 {
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    overflow-y: auto
}

._WACContent_1cxo7_12 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 var(--spx-unit-6);
    width: 90%;
    flex: 1 0 auto
}

._HelpLink_1cxo7_22 {
    margin-bottom: var(--spx-unit-3)
}

._Subtitle_1cxo7_26 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    margin-bottom: var(--spx-unit-6);
    padding: 0 var(--spx-unit-6);
    text-align: center
}

._Bookwork_1cxo7_33 {
    flex: 0 0 auto;
    margin-bottom: var(--spx-unit-6)
}

._WACInput_1cxo7_38 {
    width: 100%;
    padding: 0 var(--spx-unit-3) var(--spx-unit-4)
}

._ButtonsContainer_1cxo7_43 {
    width: 100%;
    background-color: var(--colours-plain-background);
    padding: var(--spx-unit-5);
    transition: box-shadow .2s ease-out;
    z-index: 1;
    display: flex;
    justify-content: center
}

._Buttons_1cxo7_43 {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
}

._Buttons_1cxo7_43>:not(:first-child) {
    margin-left: var(--spx-unit-3)
}

@media (max-width: 480px) {
    ._Buttons_1cxo7_43 {
        flex-direction:column
    }

    ._Buttons_1cxo7_43>* {
        width: calc(100% - var(--spx-unit-6))
    }

    ._Buttons_1cxo7_43>*:not(:first-child) {
        margin-left: 0;
        margin-top: var(--spx-unit-3)
    }
}

._ButtonSentinel_1cxo7_77 {
    margin-bottom: 1px
}

._BoxShadow_1cxo7_81 {
    box-shadow: var(--spx-shadow-lg-top)
}

._ChoiceWACOptions_1cxo7_85 {
    display: flex;
    justify-content: center
}

._ChoiceWACOptionsGrid_1cxo7_90 {
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    justify-content: center;
    width: 100%;
    grid-gap: var(--spx-unit-4)
}

@media (max-width: 768px) {
    ._ChoiceWACOptionsGrid_1cxo7_90 {
        grid-template-columns:repeat(2,minmax(0,1fr))
    }
}

@media (max-width: 480px) {
    ._ChoiceWACOptionsGrid_1cxo7_90 {
        grid-template-columns:minmax(0,1fr)
    }
}

._ChoiceWACOptionsGrid_1cxo7_90>._WACGridOption_1cxo7_119 {
    background-color: var(--colours-plain-background);
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: auto;
    padding-top: 8px
}

._ChoiceWACOptionsGrid_1cxo7_90 ._Item_1cxo7_131 {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 100%;
    flex-grow: 1
}

._ChoiceWACOptionsGrid_1cxo7_90 ._Item_1cxo7_131 .answer-markup {
    white-space: pre
}

._WACOption_1cxo7_145 {
    background-color: var(--colours-light-background);
    border-radius: 10px;
    justify-content: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
    min-height: 150px;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 -3px 0 0 var(--colours-dark-background)
}

._WACOption_1cxo7_145 .answer {
    align-items: flex-start
}

._WACOption_1cxo7_145 .answer-block {
    background-color: var(--colours-background-white-transparent);
    border-radius: var(--spx-unit-2);
    border: 1px solid var(--colours-border);
    display: inline-block;
    margin: 3px;
    padding: 5px;
    white-space: nowrap
}

._WACOption_1cxo7_145 .answer-part {
    align-items: center;
    display: flex;
    white-space: nowrap
}

._WACOption_1cxo7_145._Selected_1cxo7_183 {
    background-color: var(--colours-selected);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    box-shadow: inset 0 -3px 0 0 var(--colours-selected)
}

._WACOption_1cxo7_145._Selected_1cxo7_183 .answer-block {
    border-color: var(--colours-plain-background);
    background-color: var(--colours-selected)
}

._BookworkPromptContainer_1cxo7_195 {
    display: flex;
    flex-direction: column;
    align-items: center
}

._BookworkCheckHeading_1cxo7_201 {
    padding-bottom: 10px
}

._TrainingWarning_1cxo7_205 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    text-align: center;
    font-size: var(--spx-font-size-lg);
    padding: 0 var(--spx-unit-6)
}

html ._ReactQueryDevtools_1cxo7_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._FTQContainer_1nz2a_1 {
    width: 100%;
    margin: 5% auto 0;
    height: calc(100% - 60px);
    padding: var(--spx-unit-4);
    text-align: center;
    z-index: 0;
    overflow-y: auto
}

@media (max-width: 768px) {
    ._FTQContainer_1nz2a_1 {
        margin-top:0
    }
}

@media (max-height: 700px) {
    ._FTQContainer_1nz2a_1 {
        margin-top:0
    }
}

._FTQWelcomeBanner_1nz2a_19 {
    max-width: 900px;
    margin: 0 auto;
    padding: var(--spx-unit-3);
    background-color: var(--colours-background-info);
    border-radius: var(--spx-radius-sm);
    font-weight: 500;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._FTQTitle_1nz2a_29 {
    font-size: var(--spx-font-size-2xl)
}

._FTQTitle_1nz2a_29>span {
    font-weight: 700
}

._FTQCardContainer_1nz2a_37 {
    display: flex;
    justify-content: center
}

@media (max-width: 768px) {
    ._FTQCardContainer_1nz2a_37 {
        display:inline-block;
        margin: 0 auto
    }
}

._FTQCard_1nz2a_37 {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    padding: var(--spx-unit-10) var(--spx-unit-12);
    border-radius: var(--spx-radius-lg);
    background-color: var(--colours-plain-background);
    box-shadow: var(--spx-shadow-md-dark);
    cursor: pointer;
    text-align: center
}

._FTQCard_1nz2a_37 img {
    max-height: 80px;
    width: auto
}

._FTQCard_1nz2a_37._Blue_1nz2a_64 {
    background: linear-gradient(126.42deg,var(--colours-primary-gradient-start) 29.08%,var(--colours-primary-gradient-stop) 96.52%);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

._FTQCard_1nz2a_37:first-of-type {
    margin-right: var(--spx-unit-6)
}

._FTQCard_1nz2a_37 button img {
    height: 16px
}

@media (max-width: 768px) {
    ._FTQCard_1nz2a_37:first-of-type {
        margin-right:0;
        margin-bottom: var(--spx-unit-6)
    }
}

@media (max-width: 480px) {
    ._FTQCard_1nz2a_37 {
        padding:var(--spx-unit-6) var(--spx-unit-8)
    }
}

._FTQBottomBar_1nz2a_93 {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: var(--colours-question-background);
    z-index: 1
}

html ._ReactQueryDevtools_1nz2a_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._OldOuterContainer_11ux7_2 {
    display: flex;
    align-items: center
}

._OldOuterContainer_11ux7_2 ._RewardsPlaqueContainer_11ux7_6 {
    width: 300px;
    position: relative;
    margin-right: -130px
}

._OldOuterContainer_11ux7_2 ._Container_11ux7_12 {
    background-color: var(--colours-light-background);
    padding: var(--spx-unit-6) var(--spx-unit-8) var(--spx-unit-4) var(--spx-unit-16);
    border-radius: var(--spx-radius-lg);
    font-weight: 700
}

._OldOuterContainer_11ux7_2 ._ProgressBarContainer_11ux7_19 {
    width: 250px
}

._OldOuterContainer_11ux7_2 ._ProgressBarContainer_11ux7_19>span {
    display: block;
    margin-top: var(--spx-unit-2);
    text-align: center
}

._OuterContainer_11ux7_30 {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 90%;
    margin-left: var(--spx-unit-12);
    position: relative
}

@media (min-width: 480px) {
    ._OuterContainer_11ux7_30 {
        margin-left:var(--spx-unit-18);
        max-width: min(80%,var(--spx-size-md))
    }
}

._OuterContainer_11ux7_30 ._RewardsPlaqueContainer_11ux7_6 {
    width: var(--spx-unit-24);
    position: absolute;
    transform: translate(-50%)
}

@media (min-width: 480px) {
    ._OuterContainer_11ux7_30 ._RewardsPlaqueContainer_11ux7_6 {
        width:var(--spx-unit-36)
    }
}

._OuterContainer_11ux7_30 ._Container_11ux7_12 {
    background-color: var(--colours-light-background);
    padding: var(--spx-unit-6) var(--spx-unit-6) var(--spx-unit-4) var(--spx-unit-14);
    border-radius: var(--spx-radius-lg);
    font-weight: 700;
    width: 100%
}

@media (min-width: 480px) {
    ._OuterContainer_11ux7_30 ._Container_11ux7_12 {
        padding-left:var(--spx-unit-20)
    }
}

._OuterContainer_11ux7_30 ._Container_11ux7_12 ._ProgressBarContainer_11ux7_19 {
    width: 100%;
    font-size: var(--spx-font-size-xs);
    white-space: nowrap
}

@media (min-width: 480px) {
    ._OuterContainer_11ux7_30 ._Container_11ux7_12 ._ProgressBarContainer_11ux7_19 {
        font-size:var(--spx-font-size-base)
    }
}

._OuterContainer_11ux7_30 ._Container_11ux7_12 ._ProgressBarContainer_11ux7_19>span {
    display: block;
    margin-top: var(--spx-unit-2);
    text-align: center
}

html ._ReactQueryDevtools_11ux7_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._AlertBody_1xtfm_1 {
    padding: var(--spx-border-size-3) var(--spx-border-size-5);
    text-align: center;
    border-radius: var(--spx-border-size-5);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._AlertHeading_1xtfm_8 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading)
}

._AlertButtonHolder_1xtfm_12 {
    padding: var(--spx-border-size-5);
    text-align: center
}

._AlertButton_1xtfm_12 {
    background: var(--colours-interactable);
    border-radius: var(--spx-border-size-5);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    padding: var(--spx-border-size-3) var(--spx-border-size-5)
}

._AlertButton_1xtfm_12:hover {
    opacity: .5;
    cursor: pointer
}

._BoldText_1xtfm_29 {
    font-weight: 700
}

._TimesTablesTarget_1xtfm_33 {
    background: var(--colours-transparent-darken);
    padding: var(--spx-border-size-3) var(--spx-border-size-5);
    border-radius: var(--spx-border-size-5);
    margin: var(--spx-border-size-5)
}

._TimesTablesTargetHolder_1xtfm_40 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 600px;
    margin: 0 auto
}

html ._ReactQueryDevtools_1xtfm_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._BackgroundContainer_jhewb_1 {
    height: 100%;
    width: 200%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    transition: left .2s ease-in-out;
    background: linear-gradient(90.01deg,var(--colours-primary-gradient-start) 13.04%,var(--colours-primary-gradient-stop) 40.94%,var(--colours-primary-gradient-start) 86.96%)
}

._BtnMenuItem_jhewb_17 {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    padding: var(--spx-border-size-3);
    cursor: pointer;
    border-radius: var(--spx-border-size-4);
    text-align: center
}

._BtnMenuItem_jhewb_17:hover:not(._Locked_jhewb_29) ._BackgroundContainer_jhewb_1 {
    left: -100%
}

._GameButton_jhewb_34 {
    display: flex;
    flex-direction: row;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    flex: 1 1 auto;
    min-width: 240px;
    cursor: pointer
}

._Pg100clubLocked_jhewb_43 {
    opacity: .3;
    -webkit-text-fill-color: initial;
    color: var(--colours-disabled-text)
}

._PgGame_jhewb_48 {
    margin-bottom: var(--spx-border-size-3)
}

._GameTitle_jhewb_52 {
    text-align: left;
    font-size: var(--spx-font-size-xl);
    width: 90%;
    max-width: 150px
}

._GameImg_jhewb_59 {
    border-radius: calc(var(--spx-border-size-4) - var(--spx-border-size-3));
    width: var(--spx-unit-20);
    height: var(--spx-unit-20);
    margin-right: var(--spx-border-size-5);
    flex: 0 0 auto;
    border: var(--colours-text-body-inverted) 1px solid
}

._GameTitleHolder_jhewb_68 {
    display: flex;
    justify-content: center;
    flex-direction: column
}

html ._ReactQueryDevtools_jhewb_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

:where(select) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E") no-repeat right center / 1em;
    border-radius: 0;
    padding-right: 1em
}

._GameButtonGrid_58jvp_3 {
    display: flex;
    padding: var(--spx-border-size-4) var(--spx-border-size-3);
    flex-wrap: wrap;
    justify-content: space-between
}

@media (max-width: 768px) {
    ._GameButtonGrid_58jvp_3 {
        -moz-columns:1;
        columns: 1
    }
}

._SelectedFirstTab_58jvp_16 {
    border-radius: 0 var(--spx-border-size-5) var(--spx-border-size-5) var(--spx-border-size-5)
}

._GameButton_58jvp_3 {
    flex: 1 0 auto;
    margin: 0 var(--spx-border-size-3) var(--spx-border-size-3) var(--spx-border-size-3);
    width: 240px;
    display: flex;
    justify-content: center
}

._LockedButton_58jvp_28 {
    opacity: .3
}

._EmptyButtonSlot_58jvp_32 {
    flex: 1 0 auto;
    min-width: 33%;
    width: 250px;
    max-height: 1px
}

html ._ReactQueryDevtools_58jvp_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

:where(select) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E") no-repeat right center / 1em;
    border-radius: 0;
    padding-right: 1em
}

._HundredClubAccessBanner_3fffe_4 {
    display: flex;
    align-items: center;
    padding: var(--spx-border-size-4);
    border-radius: var(--spx-border-size-5);
    flex-direction: row
}

._HundredClubSupportingText_3fffe_12 {
    flex: 1 1 auto;
    padding: var(--spx-border-size-3) var(--spx-border-size-5);
    text-align: left
}

@media (max-width: 768px) {
    ._HundredClubAccessBanner_3fffe_4 {
        flex-direction:column
    }

    ._HundredClubSupportingText_3fffe_12 {
        padding-top: var(--spx-border-size-4);
        text-align: center
    }
}

._BtnMenuItem_3fffe_29 {
    font-size: var(--spx-font-size-2xl);
    min-width: 250px
}

@media (max-width: 480px) {
    ._BtnMenuItem_3fffe_29 {
        min-width:auto
    }
}

html ._ReactQueryDevtools_3fffe_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

*,:before,:after {
    box-sizing: border-box;
    background-repeat: no-repeat
}

:before,:after {
    text-decoration: inherit;
    vertical-align: inherit
}

:where(:root) {
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%
}

:where(body) {
    margin: 0
}

:where(h1) {
    font-size: 2em;
    margin: .67em 0
}

:where(dl,ol,ul) :where(dl,ol,ul) {
    margin: 0
}

:where(hr) {
    -webkit-text-fill-color: initial;
    color: inherit;
    height: 0
}

:where(nav) :where(ol,ul) {
    list-style-type: none;
    padding: 0
}

:where(nav li):before {
    content: "​";
    float: left
}

:where(pre) {
    font-family: monospace,monospace;
    font-size: 1em;
    overflow: auto
}

:where(abbr[title]) {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted
}

:where(b,strong) {
    font-weight: bolder
}

:where(code,kbd,samp) {
    font-family: monospace,monospace;
    font-size: 1em
}

:where(small) {
    font-size: 80%
}

:where(audio,canvas,iframe,img,svg,video) {
    vertical-align: middle
}

:where(iframe) {
    border-style: none
}

:where(svg:not([fill])) {
    fill: currentColor
}

:where(table) {
    border-collapse: collapse;
    border-color: inherit;
    text-indent: 0
}

:where(button,input,select) {
    margin: 0
}

:where(button,[type=button i],[type=reset i],[type=submit i]) {
    -webkit-appearance: button
}

:where(fieldset) {
    border: 1px solid #a0a0a0
}

:where(progress) {
    vertical-align: baseline
}

:where(textarea) {
    margin: 0;
    resize: vertical
}

:where([type=search i]) {
    -webkit-appearance: textfield;
    outline-offset: -2px
}

::-webkit-inner-spin-button,::-webkit-outer-spin-button {
    height: auto
}

::-webkit-input-placeholder {
    -webkit-text-fill-color: initial;
    color: inherit;
    opacity: .54
}

::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

:where(dialog) {
    background-color: #fff;
    border: solid;
    -webkit-text-fill-color: initial;
    color: #000;
    height: -moz-fit-content;
    height: -webkit-fit-content;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: 1em;
    position: absolute;
    right: 0;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content
}

:where(dialog:not([open])) {
    display: none
}

:where(details>summary:first-of-type) {
    display: list-item
}

:where([aria-busy=true i]) {
    cursor: progress
}

:where([aria-controls]) {
    cursor: pointer
}

:where([aria-disabled=true i],[disabled]) {
    cursor: not-allowed
}

:where([aria-hidden=false i][hidden]) {
    display: inline;
    display: initial
}

:where([aria-hidden=false i][hidden]:not(:focus)) {
    clip: rect(0,0,0,0);
    position: absolute
}

:where(button,input,select,textarea) {
    background-color: transparent;
    border: 1px solid WindowFrame;
    -webkit-text-fill-color: initial;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    padding: .25em .375em
}

:where(select) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E") no-repeat right center / 1em;
    border-radius: 0;
    padding-right: 1em
}

:where(select[multiple]) {
    background-image: none
}

:where([type=color i],[type=range i]) {
    border-width: 0;
    padding: 0
}

:where(iframe,img,input,video,select,textarea) {
    height: auto;
    max-width: 100%
}

html {
    --spx-unit-0-5: .125rem;
    --spx-unit-1: .25rem;
    --spx-unit-1-5: .375rem;
    --spx-unit-2: .5rem;
    --spx-unit-2-5: .625rem;
    --spx-unit-3: .75rem;
    --spx-unit-3-5: .875rem;
    --spx-unit-4: 1rem;
    --spx-unit-5: 1.25rem;
    --spx-unit-6: 1.5rem;
    --spx-unit-7: 1.75rem;
    --spx-unit-8: 2rem;
    --spx-unit-9: 2.25rem;
    --spx-unit-10: 2.5rem;
    --spx-unit-11: 2.75rem;
    --spx-unit-12: 3rem;
    --spx-unit-14: 3.5rem;
    --spx-unit-16: 4rem;
    --spx-unit-18: 4.5rem;
    --spx-unit-20: 5rem;
    --spx-unit-24: 6rem;
    --spx-unit-28: 7rem;
    --spx-unit-32: 8rem;
    --spx-unit-36: 9rem;
    --spx-unit-40: 10rem;
    --spx-unit-44: 11rem;
    --spx-unit-48: 12rem;
    --spx-unit-52: 13rem;
    --spx-unit-56: 14rem;
    --spx-unit-60: 15rem;
    --spx-unit-64: 16rem;
    --spx-unit-72: 18rem;
    --spx-unit-80: 20rem;
    --spx-unit-96: 24rem;
    --spx-font-size-xs: .75rem;
    --spx-font-size-sm: .875rem;
    --spx-font-size-base: 1rem;
    --spx-font-size-lg: 1.125rem;
    --spx-font-size-xl: 1.25rem;
    --spx-font-size-2xl: 1.5rem;
    --spx-font-size-3xl: 1.875rem;
    --spx-font-size-4xl: 2.25rem;
    --spx-font-size-5xl: 3rem;
    --spx-font-size-6xl: 3.75rem;
    --spx-font-size-7xl: 4.5rem;
    --spx-font-size-8xl: 6rem;
    --spx-font-size-9xl: 8rem;
    --spx-font-size-10xl: 10rem;
    --spx-radius-xs: .125rem;
    --spx-radius-sm: .25rem;
    --spx-radius-base: .375rem;
    --spx-radius-md: .5rem;
    --spx-radius-lg: .75rem;
    --spx-radius-xl: 1rem;
    --spx-radius-full: 9999px;
    --spx-border-size-1: 1px;
    --spx-border-size-2: 2px;
    --spx-border-size-3: 5px;
    --spx-border-size-4: 10px;
    --spx-border-size-5: 25px;
    --spx-ease-1: cubic-bezier(.25, 0, .5, 1);
    --spx-ease-2: cubic-bezier(.25, 0, .4, 1);
    --spx-ease-3: cubic-bezier(.25, 0, .3, 1);
    --spx-ease-4: cubic-bezier(.25, 0, .2, 1);
    --spx-ease-5: cubic-bezier(.25, 0, .1, 1);
    --spx-ease-in-1: cubic-bezier(.25, 0, 1, 1);
    --spx-ease-in-2: cubic-bezier(.5, 0, 1, 1);
    --spx-ease-in-3: cubic-bezier(.7, 0, 1, 1);
    --spx-ease-in-4: cubic-bezier(.9, 0, 1, 1);
    --spx-ease-in-5: cubic-bezier(1, 0, 1, 1);
    --spx-ease-out-1: cubic-bezier(0, 0, .75, 1);
    --spx-ease-out-2: cubic-bezier(0, 0, .5, 1);
    --spx-ease-out-3: cubic-bezier(0, 0, .3, 1);
    --spx-ease-out-4: cubic-bezier(0, 0, .1, 1);
    --spx-ease-out-5: cubic-bezier(0, 0, 0, 1);
    --spx-ease-in-out-1: cubic-bezier(.1, 0, .9, 1);
    --spx-ease-in-out-2: cubic-bezier(.3, 0, .7, 1);
    --spx-ease-in-out-3: cubic-bezier(.5, 0, .5, 1);
    --spx-ease-in-out-4: cubic-bezier(.7, 0, .3, 1);
    --spx-ease-in-out-5: cubic-bezier(.9, 0, .1, 1);
    --spx-ease-elastic-1: cubic-bezier(.5, .75, .75, 1.25);
    --spx-ease-elastic-2: cubic-bezier(.5, 1, .75, 1.25);
    --spx-ease-elastic-3: cubic-bezier(.5, 1.25, .75, 1.25);
    --spx-ease-elastic-4: cubic-bezier(.5, 1.5, .75, 1.25);
    --spx-ease-elastic-5: cubic-bezier(.5, 1.75, .75, 1.25);
    --spx-ease-squish-1: cubic-bezier(.5, -.1, .1, 1.5);
    --spx-ease-squish-2: cubic-bezier(.5, -.3, .1, 1.5);
    --spx-ease-squish-3: cubic-bezier(.5, -.5, .1, 1.5);
    --spx-ease-squish-4: cubic-bezier(.5, -.7, .1, 1.5);
    --spx-ease-squish-5: cubic-bezier(.5, -.9, .1, 1.5);
    --spx-shadow-sm: 0px 2px 2px rgba(210, 221, 248, .5);
    --spx-shadow-sm-dark: 0px 2px 2px rgba(57, 60, 65, .3);
    --spx-shadow-md: 0px 3px 5px rgba(210, 221, 248, .6);
    --spx-shadow-md-dark: 0px 3px 5px rgba(57, 60, 65, .3);
    --spx-shadow-md-extradark: 0px 3px 5px rgba(45, 45, 45, 1);
    --spx-shadow-lg: 0px 4px 11px -1px rgba(210, 221, 248, .8);
    --spx-shadow-lg-dark-blue: 0px 4px 11px -1px var(--palette-dark-blue);
    --spx-shadow-lg-top: 0px -3px 11px rgba(128, 128, 128, .2);
    --spx-breakpoint-xs: 360px;
    --spx-breakpoint-sm: 480px;
    --spx-breakpoint-md: 768px;
    --spx-breakpoint-lg: 1024px;
    --spx-breakpoint-xl: 1440px;
    --spx-breakpoint-xxl: 1920px;
    --top-banner-height: var(--spx-unit-14);
    --top-banner-height-screen-sm: var(--spx-unit-12);
    --user-select-accessibility-setting: none;
    --training-banner-height: 45px;
    --training-box-bottom-left-radius: 10px;
    --training-mode-box-transition-length: .2s;
    --spx-layer-base-1: 10;
    --spx-layer-base-2: 20;
    --spx-layer-base-3: 30;
    --spx-layer-overlay-1: 100;
    --spx-layer-overlay-2: 200;
    --spx-layer-overlay-3: 300;
    --spx-layer-modal-1: 1000;
    --spx-layer-modal-2: 2000;
    --spx-layer-modal-3: 3000;
    --spx-layer-colour-overlay: 4000;
    --spx-size-max: max-content;
    --spx-size-min: min-content;
    --spx-size-full: 100%;
    --spx-size-3xs: 14rem;
    --spx-size-2xs: 16rem;
    --spx-size-xs: 20rem;
    --spx-size-sm: 24rem;
    --spx-size-md: 28rem;
    --spx-size-lg: 32rem;
    --spx-size-xl: 36rem;
    --spx-size-2xl: 42rem;
    --spx-size-3xl: 48rem;
    --spx-size-4xl: 56rem;
    --spx-size-5xl: 64rem;
    --spx-size-6xl: 72rem;
    --spx-size-7xl: 80rem;
    --spx-size-8xl: 90rem
}

body,button,input,optgroup,select,textarea {
    font-family: DM Sans,sans-serif
}

h1,h2,h3,h4,h5,h6 {
    margin: 0
}

._MultiplayerGameBoundingBox_1groq_4 {
    display: flex;
    align-items: center;
    padding: var(--spx-border-size-4);
    border-radius: var(--spx-border-size-4);
    flex-direction: row;
    border: 3px solid var(--colours-interactable)
}

._MultiplayerInteriorBox_1groq_13 {
    display: flex;
    align-items: center;
    padding: var(--spx-border-size-4);
    border-radius: var(--spx-border-size-4);
    flex-direction: row
}

._LockedBoundingBox_1groq_21 {
    border: 3px solid var(--colours-locked-dark);
    background: var(--colours-locked);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary)
}

html ._ReactQueryDevtools_1groq_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._ContentContainer_vx7q8_1 {
    padding-left: var(--spx-unit-10);
    padding-right: var(--spx-unit-10);
    padding-bottom: var(--spx-unit-10);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center
}

._ContentContainer_vx7q8_1>*:not(:first-child) {
    margin-top: var(--spx-unit-6)
}

._Body_vx7q8_15 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-size: var(--spx-font-size-xl)
}

@media (max-width: 480px) {
    ._Body_vx7q8_15 {
        font-size:var(--spx-font-size-md)
    }
}

._ButtonsContainer_vx7q8_24 {
    display: flex;
    justify-content: center
}

._ButtonsContainer_vx7q8_24>*:not(:first-child) {
    margin-left: var(--spx-unit-8)
}

@media (max-width: 480px) {
    ._ButtonsContainer_vx7q8_24>*:not(:first-child) {
        margin-left:0
    }
}

@media (max-width: 480px) {
    ._ButtonsContainer_vx7q8_24 {
        flex-direction:column
    }

    ._ButtonsContainer_vx7q8_24>*:not(:first-child) {
        margin-top: var(--spx-unit-4)
    }
}

html ._ReactQueryDevtools_vx7q8_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Navbar_nicsr_1 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
}

._NavbarLabel_nicsr_9 {
    font-weight: 500;
    margin-right: var(--spx-unit-1)
}

._NavbarItem_nicsr_14 {
    width: var(--spx-unit-20);
    height: var(--spx-unit-8);
    margin: var(--spx-unit-2) var(--spx-unit-1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--spx-unit-1-5);
    cursor: pointer
}

._CompleteIcon_nicsr_25 {
    width: var(--spx-unit-4);
    height: var(--spx-unit-4);
    margin-left: var(--spx-unit-1)
}

._Question_nicsr_31 {
    background-color: var(--colours-ftq-navbar-question)
}

._Question_nicsr_31 ._NavbarLabel_nicsr_9 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

._Question_nicsr_31 ._NavbarItem_nicsr_14 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    background-color: var(--colours-transparent-20)
}

._Question_nicsr_31 ._NavbarItem_nicsr_14._Selected_nicsr_42 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    background-color: var(--colours-plain-background)
}

._Question_nicsr_31 ._NavbarItem_nicsr_14._Complete_nicsr_25 {
    cursor: not-allowed;
    -webkit-text-fill-color: initial;
    color: var(--colours-complete)
}

._Question_nicsr_31 ._NavbarItem_nicsr_14._Complete_nicsr_25 path {
    fill: var(--colours-complete)
}

._Question_nicsr_31 ._NavbarItem_nicsr_14._Disabled_nicsr_56 {
    -webkit-text-fill-color: initial;
    color: var(--colours-disabled-text);
    cursor: not-allowed
}

._Answer_nicsr_63 {
    background-color: var(--colours-ftq-navbar-answer)
}

._Answer_nicsr_63 ._NavbarLabel_nicsr_9 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._Answer_nicsr_63 ._NavbarItem_nicsr_14 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    background-color: var(--colors-ftq-navbar-answer-item-bg)
}

._Answer_nicsr_63 ._NavbarItem_nicsr_14._Selected_nicsr_42 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    background-color: var(--colours-selected)
}

._Answer_nicsr_63 ._NavbarItem_nicsr_14._Complete_nicsr_25 {
    cursor: not-allowed;
    -webkit-text-fill-color: initial;
    color: var(--colours-complete-text)
}

._Answer_nicsr_63 ._NavbarItem_nicsr_14._Complete_nicsr_25 path {
    fill: var(--colours-complete-text)
}

html ._ReactQueryDevtools_nicsr_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._BackgroundContainer_167t3_1 {
    background: var(--swclient-background);
    flex: 1 1;
    min-height: 0;
    display: flex
}

@media (max-width: 1024px),(max-height: 700px) {
    ._BackgroundContainer_167t3_1 {
        background:none;
        background-color: var(--colours-question-background)
    }
}

._QAContainer_167t3_15 {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-top: var(--spx-unit-4);
    overflow: hidden
}

@media (max-width: 1024px),(max-height: 700px) {
    ._QAContainer_167t3_15 {
        padding-top:0
    }
}

._QuestionWrapper_167t3_29 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 auto;
    padding: 0 var(--spx-unit-6)
}

@media (max-width: 1024px) {
    ._QuestionWrapper_167t3_29 {
        padding:0
    }
}

._ResultsWrapper_167t3_41 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
    padding: 0 var(--spx-unit-6);
    margin: auto;
    text-align: center
}

@media (max-width: 1024px) {
    ._ResultsWrapper_167t3_41 {
        padding:0
    }
}

._ResultsTitle_167t3_56 {
    font-size: var(--spx-font-size-4xl);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    margin-bottom: var(--spx-unit-4);
    font-weight: 700
}

._ResultsBody_167t3_63 {
    font-size: var(--spx-font-size-xl);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    margin-bottom: var(--spx-unit-4);
    font-weight: 700;
    max-width: 500px
}

._ResultCardsContainer_167t3_71 {
    display: flex;
    flex-flow: row wrap;
    justify-content: center
}

._ResultCard_167t3_71 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: var(--spx-unit-3);
    width: var(--spx-unit-48);
    height: var(--spx-unit-48);
    background-color: var(--colours-regular-background);
    border-radius: var(--spx-radius-lg);
    font-size: var(--spx-font-size-2xl);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._ResultCard_167t3_71>span {
    margin-bottom: var(--spx-unit-2)
}

._ResultCard_167t3_71 svg {
    width: var(--spx-unit-16);
    height: var(--spx-unit-16)
}

@media (max-width: 768px) {
    ._ResultCard_167t3_71 {
        margin:var(--spx-unit-3);
        width: var(--spx-unit-36);
        height: var(--spx-unit-36);
        font-size: var(--spx-font-size-xl)
    }

    ._ResultCard_167t3_71 svg {
        width: var(--spx-unit-12);
        height: var(--spx-unit-12)
    }
}

@media (max-width: 480px) {
    ._ResultCard_167t3_71 {
        margin:var(--spx-unit-2);
        width: var(--spx-unit-24);
        height: var(--spx-unit-24);
        font-size: var(--spx-font-size-lg)
    }

    ._ResultCard_167t3_71 svg {
        width: var(--spx-unit-10);
        height: var(--spx-unit-10)
    }
}

._BottomBarButton_167t3_124>div>*:not(:first-child) {
    margin-left: var(--spx-unit-2)
}

html ._ReactQueryDevtools_167t3_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._OuterContainer_1g7eg_1 {
    display: flex;
    flex-direction: row;
    width: 100%
}

._InnerContainer_1g7eg_7 {
    position: relative;
    display: flex;
    flex-direction: row;
    transition: left .15s linear;
    overflow-x: auto;
    -webkit-scroll-snap-type: x mandatory;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    width: 100%
}

._InnerContainer_1g7eg_7::-webkit-scrollbar {
    display: none
}

._Item_1g7eg_21 {
    flex: 0 0 auto;
    scroll-snap-align: start;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative
}

html ._ReactQueryDevtools_1g7eg_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._CarouselButtonGroup_1ei9g_1 {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center
}

._CarouselButton_1ei9g_1 {
    background-color: var(--colours-primary);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-on-primary);
    border-radius: var(--spx-radius-full);
    width: 24px;
    text-align: center;
    cursor: pointer
}

._CarouselButton_1ei9g_1:hover {
    background-color: var(--colours-primary-hover)
}

._CarouselButton_1ei9g_1 span {
    position: relative;
    top: -1px
}

._CarouselPositionIndicator_1ei9g_27 {
    margin: var(--spx-unit-2);
    display: flex
}

._CarouselPositionDot_1ei9g_32 {
    width: 5px;
    height: 5px;
    border-radius: var(--spx-radius-full);
    background-color: var(--colours-text-subtle);
    margin: var(--spx-unit-1)
}

._CarouselPositionDotVisible_1ei9g_40 {
    background-color: var(--colours-text-heading)
}

html ._ReactQueryDevtools_1ei9g_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_1l1u6_1 {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--spx-unit-8);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

@media (max-width: 480px) {
    ._Container_1l1u6_1 {
        padding:var(--spx-unit-8) var(--spx-unit-2)
    }
}

._Container_1l1u6_1>section {
    margin-bottom: var(--spx-unit-8)
}

h1,h4 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading)
}

._SupportTipsContainer_1l1u6_24 {
    position: relative
}

._SupportTipsContainer_1l1u6_24 h4 {
    margin-bottom: var(--spx-unit-4)
}

._Link_1l1u6_32 {
    text-decoration: none
}

._Link_1l1u6_32 img {
    width: 34px
}

._SupportTipsItem_1l1u6_40 {
    background-color: var(--colours-item);
    border-radius: var(--spx-radius-md);
    box-shadow: var(--spx-shadow-md);
    margin-bottom: var(--spx-unit-2);
    display: flex;
    flex-direction: column;
    padding: var(--spx-unit-2);
    font-size: var(--spx-font-size-xs);
    cursor: pointer;
    height: 100%
}

._SupportTipsItem_1l1u6_40:hover {
    background-color: var(--colours-item-hover)
}

._SupportTipsItem_1l1u6_40>img {
    border-radius: var(--spx-radius-md);
    width: 100%
}

._SupportTipsItem_1l1u6_40 span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    -webkit-text-fill-color: initial;
    color: var(--colours-primary);
    font-weight: 700;
    margin-top: var(--spx-unit-2);
    height: 100%
}

._SupportTipsItem_1l1u6_40 span>img {
    margin-left: var(--spx-unit-2);
    width: 25px
}

._LinksContainer_1l1u6_78 {
    display: flex;
    flex-direction: column
}

._LinksContainer_1l1u6_78>* {
    flex: 1 1
}

._LinksContainer_1l1u6_78>*:not(:last-child) {
    margin-bottom: var(--spx-unit-2)
}

@media (min-width: 480px) {
    ._LinksContainer_1l1u6_78 {
        flex-direction:row
    }

    ._LinksContainer_1l1u6_78 :not(:last-child) {
        margin-bottom: 0;
        margin-right: var(--spx-unit-2)
    }
}

._LinkContainer_1l1u6_100 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    background-color: var(--colours-item);
    border-radius: var(--spx-radius-md);
    box-shadow: var(--spx-shadow-md);
    padding: var(--spx-unit-4);
    display: flex;
    justify-content: space-between;
    height: 100%
}

._LinkContainer_1l1u6_100:hover {
    background-color: var(--colours-item-hover)
}

._LinkContainer_1l1u6_100 p {
    margin: 0
}

._FAQs_1l1u6_119>p {
    margin: 0
}

._FAQs_1l1u6_119 h5 {
    margin: var(--spx-unit-4) 0 var(--spx-unit-2)
}

._FAQItem_1l1u6_129 {
    font-size: var(--spx-font-size-base);
    margin-top: 0;
    margin-bottom: var(--spx-unit-2)
}

._FAQItem_1l1u6_129 ._FAQItemHeader_1l1u6_134 {
    padding: var(--spx-unit-2) var(--spx-unit-3)
}

._FAQItem_1l1u6_129 ._FAQItemContent_1l1u6_138 {
    font-weight: 400;
    padding-left: var(--spx-unit-7)
}

._FAQItem_1l1u6_129 ._FAQItemContent_1l1u6_138>div>div {
    margin-top: var(--spx-unit-4);
    margin-bottom: var(--spx-unit-4)
}

._FAQItem_1l1u6_129 li {
    display: list-item
}

html ._ReactQueryDevtools_1l1u6_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._VideoContainer_10fkz_1 {
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    background: var(--colours-plain-background-inverted)
}

._VideoButtonsContainer_10fkz_9 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--spx-unit-3)
}

html ._ReactQueryDevtools_10fkz_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._MilestoneBarContainer_1eca0_1 {
    max-width: var(--spx-size-3xl);
    width: 100%;
    height: auto;
    margin: 40px auto;
    background: linear-gradient(90deg,var(--colours-primary-gradient-start) 0%,var(--colours-primary-gradient-stop) 100%);
    border-radius: var(--spx-radius-md);
    isolation: isolate;
    padding: 0 var(--spx-unit-4) var(--spx-unit-4)
}

@media (min-width: 480px) {
    ._MilestoneBarContainer_1eca0_1 {
        padding:var(--spx-unit-2) var(--spx-unit-6) var(--spx-unit-4)
    }
}

._MilestoneBarContainer_1eca0_1 ._MilestoneBar_1eca0_1 {
    margin: var(--spx-unit-8) auto var(--spx-unit-6);
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center
}

._MilestoneBarContainer_1eca0_1 ._MilestoneBar_1eca0_1 ._ProgressBar_1eca0_26 {
    width: 100%;
    position: relative;
    height: 4px;
    background: var(--colours-not-yet-achieved);
    flex: 0 3 auto;
    min-width: 10px
}

._MilestoneBarContainer_1eca0_1 ._MilestoneBar_1eca0_1 ._ProgressBar_1eca0_26 ._ProgressBarAchieved_1eca0_34 {
    position: absolute;
    margin-top: -1px;
    height: 6px;
    background: var(--colours-progress-gradient-start)
}

._MilestoneBarContainer_1eca0_1 ._MilestoneBar_1eca0_1 ._ProgressBar_1eca0_26._HalfWidth_1eca0_41 {
    width: 50%
}

._MilestoneBarContainer_1eca0_1 ._MilestoneBar_1eca0_1 ._BadgeAndLevelText_1eca0_46 {
    position: relative;
    flex: 1 1 auto;
    margin: 0 -1px;
    display: flex;
    flex-direction: column;
    overflow: visible;
    z-index: 1;
    font-size: var(--spx-font-size-sm)
}

@media (min-width: 480px) {
    ._MilestoneBarContainer_1eca0_1 ._MilestoneBar_1eca0_1 ._BadgeAndLevelText_1eca0_46 {
        flex:1 0 auto;
        font-size: var(--spx-font-size-xl)
    }
}

._MilestoneBarContainer_1eca0_1 ._MilestoneBar_1eca0_1 ._BadgeAndLevelText_1eca0_46 ._Badge_1eca0_46._HasWings_1eca0_62 {
    margin: 0 -12px
}

._MilestoneBarContainer_1eca0_1 ._MilestoneBar_1eca0_1 ._BadgeAndLevelText_1eca0_46 ._Badge_1eca0_46._HasCrown_1eca0_66 {
    margin-top: -35%
}

._MilestoneBarContainer_1eca0_1 ._MilestoneBar_1eca0_1 ._BadgeAndLevelText_1eca0_46 ._Badge_1eca0_46 svg {
    width: 100%;
    height: 100%
}

._MilestoneBarContainer_1eca0_1 ._MilestoneBar_1eca0_1 ._BadgeAndLevelText_1eca0_46 ._LevelText_1eca0_76 {
    width: 100%;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-on-primary);
    text-align: center;
    font-weight: 700;
    position: absolute;
    white-space: nowrap
}

._MilestoneBarContainer_1eca0_1 ._MilestoneBar_1eca0_1 ._BadgeAndLevelText_1eca0_46 ._LevelText_1eca0_76._Zero_1eca0_84 {
    left: -.2rem;
    top: .2rem
}

._MilestoneBarContainer_1eca0_1 ._RecentLevelUpDateContainer_1eca0_92 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--spx-unit-6);
    font-size: var(--spx-font-size-sm);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-on-primary);
    text-align: center;
    font-weight: 700
}

@media (min-width: 480px) {
    ._MilestoneBarContainer_1eca0_1 ._RecentLevelUpDateContainer_1eca0_92 {
        margin-top:var(--spx-unit-8);
        font-size: var(--spx-font-size-md)
    }
}

html ._ReactQueryDevtools_1eca0_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._InfoPanel_5juaj_1 {
    margin: 0 auto;
    padding: var(--spx-unit-8) var(--spx-unit-8);
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-md);
    max-width: var(--spx-size-3xl);
    font-size: var(--spx-font-size-lg);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary);
    z-index: 1
}

._InfoPanel_5juaj_1:not(:last-child) {
    margin-bottom: var(--spx-unit-4)
}

._InfoPanel_5juaj_1 ._Title_5juaj_15 {
    display: block;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    font-size: var(--spx-font-size-xl);
    font-weight: 600;
    text-align: center
}

._XPChangedBanner_5juaj_24 {
    width: 100%;
    background-color: var(--colours-background-success-message);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: var(--spx-font-size-base);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    padding: var(--spx-unit-6)
}

@media (max-width: 768px) {
    ._XPChangedBanner_5juaj_24 {
        font-size:var(--spx-font-size-sm)
    }
}

._XPChangedBanner_5juaj_24 ._TitleContainer_5juaj_39 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: var(--spx-unit-4);
    font-weight: 600;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading)
}

._XPChangedBanner_5juaj_24 ._Title_5juaj_15 {
    font-size: var(--spx-font-size-2xl)
}

@media (max-width: 768px) {
    ._XPChangedBanner_5juaj_24 ._Title_5juaj_15 {
        font-size:var(--spx-font-size-lg)
    }
}

._XPChangedBanner_5juaj_24 ._NewChip_5juaj_56 {
    background-color: var(--colours-new);
    padding: var(--spx-unit-0-5) var(--spx-unit-2);
    border-radius: var(--spx-radius-sm);
    margin-right: var(--spx-unit-2);
    font-size: var(--spx-font-size-lg)
}

._XPChangedBanner_5juaj_24 ._Image_5juaj_64 {
    padding-right: var(--spx-unit-4)
}

@media (max-width: 768px) {
    ._XPChangedBanner_5juaj_24 ._Image_5juaj_64 {
        display:none
    }
}

._CloseIcon_5juaj_73 {
    position: absolute;
    right: 0;
    top: 0;
    margin: var(--spx-unit-1);
    height: var(--spx-unit-6);
    width: var(--spx-unit-6);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: var(--spx-radius-full)
}

._CloseIcon_5juaj_73:hover {
    background-color: var(--colours-item-hover)
}

._PageContainerOld_5juaj_92 {
    width: 100%;
    overflow-y: auto
}

._PageContainerOld_5juaj_92 ._Center_5juaj_96 {
    width: 100%;
    padding: var(--spx-unit-8);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center
}

._PageContainerOld_5juaj_92 ._RewardsPlaqueContainer_5juaj_105 {
    position: relative;
    max-width: 600px;
    width: 100%;
    margin: 0 auto
}

@media (max-height: 800px) {
    ._PageContainerOld_5juaj_92 ._RewardsPlaqueContainer_5juaj_105 {
        max-width:450px
    }
}

._PageContainerOld_5juaj_92 ._ProgressBarContainer_5juaj_116 {
    max-width: 400px;
    width: 100%;
    margin-bottom: var(--spx-unit-6)
}

._PageContainerOld_5juaj_92 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
}

._PageContainerOld_5juaj_92 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 ._CurrentXP_5juaj_127 {
    font-size: var(--spx-font-size-3xl);
    font-weight: 700;
    -webkit-text-fill-color: initial;
    color: var(--colours-correct)
}

@media (max-width: 480px) {
    ._PageContainerOld_5juaj_92 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 ._CurrentXP_5juaj_127 {
        font-size:var(--spx-font-size-xl)
    }
}

._PageContainerOld_5juaj_92 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 ._CurrentXP_5juaj_127 span {
    font-size: var(--spx-font-size-lg);
    font-weight: 400
}

@media (max-width: 480px) {
    ._PageContainerOld_5juaj_92 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 ._CurrentXP_5juaj_127 span {
        font-size:var(--spx-font-size-sm)
    }
}

._PageContainerOld_5juaj_92 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 ._XpToNext_5juaj_146 {
    font-size: var(--spx-font-size-lg);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

@media (max-width: 480px) {
    ._PageContainerOld_5juaj_92 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 ._XpToNext_5juaj_146 {
        font-size:var(--spx-font-size-sm)
    }
}

._PageContainerOld_5juaj_92 ._ProgressBarContainer_5juaj_116 ._CompletionBarContainer_5juaj_156 {
    height: var(--spx-unit-8)
}

@media (max-width: 480px) {
    ._PageContainerOld_5juaj_92 ._ProgressBarContainer_5juaj_116 ._CompletionBarContainer_5juaj_156 {
        height:var(--spx-unit-4)
    }
}

._PageContainerOld_5juaj_92 ._InfoPanel_5juaj_1 {
    margin: 0 auto;
    padding: var(--spx-unit-8) var(--spx-unit-8);
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-md);
    max-width: var(--spx-size-3xl);
    font-size: var(--spx-font-size-lg);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary);
    z-index: 1
}

._PageContainerOld_5juaj_92 ._InfoPanel_5juaj_1:not(:last-child) {
    margin-bottom: var(--spx-unit-4)
}

._PageContainerOld_5juaj_92 ._InfoPanel_5juaj_1 ._Title_5juaj_15 {
    display: block;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    font-size: var(--spx-font-size-xl);
    font-weight: 600;
    text-align: center
}

@media (max-height: 800px) {
    ._PageContainerOld_5juaj_92 ._RewardsPlaque_5juaj_105 {
        max-width:450px
    }

    ._PageContainerOld_5juaj_92 ._InfoPanel_5juaj_1 {
        font-size: var(--spx-font-size-base)
    }
}

@media (max-width: 480px) {
    ._PageContainerOld_5juaj_92 ._Center_5juaj_96 {
        padding:var(--spx-unit-8) var(--spx-unit-4)
    }

    ._PageContainerOld_5juaj_92 ._InfoPanel_5juaj_1 {
        padding: var(--spx-unit-4);
        font-size: var(--spx-font-size-sm)
    }

    ._PageContainerOld_5juaj_92 ._InfoPanel_5juaj_1 ._Title_5juaj_15 {
        font-size: var(--spx-font-size-lg)
    }
}

._PageContainerOld_5juaj_92 ._XPChangedBanner_5juaj_24 {
    width: 100%;
    background-color: var(--colours-background-success-message);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: var(--spx-font-size-base);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    padding: var(--spx-unit-6)
}

@media (max-width: 768px) {
    ._PageContainerOld_5juaj_92 ._XPChangedBanner_5juaj_24 {
        font-size:var(--spx-font-size-sm)
    }
}

._PageContainerOld_5juaj_92 ._XPChangedBanner_5juaj_24 ._TitleContainer_5juaj_39 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: var(--spx-unit-4);
    font-weight: 600;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading)
}

._PageContainerOld_5juaj_92 ._XPChangedBanner_5juaj_24 ._Title_5juaj_15 {
    font-size: var(--spx-font-size-2xl)
}

@media (max-width: 768px) {
    ._PageContainerOld_5juaj_92 ._XPChangedBanner_5juaj_24 ._Title_5juaj_15 {
        font-size:var(--spx-font-size-lg)
    }
}

._PageContainerOld_5juaj_92 ._XPChangedBanner_5juaj_24 ._NewChip_5juaj_56 {
    background-color: var(--colours-new);
    padding: var(--spx-unit-0-5) var(--spx-unit-2);
    border-radius: var(--spx-radius-sm);
    margin-right: var(--spx-unit-2);
    font-size: var(--spx-font-size-lg)
}

._PageContainerOld_5juaj_92 ._XPChangedBanner_5juaj_24 ._Image_5juaj_64 {
    padding-right: var(--spx-unit-4)
}

@media (max-width: 768px) {
    ._PageContainerOld_5juaj_92 ._XPChangedBanner_5juaj_24 ._Image_5juaj_64 {
        display:none
    }
}

._PageContainerOld_5juaj_92 ._CloseIcon_5juaj_73 {
    position: absolute;
    right: 0;
    top: 0;
    margin: var(--spx-unit-1);
    height: var(--spx-unit-6);
    width: var(--spx-unit-6);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: var(--spx-radius-full)
}

._PageContainerOld_5juaj_92 ._CloseIcon_5juaj_73:hover {
    background-color: var(--colours-item-hover)
}

._PageContainer_5juaj_92 {
    width: 100%;
    overflow-y: auto
}

._PageContainer_5juaj_92 ._PageTitle_5juaj_285 {
    font-size: var(--spx-font-size-3xl);
    text-align: center;
    margin: var(--spx-unit-4) auto var(--spx-unit-10);
    flex: 0 0 auto
}

._PageContainer_5juaj_92 ._Center_5juaj_96 {
    width: 100%;
    padding: var(--spx-unit-8);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center
}

._PageContainer_5juaj_92 ._RewardsPlaqueContainer_5juaj_105 {
    position: relative;
    max-width: var(--spx-size-3xl);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto
}

@media (min-width: 768px) {
    ._PageContainer_5juaj_92 ._RewardsPlaqueContainer_5juaj_105 {
        flex-direction:row
    }
}

._PageContainer_5juaj_92 ._ProgressBarAndLeaderboardsButton_5juaj_316 {
    width: 100%;
    max-width: var(--spx-size-lg);
    display: flex;
    flex-direction: column;
    align-items: center
}

@media (min-width: 768px) {
    ._PageContainer_5juaj_92 ._ProgressBarAndLeaderboardsButton_5juaj_316 {
        margin:0 var(--spx-unit-6);
        align-items: flex-start
    }
}

._PageContainer_5juaj_92 ._ProgressBarAndLeaderboardsButton_5juaj_316 ._ProgressBarContainer_5juaj_116 {
    width: 100%;
    margin: var(--spx-unit-6) 0
}

@media (min-width: 768px) {
    ._PageContainer_5juaj_92 ._ProgressBarAndLeaderboardsButton_5juaj_316 ._ProgressBarContainer_5juaj_116 {
        margin:0 0 var(--spx-unit-6)
    }
}

._PageContainer_5juaj_92 ._ProgressBarAndLeaderboardsButton_5juaj_316 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
}

._PageContainer_5juaj_92 ._ProgressBarAndLeaderboardsButton_5juaj_316 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 ._CurrentXP_5juaj_127 {
    font-weight: 700;
    -webkit-text-fill-color: initial;
    color: var(--colours-correct);
    font-size: var(--spx-font-size-xl)
}

@media (min-width: 480px) {
    ._PageContainer_5juaj_92 ._ProgressBarAndLeaderboardsButton_5juaj_316 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 ._CurrentXP_5juaj_127 {
        font-size:var(--spx-font-size-3xl)
    }
}

._PageContainer_5juaj_92 ._ProgressBarAndLeaderboardsButton_5juaj_316 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 ._CurrentXP_5juaj_127 span {
    font-weight: 400;
    font-size: var(--spx-font-size-sm)
}

@media (min-width: 360px) {
    ._PageContainer_5juaj_92 ._ProgressBarAndLeaderboardsButton_5juaj_316 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 ._CurrentXP_5juaj_127 span {
        font-size:var(--spx-font-size-lg)
    }
}

._PageContainer_5juaj_92 ._ProgressBarAndLeaderboardsButton_5juaj_316 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 ._XpToNext_5juaj_146 {
    font-size: var(--spx-font-size-sm);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

@media (min-width: 360px) {
    ._PageContainer_5juaj_92 ._ProgressBarAndLeaderboardsButton_5juaj_316 ._ProgressBarContainer_5juaj_116 ._ProgressBarTextContainer_5juaj_121 ._XpToNext_5juaj_146 {
        font-size:var(--spx-font-size-lg)
    }
}

._PageContainer_5juaj_92 ._ProgressBarAndLeaderboardsButton_5juaj_316 ._ProgressBarContainer_5juaj_116 ._CompletionBarContainer_5juaj_156 {
    height: var(--spx-unit-8)
}

@media (max-height: 800px) {
    ._PageContainer_5juaj_92 ._RewardsPlaque_5juaj_105 {
        max-width:450px
    }

    ._PageContainer_5juaj_92 ._InfoPanel_5juaj_1 {
        font-size: var(--spx-font-size-base)
    }
}

@media (max-width: 480px) {
    ._PageContainer_5juaj_92 ._Center_5juaj_96 {
        padding:var(--spx-unit-8) var(--spx-unit-4)
    }

    ._PageContainer_5juaj_92 ._InfoPanel_5juaj_1 {
        padding: var(--spx-unit-4);
        font-size: var(--spx-font-size-sm)
    }

    ._PageContainer_5juaj_92 ._InfoPanel_5juaj_1 ._Title_5juaj_15 {
        font-size: var(--spx-font-size-lg)
    }
}

html ._ReactQueryDevtools_5juaj_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._OverlaySettingsContainer_1o7le_1 {
    display: grid;
    gap: var(--spx-unit-4);
    grid-template: "o o" auto "w w" auto "p p" auto
}

._OverlaySettingsContainer_1o7le_1 h3 {
    font-weight: 700;
    font-size: var(--spx-font-size-lg)
}

@media (min-width: 768px) {
    ._OverlaySettingsContainer_1o7le_1 {
        grid-template:"o o p" auto "o o p" auto "w w w" auto / 1fr 1fr 1fr
    }
}

._OverlaySelector_1o7le_23 {
    grid-area: o;
    display: flex;
    flex-direction: column
}

._ColorOptionsContainer_1o7le_29 {
    flex-grow: 1;
    display: grid;
    height: 100%;
    align-content: space-evenly;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(5,1fr);
    gap: var(--spx-unit-2)
}

@media (min-width: 360px) {
    ._ColorOptionsContainer_1o7le_29 {
        grid-template-columns:repeat(3,1fr);
        grid-template-rows: repeat(3,1fr)
    }
}

._ColorOption_1o7le_29 {
    display: flex;
    flex-direction: column;
    padding: var(--spx-unit-2);
    border-radius: var(--spx-radius-sm);
    box-sizing: border-box;
    border: var(--spx-border-size-1) solid transparent;
    transition-property: border-color,background-color;
    transition-duration: .2s;
    cursor: pointer
}

._ColorOption_1o7le_29:hover:not(._Selected_1o7le_55) {
    border-color: var(--colours-border)
}

._ColorOption_1o7le_29 ._LabelContainer_1o7le_59 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: var(--spx-font-size-sm)
}

@media (min-width: 480px) {
    ._ColorOption_1o7le_29 ._LabelContainer_1o7le_59 {
        font-size:var(--spx-font-size-base)
    }
}

._ColorOption_1o7le_29 ._LabelContainer_1o7le_59 input[type=radio] {
    margin-right: var(--spx-unit-2);
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: var(--spx-radius-full);
    border: var(--spx-border-size-2) solid var(--colours-interactable);
    height: 1rem;
    width: 1rem;
    display: grid;
    place-content: center
}

._ColorOption_1o7le_29 ._LabelContainer_1o7le_59 input[type=radio]:before {
    content: "";
    height: .5rem;
    width: .5rem;
    border-radius: var(--spx-radius-full);
    background-color: var(--colours-interactable);
    opacity: 0;
    transition: opacity .2s ease
}

._ColorOption_1o7le_29._Selected_1o7le_55 {
    background-color: var(--colours-nested-item)
}

._ColorOption_1o7le_29._Selected_1o7le_55 ._LabelContainer_1o7le_59 input[type=radio]:before {
    opacity: 1
}

._ColorOption_1o7le_29 ._ColorSample_1o7le_100 {
    border-radius: var(--spx-radius-sm);
    border: var(--spx-border-size-2) solid var(--colours-transparent-darken);
    height: 100%;
    min-height: var(--spx-unit-16)
}

._PreviewSectionContainer_1o7le_109 {
    grid-area: p;
    display: flex;
    flex-direction: column
}

._PreviewContainer_1o7le_115 {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center
}

._Preview_1o7le_109 {
    max-width: 225px;
    padding: var(--spx-unit-4);
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    border-radius: var(--spx-radius-sm);
    border: var(--spx-border-size-2) solid var(--colours-transparent-darken)
}

._Preview_1o7le_109 p {
    text-align: center
}

._WarningContainer_1o7le_140 {
    overflow: hidden;
    grid-area: w
}

._WarningContainer_1o7le_140 ._Warning_1o7le_140 {
    background-color: var(--colours-background-warning-message);
    padding: var(--spx-unit-3) var(--spx-unit-4);
    border-radius: var(--spx-radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-warning-message)
}

._WarningContainer_1o7le_140 ._Warning_1o7le_140 :first-child {
    margin-right: var(--spx-unit-2)
}

html ._ReactQueryDevtools_1o7le_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_hgytc_1 {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--spx-unit-8);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

@media (max-width: 480px) {
    ._Container_hgytc_1 {
        padding:var(--spx-unit-4)
    }
}

._Container_hgytc_1>section {
    margin-bottom: var(--spx-unit-4)
}

._Container_hgytc_1>section>p {
    -webkit-margin-before: 0;
    margin-block-start:0}

._SectionContainer_hgytc_20 {
    padding: var(--spx-unit-4);
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-md)
}

@media (min-width: 480px) {
    ._SectionContainer_hgytc_20 {
        padding:var(--spx-unit-8)
    }
}

html ._ReactQueryDevtools_hgytc_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._ErrorPanel_1q7py_1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    margin: var(--spx-unit-32) auto 0;
    padding: var(--spx-unit-8);
    border-radius: var(--spx-radius-md);
    background-color: var(--colours-regular-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-incorrect);
    font-size: var(--spx-font-size-xl)
}

._ErrorPanel_1q7py_1 p {
    margin: 0
}

._VideoContainer_1q7py_19 {
    display: flex;
    justify-content: center;
    background: var(--colours-plain-background-inverted)
}

html ._ReactQueryDevtools_1q7py_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._VideoTaskContainer_1qqdd_1 {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    height: 100%
}

._VideoContainer_1qqdd_8 {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spx-unit-6);
    overflow: hidden
}

@media (max-width: 768px) {
    ._VideoContainer_1qqdd_8 {
        padding:0 var(--spx-unit-2)
    }
}

._Video_1qqdd_1 {
    display: flex;
    justify-content: center;
    max-height: 100%;
    border-radius: var(--spx-radius-lg);
    overflow: hidden
}

._BottomBar_1qqdd_29 {
    flex: 0 0 auto;
    height: var(--spx-unit-16);
    padding: 0 var(--spx-unit-6);
    background-color: var(--colours-plain-background);
    border-top: var(--spx-border-size-1) solid var(--colours-border);
    display: flex;
    justify-content: space-between;
    align-items: center
}

@media (max-width: 768px) {
    ._BottomBar_1qqdd_29 {
        padding:0 var(--spx-unit-2)
    }
}

html ._ReactQueryDevtools_1qqdd_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._PageContainer_12gw4_1 {
    padding: var(--spx-unit-4);
    width: 100%
}

@media (max-width: 480px) {
    ._PageContainer_12gw4_1 {
        padding:0
    }
}

._ContentContainer_12gw4_10 {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--spx-unit-6);
    border-radius: var(--spx-radius-lg);
    overflow: auto;
    max-width: 600px;
    max-height: 100%;
    background-color: var(--colours-plain-background)
}

@media (max-width: 768px) {
    ._ContentContainer_12gw4_10 {
        padding:var(--spx-unit-4)
    }
}

@media (max-width: 480px) {
    ._ContentContainer_12gw4_10 {
        border-radius:0;
        height: 100%
    }
}

._ContentContainer_12gw4_10 ._Header_12gw4_31 {
    padding-bottom: var(--spx-unit-6)
}

._ContentContainer_12gw4_10 ._Title_12gw4_35 {
    font-size: var(--spx-font-size-2xl);
    text-align: center
}

@media (max-width: 768px) {
    ._ContentContainer_12gw4_10 ._Title_12gw4_35 {
        font-size:var(--spx-font-size-lg);
        font-weight: 500
    }
}

._ContentContainer_12gw4_10 ._Subtitle_12gw4_45 {
    font-size: var(--spx-font-size-xl);
    text-align: center;
    font-weight: 400
}

@media (max-width: 768px) {
    ._ContentContainer_12gw4_10 ._Subtitle_12gw4_45 {
        font-size:var(--spx-font-size-base)
    }
}

html ._ReactQueryDevtools_12gw4_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._QuestionContainer_1nj91_1 {
    flex: 1 1 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: auto auto var(--spx-unit-4) auto;
    background-color: var(--colours-question-background);
    border-radius: var(--spx-radius-lg);
    max-width: 1280px;
    width: 100%;
    height: calc(100% - var(--spx-unit-8));
    box-shadow: var(--spx-shadow-lg)
}

@media (max-width: 1440px) {
    ._QuestionContainer_1nj91_1 {
        max-width:960px
    }
}

@media (max-width: 1024px),(max-height: 700px) {
    ._QuestionContainer_1nj91_1 {
        margin:0 auto;
        box-shadow: none
    }
}

._QuestionScrollableContent_1nj91_24 {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
    overflow-x: hidden;
    scrollbar-gutter: stable both-edges;
    padding: var(--spx-unit-2) var(--spx-unit-2) 0 var(--spx-unit-2)
}

@media (max-width: 1024px),(max-height: 700px) {
    ._QuestionScrollableContent_1nj91_24 {
        padding:0 var(--spx-unit-10)
    }
}

@media (max-width: 768px) {
    ._QuestionScrollableContent_1nj91_24 {
        padding:0 var(--spx-unit-5)
    }
}

@media (max-width: 480px) {
    ._QuestionScrollableContent_1nj91_24 {
        padding:0 var(--spx-unit-2)
    }
}

._QuestionWrapper_1nj91_46 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 auto;
    padding: 0 var(--spx-unit-6)
}

@media (max-width: 1024px) {
    ._QuestionWrapper_1nj91_46 {
        padding:0
    }
}

._SubmitErrorContent_1nj91_58 {
    padding: var(--spx-unit-4);
    border-width: var(--spx-border-size-2);
    border-color: var(--colours-incorrect);
    outline-color: var(--colours-incorrect);
    border-style: solid;
    border-radius: var(--spx-radius-md);
    margin: var(--spx-unit-8) var(--spx-unit-4);
    background-color: var(--colours-plain-background);
    max-width: calc(100vw - var(--spx-unit-4) * 2)
}

@media (max-width: 480px) {
    ._SubmitErrorContent_1nj91_58 {
        font-size:var(--spx-font-size-sm);
        padding: var(--spx-unit-2)
    }
}

._SubmitErrorContent_1nj91_58 ._ErrorMessage_1nj91_74 {
    margin: 0;
    -webkit-text-fill-color: initial;
    color: var(--colours-incorrect)
}

._SubmitErrorContent_1nj91_58 ._RefreshLink_1nj91_79 {
    text-decoration: underline;
    cursor: pointer;
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable)
}

._PreviousButton_1nj91_86 {
    white-space: nowrap
}

._VideoContainer_1nj91_90 {
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    background: var(--colours-plain-background-inverted)
}

._VideoCloseButton_1nj91_98 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spx-unit-3) 0
}

@media (max-height: 400px) {
    ._VideoCloseButton_1nj91_98 {
        display:none
    }
}

._VideoCloseX_1nj91_109 {
    display: none
}

@media (max-height: 400px) {
    ._VideoCloseX_1nj91_109 {
        display:inline-flex
    }
}

._VideoButtonsContainer_1nj91_117 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--spx-unit-3)
}

._TipBadge_1nj91_125 {
    background-color: var(--colours-tip-badge-background);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    padding: var(--spx-unit-0-5) var(--spx-unit-2);
    border-radius: var(--spx-radius-sm);
    margin-right: var(--spx-unit-2);
    margin-top: 0
}

html ._ReactQueryDevtools_1nj91_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._BottomBar_1wgpl_1 {
    min-height: 60px;
    height: 60px;
    border-top: var(--spx-border-size-1) solid var(--colours-separator)
}

@media (max-width: 480px) {
    ._BottomBar_1wgpl_1 * {
        font-size:var(--spx-font-size-lg)
    }
}

._BottomBar_1wgpl_1>div {
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr auto 1fr
}

._BottomBar_1wgpl_1>div>*:nth-child(1) {
    justify-self: start
}

._BottomBar_1wgpl_1>div>*:nth-child(2) {
    justify-self: center
}

@media (max-width: 480px) {
    ._BottomBar_1wgpl_1>div>*:nth-child(2) {
        margin:auto var(--spx-unit-1)
    }
}

._BottomBar_1wgpl_1>div>*:nth-child(3) {
    justify-self: end
}

html ._ReactQueryDevtools_1wgpl_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Container_pust1_1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: var(--spx-font-size-base);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._Section_pust1_11 {
    font-size: var(--spx-font-size-xl);
    text-align: center;
    margin: var(--spx-unit-8)
}

._Message_pust1_17 {
    margin: var(--spx-unit-5) 0 0 0
}

._Buttons_pust1_21 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
}

@media (max-width: 480px) {
    ._Buttons_pust1_21>a {
        font-size:var(--spx-font-size-lg)
    }
}

._Buttons_pust1_21>* {
    margin-left: var(--spx-unit-3)
}

._Buttons_pust1_21>*:last-child {
    margin-right: var(--spx-unit-3)
}

._ResultImage_pust1_42 {
    background-color: var(--colours-correct);
    border-radius: var(--spx-radius-full);
    padding: var(--spx-unit-2);
    width: var(--spx-unit-14);
    height: var(--spx-unit-14)
}

html ._ReactQueryDevtools_pust1_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._QuestionInfo_5oh8x_1 {
    flex: 0 0 auto;
    margin: 0 auto var(--spx-unit-4);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: var(--spx-unit-4)
}

._CalculatorInfoContainer_5oh8x_10 {
    display: flex;
    flex-direction: row;
    align-items: center
}

._CalculatorInfoContainer_5oh8x_10 p {
    margin-left: var(--spx-unit-1);
    width: var(--spx-unit-20);
    font-size: var(--spx-font-size-sm);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    margin-block:0}

._CalculatorInfoContainer_5oh8x_10 ._CalculatorIcon_5oh8x_23 {
    width: var(--spx-unit-10);
    margin-left: var(--spx-unit-6)
}

html ._ReactQueryDevtools_5oh8x_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._ResultFullWidth_1ylu5_1 {
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--colours-plain-background);
    animation: _SlideUp_1ylu5_1 .5s normal forwards ease-in-out;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    z-index: 10
}

@keyframes _SlideUp_1ylu5_1 {
    0% {
        transform: translateY(100%)
    }

    to {
        transform: translateY(0)
    }
}

._ResultFullWidth_1ylu5_1._Correct_1ylu5_21 {
    background-color: var(--colours-complete)
}

._ResultFullWidth_1ylu5_1._Incorrect_1ylu5_25,._ResultFullWidth_1ylu5_1._SeekHelp_1ylu5_26 {
    background-color: var(--colours-regular-background)
}

._ResultContainer_1ylu5_30 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px;
    margin: 0 auto
}

._ResultContainer_1ylu5_30:not(._Correct_1ylu5_21) {
    max-width: 800px
}

@media (max-width: 768px) {
    ._ResultContainer_1ylu5_30 {
        height:auto;
        flex-direction: column
    }
}

._ResultContainer_1ylu5_30._SeekHelp_1ylu5_26 {
    display: flex;
    flex-direction: column
}

._ResultShim_1ylu5_52 {
    flex: 0 1 auto
}

._ResultInfoWrapper_1ylu5_56 {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center
}

._Result_1ylu5_1 {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
}

@media (max-width: 768px) {
    ._Result_1ylu5_1 {
        margin-bottom:var(--spx-unit-4)
    }
}

._ResultImage_1ylu5_75 {
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-full);
    padding: var(--spx-unit-2);
    width: var(--spx-unit-14);
    height: var(--spx-unit-14);
    flex: 0 0 auto
}

@media (max-width: 768px) {
    ._ResultImage_1ylu5_75 {
        width:var(--spx-unit-12);
        height: var(--spx-unit-12)
    }
}

._SeekHelpResultImage_1ylu5_89 {
    width: var(--spx-unit-5);
    height: var(--spx-unit-5)
}

._Messages_1ylu5_94 {
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    font-size: var(--spx-font-size-xl)
}

@media (max-width: 768px) {
    ._Messages_1ylu5_94 {
        font-size:var(--spx-font-size-lg)
    }
}

._Messages_1ylu5_94._Correct_1ylu5_21 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

._Messages_1ylu5_94._Incorrect_1ylu5_25,._Messages_1ylu5_94._SeekHelp_1ylu5_26 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._AdditionalInfo_1ylu5_116._SeekHelp_1ylu5_26 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-size: var(--spx-font-size-base);
    max-width: 66%;
    text-align: center;
    padding: var(--spx-unit-2) 0
}

@media (max-width: 768px) {
    ._AdditionalInfo_1ylu5_116._SeekHelp_1ylu5_26 {
        max-width:80%
    }
}

@media (max-width: 768px) {
    ._AdditionalInfo_1ylu5_116._SeekHelp_1ylu5_26 {
        max-width:100%
    }
}

._ResultMessage_1ylu5_132,._SeekHelpResultMessage_1ylu5_133 {
    font-weight: 700;
    font-size: var(--spx-font-size-2xl)
}

@media (max-width: 768px) {
    ._ResultMessage_1ylu5_132,._SeekHelpResultMessage_1ylu5_133 {
        font-size:var(--spx-font-size-xl)
    }
}

._SeekHelpResultMessage_1ylu5_133 {
    -webkit-text-fill-color: initial;
    color: var(--colours-seek-help)
}

._Links_1ylu5_146 {
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around
}

._Links_1ylu5_146>* {
    margin: 5px 0
}

._ButtonsContainer_1ylu5_158 {
    display: flex;
    flex-direction: row
}

@media (max-width: 768px) {
    ._ButtonsContainer_1ylu5_158>a {
        font-size:var(--spx-font-size-lg)
    }
}

._ButtonsContainer_1ylu5_158._SeekHelp_1ylu5_26 {
    flex-direction: row-reverse
}

._ButtonsContainer_1ylu5_158>* {
    margin-left: var(--spx-unit-3)
}

._ButtonsContainer_1ylu5_158>*:last-child {
    margin-right: var(--spx-unit-3)
}

html ._ReactQueryDevtools_1ylu5_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Activity_67a0v_1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden
}

html ._ReactQueryDevtools_67a0v_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._TaskItemsContainer_jnrtf_1 {
    margin-bottom: var(--spx-unit-2);
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    height: var(--spx-unit-11)
}

._TaskItemsContainer_jnrtf_1:before,._TaskItemsContainer_jnrtf_1:after {
    content: "";
    margin: auto
}

._TaskItemLink_jnrtf_22 {
    margin: 0;
    padding: var(--spx-unit-3);
    border-radius: 0 0 var(--spx-radius-md) var(--spx-radius-md);
    border: var(--spx-border-size-1) solid var(--colours-question-background);
    border-top: none;
    background-color: var(--colours-regular-background);
    width: var(--spx-unit-20);
    height: var(--spx-unit-9);
    display: flex;
    justify-content: center;
    align-items: center;
    transition-property: height,color,background-color;
    transition-duration: .15s;
    transition-timing-function: var(--spx-ease-out-1);
    text-decoration: none;
    font-weight: 700;
    font-size: var(--spx-font-size-lg)
}

._TaskItemLink_jnrtf_22:not(._Summary_jnrtf_42) {
    letter-spacing: 2px
}

._TaskItemLink_jnrtf_22>div {
    scroll-margin: var(--spx-unit-12);
    display: flex;
    align-items: center
}

._Correct_jnrtf_52 {
    background-color: var(--colours-complete)
}

._Correct_jnrtf_52>div>span {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

._Incorrect_jnrtf_60 {
    background-color: var(--colours-regular-background)
}

._Incorrect_jnrtf_60>div>span {
    -webkit-text-fill-color: initial;
    color: var(--colours-incorrect)
}

._SeekHelp_jnrtf_68 {
    background-color: var(--colours-regular-background)
}

._SeekHelp_jnrtf_68>div>span {
    -webkit-text-fill-color: initial;
    color: var(--colours-seek-help)
}

._Unattempted_jnrtf_76 {
    background-color: var(--colours-regular-background)
}

._Unattempted_jnrtf_76>div>span,._Summary_jnrtf_42>div>span {
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable)
}

._Selected_jnrtf_85 {
    height: var(--spx-unit-11);
    pointer-events: none
}

._Selected_jnrtf_85._Unattempted_jnrtf_76,._Selected_jnrtf_85._Summary_jnrtf_42 {
    background-color: var(--colours-selected)
}

._Selected_jnrtf_85._Unattempted_jnrtf_76>div>span,._Selected_jnrtf_85._Summary_jnrtf_42>div>span {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

._Loading_jnrtf_100 {
    cursor: wait
}

._TaskItemLink_jnrtf_22._Disabled_jnrtf_104 {
    cursor: not-allowed
}

._TaskItemLink_jnrtf_22._Disabled_jnrtf_104:not(._Badged_jnrtf_107)>div>span {
    opacity: .2
}

._TaskItemLink_jnrtf_22._Summary_jnrtf_42 {
    width: var(--spx-unit-28)
}

._QuestionNavigationIcon_jnrtf_116 {
    margin-left: var(--spx-unit-2);
    width: var(--spx-unit-5);
    height: var(--spx-unit-5)
}

._Badged_jnrtf_107 {
    background-color: var(--colours-correct-disabled);
    -webkit-text-fill-color: initial;
    color: var(--colours-complete-text)
}

html ._ReactQueryDevtools_jnrtf_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._XPCount_1ktrq_1 {
    -webkit-text-fill-color: initial;
    color: var(--colours-complete);
    font-weight: 700;
    white-space: nowrap;
    width: 110px;
    display: inline-block
}

@media (max-width: 768px) {
    ._XPCount_1ktrq_1 {
        width:73px
    }
}

._BonusXPContainer_1ktrq_13 {
    position: relative;
    border-radius: var(--spx-radius-md);
    background-color: var(--colours-light-background);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(var(--spx-size-lg),calc(100% - 50px));
    flex: 0 0 auto
}

._BonusXPContainer_1ktrq_13>* {
    flex: 0 0 auto
}

._BonusXPContainer_1ktrq_13 ._BannerContainer_1ktrq_27 {
    width: 105%;
    margin-bottom: 0
}

._BonusXPContainer_1ktrq_13 ._Banner_1ktrq_27 {
    display: flex;
    justify-content: center;
    align-items: center
}

._BonusXPContainer_1ktrq_13 ._Banner_1ktrq_27>h2 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    text-shadow: 0 2px 0 var(--colours-shadow-25);
    font-size: var(--spx-font-size-2xl)
}

@media (max-width: 768px) {
    ._BonusXPContainer_1ktrq_13 ._Banner_1ktrq_27>h2 {
        font-size:var(--spx-font-size-xl)
    }
}

._RewardsContainer_1ktrq_49 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: var(--spx-unit-4);
    padding-top: 0
}

._RewardsContainer_1ktrq_49>* {
    flex: 0 0 auto
}

@media (max-width: 768px) {
    ._RewardsContainer_1ktrq_49 {
        padding:var(--spx-unit-2);
        padding-top: 0
    }
}

@media (max-width: 768px) {
    ._RewardsContainer_1ktrq_49 {
        padding:var(--spx-unit-1)
    }
}

._Unearned_1ktrq_71 {
    -webkit-text-fill-color: initial;
    color: var(--colours-locked)
}

._RewardContainer_1ktrq_75 {
    position: relative;
    justify-content: space-between;
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
    transform-origin: right center;
    overflow: hidden;
    width: 100%;
    padding: var(--spx-unit-2);
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: var(--spx-font-size-2xl);
    -webkit-text-fill-color: initial;
    color: var(--colours-complete);
    line-height: var(--spx-unit-10);
    flex: 0 0 auto
}

._RewardContainer_1ktrq_75>span {
    display: flex;
    align-items: center
}

._RewardContainer_1ktrq_75>span>* {
    flex: 0 0 auto
}

@media (max-width: 768px) {
    ._RewardContainer_1ktrq_75 {
        font-size:var(--spx-font-size-xl);
        padding: var(--spx-unit-1)
    }
}

@media (max-width: 480px) {
    ._RewardContainer_1ktrq_75 {
        font-size:var(--spx-font-size-base);
        padding: 0
    }
}

@media (max-width: 360px) {
    ._RewardContainer_1ktrq_75 {
        font-size:var(--spx-font-size-sm)
    }
}

._RewardContainer_1ktrq_75 :not(:first-child) {
    margin-left: var(--spx-unit-2)
}

._ReasonText_1ktrq_120 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body)
}

._ReasonText_1ktrq_120._Unearned_1ktrq_71 {
    text-decoration: line-through;
    -webkit-text-fill-color: initial;
    color: var(--colours-locked)
}

._SwapsNode_1ktrq_129 {
    font-weight: 700
}

._SwapsNode_1ktrq_129._Unearned_1ktrq_71 {
    font-weight: 400
}

._BookworkNode_1ktrq_137 img {
    width: 40px
}

@media (max-width: 480px) {
    ._BookworkNode_1ktrq_137 img {
        width:20px
    }
}

._XPAmount_1ktrq_147 {
    font-weight: 700
}

._Tick_1ktrq_151 {
    background-color: var(--colours-complete);
    border-radius: var(--spx-radius-full);
    padding: var(--spx-unit-2);
    width: var(--spx-unit-8);
    height: var(--spx-unit-8)
}

._Tick_1ktrq_151._Unearned_1ktrq_71 {
    background-color: var(--colours-locked);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-on-secondary)
}

@media (max-width: 480px) {
    ._Tick_1ktrq_151 {
        height:var(--spx-unit-5);
        width: var(--spx-unit-5);
        padding: var(--spx-unit-1)
    }
}

@media (max-width: 360px) {
    ._Tick_1ktrq_151 {
        display:none
    }
}

html ._ReactQueryDevtools_1ktrq_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._SummaryContainer_qskb0_1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--spx-font-size-base);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    overflow: auto;
    padding: var(--spx-unit-4)
}

._SummaryContainer_qskb0_1>* {
    margin: var(--spx-unit-4)
}

._SummaryContainer_qskb0_1>*:first-child {
    margin-top: auto
}

._SummaryContainer_qskb0_1>*:last-child {
    margin-bottom: auto
}

._SummaryTitle_qskb0_28 {
    font-size: var(--spx-font-size-3xl);
    font-weight: 500;
    text-align: center
}

._SummaryProgress_qskb0_34 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--colours-light-background);
    border-radius: var(--spx-radius-full);
    width: var(--spx-unit-28);
    height: var(--spx-unit-28)
}

._SummaryProgressCounts_qskb0_45 {
    font-size: var(--spx-font-size-4xl);
    font-weight: 500;
    line-height: var(--spx-font-size-3xl);
    margin-bottom: var(--spx-unit-1)
}

._SummaryProgressText_qskb0_52 {
    font-size: var(--spx-font-size-xs);
    font-weight: 500
}

._MotivationSection_qskb0_57 {
    font-size: var(--spx-font-size-3xl);
    text-align: center
}

._AllCorrect_qskb0_62 {
    -webkit-text-fill-color: initial;
    color: var(--colours-complete);
    font-weight: 500;
    font-size: var(--spx-font-size-3xl);
    margin: 0
}

._MotivationMessage_qskb0_69 {
    margin: 0
}

._CorrectImage_qskb0_73 {
    background-color: var(--colours-complete);
    border-radius: var(--spx-radius-full);
    padding: var(--spx-unit-4);
    width: var(--spx-unit-16);
    height: var(--spx-unit-16)
}

._Buttons_qskb0_81 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: var(--spx-unit-4) 0
}

@media (max-width: 480px) {
    ._Buttons_qskb0_81>a {
        font-size:var(--spx-font-size-lg)
    }
}

._Buttons_qskb0_81>* {
    margin-left: var(--spx-unit-3)
}

._Buttons_qskb0_81>*:last-child {
    margin-right: var(--spx-unit-3)
}

._SeekHelpSection_qskb0_106 {
    max-width: 60%;
    text-align: center;
    background-color: var(--colours-light-background);
    padding: var(--spx-unit-2) var(--spx-unit-6);
    border-radius: var(--spx-radius-md);
    margin: var(--spx-unit-8)
}

._SeekHelpImageContainer_qskb0_115 {
    height: 0
}

._SeekHelpImage_qskb0_115 {
    height: 40px;
    text-align: center;
    margin-top: -40px;
    width: 40px;
    border-radius: var(--spx-radius-full);
    background-color: var(--colours-seek-help);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    padding: var(--spx-unit-2)
}

._SeekHelpHeading_qskb0_130 {
    font-weight: 700
}

._ProgressContainer_qskb0_134 {
    display: flex;
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
    transform-origin: right center
}

._ProgressContainer_qskb0_134 :not(:first-child) {
    margin-left: var(--spx-unit-6)
}

._XPTextContainer_qskb0_144 {
    -webkit-text-fill-color: initial;
    color: var(--colours-complete);
    line-height: var(--spx-unit-16);
    font-size: var(--spx-font-size-6xl);
    font-weight: 700;
    overflow-x: hidden;
    white-space: nowrap
}

._XPTextContainer_qskb0_144 ._SmallerText_qskb0_152 {
    font-size: var(--spx-font-size-4xl)
}

._BadgedText_qskb0_157 {
    font-size: var(--spx-font-size-sm);
    font-weight: bolder
}

._SkipIcon_qskb0_162 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    height: var(--spx-font-size-sm)
}

html ._ReactQueryDevtools_qskb0_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._PopperImage_9479w_1 {
    max-width: 40%;
    max-height: 20%;
    min-height: 50px
}

._SummaryContainer_9479w_7>* {
    margin: var(--spx-unit-4);
    flex: 0 0 auto
}

@media (max-width: 768px) {
    ._SummaryContainer_9479w_7>* {
        margin:var(--spx-unit-2)
    }
}

._QuestionContainer_9479w_16 {
    flex: 1 1 auto;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: var(--spx-unit-4) auto var(--spx-unit-4) auto;
    background-color: var(--colours-question-background);
    border-radius: var(--spx-radius-lg);
    width: 1280px;
    height: calc(100% - var(--spx-unit-8));
    box-shadow: var(--spx-shadow-lg)
}

@media (max-width: 1440px) {
    ._QuestionContainer_9479w_16 {
        width:960px
    }
}

@media (max-width: 1024px),(max-height: 700px) {
    ._QuestionContainer_9479w_16 {
        overflow:auto;
        margin: 0;
        width: auto;
        height: auto;
        box-shadow: none
    }
}

._QuestionContainer_9479w_16 p {
    font-size: var(--spx-font-size-4xl);
    font-weight: 500;
    text-align: center
}

@media (max-width: 1024px),(max-height: 700px) {
    ._QuestionContainer_9479w_16 p {
        font-size:var(--spx-font-size-2xl)
    }
}

@media (max-width: 480px),(--spx-screen-height-sm) {
    ._QuestionContainer_9479w_16 p {
        font-size:var(--spx-font-size-xl)
    }
}

._QuestionContainer_9479w_16 ._PackageCompleteTitle_9479w_55 {
    font-size: var(--spx-font-size-6xl);
    font-weight: 600;
    text-align: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-complete)
}

@media (max-width: 1024px),(max-height: 700px) {
    ._QuestionContainer_9479w_16 ._PackageCompleteTitle_9479w_55 {
        font-size:var(--spx-font-size-4xl)
    }
}

@media (max-width: 480px),(--spx-screen-height-sm) {
    ._QuestionContainer_9479w_16 ._PackageCompleteTitle_9479w_55 {
        font-size:var(--spx-font-size-2xl)
    }
}

._QuestionContainer_9479w_16 ._BookworkAccuracyText_9479w_70 {
    font-size: var(--spx-font-size-3xl);
    border-radius: var(--spx-radius-md);
    background-color: var(--colours-light-background);
    padding: var(--spx-unit-6) var(--spx-unit-16);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-weight: 500;
    text-align: center;
    vertical-align: text-top
}

@media (max-width: 1024px),(max-height: 700px) {
    ._QuestionContainer_9479w_16 ._BookworkAccuracyText_9479w_70 {
        font-size:var(--spx-font-size-2xl);
        padding: var(--spx-unit-6) var(--spx-unit-6)
    }
}

@media (max-width: 480px),(--spx-screen-height-sm) {
    ._QuestionContainer_9479w_16 ._BookworkAccuracyText_9479w_70 {
        font-size:var(--spx-font-size-lg);
        padding: var(--spx-unit-4) var(--spx-unit-4)
    }
}

._BookworkAccuracyIcon_9479w_92 {
    height: var(--spx-unit-8);
    position: relative;
    bottom: .1em;
    padding-left: var(--spx-unit-2)
}

@media (max-width: 1024px) {
    ._BookworkAccuracyIcon_9479w_92 {
        height:var(--spx-unit-6);
        padding-left: var(--spx-unit-1)
    }
}

@media (max-width: 768px) {
    ._BookworkAccuracyIcon_9479w_92 {
        height:var(--spx-unit-6)
    }
}

html ._ReactQueryDevtools_9479w_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._TransitionContainer_1ty8p_1 {
    flex-grow: 1;
    overflow: hidden;
    position: relative
}

._TransitionPage_1ty8p_7 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%
}

html ._ReactQueryDevtools_1ty8p_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._LQDContainer_1v01e_1 {
    flex: 1 1 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-width: 100vw;
    background: var(--swclient-background);
    z-index: 0
}

@media (max-width: 1024px),(max-height: 700px) {
    ._LQDContainer_1v01e_1 {
        background:none;
        background-color: var(--colours-question-background)
    }
}

._LQDContainer_1v01e_1._DisableBackground_1v01e_18 {
    background: none
}

html ._ReactQueryDevtools_1v01e_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._TasksContainer_1fqg7_1 {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    margin-top: var(--spx-unit-3)
}

._TasksContainer_1fqg7_1>*:not(:last-child) {
    margin-right: var(--spx-unit-3)
}

@media (max-width: 768px) {
    ._TasksContainer_1fqg7_1 {
        flex-direction:column
    }

    ._TasksContainer_1fqg7_1>*:not(:last-child) {
        margin-bottom: var(--spx-unit-3);
        margin-right: 0
    }
}

._BackgroundContainer_1fqg7_21 {
    height: 100%;
    width: 200%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    transition: left .2s ease-in-out
}

._BackgroundImage_1fqg7_31 {
    height: 90%;
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: .8;
    mix-blend-mode: multiply
}

._Chip_1fqg7_40 {
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: box-shadow .2s ease-in-out
}

._Chip_1fqg7_40 *:not(:last-child) {
    margin-right: var(--spx-unit-2)
}

._Locked_1fqg7_51 {
    -webkit-text-fill-color: initial;
    color: var(--colours-locked-dark);
    cursor: not-allowed
}

._Locked_1fqg7_51 ._BackgroundContainer_1fqg7_21 {
    background: var(--colours-background-locked)
}

._Locked_1fqg7_51 ._VideoIcon_1fqg7_60 * {
    fill: var(--colours-locked-dark)
}

._Available_1fqg7_65 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

._Available_1fqg7_65 ._BackgroundContainer_1fqg7_21 {
    background: linear-gradient(141deg,var(--colours-primary-gradient-start) 0%,var(--colours-primary-gradient-stop-light) 50%,var(--colours-primary-gradient-start) 100%)
}

._Available_1fqg7_65 ._VideoIcon_1fqg7_60 * {
    fill: var(--colours-text-body-inverted)
}

._Available_1fqg7_65 ._Chip_1fqg7_40 {
    border: none;
    background-color: var(--colours-plain-background)
}

._Started_1fqg7_87 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted)
}

._Started_1fqg7_87 ._BackgroundContainer_1fqg7_21 {
    background: linear-gradient(314deg,var(--colours-in-progress-gradient-start) 0%,var(--colours-in-progress-gradient-stop) 50%,var(--colours-in-progress-gradient-start) 100%)
}

._Started_1fqg7_87 ._Chip_1fqg7_40 {
    border: none;
    background-color: var(--colours-plain-background)
}

._Complete_1fqg7_105 {
    -webkit-text-fill-color: initial;
    color: var(--colours-complete-text-dark)
}

._Complete_1fqg7_105 ._BackgroundContainer_1fqg7_21 {
    background: linear-gradient(311deg,var(--colours-correct-gradient-start) 0%,var(--colours-correct-gradient-stop) 50%,var(--colours-correct-gradient-start) 100%)
}

._Complete_1fqg7_105 ._VideoIcon_1fqg7_60 * {
    fill: var(--colours-complete-text-dark)
}

._Complete_1fqg7_105 ._Chip_1fqg7_40 {
    border: none;
    background-color: var(--colours-plain-background)
}

._TaskContainer_1fqg7_127 {
    position: relative;
    border-radius: var(--spx-radius-md);
    flex: 1 1;
    padding: var(--spx-unit-4);
    min-height: var(--spx-unit-32);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-decoration: none;
    overflow: hidden
}

._TaskContainer_1fqg7_127 ._VideoIcon_1fqg7_60 {
    fill: var(--colors-text-body-inverted)
}

._TaskContainer_1fqg7_127:hover:not(._Locked_1fqg7_51,._CompletionLocked_1fqg7_143) ._BackgroundContainer_1fqg7_21 {
    left: -100%
}

._TaskContainer_1fqg7_127:hover:not(._Locked_1fqg7_51,._CompletionLocked_1fqg7_143) ._Chip_1fqg7_40 {
    box-shadow: var(--spx-shadow-md-dark)
}

._LeftContainer_1fqg7_154,._RightContainer_1fqg7_155 {
    z-index: 1;
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

._LeftContainer_1fqg7_154>*:not(:last-child),._RightContainer_1fqg7_155>*:not(:last-child) {
    margin-bottom: var(--spx-unit-4)
}

._LeftContainer_1fqg7_154 {
    flex-basis: 71%
}

._RightContainer_1fqg7_155 {
    flex-basis: 29%;
    align-items: flex-end
}

@media (max-width: 1024px) {
    ._LeftContainer_1fqg7_154 {
        flex-basis:80%
    }

    ._RightContainer_1fqg7_155 {
        flex-basis: 20%
    }
}

@media (max-width: 768px) {
    ._LeftContainer_1fqg7_154 {
        flex-basis:71%
    }

    ._RightContainer_1fqg7_155 {
        flex-basis: 29%
    }
}

._InfoContainer_1fqg7_197 {
    display: flex;
    flex-direction: column
}

._InfoContainer_1fqg7_197 ._Description_1fqg7_201 {
    font-weight: 400;
    font-size: var(--spx-font-size-sm)
}

._InfoContainer_1fqg7_197 ._VideoIcon_1fqg7_60 {
    margin-right: var(--spx-unit-2)
}

._InfoContainer_1fqg7_197>:not(:last-child,:only-child) {
    margin-right: var(--spx-unit-2)
}

html ._ReactQueryDevtools_1fqg7_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Task_1p2y5_1 {
    border-radius: var(--spx-radius-sm);
    margin: var(--spx-unit-2) 0;
    text-decoration: none;
    padding: var(--spx-unit-3) var(--spx-unit-4);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--colours-nested-item);
    cursor: not-allowed
}

._Task_1p2y5_1:first-child {
    margin-top: var(--spx-unit-2)
}

._Task_1p2y5_1:last-child {
    margin-bottom: 0
}

._Task_1p2y5_1._TaskClickable_1p2y5_22 {
    cursor: pointer
}

._Task_1p2y5_1._TaskClickable_1p2y5_22:hover {
    background-color: var(--colours-nested-item-hover)
}

._TaskLeft_1p2y5_30 {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
}

._TaskLeft_1p2y5_30._LockedByOnboarding_1p2y5_37 * {
    -webkit-text-fill-color: initial;
    color: var(--colours-locked);
    fill: var(--colours-locked)
}

._TaskRight_1p2y5_43 {
    margin-left: var(--spx-unit-8);
    flex: 0 0 auto
}

@media (max-width: 768px) {
    ._TaskRight_1p2y5_43 {
        margin-left:var(--spx-unit-4)
    }
}

._TaskTitle_1p2y5_52 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-weight: 400;
    font-size: var(--spx-font-size-base)
}

@media (max-width: 480px) {
    ._TaskTitle_1p2y5_52 {
        font-size:var(--spx-font-size-sm);
        padding-right: var(--spx-unit-2)
    }
}

._TaskCompletionPercentage_1p2y5_63 {
    -webkit-text-fill-color: initial;
    color: var(--colours-unstarted)
}

@media (max-width: 480px) {
    ._TaskCompletionPercentage_1p2y5_63 {
        font-size:var(--spx-font-size-sm)
    }
}

._TaskCompletionPercentage_1p2y5_63._Started_1p2y5_71 {
    -webkit-text-fill-color: initial;
    color: var(--colours-in-progress)
}

._TaskCompletionPercentage_1p2y5_63._Completed_1p2y5_75 {
    -webkit-text-fill-color: initial;
    color: var(--colours-complete-text)
}

._TaskChip_1p2y5_79 {
    width: 130px;
    text-align: center
}

@media (max-width: 480px) {
    ._TaskChip_1p2y5_79 {
        width:105px
    }
}

._TaskChipIcon_1p2y5_88 {
    margin-left: var(--spx-unit-1)
}

._TaskChipIcon_1p2y5_88._Chevron_1p2y5_91 {
    height: var(--spx-unit-3)
}

._TaskChipIcon_1p2y5_88._Tick_1p2y5_95 {
    height: 20px
}

html ._ReactQueryDevtools_1p2y5_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._BookworkAccuracy_1ug67_1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary)
}

@media (max-width: 768px) {
    ._BookworkAccuracy_1ug67_1 {
        max-width:var(--spx-unit-20);
        flex-direction: column-reverse
    }
}

@media (max-width: 360px) {
    ._BookworkAccuracy_1ug67_1 {
        max-width:none;
        flex-direction: row
    }
}

._BookworkAccuracyText_1ug67_18 {
    white-space: pre-line;
    text-align: center;
    font-weight: 400;
    font-size: var(--spx-font-size-sm);
    margin-right: var(--spx-unit-2)
}

@media (max-width: 768px) {
    ._BookworkAccuracyText_1ug67_18 {
        margin-right:0
    }
}

@media (max-width: 480px) {
    ._BookworkAccuracyText_1ug67_18 {
        font-size:var(--spx-font-size-xs);
        margin-top: var(--spx-unit-0-5)
    }
}

@media (max-width: 360px) {
    ._BookworkAccuracyText_1ug67_18 {
        margin-right:var(--spx-unit-1);
        margin-top: 0
    }
}

._BookworkAccuracyIcon_1ug67_40 {
    width: 40px
}

@media (max-width: 480px) {
    ._BookworkAccuracyIcon_1ug67_40 {
        width:32px
    }
}

._JoyrideTooltip_1ug67_48 {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    padding: var(--spx-unit-6);
    background-color: var(--colours-plain-background);
    border-radius: var(--spx-radius-lg);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    font-size: var(--spx-font-size-lg);
    animation: _AnimationFadeIn_1ug67_1 .4s linear
}

._JoyrideTooltip_1ug67_48>p {
    margin-top: 0
}

@media (max-width: 480px) {
    ._JoyrideTooltip_1ug67_48 {
        max-width:320px
    }
}

._TooltipButton_1ug67_68 {
    align-self: flex-end
}

@media (max-width: 480px) {
    ._TooltipButton_1ug67_68 {
        font-size:var(--spx-font-size-sm)
    }
}

._TooltipButtonContainer_1ug67_76 {
    display: flex;
    justify-content: space-around
}

@keyframes _AnimationFadeIn_1ug67_1 {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

html ._ReactQueryDevtools_1ug67_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._PackageStatus_wmqxb_1 {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: stretch;
    margin-left: var(--spx-unit-2)
}

@media (max-width: 360px) {
    ._PackageStatus_wmqxb_1 {
        justify-content:space-between;
        margin-left: 0
    }
}

._PackageStatusLocked_wmqxb_14 {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 400;
    -webkit-text-fill-color: initial;
    color: var(--colours-locked)
}

._PackageStatusLocked_wmqxb_14>span {
    margin-right: var(--spx-unit-4)
}

._PackageStatusLocked_wmqxb_14 svg {
    fill: var(--colours-locked)
}

._PackageChipIcon_wmqxb_30 {
    margin-left: var(--spx-unit-2)
}

._CompletionStatus_wmqxb_34 {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 700;
    font-size: var(--spx-font-size-xl);
    min-width: 44px
}

._Started_wmqxb_43 {
    -webkit-text-fill-color: initial;
    color: var(--colours-in-progress)
}

._NotStarted_wmqxb_47 {
    font-weight: 700;
    -webkit-text-fill-color: initial;
    color: var(--colours-text-subtle)
}

._CompletedText_wmqxb_52 {
    position: relative;
    top: 2px;
    -webkit-text-fill-color: initial;
    color: var(--colours-complete-text)
}

@media (max-width: 768px) {
    ._CompletedText_wmqxb_52 {
        display:none
    }
}

._Divider_wmqxb_62 {
    border-left: var(--spx-border-size-2) solid var(--colours-separator);
    margin-left: var(--spx-unit-3);
    margin-right: var(--spx-unit-3)
}

@media (max-width: 768px) {
    ._Divider_wmqxb_62 {
        margin-left:var(--spx-unit-2);
        margin-right: var(--spx-unit-2)
    }
}

@media (max-width: 360px) {
    ._Divider_wmqxb_62 {
        display:none
    }
}

html ._ReactQueryDevtools_wmqxb_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._Package_s1pvn_1 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
}

@media (max-width: 360px) {
    ._Package_s1pvn_1 {
        flex-direction:column;
        align-items: flex-start
    }
}

._PackageAccordionTrigger_s1pvn_14 {
    border-top-right-radius: var(--spx-radius-md);
    border-bottom-right-radius: var(--spx-radius-md);
    transition: border-radius .2s linear
}

._PackageAccordionTrigger_s1pvn_14[data-state=open] {
    border-bottom-right-radius: 0
}

._LockedPackage_s1pvn_24 {
    cursor: not-allowed
}

._PackageLeft_s1pvn_28,._PackageRight_s1pvn_29 {
    flex: 0 1 auto
}

@media (max-width: 480px) {
    ._PackageLeft_s1pvn_28,._PackageRight_s1pvn_29 {
        font-size:var(--spx-font-size-base)
    }
}

._PackageLeft_s1pvn_28 {
    display: flex;
    flex-flow: row nowrap;
    align-items: center
}

@media (max-width: 480px) {
    ._PackageLeft_s1pvn_28 {
        padding-right:var(--spx-unit-2)
    }
}

@media (max-width: 480px) {
    ._PackageLeft_s1pvn_28 {
        flex-direction:column;
        align-items: flex-start
    }
}

@media (max-width: 360px) {
    ._PackageLeft_s1pvn_28 {
        padding-right:0;
        margin-bottom: var(--spx-unit-2);
        flex-direction: row;
        align-items: center
    }
}

._PackageRight_s1pvn_29 {
    flex: 0 0 auto
}

@media (max-width: 360px) {
    ._PackageRight_s1pvn_29 {
        width:100%
    }
}

._LateChip_s1pvn_67 {
    margin: 0 var(--spx-unit-4)
}

@media (max-width: 768px) {
    ._LateChip_s1pvn_67 {
        margin:0 var(--spx-unit-2)
    }
}

@media (max-width: 480px) {
    ._LateChip_s1pvn_67 {
        margin:var(--spx-unit-2) 0
    }
}

@media (max-width: 360px) {
    ._LateChip_s1pvn_67 {
        margin:0 var(--spx-unit-2)
    }
}

._TaskLoading_s1pvn_83 {
    height: var(--spx-unit-16);
    justify-content: flex-start;
    background: none
}

._TaskLoadingMessage_s1pvn_89 {
    margin-left: var(--spx-unit-3);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary);
    font-size: var(--spx-font-size-base);
    font-weight: 400
}

._TaskLoadingErrorMessage_s1pvn_96 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-warning)
}

._RefreshLink_s1pvn_100 {
    text-decoration: underline;
    cursor: pointer;
    -webkit-text-fill-color: initial;
    color: var(--colours-interactable)
}

._CollapsibleContent_s1pvn_106 {
    overflow: hidden
}

._CollapsibleContent_s1pvn_106[data-state=open] {
    animation: _ContentSlideDown_s1pvn_1 .3s ease-out
}

._CollapsibleContent_s1pvn_106[data-state=closed] {
    animation: _ContentSlideUp_s1pvn_1 .3s ease-out
}

@keyframes _ContentSlideDown_s1pvn_1 {
    0% {
        height: 0
    }

    to {
        height: var(--radix-collapsible-content-height)
    }
}

@keyframes _ContentSlideUp_s1pvn_1 {
    0% {
        height: var(--radix-collapsible-content-height)
    }

    to {
        height: 0
    }
}

html ._ReactQueryDevtools_s1pvn_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

:root {
    --palette-white: #ffffff;
    --palette-black: #000000;
    --palette-darker-blue: rgba(27, 38, 63, 1);
    --palette-dark-blue: rgba(46, 60, 113, 1);
    --palette-dark-blue-90: rgba(67, 80, 127, 1);
    --palette-light-blue: rgba(33, 121, 222, 1);
    --palette-light-blue-60: rgba(0, 105, 210, 1);
    --palette-light-blue-20: rgba(211, 228, 248, 1);
    --palette-light-blue-30: rgba(187, 214, 242, 1);
    --palette-green: rgba(39, 206, 136, 1);
    --palette-md-green: rgba(0, 137, 67, 1);
    --palette-md-green-20: rgba(212, 245, 231, 1);
    --palette-dark-green: rgba(27, 88, 57, 1);
    --palette-yellow: rgb(238, 214, 3, 1);
    --palette-light-yellow: rgba(255, 248, 70, 1);
    --palette-gold: rgba(255, 210, 0, 1);
    --palette-amber: rgba(238, 144, 3, 1);
    --palette-amber-20: rgba(252, 233, 205, 1);
    --palette-dark-amber: rgba(168, 79, 0, 1);
    --palette-red: rgba(208, 43, 75, 1);
    --palette-red-20: rgba(246, 213, 219, 1);
    --palette-dark-red: rgba(191, 26, 58, 1);
    --palette-purple: rgba(162, 33, 222, 1);
    --palette-purple-20: rgba(236, 211, 248, 1);
    --palette-dark-purple: rgba(124, 36, 199, 1);
    --palette-peppermint: rgba(0, 255, 209, 1);
    --palette-lighter-peppermint: rgba(85, 255, 216, 1);
    --palette-dark-grey: rgba(57, 60, 65, 1);
    --palette-mid-grey: rgba(140, 144, 149, 1);
    --palette-grey: rgba(201, 208, 218, 1);
    --palette-light-blue-grey: rgba(127, 174, 241, 1);
    --palette-blue-grey: rgba(223, 236, 248, 1);
    --palette-light-grey: rgba(238, 244, 254, 1);
    --palette-lighter-grey: rgba(248, 254, 255, 1);
    --palette-grey-50: rgba(214, 223, 233, 1);
    --palette-grey-50-opacity: rgba(201, 208, 218, .5);
    --palette-dark-blue-20-opacity: rgba(46, 60, 113, .2);
    --palette-dark-blue-90-opacity: rgba(46, 60, 113, .9);
    --palette-light-grey-90: rgba(238, 244, 254, .9);
    --palette-white-75: rgba(255, 255, 255, .75);
    --palette-green-gradient-start-light: rgba(46, 251, 153, 1);
    --palette-green-gradient-start: rgba(15, 192, 150, 1);
    --palette-green-gradient-stop: var(--palette-green);
    --palette-blue-gradient-start: rgba(75, 160, 254, 1);
    --palette-blue-gradient-stop: rgba(58, 128, 231, 1);
    --palette-blue-gradient-stop-light: rgba(85, 150, 246);
    --palette-orange-gradient-start: rgba(226, 136, 0, 1);
    --palette-orange-gradient-stop: rgba(243, 148, 6, 1);
    --palette-purple-gradient-start: #5373ff;
    --palette-purple-gradient-stop: #3a1f85;
    --palette-purple-2: #3a1f85;
    --palette-dark-grey-2: #2d255e;
    --palette-grey-10: #f9f9ff;
    --palette-purple-3: #4346c2;
    --palette-purple-4: #494bc3;
    --palette-purple-5: hsl(239, 51%, 61%);
    --palette-light-grey-purple: #f6f3ff;
    --palette-dark-peppermint: #28d29a;
    --palette-teal: #0d9488;
    --palette-teal-20: #0f766e;
    --palette-teal-grey-10: #f2f9fa;
    --palette-teal-500: #2c7a7b;
    --palette-teal-600: #285e61;
    --palette-science-dark-blue: #2a4365;
    --palette-science-dark-blue-lighter: #47648c;
    --palette-science-mid-blue: rgba(207, 228, 247, 1);
    --palette-science-tooltip-blue: rgba(45, 55, 72, 1);
    --palette-base-grey: #f4f6f8
}

:root {
    --colours-text-heading: var(--palette-dark-blue);
    --colours-text-body: var(--palette-dark-blue);
    --colours-text-body-inverted: var(--palette-white);
    --colours-text-secondary: var(--palette-dark-grey);
    --colours-text-subtle: var(--palette-grey);
    --colours-text-warning: var(--palette-amber);
    --colours-text-link: var(--palette-light-blue);
    --colours-primary: var(--palette-light-blue);
    --colours-primary-hover: var(--palette-light-blue-60);
    --colours-text-on-primary: var(--palette-white);
    --colours-secondary: var(--palette-dark-blue);
    --colours-secondary-hover: var(--palette-light-blue);
    --colours-text-on-secondary: var(--palette-white);
    --colours-interactable: var(--palette-light-blue);
    --colours-selected: var(--palette-dark-blue);
    --colours-loading: var(--palette-dark-grey);
    --colours-disabled-text: var(--palette-grey);
    --colours-disabled: var(--palette-light-grey);
    --colours-read-text: var(--palette-mid-grey);
    --colours-plain-background: var(--palette-black); /*MODIFIED*/
    --colours-plain-background-inverted: var(--palette-dark-blue);
    --colours-light-background: var(--palette-light-grey);
    --colours-light-background-inverted: var(--palette-dark-grey);
    --colours-regular-background: var(--palette-blue-grey);
    --colours-dark-background: var(--palette-grey-50);
    --colours-page-background: var(--palette-light-grey);
    --colours-page-background-gradient: var(--palette-blue-grey);
    --colours-disruptive-dialog-overlay: var(--palette-dark-blue-90-opacity);
    --colours-popover-overlay-background: var(--palette-light-grey-90);
    --colours-background-locked: var(--palette-grey-50-opacity);
    --colours-background-white-transparent: var(--palette-white-75);
    --colours-background-info: var(--palette-light-blue-20);
    --colours-background-seek-help: var(--palette-purple-20);
    --colours-background-highlighted: var(--palette-blue-grey);
    --colours-unstarted: var(--palette-dark-blue);
    --colours-in-progress: var(--palette-amber);
    --colours-complete: var(--palette-green);
    --colours-complete-text: var(--palette-md-green);
    --colours-not-yet-achieved: var(--palette-light-blue-grey);
    --colours-complete-text-dark: var(--palette-dark-green);
    --colours-correct: var(--palette-green);
    --colours-correct-disabled: var(--palette-md-green-20);
    --colours-incorrect: var(--palette-red);
    --colours-seek-help: var(--palette-purple);
    --colours-achievement: var(--palette-amber);
    --colours-locked-dark: var(--palette-mid-grey);
    --colours-locked: var(--palette-grey);
    --colours-q-swap: var(--palette-gold);
    --colours-hint: var(--palette-gold);
    --colours-separator: var(--palette-light-grey);
    --colours-border: var(--palette-grey);
    --colours-popover-border: var(--palette-blue-grey);
    --colours-opted-in: var(--palette-green);
    --colours-opted-out: var(--palette-red);
    --colours-primary-gradient-start: var(--palette-blue-gradient-start);
    --colours-primary-gradient-stop: var(--palette-blue-gradient-stop);
    --colours-primary-gradient-stop-light: var(--palette-blue-gradient-stop-light);
    --colours-correct-gradient-start: var(--palette-green-gradient-start);
    --colours-correct-gradient-stop: var(--palette-green-gradient-stop);
    --colours-in-progress-gradient-start: var(--palette-orange-gradient-start);
    --colours-in-progress-gradient-stop: var(--palette-orange-gradient-stop);
    --colours-progress-gradient-start: var(--palette-green-gradient-start-light);
    --colours-progress-gradient-stop: var(--palette-green-gradient-stop);
    --colours-item: var(--palette-white);
    --colours-item-hover: var(--palette-lighter-grey);
    --colours-nested-item: var(--palette-light-grey);
    --colours-nested-item-hover: var(--palette-blue-grey);
    --colours-nested-item-correct: var(--palette-md-green-20);
    --colours-nav-bar: var(--palette-white);
    --colours-nav-bar-hover: var(--palette-light-grey);
    --colours-question-background: var(--palette-white);
    --colours-nav-bar-link: var(--palette-dark-blue-90);
    --colours-nav-bar-link-active: var(--palette-dark-blue);
    --colours-tooltip-background: var(--palette-dark-blue);
    --colours-level-badge-1-background: var(--palette-red-20);
    --colours-level-badge-1-text: var(--palette-red);
    --colours-level-badge-2-background: var(--palette-amber-20);
    --colours-level-badge-2-text: var(--palette-amber);
    --colours-level-badge-3-background: var(--palette-md-green-20);
    --colours-level-badge-3-text: var(--palette-md-green);
    --colours-level-badge-4-background: var(--palette-light-blue-20);
    --colours-level-badge-4-text: var(--palette-light-blue);
    --colours-level-badge-5-background: var(--palette-purple-20);
    --colours-level-badge-5-text: var(--palette-purple);
    --colours-tip-badge-background: var(--palette-amber);
    --colours-keypad-backspace: var(--palette-red);
    --colours-keypad-shadow: var(--palette-light-blue-20);
    --colours-new: var(--palette-green);
    --colours-training-banner: var(--palette-dark-purple);
    --colours-tab-hover: var(--palette-light-blue-20);
    --colours-ftq-navbar-question: var(--palette-dark-blue);
    --colours-ftq-navbar-answer: var(--palette-light-blue-20);
    --colors-ftq-navbar-answer-item-bg: var(--palette-dark-blue-20-opacity);
    --colours-sentiment-hate: var(--palette-red);
    --colours-sentiment-dislike: var(--palette-amber);
    --colours-sentiment-neutral: var(--palette-yellow);
    --colours-sentiment-like: var(--palette-green);
    --colours-sentiment-love: var(--palette-md-green);
    --colours-text-error-message: var(--palette-dark-red);
    --colours-background-error-message: var(--palette-red-20);
    --colours-text-warning-message: var(--palette-dark-amber);
    --colours-background-warning-message: var(--palette-amber-20);
    --colours-background-success-message: var(--palette-md-green-20);
    --colours-shadow-25: rgba(0, 0, 0, .25);
    --colours-switch-background: var(--palette-grey-50)
}

:root {
    --colours-transparent-glow: rgba(255, 255, 255, .1);
    --colours-transparent-20: rgba(255, 255, 255, .2);
    --colours-transparent-light: rgba(255, 255, 255, .6);
    --colours-transparent-darken: rgba(0, 0, 0, .1);
    --colours-transparent-darken-20: rgba(0, 0, 0, .2)
}

:root {
    --colours-sparx-learning-text-on-background-dark: var(--palette-white);
    --colours-sparx-learning-background-dark: rgba(25, 8, 77, 1);
    --colours-sparx-learning-background-dark-hover: rgba(96, 83, 166, 1);
    --colours-curriculum-background-dark: rgba(21, 33, 79, 1);
    --colours-sparx-learning-banner-background: rgb(244, 244, 244);
    --colours-sparx-learning-banner-dropdown: var(--palette-white);
    --colours-sparx-learning-banner-dropdown-hover: rgb(243, 243, 243);
    --colours-sparx-learning-banner-text: var(--palette-black);
    --colours-sparx-learning-banner-light-text: rgb(38 51 82);
    --colours-sparx-learning-banner-border: rgb(229 233 235);
    --colours-curriculum-gradient: linear-gradient(91deg, #ed4895 .41%, #f76b23 99.11%);
    --colours-curriculum-gradient-hover: linear-gradient(91deg, #f76b23 .41%, #ed4895 99.11%);
    --colours-text-on-curriculum-gradient: var(--palette-white)
}

[data-theme=test-theme] {
    --palette-test-1: hotpink;
    --palette-test-2: limegreen;
    --palette-test-3: yellow;
    --palette-test-4: aqua;
    --palette-test-5: red;
    --palette-test-6: grey;
    --colours-text-heading: var(--palette-test-1);
    --colours-text-body: var(--palette-test-1);
    --colours-text-body-inverted: var(--palette-test-3);
    --colours-text-secondary: var(--palette-test-3);
    --colours-interactable: var(--palette-test-4);
    --colours-selected: var(--palette-test-5);
    --colours-loading: var(--palette-test-3);
    --colours-disabled-text: var(--palette-test-1);
    --colours-disabled: var(--palette-test-2);
    --colours-read-text: var(--palette-test-4);
    --colours-plain-background: var(--palette-test-2);
    --colours-plain-background-inverted: var(--palette-test-1);
    --colours-light-background: var(--palette-test-2);
    --colours-regular-background: var(--palette-test-3);
    --colours-dark-background: var(--palette-test-4);
    --colours-page-background: var(--palette-test-1);
    --colours-page-background-gradient: var(--palette-test-2);
    --colours-unstarted: var(--palette-test-1);
    --colours-in-progress: var(--palette-test-2);
    --colours-complete: var(--palette-test-3);
    --colours-correct: var(--palette-test-4);
    --colours-incorrect: var(--palette-test-5);
    --colours-separator: var(--palette-test-5);
    --colours-border: var(--palette-test-1);
    --colours-primary-gradient-start: var(--palette-test-1);
    --colours-primary-gradient-stop: var(--palette-test-2);
    --colours-correct-gradient-start: var(--palette-test-1);
    --colours-correct-gradient-stop: var(--palette-test-3);
    --colours-item: var(--palette-test-3);
    --colours-item-hover: var(--palette-test-4);
    --colours-nested-item: var(--palette-test-3);
    --colours-nested-item-hover: var(--palette-test-4);
    --colours-nested-item-correct: var(--palette-test-5);
    --colours-nav-bar: var(--palette-test-3);
    --colours-nav-bar-hover: var(--palette-test-4);
    --colours-question-background: var(--palette-test-6);
    --colours-level-badge-1-background: var(--palette-test-1);
    --colours-level-badge-1-text: var(--palette-test-2);
    --colours-level-badge-2-background: var(--palette-test-3);
    --colours-level-badge-2-text: var(--palette-test-4);
    --colours-level-badge-3-background: var(--palette-test-5);
    --colours-level-badge-3-text: var(--palette-test-6);
    --colours-level-badge-4-background: var(--palette-test-1);
    --colours-level-badge-4-text: var(--palette-test-2);
    --colours-level-badge-5-background: var(--palette-test-3);
    --colours-level-badge-5-text: var(--palette-test-4);
    --colours-keypad-backspace: var(--palette-test-3);
    --colours-keypad-shadow: var(--palette-test-5);
    --colours-new: var(--palette-test-1);
    --colours-training-banner: var(--palette-test-3);
    --colours-tab-hover: var(--palette-test-4);
    --colours-ftq-nav-bar-question: var(--palette-test-3);
    --colours-ftq-nav-bar-answer: var(--palette-test-4);
    --colours-text-error-message: var(--palette-test-5);
    --colours-background-error-message: var(--palette-test-6);
    --colours-text-warning-message: var(--palette-test-1);
    --colours-background-warning-message: var(--palette-test-2)
}

[data-theme=parentweb-home] {
    --colours-text-heading: var(--palette-light-blue);
    --colours-interactable: var(--palette-light-blue)
}

[data-theme=parentweb-maths] {
    --colours-text-heading: var(--palette-light-blue)
}

[data-theme=parentweb-reader] {
    --colours-text-heading: var(--palette-green);
    --colours-primary-gradient-start: var(--palette-purple-gradient-start);
    --colours-primary-gradient-stop: var(--palette-purple-gradient-stop);
    --colours-interactable: var(--palette-purple-2);
    --colours-border: var(--palette-grey-50)
}

[data-theme=parentweb-science] {
    --colours-text-heading: var(--palette-teal-20);
    --colours-interactable: var(--palette-teal);
    --colours-primary-gradient-start: var(--palette-teal-20);
    --colours-primary-gradient-stop: var(--palette-teal)
}

[data-theme="sparxmaths.com"] {
    --colours-background-page: var(--palette-light-grey);
    --colours-background-light: var(--palette-white);
    --colours-background-darker: var(--palette-darker-blue);
    --colours-background-orange: var(--palette-amber);
    --colours-background-green: var(--palette-green);
    --colours-background-yellow: var(--palette-light-yellow);
    --colours-background-primary-light: var(--palette-light-blue-20);
    --colours-background-primary-light-hover: var(--palette-light-blue-30);
    --colours-primary: var(--palette-light-blue);
    --colours-primary-hover: var(--palette-light-blue-60);
    --colours-success: var(--palette-green);
    --colours-secondary: var(--palette-peppermint);
    --colours-secondary-hover: var(--palette-lighter-peppermint);
    --colours-accent: var(--palette-red);
    --colours-section-separator: var(--palette-grey);
    --colours-text-heading: var(--palette-dark-blue);
    --colours-text-light: var(--palette-white);
    --colours-text-light-hover: var(--palette-grey);
    --colours-text-subtle: var(--palette-grey);
    --colours-text-dark: var(--palette-black);
    --colours-text-orange: var(--palette-amber);
    --colours-text-link: var(--palette-dark-blue);
    --colours-contained-text-link: var(--palette-dark-blue);
    --colours-item-hover: var(--palette-light-blue-20);
    --colours-interactable: var(--palette-peppermint);
    --colours-text-on-primary: var(--palette-white);
    --colours-text-on-secondary: var(--palette-dark-blue);
    --colours-text-on-success: var(--palette-white)
}

[data-theme="sparxreader.com"] {
    --colours-background-card: var(--palette-base-grey);
    --colours-background-darker: var(--palette-darker-blue);
    --colours-text-light: var(--palette-white);
    --colours-background-page: var(--palette-light-grey);
    --colours-interactable: var(--palette-peppermint);
    --colours-journey-background: var(--palette-purple-4);
    --colours-background-card-secondary: var(--palette-light-grey-purple);
    --colours-card-title-inverse: var(--palette-dark-peppermint);
    --colours-secondary: var(--palette-purple-3);
    --colours-secondary-hover: var(--palette-purple-5);
    --colours-text-link: var(--palette-dark-blue);
    --colours-section-separator: var(--palette-grey)
}

[data-theme=reader] {
    --colours-primary: var(--palette-purple-3);
    --colours-text-link: var(--palette-dark-blue);
    --colours-background-primary-light: var(--palette-purple-5);
    --colours-light-background-inverted: var(--palette-dark-grey);
    --colours-plain-background-inverted: var(--palette-dark-blue);
    --colours-interactable: var(--palette-purple-3);
    --colours-success: var(--palette-green)
}

[data-theme=science] {
    --colours-primary: var(--palette-science-dark-blue);
    --colours-text-link: var(--palette-dark-blue);
    --colours-background-primary-light: var(--palette-science-dark-blue-lighter);
    --colours-light-background-inverted: var(--palette-dark-grey);
    --colours-plain-background-inverted: var(--palette-teal-500);
    --colours-interactable: var(--palette-science-dark-blue);
    --colours-tooltip-background: pink;
    --colours-success: var(--palette-green)
}

[data-theme=maths] {
    --colours-primary: var(--palette-dark-blue);
    --colours-plain-background-inverted: var(--palette-dark-blue)
}

button,h3,ol,li {
    all: unset
}

._WelcomeBanner_1ehfm_13 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: var(--spx-unit-3) 0 var(--spx-unit-4) 0
}

._Hello_1ehfm_21 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-heading);
    font-size: var(--spx-font-size-4xl);
    font-weight: 700;
    letter-spacing: -1px
}

@media (max-width: 480px) {
    ._Hello_1ehfm_21 {
        font-size:var(--spx-font-size-2xl)
    }
}

._PackageTypeDescription_1ehfm_32 {
    -webkit-text-fill-color: initial;
    color: var(--colours-text-secondary);
    font-size: var(--spx-font-size-base)
}

._ProgressWheelContainer_1ehfm_37 {
    padding: 15px 0;
    margin-left: 15px
}

html ._ReactQueryDevtools_1ehfm_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

._PrimaryPackageListView_gja9x_1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-y: auto
}

._PrimaryPackageSlot_gja9x_9 {
    margin: var(--spx-border-size-5);
    padding: var(--spx-border-size-5);
    background: var(--colours-item);
    border-radius: var(--spx-border-size-5);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: var(--spx-font-size-2xl);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body);
    box-shadow: var(--spx-shadow-lg);
    min-width: 730px;
    max-width: 730px;
    cursor: pointer
}

._LockedPackageSlot_gja9x_25 {
    opacity: .5
}

._NonTablesSlot_gja9x_29 {
    background: var(--colours-dark-background)
}

@media (max-width: 800px) {
    ._PrimaryPackageSlot_gja9x_9 {
        padding:var(--spx-border-size-3);
        flex-direction: column;
        min-width: 500px;
        max-width: 500px
    }
}

@media (max-width: 500px) {
    ._PrimaryPackageSlot_gja9x_9 {
        padding:var(--spx-border-size-3);
        flex-direction: column;
        min-width: 95%;
        max-width: 95%
    }
}

._PrimaryPackageTitle_gja9x_51 {
    text-align: left;
    display: flex;
    align-items: center
}

@media (max-width: 800px) {
    ._PrimaryPackageTitle_gja9x_51 {
        text-align:left;
        padding: var(--spx-border-size-3)
    }
}

._PrimaryPackageDetails_gja9x_64 {
    display: flex;
    flex-direction: row
}

@media (max-width: 800px) {
    ._PrimaryPackageDetails_gja9x_64 {
        justify-content:end
    }
}

@media (max-width: 500px) {
    ._PrimaryPackageDetails_gja9x_64 {
        flex-direction:column;
        align-items: end
    }
}

._InvalidTaskText_gja9x_82 {
    -webkit-text-fill-color: initial;
    color: var(--colours-disabled-text)
}

._PrimaryPackageDetailsSegment_gja9x_86 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: var(--spx-border-size-5);
    min-width: 60px;
    text-align: right
}

._PrimaryPackageStartButton_gja9x_95 {
    background: var(--colours-interactable);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    padding: var(--spx-border-size-3) var(--spx-border-size-5);
    border-radius: 999px;
    text-align: center
}

._LockedStartButton_gja9x_103 {
    background: var(--colours-dark-background)
}

._XpNoneText_gja9x_107 {
    -webkit-text-fill-color: initial;
    color: var(--colours-disabled-text);
    min-width: 90px
}

._XpPositiveText_gja9x_112 {
    -webkit-text-fill-color: initial;
    color: var(--colours-complete);
    min-width: 90px
}

._ProgressBarHolder_gja9x_117 {
    display: flex;
    align-items: center
}

._ProgressBar_gja9x_117 {
    order: 0;
    height: var(--spx-border-size-5);
    border-radius: var(--spx-border-size-4);
    background-color: var(--colours-dark-background);
    min-width: 70px;
    flex: 5 5 70%;
    max-height: var(--spx-border-size-4);
    max-width: 100%
}

._CompletedText_gja9x_133 {
    background: var(--colours-complete);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    border-radius: 999px;
    padding: var(--spx-border-size-3) var(--spx-border-size-5)
}

@media (max-width: 500px) {
    ._CompletedText_gja9x_133 {
        background:none;
        -webkit-text-fill-color: initial;
        color: var(--colours-complete);
        padding: 0
    }
}

._ButtonHolder_gja9x_148 {
    display: flex;
    align-items: center;
    flex-direction: row
}

._NoPackagesHeading_gja9x_154 {
    display: flex;
    align-items: center;
    flex-direction: row;
    max-width: 400px;
    text-align: center;
    font-size: var(--spx-font-size-xl);
    padding: var(--spx-border-size-5)
}

._PlayButtonHolder_gja9x_164 {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: var(--spx-border-size-5)
}

._PlayTimesTablesButton_gja9x_171 {
    font-size: var(--spx-font-size-2xl);
    background: var(--colours-interactable);
    -webkit-text-fill-color: initial;
    color: var(--colours-text-body-inverted);
    padding: var(--spx-border-size-5);
    border-radius: 999px;
    text-align: center
}

html {
    font-size: 16px;
    -moz-user-select: var(--user-select-accessibility-setting);
    -ms-user-select: var(--user-select-accessibility-setting);
    user-select: var(--user-select-accessibility-setting);
    -webkit-user-select: var(--user-select-accessibility-setting)
}

html ._ReactQueryDevtools_gja9x_1 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}
`;