import { Conditions, Actions } from "../constants/enums";

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
    
    getConditions() : Conditions[] {
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