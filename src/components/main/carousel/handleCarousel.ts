import { PURPLE_COLOR, WHITE_COLOR } from "@/app/color"

export const positionIncrement = (currentPos: number, length: number, currentTheme: Boolean): number => {
    const element = document.getElementById("carousel-container");
    const childElement: any = document.querySelectorAll("#carousel-item>div");
    let pos = currentPos + 1;
    if (element !== undefined && element !== null) {
        if (pos >= 1 && pos < length) {
            element.style.transform = `translate(-${pos}00%)`
            console.log(`translate(-${pos}00%)`)
        } else {
            element.style.transform = `translate(0)`
            pos = 0;
        }
    }
    if (childElement !== undefined && childElement !== null) {
        for (let index = 0; index < childElement.length; index++) {
            if (pos === index) {
                childElement[index].style.backgroundColor = currentTheme ? PURPLE_COLOR: WHITE_COLOR;
            } else {
                childElement[index].style.backgroundColor = currentTheme ? "rgba(216, 219, 223, 1)" : "rgba(216, 219, 223, 0.3)";
            }
        }
    }
    return pos;
}