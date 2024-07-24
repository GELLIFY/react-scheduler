import dayjs from "dayjs";
import {
  fonts,
  headerHoursHeight,
  headerMonthHeight,
  middleRowTextYPos,
  minutesWidth,
  topRowTextYPos
} from "@/constants";
import { Day, TextAndBoxStyleConfig } from "@/types/global";
import { drawRow } from "@/utils/drawRow";
import { getBoxFillStyle } from "@/utils/getBoxFillStyle";

export const drawHoursOnTop = (ctx: CanvasRenderingContext2D, startDate: Day) => {
  const width = 4 * minutesWidth;
  const yPos = 0;

  const hoursThreshold = ctx.canvas.width / width + width;
  let xPos = 0;

  for (let i = 0; i < hoursThreshold; i++) {
    const hour = dayjs(`${startDate.year}-${startDate.month + 1}-${startDate.dayOfMonth}`)
      .add(i + 1, "hours")
      .hour();

    if (hour !== 1 && i === 0) xPos = -hour * minutesWidth + minutesWidth;

    const configBoxFill: TextAndBoxStyleConfig = {};

    if ((hour - 1) % 2 === 0) configBoxFill.variant = "hourView";

    drawRow({
      ctx,
      x: xPos,
      y: yPos,
      width,
      fillStyle: getBoxFillStyle(configBoxFill),
      height: 80,
      textYPos: topRowTextYPos,
      label: (hour < 10 ? "0" : "") + (hour - 1).toString() + ":00",
      font: "600 20px Josefin Sans"
    });

    xPos += width;
  }
};
