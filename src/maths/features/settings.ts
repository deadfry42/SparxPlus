import { customSettings, settingsFrontend } from "..";
import { baseLog, getIsRelease, log } from "../../lib";
import { BlankPanel, createNewSettingsPanel, createWarningBox, DescriptivePanel, getSVG, InputSetting, SettingsPanel, SettingWarning, ToggleSetting } from "../../lib/defaults"

export const applySettingsPage = (sparxSettingsDiv : HTMLElement, sparxPanelClassName : string) => {
    var settingsWarning = applyHeader(sparxSettingsDiv);

    var configuredPanels : HTMLElement[] = configurePanels(sparxPanelClassName, settingsWarning);

    for (let panel of configuredPanels) {
        sparxSettingsDiv.append(panel);
    }
}

const applyHeader = (sparxSettingsDiv : HTMLElement) : HTMLElement => {
    var SettingsHeader = document.createElement("h1")
    SettingsHeader.textContent = "SparxPlus settings"

    var settingsWarningBox : HTMLElement = createWarningBox("Settings will apply after refreshing the page")
    settingsWarningBox.style.display = "none"

    sparxSettingsDiv.append(SettingsHeader)

    if (!getIsRelease()) {        
        sparxSettingsDiv.append(createWarningBox("This is not a tagged release version of Sparx Plus - some features may be incomplete, or non functional due to breaking changes!"))
    }

    sparxSettingsDiv.append(settingsWarningBox)

    return settingsWarningBox;
}

const configurePanels = (sparxPanelClassName : string, settingsWarning : HTMLElement) : HTMLElement[] => {
    var configuredPanels : HTMLElement[] = [];

    for (let panelConfig of settingsFrontend) {
        let panelHeader = document.createElement("h2")
        panelHeader.textContent = panelConfig.getTitle()

        let panelSection = document.createElement("section")
        
        let panelDescription = document.createElement("p")
        let descText = panelConfig.getDescription()
        if (descText != null) panelDescription.innerHTML = descText;

        let panel = createNewSettingsPanel(sparxPanelClassName)

        panelSection.append(panelHeader, panelDescription, panel)

        // no, this is not the best way to do this
        // but its a heck of a lot more readable

        if (panelConfig instanceof SettingsPanel) {
            configureSettingsPanel(panelConfig, panel, settingsWarning);
        } else if (panelConfig instanceof DescriptivePanel) {
            configureDescriptivePanel(panelConfig, panel);
        } else if (panelConfig instanceof BlankPanel) {
            // do nothing, just don't error out
        } else {
            log("Settings", "Invalid panel configuration!")
            baseLog(panelConfig);
            continue;
        }

        if (panelConfig.init != null) {
            panelConfig.init(panel);
        }

        configuredPanels.push(panelSection)
    }

    return configuredPanels;
}

const configureSettingsPanel = (panelConfig : SettingsPanel, panel : HTMLElement, settingsWarning : HTMLElement) => {
    let settingsList = panelConfig.getSettings();
    if (settingsList == null) return;

    for (let settingConfig of settingsList) {
        let settingName : string = <string>settingConfig.getName() == null ? "Unknown" : <string>settingConfig.getName();
        let settingDesc : string = <string>settingConfig.getDescription() == null ? "Unknown" : <string>settingConfig.getDescription();
        let isExperimental : boolean = <boolean>settingConfig.getExperimental() == null ? false : <boolean>settingConfig.getExperimental();
        
        let settingsOuterContainer : HTMLDivElement = document.createElement("div");
        settingsOuterContainer.ariaOrientation = "vertical"
        settingsOuterContainer.setAttribute("data-orientation", "vertical")

        let settingWarningConfig : SettingWarning | null = settingConfig.getWarning();
        let settingWarningElement : HTMLElement | null = null;
        
        if (settingWarningConfig != null) {
            let text = settingWarningConfig.getText() == null ? "" : settingWarningConfig.getText()
            let info = settingWarningConfig.getInformational() == null ? false : settingWarningConfig.getInformational()
            settingWarningElement = createWarningBox(text,info);
            settingWarningElement.style.display = "none";
        }

        let changeWarningVisibility : Function = (warningVisibility : boolean) => {
            if (settingWarningElement != null && settingWarningConfig != null) {
                if (settingWarningConfig.getStatic()) {
                    settingWarningElement.style.display = "block";
                    return;
                }

                if (warningVisibility) {
                    settingWarningElement.style.display = "block";
                } else {
                    settingWarningElement.style.display = "none";
                }
            }
        };

        let updateSettingsWarning : Function = () => {
            settingsWarning.style.display = "block";
        };

        let labelDiv : HTMLDivElement = document.createElement("div")
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
        titleTxt.innerHTML = settingName
        titleTxt.style.maxWidth = "auto"

        if (isExperimental) {
            let experimental = getSVG("experimental", "experimental")
            experimental.style.maxWidth = "20"
            experimental.style.maxHeight = "20";
            title.append(experimental)
        }
        title.append(titleTxt)

        let desc = document.createElement("p")
        desc.innerHTML = settingDesc
        desc.style.maxWidth = "auto"
        desc.style.padding = "0"
        desc.style.margin = "0";

        labelDiv.append(title)
        labelDiv.append(desc)

        if (settingConfig instanceof ToggleSetting) {
            configureToggleSetting(settingConfig, labelDiv, settingsOuterContainer, changeWarningVisibility, updateSettingsWarning);
        } else if (settingConfig instanceof InputSetting) {
            configureInputSetting(settingConfig, labelDiv, settingsOuterContainer, changeWarningVisibility, updateSettingsWarning);
        }

        if (settingWarningElement != null) settingsOuterContainer.append(settingWarningElement)

        panel.append(settingsOuterContainer)
    }
}

const configureToggleSetting = (settingConfig : ToggleSetting, settingsLabelDiv : HTMLDivElement, settingsOuterContainer : HTMLDivElement, changeWarningVisibility : Function, updateSettingsWarning : Function) => {
    let settingVariableName = settingConfig.getVariableName();

    let settingVariable : any = customSettings[settingVariableName];

    let settingsInnerContainer = document.createElement("div")
    settingsInnerContainer.style.display = "flex";

    let switchlabel = document.createElement("label")
    let inp = document.createElement("input")
    let slider = document.createElement("span")

    switchlabel.className = "switch"
    switchlabel.style.marginTop = "10px"
    slider.className = "slider round"
    inp.type = "checkbox"

    changeWarningVisibility(settingVariable)

    inp.checked = settingVariable

    inp.addEventListener('change', e => {
        chrome.storage.sync.set({
            [settingVariableName]: inp.checked
        })

        updateSettingsWarning()
        changeWarningVisibility(inp.checked)
    });

    switchlabel.append(inp)
    switchlabel.append(slider)

    settingsInnerContainer.append(switchlabel)
    settingsInnerContainer.append(settingsLabelDiv)

    settingsOuterContainer.append(settingsInnerContainer)
}

const configureInputSetting = (settingConfig : InputSetting, settingsLabelDiv : HTMLDivElement, settingsOuterContainer : HTMLDivElement, changeWarningVisibility : Function, updateSettingsWarning : Function) => {
    let settingVariableName = settingConfig.getVariableName();

    let settingPlaceholder : string | null = settingConfig.getPlaceholder();

    let settingVariable : any = customSettings[settingVariableName];

    let inputLabel = document.createElement("label")
    let inputArea = document.createElement("textarea")

    inputArea.value = settingVariable

    changeWarningVisibility(settingVariable == null || settingVariable == "" ? false : true)

    inputArea.addEventListener('change', (e : Event) => {
        const value = ((<HTMLInputElement>e.target).value)
        chrome.storage.sync.set({
            [settingVariableName]: value
        })

        updateSettingsWarning()
        changeWarningVisibility(value == null || value == "" ? false : true)
        
    });

    if (settingPlaceholder != null) {
        var placeholder = <string>settingConfig.getPlaceholder();
        if (placeholder != null) {
            inputArea.placeholder = placeholder
        }
    }

    inputArea.style.minWidth = `${100}%`
    inputArea.style.resize = "both"

    inputLabel.append(inputArea)

    settingsOuterContainer.append(settingsLabelDiv)
    settingsOuterContainer.append(inputLabel)
}

const configureDescriptivePanel = (panelConfig : DescriptivePanel, panel : HTMLElement) => {
    let content = document.createElement("p")
    let text = <string>panelConfig.getText()
    if (text != null) content.innerHTML = text;

    panel.append(content)
}