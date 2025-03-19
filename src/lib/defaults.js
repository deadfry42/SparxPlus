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
    notif.style.position = "absolute"
    notif.style.top = "82.5%"
    notif.style.left = "50%"
    notif.style.transform = "translate(-50%, -50%)"
    notif.style.backgroundColor = "white"
    notif.style.borderRadius = "9999px"
    notif.style.paddingLeft = "10px"
    notif.style.paddingRight = "10px"
    notif.style.boxShadow = "0 0 20px #000000"
    notif.style.opacity = 0
    notif.style.zIndex = 99999;

    var txt = document.createElement("p")
    txt.innerHTML = text
    txt.style.color = "#1A365D"
    txt.style.fontFamily = "'DM Sans', sans-serif"
    txt.style.fontWeight = "700"

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