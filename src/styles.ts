import styled, { createGlobalStyle, type DefaultTheme } from "styled-components";

export const prefixId = "reactSchedulerOutsideWrapper";

export const GlobalStyle = createGlobalStyle`

  #${prefixId} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${prefixId} *,
 #${prefixId} *:before,
 #${prefixId} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`;

type ColorType =
  | "black"
  | "grey400"
  | "grey600"
  | "blue900"
  | "blue100"
  | "blue300"
  | "blue400"
  | "blue200"
  | "red400"
  | "white"
  | "transparentGray";

export type Theme = {
  colors: Record<ColorType, string>;
  navHeight: string;
};

export const theme: DefaultTheme = {
  navHeight: "44px",
  colors: {
    black: "#212B36",
    grey400: "#D2D2D2",
    grey600: "#637381",
    blue900: "#3B3C5F",
    blue100: "#F8F8FD",
    blue300: "#C9E5FF",
    blue400: "#0A11EB",
    blue200: "#E6F3FF",
    red400: "#EF4444",
    white: "#FFFFFF",
    transparentGray: "#919EAB1F"
  }
};

export const marginPaddingReset = `
margin: 0;
padding: 0;
`;

export const truncate = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;

export const StyledSchedulerFrame = styled.div`
  margin: 10rem 10rem;
  position: relative;
  width: 80vw;
  height: 80vh;
`;
