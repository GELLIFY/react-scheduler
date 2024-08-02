import { FC, useState } from "react";
import { useLanguage } from "@/context/LocaleProvider";
import Icon from "../Icon";
import PaginationButton from "../PaginationButton/PaginationButton";
import { StyledInput, StyledInputWrapper, StyledLeftColumnHeader, StyledWrapper } from "./styles";
import { LeftColumnProps } from "./types";
import LeftColumnItem from "./LeftColumnItem/LeftColumnItem";
import "@fontsource/josefin-sans";

const LeftColumn: FC<LeftColumnProps> = ({
  data,
  rows,
  onLoadNext,
  onLoadPrevious,
  pageNum,
  pagesAmount,
  titleAboveLeft,
  searchInputValue,
  onSearchInputChange,
  onItemClick,
  isMultipleRow,
    viewPreviousButton,
    viewNextButton,
    zoom
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { search } = useLanguage();

  const toggleFocus = () => setIsInputFocused((prev) => !prev);

  return (
    <StyledWrapper>
      <StyledLeftColumnHeader zoom={zoom}>
        <div
          style={{
            fontFamily: "Josefin Sans",
            fontSize: "20px",
            paddingTop: "10px",
            flex: "auto",
            textAlign: "center",
            fontWeight: "bold"
          }}>
          {titleAboveLeft ? titleAboveLeft : ""}
        </div>
        <div
          style={{
            borderTop: `1px solid #D2D2D2`
          }}>
          <StyledInputWrapper isFocused={isInputFocused}>
            <StyledInput
              placeholder={search}
              value={searchInputValue}
              onChange={onSearchInputChange}
              onFocus={toggleFocus}
              onBlur={toggleFocus}
            />
            <Icon iconName="search" />
          </StyledInputWrapper>
        </div>
        {viewPreviousButton && viewPreviousButton == undefined && <PaginationButton
              intent="previous"
              isVisible={pageNum !== 0}
              onClick={onLoadPrevious}
              icon={<Icon iconName="arrowUp" width="16" height="16"/>}
              pageNum={pageNum}
              pagesAmount={pagesAmount}
          />}
      </StyledLeftColumnHeader>
      {data.map((item, index) => (
        <LeftColumnItem
          id={item.id}
          item={item.label}
          key={item.id}
          rows={rows[index]}
          onItemClick={onItemClick}
          isMultipleRow={isMultipleRow}
          isEmpty={item.data.length === 0}
        />
      ))}
        { viewNextButton && viewNextButton == undefined && <PaginationButton
            intent="next"
            isVisible={pageNum !== pagesAmount - 1}
            onClick={onLoadNext}
            icon={<Icon iconName="arrowDown" width="16" height="16"/>}
            pageNum={pageNum}
            pagesAmount={pagesAmount}
        />}
    </StyledWrapper>
  );
};

export default LeftColumn;
