import {weekWidth, screenWidthMultiplier, dayWidth, minutesWidth} from "@/constants";

export const getCols = (zoom: number) => {
    if (zoom === 0) {
       return Math.ceil(window.innerWidth / weekWidth) * screenWidthMultiplier;
    } else if(zoom === 2) {
        return Math.ceil(window.innerWidth / minutesWidth) * screenWidthMultiplier;
    } else {
        return Math.ceil(window.innerWidth / dayWidth) * screenWidthMultiplier;
    }
}
