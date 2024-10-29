"use client";

import { useTheme } from "@/hooks";
import StyledComponentsRegistry from "@/lib/registry";
import { darkTheme, lightTheme } from "@/styles";
import GlobalStyles from "@/styles/GlobalStyles";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const StyledProvider = ({ children }: { children: ReactNode }) => {
  const [theme, themeToggler] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />

        <button onClick={themeToggler}>change</button>

        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default StyledProvider;
