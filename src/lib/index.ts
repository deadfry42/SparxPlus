var logs : string[] = [];
var changedEvents : Function[] = [];

import data from '../data.json'

export function log(department : string, msg : string) : void {
    var res = "[SparxPlus] "+department+" // "+msg
    console.log(res)
    logs.push(res)

    for (let event of changedEvents) {
        event();
    }
}

export function baseLog(msg : any) : void {
    console.log(msg)
    logs.push(msg)

    for (let event of changedEvents) {
        event();
    }
}

export function isExperimental() : boolean {
    return true;
}

export function getVersion() : string {
    return "v"+chrome.runtime.getManifest().version+""+(!getIsRelease() ? "-dev" : "")
}

export function getIsRelease() : boolean {
    return data.isRelease; // set automatically
}

export function getGithubLink() : string {
    return data.links.github
}

export function getDiscordLink() : string {
    return data.links.discord
}

export function getGoogleLink() : string {
    return data.links.extension
}

export function getLastUpdated() : string {
    return data.lastUpdated
}

export function getLogs() : string[] {
    return logs;
}

export function addChangedEvent(event : Function) : void {
    changedEvents.push(event);
}

log("SparxPlus", `SparxPlus library file initiated, running version ${getVersion()}`)