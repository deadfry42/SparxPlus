const browser = chrome == null ? browser : chrome;

function replaceElement(matchClassString, element) {
    var x = document.getElementsByTagName('*');
    for (var i = 0; i < x.length; i++) {
        var e = x.item(i)
        if (e != null) {
            var cname = e.className;
            if (cname != null) {
                try {
                    if (cname.includes(matchClassString)) {
                        // sparx logo element
                            var item = e.children.item(0);
                            element.className = item.className
                            item?.remove();
                            e.append(element);
    
                            return true;
                    }
                } catch {
                    return false;
                }
            }
        }
    }
}

function createNewOptionInDDM(classNameA, classNameDiv, icon, string) {
    var option = document.createElement("a")
    option.className = classNameA;
    
    var menuitem = document.createElement("div");
    menuitem.role = "menuitem"
    menuitem.tabIndex = -1
    menuitem.setAttribute("data-orientation", "vertical")
    menuitem.setAttribute("data-radix-collection-item", "");
    menuitem.className = classNameDiv

    menuitem.append(icon);
    menuitem.append(string)
    option.append(menuitem);

    return option;
}

function createNewSettingsPanel(classNameContainer) {
    var panel = document.createElement("div")
    panel.className = classNameContainer+" SPARXPLUS";
    return panel;
}

function sendNotification(text, time) {
    var notif = document.createElement("div")
    notif.className = "notificationDiv";

    var txt = document.createElement("p")
    txt.className = "notificationText";
    txt.innerHTML = text

    notif.animate(
        [
            { top: "80%", opacity: "1" },
        ], {
            duration: 150,
            fill: 'forwards',
        }
    );

    notif.append(txt)
    document.body.append(notif)

    setTimeout(() => {
        notif.animate(
            [
                { top: "82.5%", opacity: "0" },
            ], {
                duration: 150,
                fill: 'forwards',
            }
        );
        setTimeout(() => {
            notif.remove()
        }, 150);
    }, time);
}

function appendStyleContent(id, content) {
    if (!document.querySelector("#" + id)) {
        var head = document.head || document.getElementsByTagName("head")[0];
        head.appendChild(createStyleElementFromContent(id, content));
    }
}

function appendStyleSheet(id, url) {
    if (!document.querySelector("#" + id)) {
        var head = document.head || document.getElementsByTagName("head")[0];
        head.appendChild(createStyleElementFromFile(id, url));
    }
}

function createStyleElementFromFile(id, url) {
    var style = document.createElement("link");
    style.rel = "stylesheet"
    style.href = url

    return style;
}

function createStyleElementFromContent(id, content) {
    var style = document.createElement("style");
    style.type = "text/css";
    style.id = id;

    if (style.styleSheet) {
        style.styleSheet.cssText = content;
    } else {
        style.appendChild(document.createTextNode(content));
    }
    return style;
}

function getDescendants(node, accum) {
    var i;
    accum = accum || [];
    for (i = 0; i < node.childNodes.length; i++) {
        accum.push(node.childNodes[i])
        getDescendants(node.childNodes[i], accum);
    }
    return accum;
}

function jumpscare(url, audio) {
    var canAudio = true;
    if (audio != null) {
        if (audio == false) canAudio = false;
    }
    console.log(canAudio, audio)
    var audio = new Audio(browser.runtime.getURL(url+".mp3"));
    var imgElement = document.createElement("img")
    imgElement.style.zIndex = 99999999;
    imgElement.style.position = "absolute"
    imgElement.style.left = 0;
    imgElement.style.top = 0;
    imgElement.style.opacity = 1;
    var width = window.innerWidth
    var height = window.innerHeight
    imgElement.style.maxWidth = `${width}px`
    imgElement.style.maxHeight = `${height}px`
    imgElement.style.minWidth = `${width}px`
    imgElement.style.minHeight = `${height}px`
    imgElement.style.width = `${width}px`
    imgElement.style.height = `${height}px`
    // imgElement.style.background = `url(${browser.runtime.getURL(url)})`
    imgElement.style.pointerEvents = "none"
    imgElement.src = browser.runtime.getURL(url+".png")
    document.body.append(imgElement)
    setTimeout(() => {
        imgElement.animate(
            [
                { opacity: "0" },
            ], {
                duration: 1500,
                fill: 'forwards',
            }
        );
        setTimeout(() => {
            imgElement.remove()
        }, 1500);
    }, 250);
    
    if (canAudio) audio.play();
}

function getSVG(which, className) {
    switch(which) {
        case "triangle-exclamation":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? "" : `class="${className}"` } aria-hidden="true" focusable="false" data-prefix="fas" data-icon="triangle-exclamation" class="svg-inline--fa fa-triangle-exclamation " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>`
            return svg.firstChild;
        break;

        case "experimental":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? "" : `class="${className}"` }  viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" color="#D6BCFA"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3313 4.83437C15.3313 4.63992 15.5104 4.40099 15.834 4.40099H23.1676C23.4964 4.40099 23.6703 4.63207 23.6703 4.83437C23.6703 5.03668 23.4964 5.26776 23.1676 5.26776H22.6652C22.2855 5.26776 21.9777 5.58138 21.9777 5.96825V11.3903C21.9777 12.6046 22.2394 13.8002 22.7252 14.9102L24.2157 18.3251L29.3042 29.9317C30.3853 32.3851 28.5294 35.2144 25.5582 35.2144H13.4434C10.4712 35.2144 8.61358 32.3876 9.69723 29.9321L9.69793 29.9305L14.7859 18.3251L16.276 14.9113L16.2763 14.9105C16.7662 13.7957 17.0239 12.6001 17.0239 11.3903V5.96825C17.0239 5.58138 16.7161 5.26776 16.3364 5.26776H15.834C15.5104 5.26776 15.3313 5.02882 15.3313 4.83437ZM25.5582 36.6154H25.5649L25.5685 36.6154C29.3825 36.6087 32.1055 32.8694 30.5586 29.3579L25.4716 17.7548L23.981 14.3396C23.5699 13.4004 23.3527 12.3987 23.3527 11.3903V6.6599C24.2732 6.57161 25.0454 5.83145 25.0454 4.83437C25.0454 3.7711 24.1673 3 23.1676 3H15.834C14.8291 3 13.9562 3.78894 13.9562 4.83437C13.9562 5.81502 14.7243 6.56999 15.6489 6.65979V11.3903C15.6489 12.3966 15.4346 13.3978 15.0211 14.3386L15.0204 14.3403L13.53 17.7548L8.44318 29.3575L8.44274 29.3585C6.89061 32.8773 9.6252 36.6154 13.4434 36.6154H25.5582ZM24.2533 21.3381L28.2016 30.3321H28.1949C28.5725 31.2058 28.4882 32.1212 27.9454 32.8986C27.4228 33.6759 26.5461 34.132 25.5649 34.132H13.4501C12.4689 34.132 11.5923 33.6759 11.0494 32.8986C10.5065 32.1244 10.4256 31.209 10.7999 30.3321L15.4159 19.8252C16.6786 19.8252 17.6526 20.1196 18.7414 20.4486C20.121 20.8656 21.6847 21.3381 24.2533 21.3381ZM13.4973 30.7689C13.4973 31.3664 13.9963 31.845 14.6033 31.845C15.227 31.845 15.7294 31.3439 15.7294 30.7689C15.7294 30.194 15.2068 29.7154 14.6033 29.7154C13.9997 29.7154 13.4973 30.1715 13.4973 30.7689ZM16.4813 24.7591C16.4813 25.3565 16.9837 25.8351 17.6109 25.8351C18.2178 25.8351 18.7404 25.3372 18.7404 24.7591C18.7404 24.1809 18.238 23.683 17.6109 23.683C16.9837 23.683 16.4813 24.1616 16.4813 24.7591ZM22.2066 28.6393C22.2066 29.2367 22.709 29.7154 23.3362 29.7154C23.9397 29.7154 24.4421 29.2367 24.4421 28.6393C24.4421 28.0418 23.9633 27.5632 23.3362 27.5632C22.709 27.5632 22.2066 28.0418 22.2066 28.6393Z"></path></svg>`
            return svg.firstChild;
        break;

        case "empty":
            var svg = document.createElement("svg")
            svg.innerHTML = ""
            return svg;
        break;

        default:
            return getSVG("empty");
    }
}

function createWarningBox(warningTxt, isInformational) {
    var warning = document.createElement("div")
    warning.style.paddingBottom = "10px"
    warning.style.paddingTop = "0px"
    warning.className = isInformational == null ? "WarningContainer" : isInformational ? "InfoContainer" : "WarningContainer"

    var warningInner = document.createElement("div")
    warningInner.className = isInformational == null ? "Warning" : isInformational ? "Info" : "Warning"

    var warningIcon = isInformational == null ? getSVG("triangle-exclamation") : isInformational ? getSVG("empty") : getSVG("triangle-exclamation")

    var warningText = document.createElement("span")
    warningText.innerHTML = warningTxt;
    warningText.className = isInformational == null ? "WarningText" : isInformational ? "InfoText" : "WarningText"
    // warningText = warningTxt;

    warningInner.append(warningIcon)
    warningInner.append(warningText)
    warning.append(warningInner);

    return warning;
}