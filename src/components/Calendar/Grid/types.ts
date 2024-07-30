import { PaginatedSchedulerData, SchedulerProjectData } from "@/types/global";

export type GridProps = {
  zoom: number;
  rows: number;
  data: PaginatedSchedulerData;
  onTileClick?: (data: SchedulerProjectData) => void;
  isMultipleRow?: boolean;
};

export type StyledSpanProps = {
  position: "left" | "right";
};
