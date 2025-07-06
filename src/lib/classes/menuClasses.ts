export class PopupMenu {
    #menu: HTMLDivElement;
    #blur: HTMLDivElement;
    #onclose: (menu: PopupMenu) => void = () => {};

    constructor(menu: HTMLDivElement, blur: HTMLDivElement) {
        this.#menu = menu;
        this.#blur = blur;
    }

    getMenuDiv(): HTMLDivElement {
        return this.#menu
    }

    getBlurDiv(): HTMLDivElement {
        return this.#blur
    }

    onclose(func: () => void) {
        this.#onclose = func;
    }

    getOnclose(): (menu: PopupMenu) => void {
        return this.#onclose;
    }

    close(): void {
        if (this.getOnclose() != null) {
            this.getOnclose()(this);
        }
        this.getBlurDiv().setAttribute("data-state", "closed")
        this.getMenuDiv().setAttribute("data-state", "closed")
        setTimeout(() => {
                this.getBlurDiv().remove()
                this.getMenuDiv().remove()
        }, 200);
    }
};