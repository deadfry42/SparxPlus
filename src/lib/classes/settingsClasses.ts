export class Panel {
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

export class BlankPanel extends Panel {
    constructor(title: string, description: string) {
        super(title, description)
    }
};

export class DescriptivePanel extends Panel {
    #text: string | null = null;

    constructor(title: string, description: string) {
        super(title, description)
    }

    setText(text : string) : DescriptivePanel {
        this.#text = text;
        return this;
    }

    getText() : string | null {
        return this.#text;
    }
};

export class SettingsPanel extends Panel {
    #settings: Setting[] | null = null;

    constructor(title: string, description: string) {
        super(title, description)
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
};

export class Setting {
    #warning: SettingWarning | null = null;
    #variableName: string;
    #name: string | null = null;
    #description: string | null = null;
    #experimental: boolean = false;

    constructor(variableName : string) {
        this.#variableName = variableName;
    }

    setWarning(warning : SettingWarning) : Setting {
        this.#warning = warning;
        return this;
    }

    getWarning() : SettingWarning | null {
        return this.#warning;
    }
    
    getVariableName() : string {
        return this.#variableName
    }

    setExperimental(bool : boolean) : Setting {
        this.#experimental = bool;
        return this;
    }

    getExperimental() : boolean {
        return this.#experimental;
    }

    setName(name : string) : Setting {
        this.#name = name;
        return this;
    }

    getName() : string | null {
        return this.#name;
    }

    setDescription(text : string) : Setting {
        this.#description = text;
        return this;
    }

    getDescription() : string | null {
        return this.#description;
    }
};

export class TextSetting extends Setting {
    #value: string = "undefined";

    constructor(variableName : string) {
        super(variableName);
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
};

export class ToggleSetting extends Setting {
    constructor(variableName : string) {
        super(variableName);
    }
};

export class InputSetting extends Setting {
    #placeholder : string | null = null;

    constructor(variableName : string) {
        super(variableName);
    }

    setPlaceholder(text : string) : Setting {
        this.#placeholder = text;
        return this;
    }

    getPlaceholder() : string | null {
        return this.#placeholder;
    }
};

export class SettingWarning {
    #static: boolean | null = null;
    #informational: boolean | null = null;
    #text: string;

    constructor(text : string) {
        this.#text = text;
    }

    getText() : string {
        return this.#text;
    }

    setInformational(bool : boolean) : SettingWarning {
        this.#informational = bool;
        return this;
    }

    getInformational() : boolean | null {
        return this.#informational;
    }

    setStatic(bool : boolean) : SettingWarning {
        this.#static = bool;
        return this;
    }

    getStatic() : boolean | null {
        return this.#static;
    }
};