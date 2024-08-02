import styled from "styled-components";
import {headerHeight, headerHoursHeight} from "@/constants";

export const StyledOuterWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const StyledWrapper = styled.div`
  height: ${headerHeight}px;
  display: block;
`;

export const StyledHoursWrapper = styled.div`
  height: ${headerHoursHeight}px;
  display: block;
`;

export const StyledCanvas = styled.canvas``;
