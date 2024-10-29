"use client";

import { ThemeType } from "@/types/styled";
import { useEffect, useState } from "react";

export const useTheme = (): [ThemeType, () => void] => {
  const defaultTheme: ThemeType = "dark";

  const getInitialTheme = (): ThemeType => {
    if (typeof window === "undefined") return defaultTheme;

    const localTheme = localStorage.getItem("theme") as ThemeType;
    if (localTheme) return localTheme;

    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkMode ? "dark" : "light";
  };

  const [theme, setTheme] = useState<ThemeType>(getInitialTheme);

  useEffect(() => {
    const handleThemeChange = () => {
      const localTheme = localStorage.getItem("theme") as ThemeType;
      if (localTheme) setTheme(localTheme);
    };

    window.addEventListener("themeChange", handleThemeChange);

    return () => {
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  const themeToggler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    window.dispatchEvent(new Event("themeChange"));
  };

  return [theme, themeToggler];
};
