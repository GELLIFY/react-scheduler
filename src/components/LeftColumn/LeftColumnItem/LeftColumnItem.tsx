import { FC } from "react";
import { StyledInnerWrapper, StyledText, StyledTextWrapper, StyledWrapper } from "./styles";
import { LeftColumnItemProps } from "./types";

const LeftColumnItem: FC<LeftColumnItemProps> = ({ id, item, rows, onItemClick }) => {
  return (
    <StyledWrapper
      title={item.title + " | " + item.subtitle}
      clickable={typeof onItemClick === "function"}
      rows={rows}
      onClick={() => onItemClick?.({ id, label: item })}>
      <StyledInnerWrapper>
        <StyledTextWrapper>
          <StyledText isMain>{item.title}</StyledText>
          <StyledText isMain={false}>
            {"8:00 - 12:00" /*TODO CHANGE DATE RANGE WITH TILE LENHGT */}
          </StyledText>
        </StyledTextWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default LeftColumnItem;
