import { createBlur, createBlurredMenu } from "../../lib/helpers/elements"

export const openWhiteboardDataMenu = () => {
    var blur = createBlur()
    var menu = createBlurredMenu(blur, "Whiteboard data manager")

    document.body.append(blur)
    document.body.append(menu)
}