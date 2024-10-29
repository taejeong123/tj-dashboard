import theme from "@/styles/theme";

export type ThemeType = "dark" | "light";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      background: string;
      text: string;
    };
  }
}
