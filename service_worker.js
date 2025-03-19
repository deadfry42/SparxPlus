import './src/lib/index.js';

const browser = chrome == null ? browser : chrome;

function log(department, msg) {
    console.log("[SparxPlus-Worker] "+department+" // "+msg)
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request == "SP-Opened") {
        log("Messages", "Sparx platform opened!")
        sendResponse();
    }
});