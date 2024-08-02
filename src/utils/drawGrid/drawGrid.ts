import { Day } from "@/types/global";
import { canvasWrapperId } from "@/constants";
import { drawMonthlyView } from "./drawMonthlyView";
import { drawYearlyView } from "./drawYearlyView";
import {drawHoursView} from "@/utils/drawGrid/drawHoursView";

export const drawGrid = (
  ctx: CanvasRenderingContext2D,
  zoom: number,
  rows: number,
  cols: number,
  parsedStartDate: Day
) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const canvasWrapper = document.getElementById(canvasWrapperId);
  if (!canvasWrapper) return;

  if (zoom === 1) {
    drawMonthlyView(ctx, rows, cols, parsedStartDate);
  } else if(zoom === 2) {
    drawHoursView(ctx, rows, cols);
  } else {
    drawYearlyView(ctx, rows, cols, parsedStartDate);
  }
};
