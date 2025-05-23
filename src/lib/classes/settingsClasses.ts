import { PlatformID } from "../constants/enums";

export interface Panel {
    getDescription() : string | null;
    getTitle() : string;
    setInit(callback : Function) : Panel;
};

export class BlankPanel implements Panel {
    #title: string;
    #desc: string;

    init: Function | null = null;

    constructor(title: string, description: string) {
        this.#title = title;
        this.#desc = description;
    }

    getDescription() : string | null {
        return this.#desc;
    }

    getTitle() : string {
        return this.#title;
    }

    setInit(callback : Function) : Panel {
        this.init = callback;
        return this;
    }
};

export class DescriptivePanel implements Panel {
    #text: string | null = null;
    #title: string;
    #desc: string;

    init: Function | null = null;

    constructor(title: string, description: string) {
        this.#title = title;
        this.#desc = description;
    }

    setText(text : string) : DescriptivePanel {
        this.#text = text;
        return this;
    }

    getText() : string | null {
        return this.#text;
    }

    getDescription() : string | null {
        return this.#desc;
    }

    getTitle() : string {
        return this.#title;
    }

    setInit(callback : Function) : Panel {
        this.init = callback;
        return this;
    }
};

export class SettingsPanel implements Panel {
    #settings: Setting[] | null = null;
    #title: string;
    #desc: string;

    init: Function | null = null;

    constructor(title: string, description: string) {
        this.#title = title;
        this.#desc = description;
    }

    setSettings(settings : Setting[]) : SettingsPanel {
        this.#settings = settings;
        return this;
    }

    addSetting(setting : Setting) : SettingsPanel {
        if (this.#settings == null) {
            this.#settings = [];
            this.#settings.push(setting);
        } else {
            this.#settings.push(setting);
        }
        return this;
    }

    getSettings() : Setting[] | null {
        return this.#settings;
    }

    getDescription() : string | null {
        return this.#desc;
    }

    getTitle() : string {
        return this.#title;
    }

    setInit(callback : Function) : Panel {
        this.init = callback;
        return this;
    }
};

export interface Setting {
    setDisclosure(warning : SettingDisclosure) : Setting;
    getDisclosure() : SettingDisclosure | null;
    getVariableName() : string;
    setExperimental(bool : boolean) : Setting;
    getExperimental() : boolean;
    setName(name : string) : Setting;
    getName() : string | null;
    setDescription(text : string) : Setting;
    getDescription() : string | null;
};

export class TextSetting implements Setting {
    #value: string = "undefined";
    #warning: SettingDisclosure | null = null;
    #variableName: string;
    #name: string | null = null;
    #description: string | null = null;
    #experimental: boolean = false;

    constructor(variableName : string) {
        this.#variableName = variableName;
    }

    setValue(text : string) : TextSetting {
        this.#value = text;
        return this;
    }

    calculateText(text : () => string) : TextSetting {
        this.#value = text();
        return this;
    }

    operate(code : (self : TextSetting) => void) : TextSetting {
        code(this)
        return this;
    }

    getValue() : string {
        return this.#value;
    }

    setDisclosure(warning : SettingDisclosure) : TextSetting {
        this.#warning = warning;
        return this;
    }

    getDisclosure() : SettingDisclosure | null {
        return this.#warning;
    }
    
    getVariableName() : string {
        return this.#variableName
    }

    setExperimental(bool : boolean) : TextSetting {
        this.#experimental = bool;
        return this;
    }

    getExperimental() : boolean {
        return this.#experimental;
    }

    setName(name : string) : TextSetting {
        this.#name = name;
        return this;
    }

    getName() : string | null {
        return this.#name;
    }

    setDescription(text : string) : TextSetting {
        this.#description = text;
        return this;
    }

    getDescription() : string | null {
        return this.#description;
    }
};

export class ToggleSetting implements Setting {
    #warning: SettingDisclosure | null = null;
    #variableName: string;
    #name: string | null = null;
    #description: string | null = null;
    #experimental: boolean = false;

    constructor(variableName : string) {
        this.#variableName = variableName;
    }

    setDisclosure(warning : SettingDisclosure) : ToggleSetting {
        this.#warning = warning;
        return this;
    }

    getDisclosure() : SettingDisclosure | null {
        return this.#warning;
    }
    
    getVariableName() : string {
        return this.#variableName
    }

    setExperimental(bool : boolean) : ToggleSetting {
        this.#experimental = bool;
        return this;
    }

    getExperimental() : boolean {
        return this.#experimental;
    }

    setName(name : string) : ToggleSetting {
        this.#name = name;
        return this;
    }

    getName() : string | null {
        return this.#name;
    }

    setDescription(text : string) : ToggleSetting {
        this.#description = text;
        return this;
    }

    getDescription() : string | null {
        return this.#description;
    }
};

export class InputSetting implements Setting {
    #placeholder : string | null = null;
    #warning: SettingDisclosure | null = null;
    #variableName: string;
    #name: string | null = null;
    #description: string | null = null;
    #experimental: boolean = false;

    constructor(variableName : string) {
        this.#variableName = variableName;
    }

    setPlaceholder(text : string) : InputSetting {
        this.#placeholder = text;
        return this;
    }

    getPlaceholder() : string | null {
        return this.#placeholder;
    }

    setDisclosure(warning : SettingDisclosure) : InputSetting {
        this.#warning = warning;
        return this;
    }

    getDisclosure() : SettingDisclosure | null {
        return this.#warning;
    }
    
    getVariableName() : string {
        return this.#variableName
    }

    setExperimental(bool : boolean) : InputSetting {
        this.#experimental = bool;
        return this;
    }

    getExperimental() : boolean {
        return this.#experimental;
    }

    setName(name : string) : InputSetting {
        this.#name = name;
        return this;
    }

    getName() : string | null {
        return this.#name;
    }

    setDescription(text : string) : InputSetting {
        this.#description = text;
        return this;
    }

    getDescription() : string | null {
        return this.#description;
    }
};

export interface SettingDisclosure {
    getText() : string;
    setStatic(bool : boolean) : SettingDisclosure;
    getStatic() : boolean | null;
};

export class SettingWarning implements SettingDisclosure {
    #static: boolean | null = null;
    #text: string;

    constructor(text : string) {
        this.#text = text;
    }

    getText() : string {
        return this.#text;
    }

    setStatic(bool : boolean) : SettingWarning {
        this.#static = bool;
        return this;
    }

    getStatic() : boolean | null {
        return this.#static;
    }
};

export class SettingInformation implements SettingDisclosure {
    #static: boolean | null = null;
    #text: string;

    constructor(text : string) {
        this.#text = text;
    }

    getText() : string {
        return this.#text;
    }

    setStatic(bool : boolean) : SettingInformation {
        this.#static = bool;
        return this;
    }

    getStatic() : boolean | null {
        return this.#static;
    }
};