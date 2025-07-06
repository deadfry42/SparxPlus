import { PopupMenu } from "../../lib/classes/menuClasses"
import { createBlur, createBlurredMenu } from "../../lib/helpers/elements"
import { confirmationPrompt } from "../../lib/helpers/menus"

export const openWhiteboardDataMenu = () => {
    var menu: PopupMenu = createBlurredMenu(createBlur(), "Whiteboard data manager")

    document.body.append(menu.getBlurDiv())
    document.body.append(menu.getMenuDiv())
}

export const confirmResetLocalData = () => {
    confirmationPrompt(
        "Data management",
        "Resetting Extension Data",
        `Are you sure that you want to delete the extension's data?
        (eg. ALL Whiteboard data)
        This action is IRREVERSIBLE, and your data will be reset.
        
        Are you still sure you want to continue?`,
        (menu: PopupMenu) => {
        menu.close()
        chrome.storage.local.clear();
        window.location.href = window.location.href
    })
}

export const confirmResetSyncData = () => {
    confirmationPrompt(
        "Data management",
        "Resetting Extension Settings",
        `Are you sure that you want to delete the extension's settings?
        This action is IRREVERSIBLE, and your settings will be reset.
        
        Are you still sure you want to continue?`,
        (menu: PopupMenu) => {
        menu.close()
        chrome.storage.sync.clear();
        window.location.href = window.location.href
    })
}