import { Conditions, createBlur, createBlurredMenu, DefaultPenWhiteboardStroke, deserialiseWhiteboardStroke, getCustomSettings, getQuestion, getSVG, PlatformID, TerminatedWhiteboardStroke, WhiteboardStroke } from "../../lib/defaults"

export const doWhiteboard = (element : HTMLElement, condition : Conditions) => {
    var btn = document.createElement("button")
            btn.textContent = "Whiteboard"
            btn.className = "SparxPlusWhiteboardButton"

            btn.onmouseup = async (e) => {
                const question = getQuestion(PlatformID.SparxMaths);
                if (question == null) return;

                var blur = createBlur()
                var menu = createBlurredMenu(blur, "Whiteboard", () => {
                    setWhiteboardData()
                })

                var whiteboardData : string[] = []
                var removedData : string[] = []

                var startIndex = 0;

                var controlDiv = document.createElement("div")
                controlDiv.className = "WhiteboardControlDiv"
                controlDiv.style.marginLeft = "30px"

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
                        if (removal != null) removedData.push(removal);
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
                        startIndex = 0;
                        painting = false;
                        clear();
                        redraw();
                    }
                }

                controlDiv.append(undoButton, redoButton, clearButton)

                menu.append(controlDiv)

                var whiteboardContainer = document.createElement("div") 
                whiteboardContainer.className = "SparxPlusVideoContainer SparxPlusWhiteboard"
                menu.append(whiteboardContainer)

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
                }

                const storeStop = () => {
                    storeStroke(new TerminatedWhiteboardStroke())
                }

                const storeStroke = (stroke : WhiteboardStroke) => {
                    whiteboardData.push(stroke.serialise())
                }

                const start = (e : MouseEvent) => {
                    painting = true;
                    draw(e)
                }

                const end = () => {
                    painting = false;
                    ctx.beginPath();
                    storeStop();
                }

                const draw = (e : MouseEvent) => {
                    if (!painting) return;

                    ctx.lineWidth = brushSize;
                    ctx.lineCap = 'round';
                    ctx.strokeStyle = brushColor;
                
                    const rect = canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    var newStroke = new DefaultPenWhiteboardStroke(x, y);
                
                    ctx.lineTo(x, y);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(x, y);

                    storeStroke(newStroke)
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

                document.body.append(blur)
                document.body.append(menu)
            }
            element.append(btn)
}