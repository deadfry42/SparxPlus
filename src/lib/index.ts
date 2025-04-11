var logs : string[] = [];
var changedEvents : Function[] = [];

export function log(department : string, msg : string) {
    var res = "[SparxPlus] "+department+" // "+msg
    console.log(res)
    logs.push(res)

    for (let event of changedEvents) {
        event();
    }
}

export function baseLog(msg : any) {
    console.log(msg)
    logs.push(msg)

    for (let event of changedEvents) {
        event();
    }
}

export function getVersion() {
    // putting chrome / browser checking here instead of a browser variable cuz it'd fuck up the rest of the code
    return "v"+chrome.runtime.getManifest().version+""+(!getIsRelease() ? "-dev" : "")
}

export function getIsRelease() {
    return true;
}

export function getGithubLink() {
    return "https://github.com/deadfry42/SparxPlus"
}

export function getDiscordLink() {
    return "https://discord.gg/uKbdBa4M5B"
}

export function getGoogleLink() {
    return "https://chromewebstore.google.com/detail/sparx-plus/mlkhfcljmcjcnemaajbgmojapbkhoaik"
}

export function getLastUpdated() {
    return "11th of April, 2025"
}

export function getLogs() {
    return logs;
}

export function addChangedEvent(event : Function) {
    changedEvents.push(event);
}

log("SparxPlus", `SparxPlus library file initiated, running version ${getVersion()}`)