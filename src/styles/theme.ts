import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  color: {
    background: "#fff",
    text: "#000",
  },
};

export const darkTheme: DefaultTheme = {
  color: {
    background: "#1c1c1c",
    text: "#fff",
  },
};

export const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
