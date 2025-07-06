import { customSettings } from "..";
import { getAsset } from "../../lib/helpers/defaults";

const playYippee = () => {
    if (customSettings.audio) new Audio(getAsset("assets/memes/yippee.mp3")).play();
}

export const startYippee = () => {
    addEventListener("keydown", (event) => {
        playYippee()
    });

    addEventListener("mousedown", (event) => {
        playYippee()
    });
}

export const startOneko = () => {
    // reference (oneko.js): https://github.com/adryd325/oneko.js


}