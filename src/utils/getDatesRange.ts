import dayjs from "dayjs";
import {weekWidth, dayWidth, minutesWidth} from "@/constants";

export type DatesRange = {
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
};

export type ParsedDatesRange = {
  startDate: Date;
  endDate: Date;
};

export const getDatesRange = (date: dayjs.Dayjs, zoom: number): DatesRange => {
  const cols =
    zoom === 0
      ? Math.ceil(window.innerWidth / weekWidth) * 3
      : zoom === 2
        ? Math.ceil(window.innerWidth / minutesWidth) * 3
        : Math.ceil(window.innerWidth / dayWidth) * 3;
  const startDate =
    zoom === 0
      ? date.subtract(cols / 3 + 3, "weeks").set("day", 1)
      : zoom === 2
        ? date.subtract(cols / 3 + 3, "hour").set("minutes", 0)
        : date.subtract(cols / 3 + 3, "days");

  const endDate = zoom === 0
      ? startDate.add(cols, "weeks")
      : zoom  === 2
        ? startDate.add(cols, "hour")
        : startDate.add(cols, "days");

  return {
    startDate,
    endDate
  };
};

export const getParsedDatesRange = (date: dayjs.Dayjs, zoom: number): ParsedDatesRange => {
  const dates = getDatesRange(date, zoom);

  return {
    startDate: dates.startDate.toDate(),
    endDate: dates.endDate.toDate()
  };
};
