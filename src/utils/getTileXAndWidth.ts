import {dayWidth, minutesWidth, singleDayWidth} from "@/constants";
import { DatesRange } from "./getDatesRange";

export const getTileXAndWidth = (item: DatesRange, range: DatesRange, zoom: number) => {
  const cellWidth = zoom === 0 ? singleDayWidth : zoom === 2 ? minutesWidth : dayWidth;
  console.log("-------------------------------------------------")
  console.log("item.startDate", item.startDate.toDate())
  console.log("item.endDate", item.endDate.toDate())

  const getX = () => {
    const diffHour = zoom === 2 ? item.startDate.diff(item.startDate.set("hour", 0).set("minute", 0), "minute") : 0
    const position = zoom === 2
        ? (diffHour / 15) * cellWidth
        : (item.startDate.diff(range.startDate, "day") + 1) * cellWidth;
    return Math.max(0, position);
  };

  if(zoom == 2) {
    const diffHour = item.endDate.diff(item.startDate, "minute")
    // plus one to reach the edge graphically
    const width = ((diffHour / 15) * cellWidth) + 1;
    return { x: getX(), width }
  } else {
    if (item.startDate.isAfter(range.startDate) && item.endDate.isBefore(range.endDate)) {
      const width = item.endDate.diff(item.startDate, "day") * cellWidth + cellWidth;

      return { x: getX(), width };
    }

    if (item.startDate.isBefore(range.startDate) && item.endDate.isBefore(range.endDate)) {
      const width = item.endDate.diff(range.startDate, "day") * cellWidth + cellWidth;

      return { x: getX(), width };
    }

    if (item.startDate.isAfter(range.startDate) && item.endDate.isAfter(range.endDate)) {
      const width = range.endDate.diff(item.startDate, "day") * cellWidth + cellWidth;
      return { x: getX(), width };
    }

    if (item.startDate.isBefore(range.startDate) && item.endDate.isAfter(range.endDate)) {
      const width = range.endDate.diff(range.startDate, "day") * cellWidth + cellWidth;
      return { x: getX(), width };
    }
  }

  return { x: getX(), width: 0 };
};
