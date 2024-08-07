import styled from "styled-components";
import { theme } from "@/styles";
import { boxHeight } from "@/constants";
import { StyledLeftColumnItemWrapperProps, StyledTextProps } from "./types";

export const StyledWrapper = styled.div<StyledLeftColumnItemWrapperProps>`
  display: flex;
  align-items: ${({ rows }) => (rows > 1 ? "start" : "center")};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${boxHeight}px;
  height: ${({ isMultipleRow, rows }) =>
    isMultipleRow ? `calc(${boxHeight}px * ${rows})` : `calc(${boxHeight}px * ${1})`};
  border-top: 1px solid ${({ theme }) => theme.colors.grey400};
  transition: 0.5s ease;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "auto")};
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue200};
  }
  background-color: ${({ isEmpty }) =>
    isEmpty ? theme.colors.transparentGray : theme.colors.white};
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImageWrapper = styled.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;
export const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`;
export const StyledText = styled.p<StyledTextProps>`
  margin: 0;
  padding: 1px;
  font-size: 14px;
  letter-spacing: ${({ isMain }) => (isMain ? 1 + "px" : 0.5 + "px")};
  line-height: ${({ isMain }) => (isMain ? 22 + "px" : 22 + "px")};
  color: ${({ isMain }) => (isMain ? theme.colors.black : theme.colors.grey600)};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  font-family: "new_serif", serif !important;
  font-weight: ${({ isMain }) => (isMain ? 700 : 400)};
`;
