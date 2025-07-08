import { PopupMenu } from "../../lib/classes/menuClasses"
import { QuestionData, QuestionID } from "../../lib/classes/questionClasses"
import { deserialiseQuestionID } from "../../lib/helpers/deserialisation"
import { createBlur, createBlurredMenu } from "../../lib/helpers/elements"
import { confirmationPrompt } from "../../lib/helpers/menus"

export const openWhiteboardDataMenu = () => {
    var menu: PopupMenu = createBlurredMenu(createBlur(), "Whiteboard data manager")

    var contentDiv = document.createElement("div")
    var is_loading = true

    const updateMenu = () => {
        is_loading = true
        contentDiv.remove()
        contentDiv = document.createElement("div")

        chrome.storage.local.get() .then((res) => {
            for (let key in res) {
                let questionID : QuestionID | null = deserialiseQuestionID(key);
                if (questionID == null) continue;

                let questionData = new QuestionData(questionID);
                if (questionData == null) continue;
                questionData.getData() .then(async (data) => {
                    let lastUsed = data["lastUsed"]
                    let new_item = document.createElement("div")
                    new_item.style.padding = "1em"
                    new_item.style.margin = "1em"

                    let readable_date = ``
                    let readable_title = `${questionID.getAlphabeticID()} ${questionID.isRevisionQuestion() ? "(Revision) " : ""}- `

                    let header = document.createElement("h1")
                    header.title = questionID.getID()
                    header.innerText = readable_title

                    new_item.append(header)

                    new_item.style.borderRadius = "1em"
                    new_item.style.backgroundColor = "var(--colours-nested-item)"
                    contentDiv.append(new_item)
                })
            }
            is_loading = false
        })
    }

    updateMenu()

    menu.getMenuDiv().append(contentDiv)
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