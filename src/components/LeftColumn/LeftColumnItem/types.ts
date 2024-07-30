import { SchedulerItemClickData, SchedulerRowLabel } from "@/types/global";

export type LeftColumnItemProps = {
  id: string;
  item: SchedulerRowLabel;
  rows: number;
  onItemClick?: (data: SchedulerItemClickData) => void;
  isMultipleRow?: boolean;
};

export type StyledTextProps = {
  isMain?: boolean;
};

export type StyledLeftColumnItemWrapperProps = {
  rows: number;
  clickable: boolean;
  isMultipleRow?: boolean;
};
