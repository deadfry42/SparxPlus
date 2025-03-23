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

function jumpscare(url) {
    var audio = new Audio(browser.runtime.getURL(url+".mp3"));
    var imgElement = document.createElement("img")
    imgElement.style.zIndex = 99999999;
    imgElement.style.position = "absolute"
    imgElement.style.left = 0;
    imgElement.style.top = 0;
    imgElement.style.opacity = 1;
    var width = window.screen.width > window.outerWidth ? window.outerWidth : window.screen.width;
    var height = window.screen.height > window.outerHeight ? window.outerHeight : window.screen.height;
    imgElement.style.maxWidth = `${width}px`
    imgElement.style.maxHeight = `${height}px`
    imgElement.style.minWidth = `${width}px`
    imgElement.style.minHeight = `${height}px`
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
    
    audio.play();
}

function getSVG(which) {
    switch(which) {
        case "triangle-exclamation":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="triangle-exclamation" class="svg-inline--fa fa-triangle-exclamation " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>`
            return svg;
        break;

        default:
            return null;
    }
}