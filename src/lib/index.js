var logs = [];
var changedEvents = [];

function log(department, msg) {
    var res = "[SparxPlus] "+department+" // "+msg
    console.log(res)
    logs.push(res)

    for (let event of changedEvents) {
        event();
    }
}

function baseLog(msg) {
    console.log(msg)
    logs.push(msg)

    for (let event of changedEvents) {
        event();
    }
}

// VERY IMPORTANT
// CHANGE VERSION TO MATCH manifest.json, AND RELEASE TO MATCH RELEASE
// OTHERWISE BAD :(

function getVersion() {
    // putting chrome / browser checking here instead of a browser variable cuz it'd fuck up the rest of the code
    return "v"+(chrome == null ? browser : chrome).runtime.getManifest().version+""+(!getIsRelease() ? "-dev" : "")
}

function getIsRelease() {
    return false;
}

function getGithubLink() {
    return "https://github.com/deadfry42/SparxPlus"
}

function getDiscordLink() {
    return "https://discord.gg/uKbdBa4M5B"
}

function getLastUpdated() {
    return "6th of April, 2025"
}

function getLogs() {
    return logs;
}

function addChangedEvent(event) {
    changedEvents.push(event);
}

log("SparxPlus", `SparxPlus library file initiated, running version ${getVersion()}`)