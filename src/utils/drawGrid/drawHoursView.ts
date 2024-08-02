import dayjs from "dayjs";
import { Day } from "@/types/global";
import {boxHeight, minutesWidth} from "@/constants";
import { getIsBusinessDay } from "../dates";
import { drawCell } from "./drawCell";

export const drawHoursView = (
  ctx: CanvasRenderingContext2D,
  rows: number,
  cols: number,
) => {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x <= cols; x++) {
      drawCell(ctx, x * minutesWidth, y * boxHeight, minutesWidth, true, false);
    }
  }
};
