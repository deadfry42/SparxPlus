export class OnekoAnimationFrame {
    #tileX: number;
    #tileY: number;
    
    constructor(tileX : number, tileY : number) {
        this.#tileX = tileX;
        this.#tileY = tileY;
    }

    getTileX() : number {
        return this.#tileX;
    }

    getTileY() : number {
        return this.#tileY;
    }
}

export class OnekoAnimationData {
    #frames: OnekoAnimationFrame[]
    
    constructor(...frames : OnekoAnimationFrame[]) {
        this.#frames = frames;
    }

    getFrames() : OnekoAnimationFrame[] {
        return this.#frames;
    }

    getAnimationLength() : number {
        // frame count
        return this.#frames.length
    }
}