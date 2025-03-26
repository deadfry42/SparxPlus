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
    return "v0.2.6"+(!getIsRelease() ? "-dev" : "")
}

function getIsRelease() {
    return false;
}

function getGithubLink() {
    return "https://github.com/deadfry42/SparxPlus"
}

function getLastUpdated() {
    return "26th of March, 2025"
}

function getLogs() {
    return logs;
}

function addChangedEvent(event) {
    changedEvents.push(event);
}