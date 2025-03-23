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