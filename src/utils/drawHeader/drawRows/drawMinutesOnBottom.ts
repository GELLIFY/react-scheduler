import dayjs from "dayjs";
import {Day, TextAndBoxStyleConfig} from "@/types/global";
import {
  dayNameYoffset,
  dayNumYOffset,
  fonts,
  headerDayHeight,
  headerHeight,
  headerMonthHeight,
  headerWeekHeight,
  minutesWidth
} from "@/constants";
import { drawRow } from "@/utils/drawRow";
import { getBoxFillStyle } from "@/utils/getBoxFillStyle";
import { getTextStyle } from "@/utils/getTextStyle";
import { parseDay } from "@/utils/dates";

export const drawMinutesOnBottom = (
  ctx: CanvasRenderingContext2D,
  cols: number,
  startDate: Day
) => {
  const dayNameYPos = headerHeight - headerDayHeight / dayNameYoffset;
  const dayNumYPos = headerHeight - headerDayHeight / dayNumYOffset;
  const yPos = headerMonthHeight + headerWeekHeight;
  let xPos = 0;

  for (let i = 0; i < cols; i++) {
    const day = parseDay(
      dayjs(`${startDate.year}-${startDate.month + 1}-${startDate.dayOfMonth}`).add(
        i * 15,
        "minute"
      )
    );
    const configBoxFill: TextAndBoxStyleConfig = {
      isCurrent: day.isCurrentHour,
      isBusinessDay: day.isBusinessDay
    };

    if (day.hours % 2 === 0) configBoxFill.variant = "hourView";

    drawRow({
      ctx,
      x: xPos,
      y: yPos,
      width: minutesWidth,
      height: 80,
      isBottomRow: true,
      fillStyle: getBoxFillStyle(configBoxFill),
      topText: {
        y: dayNameYPos,
        label:
          (day.hours < 10 ? "0" : "") + day.hours + ":" + (day.minutes === 0 ? "00" : day.minutes),
        font: fonts.bottomRow.name,
        color: getTextStyle({ isCurrent: day.isCurrentDay, isBusinessDay: day.isBusinessDay })
      },
      bottomText: {
        y: dayNumYPos,
        label: "",
        font: "600 14px Josefin Sans",
        color: getTextStyle({
          isCurrent: day.isCurrentDay,
          isBusinessDay: day.isBusinessDay,
          variant: "bottomRow"
        })
      }
    });

    xPos += minutesWidth;
  }
};
