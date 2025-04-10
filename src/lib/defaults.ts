import { log } from "./index";

export var customSettings : { [key: string]: any } = {};

export function setCustomSettings(settings : { [key: string]: any }) {
    customSettings = settings;
}

export function getCustomSettings() : { [key: string]: any } {
    return customSettings;
}

export function convertNumberToLetter(num : number) {
    return String.fromCharCode((num-1) + 'A'.charCodeAt(0))
}

export function replaceElement(matchClassString : string, element : Element) {
    var x = document.getElementsByTagName('*');
    for (var i = 0; i < x.length; i++) {
        var e = x.item(i)
        if (e != null) {
            var cname = e.className;
            if (cname != null) {
                try {
                    if (cname.includes(matchClassString)) {
                        // sparx logo element
                            var item = e.children.item(0);
                            if (item != null) {
                                element.className = item.className
                                item?.remove();
                                e.append(element);
                            }
    
                            return true;
                    }
                } catch {
                    return false;
                }
            }
        }
    }
}

export function createNewOptionInDDM(classNameA : string, classNameDiv : string, icon : Node, string : string) {
    var option = document.createElement("a")
    option.className = classNameA;
    
    var menuitem = document.createElement("div");
    menuitem.role = "menuitem"
    menuitem.tabIndex = -1
    menuitem.setAttribute("data-orientation", "vertical")
    menuitem.setAttribute("data-radix-collection-item", "");
    menuitem.className = classNameDiv

    menuitem.append(icon);
    menuitem.append(string)
    option.append(menuitem);

    return option;
}

export function createNewSettingsPanel(classNameContainer : string) {
    var panel = document.createElement("div")
    panel.className = classNameContainer+" SPARXPLUS";
    return panel;
}

export function sendNotification(text : string, time : number) {
    var notif = document.createElement("div")
    notif.className = "notificationDiv";

    var txt = document.createElement("p")
    txt.className = "notificationText";
    txt.innerHTML = text

    notif.animate(
        [
            { top: "80%", opacity: "1" },
        ], {
            duration: 150,
            fill: 'forwards',
        }
    );

    notif.append(txt)
    document.body.append(notif)

    setTimeout(() => {
        notif.animate(
            [
                { top: "82.5%", opacity: "0" },
            ], {
                duration: 150,
                fill: 'forwards',
            }
        );
        setTimeout(() => {
            notif.remove()
        }, 150);
    }, time);
}

export function appendStyleContent(id : string, content : string) {
    if (!document.querySelector("#" + id)) {
        var head = document.head || document.getElementsByTagName("head")[0];
        head.appendChild(createStyleElementFromContent(id, content));
    }
}

export function appendStyleSheet(id : string, url : string) {
    if (!document.querySelector("#" + id)) {
        var head = document.head || document.getElementsByTagName("head")[0];
        head.appendChild(createStyleElementFromFile(id, url));
    }
}

export function createStyleElementFromFile(id : string, url : string) {
    var style = document.createElement("link");
    style.rel = "stylesheet"
    style.href = url

    return style;
}

export function createStyleElementFromContent(id : string, content : string) {
    var style = document.createElement("style");
    style.id = id;

    if (style.sheet) {
        style.textContent = content;
    } else {
        style.appendChild(document.createTextNode(content));
    }
    return style;
}

export function getDescendants(node : Node, accum? : ChildNode[]) {
    var i;
    accum = accum || [];
    for (i = 0; i < node.childNodes.length; i++) {
        accum.push(node.childNodes[i])
        getDescendants(node.childNodes[i], accum);
    }
    return accum;
}

export function jumpscare(url : string, permitAudio? : boolean) {
    var canAudio = true;
    if (permitAudio != null) {
        if (permitAudio == false) canAudio = false;
    }
    var audio : HTMLAudioElement = new Audio(chrome.runtime.getURL(url+".mp3"));
    var imgElement = document.createElement("img")
    imgElement.style.zIndex = "99999999";
    imgElement.style.position = "absolute"
    imgElement.style.left = "0";
    imgElement.style.top = "0";
    imgElement.style.opacity = "1";
    var width = window.innerWidth
    var height = window.innerHeight
    imgElement.style.maxWidth = `${width}px`
    imgElement.style.maxHeight = `${height}px`
    imgElement.style.minWidth = `${width}px`
    imgElement.style.minHeight = `${height}px`
    imgElement.style.width = `${width}px`
    imgElement.style.height = `${height}px`
    imgElement.style.pointerEvents = "none"
    imgElement.src = chrome.runtime.getURL(url+".png")
    document.body.append(imgElement)
    setTimeout(() => {
        imgElement.animate(
            [
                { opacity: "0" },
            ], {
                duration: 1500,
                fill: 'forwards',
            }
        );
        setTimeout(() => {
            imgElement.remove()
        }, 1500);
    }, 250);
    
    if (canAudio) audio.play();
}

export function getSVG(which : string, className? : string | null) : HTMLElement {
    switch(which) {
        case "triangle-exclamation":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? `class="svgIcon"` : `class="svgIcon ${className}"` } aria-hidden="true" focusable="false" data-prefix="fas" data-icon="triangle-exclamation" class="svg-inline--fa fa-triangle-exclamation " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>`
            return <HTMLElement>svg.firstChild;
        break;

        case "experimental":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? `class="svgIcon"` : `class="svgIcon ${className}"` }  viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" color="#D6BCFA"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3313 4.83437C15.3313 4.63992 15.5104 4.40099 15.834 4.40099H23.1676C23.4964 4.40099 23.6703 4.63207 23.6703 4.83437C23.6703 5.03668 23.4964 5.26776 23.1676 5.26776H22.6652C22.2855 5.26776 21.9777 5.58138 21.9777 5.96825V11.3903C21.9777 12.6046 22.2394 13.8002 22.7252 14.9102L24.2157 18.3251L29.3042 29.9317C30.3853 32.3851 28.5294 35.2144 25.5582 35.2144H13.4434C10.4712 35.2144 8.61358 32.3876 9.69723 29.9321L9.69793 29.9305L14.7859 18.3251L16.276 14.9113L16.2763 14.9105C16.7662 13.7957 17.0239 12.6001 17.0239 11.3903V5.96825C17.0239 5.58138 16.7161 5.26776 16.3364 5.26776H15.834C15.5104 5.26776 15.3313 5.02882 15.3313 4.83437ZM25.5582 36.6154H25.5649L25.5685 36.6154C29.3825 36.6087 32.1055 32.8694 30.5586 29.3579L25.4716 17.7548L23.981 14.3396C23.5699 13.4004 23.3527 12.3987 23.3527 11.3903V6.6599C24.2732 6.57161 25.0454 5.83145 25.0454 4.83437C25.0454 3.7711 24.1673 3 23.1676 3H15.834C14.8291 3 13.9562 3.78894 13.9562 4.83437C13.9562 5.81502 14.7243 6.56999 15.6489 6.65979V11.3903C15.6489 12.3966 15.4346 13.3978 15.0211 14.3386L15.0204 14.3403L13.53 17.7548L8.44318 29.3575L8.44274 29.3585C6.89061 32.8773 9.6252 36.6154 13.4434 36.6154H25.5582ZM24.2533 21.3381L28.2016 30.3321H28.1949C28.5725 31.2058 28.4882 32.1212 27.9454 32.8986C27.4228 33.6759 26.5461 34.132 25.5649 34.132H13.4501C12.4689 34.132 11.5923 33.6759 11.0494 32.8986C10.5065 32.1244 10.4256 31.209 10.7999 30.3321L15.4159 19.8252C16.6786 19.8252 17.6526 20.1196 18.7414 20.4486C20.121 20.8656 21.6847 21.3381 24.2533 21.3381ZM13.4973 30.7689C13.4973 31.3664 13.9963 31.845 14.6033 31.845C15.227 31.845 15.7294 31.3439 15.7294 30.7689C15.7294 30.194 15.2068 29.7154 14.6033 29.7154C13.9997 29.7154 13.4973 30.1715 13.4973 30.7689ZM16.4813 24.7591C16.4813 25.3565 16.9837 25.8351 17.6109 25.8351C18.2178 25.8351 18.7404 25.3372 18.7404 24.7591C18.7404 24.1809 18.238 23.683 17.6109 23.683C16.9837 23.683 16.4813 24.1616 16.4813 24.7591ZM22.2066 28.6393C22.2066 29.2367 22.709 29.7154 23.3362 29.7154C23.9397 29.7154 24.4421 29.2367 24.4421 28.6393C24.4421 28.0418 23.9633 27.5632 23.3362 27.5632C22.709 27.5632 22.2066 28.0418 22.2066 28.6393Z"></path></svg>`
            return <HTMLElement>svg.firstChild;
        break;

        case "x":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? `class="svgIcon"` : `class="svgIcon ${className}"` } width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`
            return svg;
        break;

        case "undo":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? `class="svgIcon"` : `class="svgIcon ${className}"` } width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7H15C16.8692 7 17.8039 7 18.5 7.40193C18.9561 7.66523 19.3348 8.04394 19.5981 8.49999C20 9.19615 20 10.1308 20 12C20 13.8692 20 14.8038 19.5981 15.5C19.3348 15.9561 18.9561 16.3348 18.5 16.5981C17.8039 17 16.8692 17 15 17H8.00001M4 7L7 4M4 7L7 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
            return svg;
        break;

        case "redo":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? `class="svgIcon"` : `class="svgIcon ${className}"` } width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H9.00001C7.13077 7 6.19615 7 5.5 7.40193C5.04395 7.66523 4.66524 8.04394 4.40193 8.49999C4 9.19615 4 10.1308 4 12C4 13.8692 4 14.8038 4.40192 15.5C4.66523 15.9561 5.04394 16.3348 5.5 16.5981C6.19615 17 7.13077 17 9 17H16M20 7L17 4M20 7L17 10" stroke="currentColor"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
            return svg;
        break;

        case "bin":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? `class="svgIcon"` : `class="svgIcon ${className}"` } width="15" height="15" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="binIconTitle" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="currentColor"> <path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10"/> </svg>`
            return svg;
        break;

        case "empty":
            var svg = document.createElement("svg")
            svg.innerHTML = ""
            return svg;
        break;

        default:
            return getSVG("empty");
    }
}

export function createWarningBox(warningTxt : string, isInformational? : boolean | null) {
    var warning = document.createElement("div")
    warning.style.paddingBottom = "10px"
    warning.style.paddingTop = "0px"
    warning.className = isInformational == null ? "WarningContainer" : isInformational ? "InfoContainer" : "WarningContainer"

    var warningInner = document.createElement("div")
    warningInner.className = isInformational == null ? "Warning" : isInformational ? "Info" : "Warning"

    var warningIcon = isInformational == null ? getSVG("triangle-exclamation") : isInformational ? getSVG("empty") : getSVG("triangle-exclamation")
    if (warningIcon != null) {
        warningIcon.style.maxWidth = "20px"
        warningIcon.style.maxHeight = "20px"
        warningIcon.style.minWidth = "20px"
        warningIcon.style.minHeight = "20px"
    }
    
    var warningText = document.createElement("span")
    warningText.innerHTML = warningTxt;
    warningText.className = isInformational == null ? "WarningText" : isInformational ? "InfoText" : "WarningText"
    // warningText = warningTxt;

    if (warningIcon != null) warningInner.append(warningIcon)
    warningInner.append(warningText)
    warning.append(warningInner);

    return warning;
}

export function createBlur() {
    var blur = document.createElement("div")
    blur.classList.add("SparxPlusDialogOverlay")
    blur.style.pointerEvents = "auto";

    blur.setAttribute("data-state", "open")
    blur.setAttribute("data-aria-hidden", "true")
    blur.setAttribute("aria-hidden", "true")

    return blur;
}

export function createBlurredMenu(blur : HTMLDivElement, titleText : string, onClose? : Function) {
    var div = document.createElement("div")
    div.setAttribute("role", "dialog")
    div.setAttribute("data-state", "open")
    div.style.pointerEvents = "auto";
    div.tabIndex = -1;
    div.className = "SparxPlusDialogContent FullWidth WithZIndex"

    const close = () => {
        if (onClose != null) {
            onClose(div);
        }
        blur.setAttribute("data-state", "closed")
        div.setAttribute("data-state", "closed")
        setTimeout(() => {
            blur.remove()
            div.remove()
        }, 200);
    }

    var title = document.createElement("h2")
    title.className = "SparxPlusDialogTitle"
    title.textContent = titleText;
    div.append(title)

    // var buttonsDiv = document.createElement("div")

    var closeXButton = document.createElement("button")
    closeXButton.setAttribute("aria-label", "Close")
    closeXButton.className = "SparxPlusIconButton SparxPlusXButton"
    closeXButton.append(getSVG("x"))
    closeXButton.onclick = () => {
        close()
    }
    div.append(closeXButton)

    return div;
}

export function getQuestionID(platformID : PlatformID) {
    if (platformID == PlatformID.SparxMaths) {
        const url = window.location.href;

        var tokens = url.split("/");
        var packageIndex = -1;

        var revisionIndex = -1;

        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (token.toLowerCase() == "assessments") {
                revisionIndex = i;
            }
            if (token.toLowerCase() == "package") {
                // just before the uri ID
                packageIndex = i;
                break;
            }
        }

        var uri = "";
        var taskID : any = 0;
        var question : any = 0;
        var questionID : QuestionID | null = null

        try {
            // this is rudimentary
            // TODO: improve
            var task = "";
            var item = "";
            if (packageIndex < tokens.length) {
                // there is atleast 1 more token
                uri = tokens[packageIndex+1]
                task = tokens[packageIndex+2] == null ? "" : tokens[packageIndex+2]
                taskID = tokens[packageIndex+3]
                item = tokens[packageIndex+4] == null ? "" : tokens[packageIndex+4]
                question = tokens[packageIndex+5]
            }

            if (task.toLowerCase() == "task" && item.toLowerCase() == "item") {
                questionID = new QuestionID(uri, taskID, question, PlatformID.SparxMaths, (revisionIndex > 0))
            }
        } catch(e) {
            log("QuestionID", "Failed to get questionID!")
        }

        return questionID;
    }

    return null;
}

export function getQuestion(platformID : PlatformID) {
    var questionID = getQuestionID(platformID);
    if (questionID == null) return null;

    return new Question(questionID);
}

export function deserialiseQuestionID(questionID : string) {
    const tokens = questionID.split("/")

    var questionidtext;
    var platformid;
    var questiontype;
    var encodedQuestionID;

    try {
        questionidtext = tokens[0];
        platformid = tokens[1];
        questiontype = tokens[2];
        encodedQuestionID = tokens[3];

        if (questionidtext != "QuestionID") return null;
        platformid = parseInt(platformid);
        questiontype = questiontype == "Rev" ? true : false;
        
        const idTokens = encodedQuestionID.split(":")
        var uri = idTokens[0]
        var task = parseInt(idTokens[1]);
        var question = parseInt(idTokens[2]);

        return new QuestionID(uri, task, question, platformid, questiontype)
    } catch (e) {
        return null;
    }
}

export function deserialiseWhiteboardStroke(data : string) {
    try {
        const tokens = data.split(" ")
        const type = parseInt(tokens[1])
        const version = parseInt(tokens[0])
        
        switch (type) {
            case StrokeType.Terminator:
                switch (version) {
                    case 0:
                        return new TerminatedWhiteboardStroke()
                }
                return null;

            case StrokeType.Stroke:
                switch (version) {
                    case 0:
                        const x = parseInt(tokens[2])
                        const y = parseInt(tokens[3])
                        const colour = tokens[4]
                        if (colour == "!") {
                            return new DefaultPenWhiteboardStroke(x, y)
                        } else {
                            return new WhiteboardStroke(x, y, colour)
                        }
                        
                }
                return null;
        }
    } catch(e) {
        return null;
    }
}

// enums (i would use typescript but it doesn't play nice with browser extensions)
// this is good enough
export const enum Conditions {
    Added,
    Modified,
    ModifiedTransitionPage,
    Removed,
};

export const enum Actions {
    Button,
    Click,
    LeftClick,
    RightClick,
    None,
};

export const enum PanelType {
    Settings,
    Blank,
    Descriptive,
};

export const enum SettingsType {
    Toggle,
    Input,
};

export const enum PlatformID {
    SparxMaths,
    SparxScience,
    Unknown
};

export const StrokeType = {
    Stroke: 0,
    Terminator: 1,
    Unknown: -1,
};

// classes

export class Question {
    #questionID : QuestionID;
    #questionData : QuestionData;

    constructor(questionID : QuestionID) {
        this.#questionID = questionID;
        this.#questionData = new QuestionData(questionID);
        this.#questionData.syncData();
    }

    getID() : QuestionID {
        return this.#questionID;
    }

    getData() : QuestionData {
        return this.#questionData;
    }
};

export class QuestionData {
    #data : any;
    #questionID : QuestionID;

    constructor(questionID : QuestionID) {
        this.#questionID = questionID;
    }

    getData() : Promise<any> {
        return this.#data == null ? this.syncData() : this.#data; // js promise, be careful
    }

    syncData() : Promise<any> {
        this.#data = new Promise((resolve, reject) => {
            chrome.storage.local.get([this.#questionID.getID()]) .then((res) => {
                for (var key in res){
                    resolve(res[key])
                    return;
                }
                resolve({}); // fresh data
            }) .catch((e) => {
                resolve({}) // fresh data
            })
        })
        return this.#data;
    }

    setKey(key : string, value : any) : Promise<any> {
        return new Promise((resolve, reject) => {
            this.getData() .then((res : any) => {
                if (res == null) {
                    var newData : any = {}
                    newData[key] = value;
                    Object.assign(res, newData)
                    resolve(newData);
                    return;
                }
                res[key] = value;
                resolve(res);
            })
        })
    }

    getKey(key : string) : Promise<any> {
        return new Promise((resolve, reject) => {
            this.getData() .then((res : any) => {
                try {
                    resolve(res[key]);
                } catch(e) {
                    resolve(null);
                }
            })
        })
    }

    updateUseDate() {
        this.setKey("lastUsed", Date.now())
    }

    getUseDate() : Promise<any> {
        return this.getKey("lastUsed");
    }

    removeKey(key : string) : Promise<any> {
        return this.setKey(key, null)
    }

    updateData(data : any) : Promise<any> | null {
        if (data == null) return null;
        return new Promise((resolve, reject) => {
            chrome.storage.local.set({[this.#questionID.getID()]: data}) .then((res : any) => {
                resolve(res)
            })
        })
    }
};

export class QuestionID {
    #uri : string;
    #task : number;
    #question : number;
    #platformID : PlatformID;
    #revision : boolean;
    constructor(uri : string, task : number, question : number, platformID : PlatformID, revision : boolean) {
        this.#uri = uri;
        this.#task = task;
        this.#question = question;
        this.#platformID = platformID == null ? PlatformID.Unknown : platformID;
        this.#revision = revision == null ? false : revision;
    }

    isSimilar(otherQuestionID : QuestionID) : boolean {
        if (otherQuestionID.constructor.name != this.constructor.name) return false;
        return this.getURI() == otherQuestionID.getURI()
        && this.getTask() == otherQuestionID.getTask()
        && this.getQuestion() == otherQuestionID.getQuestion()
        && this.getPlatformID() == otherQuestionID.getPlatformID();
    }

    getPlatformID() : PlatformID {
        return this.#platformID;
    }

    getTask() : number {
        return this.#task;
    }

    getQuestion() : number {
        return this.#question;
    }

    getURI() : string {
        return this.#uri;
    }

    isRevisionQuestion() : boolean {
        return this.#revision;
    }

    // for normal questions
    getStandardAlphabeticID() : string {
        return `${this.#task}${convertNumberToLetter(this.#question)}`
    }

    // for revision platform
    getRevisionAlphabeticID() : string {
        return `Q${this.#question}`
    }

    getAlphabeticID() : string {
        return this.#revision ? this.getRevisionAlphabeticID() : this.getStandardAlphabeticID()
    }

    getID() : string {
        return `QuestionID/${this.getPlatformID()}/${this.#revision ? "Rev" : "Std"}/${this.getURI()}:${this.getTask()}:${this.getQuestion()}`
    }
};

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

export class ClassMapping {
    #classMatches: string[] | null = null;
    #newClasses: string[] | null = null;
    #newClassesToChildren: string[] | null = null;
    #conditions: Conditions[];

    elementCheck: Function | null = null;
    ifMatched: Function | null = null;

    constructor(conditions : Conditions[]) {
        this.#conditions = conditions;
    }

    setElementCheck(callback : Function) : ClassMapping {
        this.elementCheck = callback;
        return this;
    }

    setIfMatched(callback : Function) : ClassMapping {
        this.ifMatched = callback;
        return this;
    }

    setClassMatches(classMatches : string[]) : ClassMapping {
        this.#classMatches = classMatches;
        return this;
    }

    addClassMatch(classMatch : string) : ClassMapping {
        if (this.#classMatches == null) this.#classMatches = [];
        this.#classMatches.push(classMatch);
        return this;
    }
    
    getClassMatches() : string[] | null {
        return this.#classMatches;
    }

    setNewClasses(newClasses : string[]) : ClassMapping {
        this.#newClasses = newClasses;
        return this;
    }

    addNewClass(newClass : string) : ClassMapping {
        if (this.#newClasses == null) this.#newClasses = [];
        this.#newClasses.push(newClass);
        return this;
    }
    
    getNewClasses() : string[] | null {
        return this.#newClasses;
    }

    setNewClassesToChildren(newClasses : string[]) : ClassMapping {
        this.#newClassesToChildren = newClasses;
        return this;
    }

    addNewClassToChildren(newClass : string) : ClassMapping {
        if (this.#newClassesToChildren == null) this.#newClassesToChildren = [];
        this.#newClassesToChildren.push(newClass);
        return this;
    }
    
    getNewClassesToChildren() : string[] | null {
        return this.#newClassesToChildren;
    }

    setConditions(conditions : Conditions[]) : ClassMapping {
        this.#conditions = conditions;
        return this;
    }

    addCondition(newCondition : Conditions) : ClassMapping {
        if (this.#conditions == null) this.#conditions = [];
        this.#conditions.push(newCondition);
        return this;
    }
    
    getConditions() : Conditions[] | null {
        return this.#conditions;
    }
};

export class KeyboardMapping {
    #action : Actions | null = null;
    #classMatches: string[] | null = null;
    #keys : string[] | null = null;

    checkMatch: Function | null = null;
    keyStarted: Function | null = null;
    keySuccessful: Function | null = null;

    setAction(action : Actions) : KeyboardMapping {
        this.#action = action;
        return this;
    }

    getAction() : Actions | null {
        return this.#action;
    }

    setClassMatches(classMatches : string[]) : KeyboardMapping {
        this.#classMatches = classMatches;
        return this;
    }

    getClassMatches() : string[] | null {
        return this.#classMatches;
    }

    setCheckMatch(callback : Function) : KeyboardMapping {
        this.checkMatch = callback;
        return this;
    }

    setKeyStarted(callback : Function) : KeyboardMapping {
        this.keyStarted = callback;
        return this;
    }

    setKeySuccessful(callback : Function) : KeyboardMapping {
        this.keySuccessful = callback;
        return this;
    }

    setKeys(keys : string[]) : KeyboardMapping {
        this.#keys = keys;
        return this;
    }

    getKeys() : string[] | null {
        return this.#keys;
    }
};

export class Panel {
    #title: string;
    #desc: string;

    #init: Function | null = null;

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
        this.#init = callback;
        return this;
    }

    getInit() : Function | null {
        return this.#init;
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