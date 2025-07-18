import { PopupMenu } from "../../lib/classes/menuClasses"
import { TerminatedWhiteboardStroke, WhiteboardStroke, DefaultPenWhiteboardStroke } from "../../lib/classes/whiteboardClasses"
import { PlatformID } from "../../lib/constants/enums"
import { getSVG } from "../../lib/constants/svgs"
import { getCustomSettings, formatBytes } from "../../lib/helpers/defaults"
import { deserialiseWhiteboardStroke } from "../../lib/helpers/deserialisation"
import { createBlur, createBlurredMenu } from "../../lib/helpers/elements"
import { getQuestion } from "../../lib/helpers/question"

export const doWhiteboard = (element : HTMLElement) => {
    var btn = document.createElement("button")
    btn.textContent = "Whiteboard"
    btn.className = "SparxPlusWhiteboardButton"

    btn.onmouseup = async (e) => {

        const distanceRequired = 3;
        let lastX: number | null = null;
        let lastY: number | null = null;

        const question = getQuestion(PlatformID.SparxMaths);
        if (question == null) return;

        var menu: PopupMenu = createBlurredMenu(createBlur(), "Whiteboard")
        menu.onclose(() => {
            setWhiteboardData()
        })

        var whiteboardData : string[] = []
        var removedData : string[] = []

        var controlDiv = document.createElement("div")
        controlDiv.className = "WhiteboardControlDiv"
        controlDiv.style.marginLeft = "30px"

        var memoryDiv = document.createElement("div")
        memoryDiv.className = "WhiteboardControlDiv"
        memoryDiv.style.top = "30px"
        memoryDiv.style.width = "auto"

        var memoryText = document.createElement("p")
        memoryText.innerText = ""

        var undoButton = document.createElement("button")
        undoButton.setAttribute("aria-label", "Close")
        undoButton.className = "SparxPlusIconButton"
        undoButton.style.minWidth = "25px"
        undoButton.style.marginRight = "5px"
        undoButton.append(getSVG("undo"))
        undoButton.onclick = () => {
            var reachedATerminator = false;
            while (true) {
                const i = whiteboardData.length;
                const data = whiteboardData[i-1];
                const stroke = deserialiseWhiteboardStroke(data);

                if (stroke == null) {
                    break;
                };

                if (stroke instanceof TerminatedWhiteboardStroke) {
                    if (reachedATerminator) {
                        break;
                    }
                    reachedATerminator = true;
                };

                var removal = whiteboardData.pop();
                if (removal != null) removedData.unshift(removal);
            }
            clear()
            redraw()
        }

        var redoButton = document.createElement("button")
        redoButton.setAttribute("aria-label", "Close")
        redoButton.className = "SparxPlusIconButton"
        redoButton.style.minWidth = "25px"
        redoButton.style.marginRight = "5px"
        redoButton.append(getSVG("redo"))
        redoButton.onclick = () => {
            if (removedData == null || removedData.length == 0) return;

            var end = false;
            var hasTerminator = false;
            var count = 0;

            for (let i = 0; i < removedData.length; i++) {
                if (end == true) break;
                const data = removedData[i];
                const stroke = deserialiseWhiteboardStroke(data);
                if (stroke == null) return;
                if (stroke instanceof TerminatedWhiteboardStroke) {
                    if (hasTerminator) end = true;
                    hasTerminator = true;
                }
                whiteboardData.push(stroke.serialise());
                count++;
            }

            var newRemoved = removedData.reverse();
            for (var i = 0; i < count; i++) {
                newRemoved.pop();
            }
            removedData = newRemoved.reverse()

            var addStop = true;
            const data = whiteboardData[whiteboardData.length-1]
            if (data != null) {
                const stroke = deserialiseWhiteboardStroke(data);
                if (stroke != null) {
                    if (stroke instanceof TerminatedWhiteboardStroke) {
                        var addStop = false;
                    }
                } 
            }
            if (addStop) storeStop();
            clear();
            redraw();
        }

        var clearButton = document.createElement("button")
        clearButton.setAttribute("aria-label", "Close")
        clearButton.className = "SparxPlusIconButton"
        clearButton.style.minWidth = "25px"
        clearButton.style.marginRight = "5px"
        clearButton.append(getSVG("bin"))
        clearButton.onclick = () => {
            if (confirm("Are you sure you want to clear the whiteboard?")) {
                whiteboardData = [];
                painting = false;
                clear();
                redraw();
            }
        }

        controlDiv.append(undoButton, redoButton, clearButton)

        menu.getMenuDiv().append(controlDiv)

        var updateMemoryText = () => {};

        if (getCustomSettings().whiteboardShowSize) {
            memoryDiv.append(memoryText)

            updateMemoryText = () => {
                var string = JSON.stringify(whiteboardData);
                var bytes = string.length*8;
                memoryText.innerText = `Whiteboard size: ${formatBytes(bytes)}`
            };
            updateMemoryText();

            menu.getMenuDiv().append(memoryDiv)
        }

        var whiteboardContainer = document.createElement("div") 
        whiteboardContainer.className = "SparxPlusVideoContainer SparxPlusWhiteboard"
        menu.getMenuDiv().append(whiteboardContainer)

        const setWhiteboardData = () => {
            question.getData().setKey("Whiteboard", whiteboardData)
            question.getData().updateUseDate();
            question.getData().getData() .then((data : any) => {
                question.getData().updateData(data);
            })
        }

        question.getData().getKey("Whiteboard") .then((val) => {
            whiteboardData = val == null ? [] : <string[]>val;

            canvas.width = canvas.getBoundingClientRect().width
            canvas.height = canvas.getBoundingClientRect().height
            redraw()
        })

        const canvas = document.createElement("canvas")
        canvas.className = "SparxPlusWhiteboard"
        canvas.style.width = "100%"
        canvas.style.height = "100%"
        if (!getCustomSettings().darkMode || getCustomSettings().whiteboardDarkModeOverride) {
            canvas.style.backgroundColor = "white"
        }

        const ctx = canvas.getContext("2d")
        if (ctx == null) return;

        whiteboardContainer.append(canvas)

        let painting = false;
        let brushColor = getCustomSettings().darkMode ? (getCustomSettings().whiteboardDarkModeOverride ? "#000000" : "#FFFFFF") : "#000000";
        let brushSize = 5;

        const clear = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        const redraw = () => {
            painting = false;
            for (var data of whiteboardData) {
                const stroke = deserialiseWhiteboardStroke(data);
                if (stroke == null) continue;
                if (stroke instanceof TerminatedWhiteboardStroke) {
                    ctx.beginPath();
                } else {
                    var x = stroke.getX();
                    var y = stroke.getY();
                    ctx.lineWidth = brushSize;
                    ctx.lineCap = 'round';
                    ctx.strokeStyle = stroke.getColour();

                    ctx.lineTo(x, y);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                }
            }
            ctx.beginPath();
            updateMemoryText();
        }

        const storeStop = () => {
            storeStroke(new TerminatedWhiteboardStroke())

        }

        const storeStroke = (stroke : WhiteboardStroke) => {
            whiteboardData.push(stroke.serialise())
        }

        const start = (e : MouseEvent) => {
            painting = true;
            lastX = null;
            lastY = null;
            draw(e)
        }

        const end = () => {
            painting = false;
            lastX = null;
            lastY = null;
            ctx.beginPath();
            storeStop();
            setWhiteboardData(); // save after every stroke to prevent data loss
        }

        const draw = (e : MouseEvent) => {
            if (!painting) return;

            ctx.lineWidth = brushSize;
            ctx.lineCap = 'round';
            ctx.strokeStyle = brushColor;
        
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            let canDraw : boolean | null = null;

            if (lastX == null || lastY == null) canDraw = true
            else {
                // sparx maths is actually helping whatttt
                let distance = Math.sqrt(Math.abs((x-lastX)^2 + (y-lastY)^2))
                canDraw = distance >= distanceRequired;
            }

            if (canDraw) {
                lastX = x;
                lastY = y;
                var newStroke = new DefaultPenWhiteboardStroke(x, y);
            
                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x, y);

                storeStroke(newStroke)
                updateMemoryText();
            }
        }

        canvas.addEventListener('mousedown', start);
        canvas.addEventListener('mouseup', end);
        canvas.addEventListener('mousemove', draw);

        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault()
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        });
        canvas.addEventListener('touchend', () => {
            e.preventDefault()
            const mouseEvent = new MouseEvent('mouseup', {});
            canvas.dispatchEvent(mouseEvent);
        });
        
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault()
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        });

        window.addEventListener("resize", (e) => {
            canvas.width = canvas.getBoundingClientRect().width
            canvas.height = canvas.getBoundingClientRect().height

            redraw();
        })

        document.body.append(menu.getBlurDiv())
        document.body.append(menu.getMenuDiv())
    }
    element.append(btn)
}