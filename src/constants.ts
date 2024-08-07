import { prefixId, theme } from "./styles";
export const dayWidth = 50;
export const minutesWidth = 60;
export const minutesHeight = 90;
export const headerMonthHeight = 24;
export const headerWeekHeight = 16;
export const headerDayHeight = 40;
export const headerHeight = headerDayHeight + headerWeekHeight + headerMonthHeight;
export const headerHoursHeight = 90;
export const weekWidth = 84;
export const boxHeight = 56;
export const leftColumnWidth = 196;
export const singleDayWidth = 12;
export const weeksInYear = 52;
export const navHeight = 44;
export const daysFillStyle = theme.colors.blue100;
export const hoursFillStyle = theme.colors.white;
export const fonts = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  hour: "600 20px Josefin Sans",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter",
    minute: "600 14px Josefin Sans",
  }
};
export const screenWidthMultiplier = 3;
export const dayNameYoffset = 1.6;
export const dayNumYOffset = 4.5;
export const dayHourYoffset = 6;
export const monthsInYear = 12;
export const canvasHeaderWrapperId = "reactSchedulerCanvasHeaderWrapper";
export const canvasHeaderHourWrapperId = "reactSchedulerCanvasHeaderHourWrapper";
export const canvasWrapperId = "reactSchedulerCanvasWrapper";
export const outsideWrapperId = prefixId;
export const tileYOffset = 4;
export const tileHeight = 48;
export const formFieldsIds = {
  peopleCount: "peopleCount",
  projectsPerYear: "projectsPerYear",
  yearsCovered: "yearsCovered",
  startDate: "startDate",
  maxRecordsPerPage: "maxRecordsPerPage",
  isFullscreen: "isFullscreen",
  isMultipleRow: "isMultipleRow",
  isVisibleTooltip: "isVisibleTooltip",
  viewPreviousButton: "viewPreviousButton",
  viewNextButton: "viewNextButton",
};
export const businessDays = 5;
export const maxHoursPerWeek = 40;
export const maxHoursPerDay = 8;
export const topRowTextYPos = headerMonthHeight / 2 + 2;
export const middleRowTextYPos = headerWeekHeight / 2 + headerMonthHeight + 1;
export const buttonWeeksJump = 2;
export const scrollWeeksJump = 4;
export const minutesInHour = 60;
export const tileDefaultBgColor = "rgb(114,141,226)";
export const grayColor = "rgba(229, 232, 235, 1)";
