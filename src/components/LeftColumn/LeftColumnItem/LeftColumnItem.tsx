import { FC } from "react";
import { StyledInnerWrapper, StyledText, StyledTextWrapper, StyledWrapper } from "./styles";
import { LeftColumnItemProps } from "./types";
import { upperFirst } from "@mantine/hooks";

const LeftColumnItem: FC<LeftColumnItemProps> = ({
  id,
  item,
  rows,
  onItemClick,
  isMultipleRow,
  isEmpty
}) => {
  return (
    <StyledWrapper
      title={item.title + " | " + item.subtitle}
      clickable={typeof onItemClick === "function"}
      rows={rows}
      onClick={() => onItemClick?.({ id, label: item })}
      isMultipleRow={isMultipleRow}
      isEmpty={isEmpty}>
      <StyledInnerWrapper>
        <StyledTextWrapper>
          <StyledText isMain>{upperFirst(item.title)}</StyledText>
          <StyledText isMain={false}>
            {"8:00 - 12:00" /*TODO CHANGE DATE RANGE WITH TILE LENHGT */}
          </StyledText>
        </StyledTextWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default LeftColumnItem;
