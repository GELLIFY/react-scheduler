import {daysFillStyle, hoursFillStyle} from "@/constants";
import { theme } from "@/styles";
import { TextAndBoxStyleConfig } from "@/types/global";

export const getBoxFillStyle = (config: TextAndBoxStyleConfig) => {
  const { isCurrent, isBusinessDay, variant } = config;
  if (variant === "yearView") return isCurrent ? theme.colors.blue300 : hoursFillStyle;
  if (variant === "hourView") return "#EAF3FC";
  if (isCurrent) return theme.colors.blue300;
  if (!isBusinessDay) return theme.colors.blue200;

  return daysFillStyle;
};
