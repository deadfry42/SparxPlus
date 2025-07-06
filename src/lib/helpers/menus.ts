import { PopupMenu } from "../classes/menuClasses"
import { createBlur, createBlurredMenu } from "./elements"

export const confirmationPrompt = (
    title: string,
    heading: string,
    prompt: string,
    onconfirm: (menu: PopupMenu) => void,
) => {
    var menu: PopupMenu = createBlurredMenu(createBlur(), title)

    var contentDiv = document.createElement("div")
    contentDiv.style.margin = "auto"
    contentDiv.style.textAlign = "center"

    var headerText = document.createElement("h1")
    headerText.innerText = heading
    headerText.style.marginLeft = "15px"

    var content = document.createElement("span")
    content.style.color = "var(--colours-text-body)"
    content.style.fontSize = "20px"
    content.innerText = prompt
    
    var options = document.createElement("div")
    options.style.marginTop = "30px"
    options.style.gap = "20px"
    options.style.display = "flex"
    options.style.justifyContent = "center"

    var confirmBtn = document.createElement("button")
    confirmBtn.className = `SparxPlusButtonBase SparxPlusButtonShared SparxPlusButtonDefault SparxPlusButtonLarge SparxPlusButtonSecondary`
    confirmBtn.innerText = "Reset"


    confirmBtn.onclick = () => {
        onconfirm(menu)
    }

    var declineBtn = document.createElement("button")
    declineBtn.className = `SparxPlusButtonBase SparxPlusButtonShared SparxPlusButtonDefault SparxPlusButtonLarge SparxPlusButtonPrimary`
    declineBtn.innerText = "Deny"

    declineBtn.onclick = () => {
        menu.close()
    }

    options.append(confirmBtn)
    options.append(declineBtn)

    contentDiv.append(headerText)
    contentDiv.append(content)
    contentDiv.append(options)

    menu.getMenuDiv().append(contentDiv)
    document.body.append(menu.getBlurDiv())
    document.body.append(menu.getMenuDiv())
}