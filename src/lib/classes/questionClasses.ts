import { PlatformID } from "../constants/enums";
import { convertNumberToLetter } from "../helpers/defaults";

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