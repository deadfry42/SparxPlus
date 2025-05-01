import { StrokeType } from "../constants/enums";
import { getCustomSettings } from "../helpers/defaults";

export class WhiteboardStroke {
    #x : number | null = null;
    #y : number | null = null;
    #customColour : string | null = null;

    constructor(x : number | null, y : number | null, colour : string | null) {
        this.#x = x;
        this.#y = y;
        this.#customColour = colour;
    }

    getX() : number {
        return this.#x == null ? 0: this.#x;
    }

    getY() : number {
        return this.#y == null ? 0: this.#y;
    }

    getColour() : string {
        return this.#customColour == null ?
        getCustomSettings().darkMode ? (getCustomSettings().whiteboardDarkModeOverride ? "#000000" : "#FFFFFF") : "#000000"
        : this.#customColour;
    }

    serialise() : string {
        const version = 0;
        var data = version+""
        data+=" "+StrokeType.Stroke;
        data+=" "+this.getX();
        data+=" "+this.getY();
        data+=" "+this.getColour();
        return data;
    }
};

export class TerminatedWhiteboardStroke extends WhiteboardStroke {
    constructor() {
        super(null, null, null)
    }

    serialise() : string {
        const version = 0;
        return version+" "+StrokeType.Terminator;
    }
};

export class DefaultPenWhiteboardStroke extends WhiteboardStroke {
    constructor(x : number, y : number) {
        super(x, y, null)
    }

    serialise() : string {
        const version = 0;
        var data = version+""
        data+=" "+StrokeType.Stroke;
        data+=" "+this.getX();
        data+=" "+this.getY();
        data+=" !"
        return data;
    }
};