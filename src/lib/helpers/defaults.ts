export var customSettings : {[index: string]:any} = {};

export function setCustomSettings(settings : any) {
    customSettings = settings;
}

export function getCustomSettings() : {[index: string]:any} {
    return customSettings;
}

export function getCustomSetting(settingName : string) : any {
    try {
        return customSettings[settingName];
    } catch(e) {
        return
    }
}

export function convertNumberToLetter(num : number) {
    return String.fromCharCode((num-1) + 'A'.charCodeAt(0))
}

export function getAsset(path : string) : string {
    // idiot proofing
    if (path.startsWith("assets/") || path.startsWith("./assets/")) return chrome.runtime.getURL(path)
    else if (path.startsWith("/")) return chrome.runtime.getURL("assets"+path)
    return chrome.runtime.getURL("assets/"+path)
}

export function formatBytes(bytes : number, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
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

export function convertChildNodeToHTMLElement(childNode: Node | null): HTMLElement | null {
    if (childNode == null) return null;
    if (childNode.nodeType === Node.ELEMENT_NODE) {
        return childNode as HTMLElement;
    }
    return null;
}