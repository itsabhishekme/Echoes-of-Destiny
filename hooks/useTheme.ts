"use client";

import { useEffect, useState, useCallback } from "react";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeState {
  theme: ThemeMode;
  resolvedTheme: "light" | "dark";
  isDark: boolean;
}

const STORAGE_KEY = "echoes-of-destiny-theme";

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  const getSystemTheme = useCallback((): "light" | "dark" => {
    if (typeof window === "undefined") return "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }, []);

  const applyTheme = useCallback(
    (selectedTheme: ThemeMode) => {
      if (typeof document === "undefined") return;

      const root = document.documentElement;

      const activeTheme =
        selectedTheme === "system"
          ? getSystemTheme()
          : selectedTheme;

      root.classList.remove("light", "dark");
      root.classList.add(activeTheme);

      root.setAttribute("data-theme", activeTheme);

      setResolvedTheme(activeTheme);
    },
    [getSystemTheme]
  );

  const setTheme = useCallback(
    (newTheme: ThemeMode) => {
      setThemeState(newTheme);

      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, newTheme);
      }

      applyTheme(newTheme);
    },
    [applyTheme]
  );

  const toggleTheme = useCallback(() => {
    const current =
      theme === "system"
        ? getSystemTheme()
        : theme;

    setTheme(current === "dark" ? "light" : "dark");
  }, [theme, getSystemTheme, setTheme]);

  useEffect(() => {
    setMounted(true);

    const savedTheme =
      (localStorage.getItem(STORAGE_KEY) as ThemeMode | null) ||
      "system";

    setThemeState(savedTheme);
    applyTheme(savedTheme);

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleSystemThemeChange = () => {
      const currentTheme =
        localStorage.getItem(STORAGE_KEY) || "system";

      if (currentTheme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener(
      "change",
      handleSystemThemeChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleSystemThemeChange
      );
    };
  }, [applyTheme]);

  const value: ThemeState = {
    theme,
    resolvedTheme,
    isDark: resolvedTheme === "dark",
  };

  return {
    ...value,
    mounted,
    setTheme,
    toggleTheme,
  };
}

export default useTheme;