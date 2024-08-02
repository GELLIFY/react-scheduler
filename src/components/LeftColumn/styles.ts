import styled from "styled-components";
import {boxHeight, leftColumnWidth} from "@/constants";
import { StyledInputWrapperProps } from "./types";
import {StyledLeftColumnItemWrapperProps} from "@/components/LeftColumn/LeftColumnItem/types";

export const StyledWrapper = styled.div`
  min-width: ${leftColumnWidth + "px"};
  max-width: ${leftColumnWidth + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`;

export const StyledLeftColumnHeader = styled.div<{ zoom?: number }>`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({zoom}) => zoom == 2 ? 90 : 124}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${leftColumnWidth}px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 3;
`;

export const StyledInput = styled.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey600};
  }
`;

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  margin-left: 10px;
  margin-bottom: 4px;
  margin-top: 5px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey400};
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
  background-color: ${({ theme }) => theme.colors.blue100};
  border: 1px solid
    ${({ theme, isFocused }) => (isFocused ? theme.colors.blue400 : theme.colors.grey400)};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
`;

// export const StyledWrapper = styled.div<StyledLeftColumnItemWrapperProps>`
//   display: flex;
//   align-items: ${({ rows }) => (rows > 1 ? "start" : "center")};
//   padding: 0.813rem 0 0.813rem 1rem;
//   width: 100%;
//   min-height: ${boxHeight}px;
//   height: calc(${boxHeight}px * ${({ rows }) => rows});
//   border-top: 1px solid ${({ theme }) => theme.colors.grey400};
//   transition: 0.5s ease;
//   cursor: ${({ clickable }) => (clickable ? "pointer" : "auto")};
//   &:hover {
//     background-color: ${({ theme }) => theme.colors.blue200};
//   }
// `;
