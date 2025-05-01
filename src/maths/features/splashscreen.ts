import { isExperimental, log } from "../../lib";
import { getAsset } from "../../lib/helpers/defaults";
import { createBlur, createBlurredMenu, createWarningBox } from "../../lib/helpers/elements";

const key = "seenSplashScreen"

const checkHasSeen = () : Promise<boolean> => {
    return new Promise((resolve) => {
        chrome.storage.local.get([key]).then((res) => {
            if (res == null) resolve(false);
            if (key in res) {
                resolve(res[key]);
            }
        }) .finally(() => {
            resolve(false);
        })
    });
}

const setSeen = () => {
    log("SplashScreen", "Hiding Splash Screen from now on...")
    chrome.storage.local.set({[key]: true});
}

export const doSplashScreen = () => {

    const instructions = () => {
        var blur = createBlur()
        var menu = createBlurredMenu(blur, "Welcome to SparxPlus!", () => {
            setSeen()
        })
    
        var header = document.createElement("div")
        header.style.display = "flex"
        header.ariaOrientation = "horizontal"
        header.style.marginLeft = "auto"
        header.style.marginRight = "auto"
    
        var headerIcon = document.createElement("img")
        headerIcon.width = 50
        headerIcon.height = 50
        headerIcon.src = getAsset("icon/plugin-icon-fullsize.png")
        header.append(headerIcon)
    
        var headerText = document.createElement("h1")
        headerText.innerText = "Welcome!"
        headerText.style.marginLeft = "15px"
        header.append(headerText);
    
        menu.append(header)
    
        var contentDiv = document.createElement("div")
        contentDiv.style.marginLeft = "auto"
        contentDiv.style.marginRight = "auto"
        contentDiv.style.textAlign = "center"
    
        if (isExperimental()) {
            var warning = createWarningBox("This Browser Extension is highly experimental, and many things may be broken, or work not as intended!")
            warning.style.margin = "30px"
            warning.style.marginTop = "15px"
            warning.style.marginBottom = "15px"
            contentDiv.append(warning)
        }
    
        var content = document.createElement("span")
        content.style.color = "var(--colours-text-body)"
        content.style.fontSize = "20px"
        content.innerText = `Thank you for downloading the SparxPlus Extension!
        By default, most settings are disabled, so you won't notice anything right away.
    
        SparxPlus is a browser extension which aims to modify the Sparx-Learning webapps, to make the experience marginally better.
        SparxMaths is the most supported platform, and contains many features!
    
        PS: This is NOT an extension that does your homework for you, but makes it more bearable!
        
        Everything is hidden behind the Settings page, which you can access in the top right drop down menu!
        If you ever encounter any bugs, please be sure to report them to me! Details in the "About" Section in Settings.
        
        Enjoy, and I hope this extension helps!`
    
        contentDiv.append(content)
        menu.append(contentDiv)
    
        document.body.append(blur)
        document.body.append(menu)

        log("SplashScreen", "Splash Screen Created!")
    }

    checkHasSeen() .then((hasSeen) => {
        if (!hasSeen) instructions();
    })
}