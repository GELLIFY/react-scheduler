import { PaginatedSchedulerData, SchedulerItemClickData } from "@/types/global";

export type LeftColumnProps = {
  data: PaginatedSchedulerData;
  rows: number[];
  pageNum: number;
  pagesAmount: number;
  onLoadNext: () => void;
  onLoadPrevious: () => void;
  searchInputValue: string;
  onSearchInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onItemClick?: (data: SchedulerItemClickData) => void;
  titleAboveLeft?: string;
  isMultipleRow?: boolean;
  viewPreviusButton?: boolean;
  viewNextButton?: boolean;
};

export type StyledInputWrapperProps = {
  isFocused: boolean;
};
