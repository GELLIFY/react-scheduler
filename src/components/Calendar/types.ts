import { SchedulerData, SchedulerItemClickData, SchedulerProjectData } from "@/types/global";

export type CalendarProps = {
  data: SchedulerData;
  topBarWidth: number;
  titleAboveLeft?: string;
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
};

export type StyledSpanProps = {
  position: "left" | "right";
};

export type ProjectsData = [projectsPerPerson: SchedulerProjectData[][][], rowsPerPerson: number[]];
