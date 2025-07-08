import { customSettings } from "..";
import { log } from "../../lib";
import { OnekoAnimationData, OnekoAnimationFrame } from "../../lib/classes/funClasses";
import { getAsset } from "../../lib/helpers/defaults";

const playYippee = () => {
    if (customSettings.audio) new Audio(getAsset("assets/memes/yippee.mp3")).play();
}

export const startYippee = () => {
    // this doesn't get annoying
    addEventListener("keydown", (_) => {
        playYippee()
    });

    addEventListener("mousedown", (_) => {
        playYippee()
    });
}

export const startOneko = () => {
    // reference (oneko.js): https://github.com/adryd325/oneko.js
    // this is a typescript friendly reimplementation of her script

    // setup animation data here
    // to save on memory when oneko isn't being used
    // probably wont do much of anything anyway
    const onekoData = {
        Speed: 10,
        FrameCount: 0,
        IdleTime: 0,
        IdleAnimation: "null",
        IdleAnimationFrame: 0,

        MouseX: 0,
        MouseY: 0,
        PosX: Math.random()*window.innerWidth,
        PosY: Math.random()*window.innerHeight,
        LastFrameTimestamp: 0,
    }

    const onekoAnimations : { [id: string] : OnekoAnimationData; } = {
        // single framed
        "Idle": new OnekoAnimationData(
            new OnekoAnimationFrame(3, 3)
        ),
        "Alert": new OnekoAnimationData(
            new OnekoAnimationFrame(7, 3)
        ),
        "Tired": new OnekoAnimationData(
            new OnekoAnimationFrame(3, 2)
        ),
        // triple framed
        "ScratchSelf": new OnekoAnimationData(
            new OnekoAnimationFrame(5, 0),
            new OnekoAnimationFrame(6, 0),
            new OnekoAnimationFrame(7, 0)
        ),
        // double framed
        "ScratchWallNorth": new OnekoAnimationData(
            new OnekoAnimationFrame(0, 0),
            new OnekoAnimationFrame(0, 1)
        ),
        "ScratchWallSouth": new OnekoAnimationData(
            new OnekoAnimationFrame(6, 2),
            new OnekoAnimationFrame(7, 1)
        ),
        "ScratchWallEast": new OnekoAnimationData(
            new OnekoAnimationFrame(2, 2),
            new OnekoAnimationFrame(2, 3),
        ),
        "ScratchWallWest": new OnekoAnimationData(
            new OnekoAnimationFrame(4, 0),
            new OnekoAnimationFrame(4, 1)
        ),
        "Sleeping": new OnekoAnimationData(
            new OnekoAnimationFrame(2, 0),
            new OnekoAnimationFrame(2, 1)
        ),
        "MovingNorth": new OnekoAnimationData(
            new OnekoAnimationFrame(1, 2),
            new OnekoAnimationFrame(1, 3)
        ),
        "MovingNorthEast": new OnekoAnimationData(
            new OnekoAnimationFrame(0, 2),
            new OnekoAnimationFrame(0, 3)
        ),
        "MovingEast": new OnekoAnimationData(
            new OnekoAnimationFrame(3, 0),
            new OnekoAnimationFrame(3, 1)
        ),
        "MovingSouthEast": new OnekoAnimationData(
            new OnekoAnimationFrame(5, 1),
            new OnekoAnimationFrame(5, 2)
        ),
        "MovingSouth": new OnekoAnimationData(
            new OnekoAnimationFrame(6, 3),
            new OnekoAnimationFrame(7, 2)
        ),
        "MovingSouthWest": new OnekoAnimationData(
            new OnekoAnimationFrame(5, 3),
            new OnekoAnimationFrame(6, 1)
        ),
        "MovingWest": new OnekoAnimationData(
            new OnekoAnimationFrame(4, 2),
            new OnekoAnimationFrame(4, 3)
        ),
        "MovingNorthWest": new OnekoAnimationData(
            new OnekoAnimationFrame(1, 0),
            new OnekoAnimationFrame(1, 1)
        ),
    }

    const setupListeners = () => {
        document.addEventListener("mousemove", function (event) {
            onekoData.MouseX = event.clientX;
            onekoData.MouseY = event.clientY;
        });
    }

    const oneko = document.createElement("div")
    oneko.style.backgroundImage = `url(${getAsset("assets/memes/oneko.png")})`
    oneko.id = "oneko"
    oneko.style.zIndex = "2147483647";
    oneko.style.width = "32px";
    oneko.style.height = "32px";
    oneko.style.imageRendering = "pixelated";
    oneko.style.position = "absolute"
    oneko.style.left = `${onekoData.PosX - 16}px`;
    oneko.style.top = `${onekoData.PosY - 16}px`;
    oneko.style.pointerEvents = "none";

    const onekoLoop = (timestamp : number) => {
        if (!oneko.isConnected) {
            log("Oneko", "Oneko deleted! :(")
            return // stops execution if oneko is removed for some reason :(
        }
        if (!onekoData.LastFrameTimestamp) {
            onekoData.LastFrameTimestamp = timestamp;
        }
        if (timestamp - onekoData.LastFrameTimestamp > 100) {
            onekoData.LastFrameTimestamp = timestamp
            runOnekoFrame()
        }
        window.requestAnimationFrame(onekoLoop);
    }

    const runIdleFrame = () => {
        onekoData.IdleTime += 1;

        // every ~ 20 seconds
        if (
            onekoData.IdleTime > 10 &&
            Math.floor(Math.random() * 200) == 0 &&
            onekoData.IdleAnimation == "null"
        ) {
            let avalibleIdleAnimations = ["Sleeping", "ScratchSelf"];
            if (onekoData.PosX < 32) {
                avalibleIdleAnimations.push("ScratchWallWest");
            }
            if (onekoData.PosY < 32) {
                avalibleIdleAnimations.push("ScratchWallNorth");
            }
            if (onekoData.PosX > window.innerWidth - 32) {
                avalibleIdleAnimations.push("ScratchWallEast");
            }
            if (onekoData.PosY > window.innerHeight - 32) {
                avalibleIdleAnimations.push("ScratchWallSouth");
            }
            onekoData.IdleAnimation =
                avalibleIdleAnimations[
                Math.floor(Math.random() * avalibleIdleAnimations.length)
            ];
        }

        switch (onekoData.IdleAnimation) {
            case "Sleeping":
                if (onekoData.IdleAnimationFrame < 8) {
                    setSprite("Tired", 0);
                    break;
                }
                setSprite("Sleeping", Math.floor(onekoData.IdleAnimationFrame / 4));
                if (onekoData.IdleAnimationFrame > 192) {
                    resetIdle();
                }
                break;
            case "ScratchWallNorth":
            case "ScratchWallSouth":
            case "ScratchWallEast":
            case "ScratchWallWest":
            case "ScratchSelf":
                setSprite(onekoData.IdleAnimation, onekoData.IdleAnimationFrame);
                if (onekoData.IdleAnimationFrame > 9) {
                resetIdle();
                }
                break;
            default:
                setSprite("Idle", 0);
                return;
            }
        onekoData.IdleAnimationFrame += 1;
    }

    const setSprite = (animationName: string, frame: number) => {
        const animation: OnekoAnimationData = onekoAnimations[animationName]
        const animationFrame : OnekoAnimationFrame = animation.getFrames()[frame % animation.getAnimationLength()];
        oneko.style.backgroundPosition = `${animationFrame.getTileX() * -32}px ${animationFrame.getTileY() * -32}px`;
    }

    const resetIdle = () => {
        onekoData.IdleAnimation = "null";
        onekoData.IdleAnimationFrame = 0;
    }

    const runOnekoFrame = () => {
        onekoData.FrameCount += 1;
        const diffX = onekoData.PosX - onekoData.MouseX;
        const diffY = onekoData.PosY - onekoData.MouseY;
        const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

        if (distance < onekoData.Speed || distance < 48) {
            runIdleFrame();
            return;
        }

        // not idle
        resetIdle()

        if (onekoData.IdleTime > 1) {
            setSprite("Alert", 0);
            // count down after being alerted before moving
            onekoData.IdleTime = Math.min(onekoData.IdleTime, 7);
            onekoData.IdleTime -= 1;
            return;
        }

        let direction = "Moving";
        direction += diffY / distance > 0.5 ? "North" : "";
        direction += diffY / distance < -0.5 ? "South" : "";
        direction += diffX / distance > 0.5 ? "West" : "";
        direction += diffX / distance < -0.5 ? "East" : "";
        setSprite(direction, onekoData.FrameCount);

        onekoData.PosX -= (diffX / distance) * onekoData.Speed;
        onekoData.PosY -= (diffY / distance) * onekoData.Speed;

        onekoData.PosX = Math.min(Math.max(16, onekoData.PosX), window.innerWidth - 16);
        onekoData.PosY = Math.min(Math.max(16, onekoData.PosY), window.innerHeight - 16);

        oneko.style.left = `${onekoData.PosX - 16}px`;
        oneko.style.top = `${onekoData.PosY - 16}px`;
    }

    setupListeners()
    document.body.append(oneko)
    window.requestAnimationFrame(onekoLoop);
}