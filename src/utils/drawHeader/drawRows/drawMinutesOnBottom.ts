import dayjs from "dayjs";
import {Day, TextAndBoxStyleConfig} from "@/types/global";
import {
  dayHourYoffset,
  dayNameYoffset,
  dayNumYOffset,
  fonts,
  headerDayHeight,
  headerHeight, headerHoursHeight,
  headerMonthHeight,
  headerWeekHeight, minutesHeight,
  minutesWidth
} from "@/constants";
import { drawRow } from "@/utils/drawRow";
import { getBoxFillStyle } from "@/utils/getBoxFillStyle";
import { getTextStyle } from "@/utils/getTextStyle";
import { parseDay } from "@/utils/dates";

export const drawMinutesOnBottom = (
  ctx: CanvasRenderingContext2D,
  cols: number,
  startDate: Day,
  sectionMinute: number,
) => {
  const dayNameYPos = headerHeight - headerHoursHeight / dayHourYoffset;
  const yPos = headerMonthHeight + headerWeekHeight;
  let xPos = 0;

  for (let i = 0; i < cols; i++) {
    const day = parseDay(
      dayjs(`${startDate.year}-${startDate.month + 1}-${startDate.dayOfMonth}`).add(
        i * sectionMinute,
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
      height: minutesHeight,
      isBottomRow: true,
      fillStyle: getBoxFillStyle(configBoxFill),
      topText: {
        y: dayNameYPos,
        label:
          ((day.hours) < 10 ? "0" : "") + (day.hours != 24 ? day.hours : "00") + ":" + (day.minutes === 0 ? "00" : day.minutes),
        font: fonts.bottomRow.minute,
        color: getTextStyle({ isCurrent: day.isCurrentDay, isBusinessDay: day.isBusinessDay })
      },
      bottomText: {
        y: 0,
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
