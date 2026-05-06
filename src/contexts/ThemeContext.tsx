"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [isSystemDark, setIsSystemDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // catching the prefered user system color mode
  useEffect(() => {
    const mediaSchema = window.matchMedia("(prefers-color-scheme: dark)");

    const schemaHandler = (e: MediaQueryListEvent) => {
      setIsSystemDark(e.matches);
    };
    mediaSchema.addEventListener("change", schemaHandler);

    return () => mediaSchema.removeEventListener("change", schemaHandler);
  });

  useEffect(() => {
    // Read the theme that was set by the inline script in layout.tsx
    // This ensures we're in sync with the initial script
    const htmlElement = document.documentElement;
    let initialTheme: Theme = "light"; // Default to light

    // Only check localStorage if user has explicitly set a preference
    // Default to 'light' if no preference is saved
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      initialTheme = savedTheme;
    } else {
      // Default to system preference
      initialTheme = isSystemDark ? "dark" : "light";
    }
    // Apply it to the HTML element
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(initialTheme);

    setThemeState(initialTheme);
    setMounted(true);
  }, [isSystemDark]);

  useEffect(() => {
    if (mounted) {
      const htmlElement = document.documentElement;
      htmlElement.classList.remove("light", "dark");
      htmlElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    if (mounted) {
      setThemeState(newTheme);
    }
  };

  const toggleTheme = () => {
    if (mounted) {
      setThemeState((prev) => (prev === "light" ? "dark" : "light"));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values during SSR
    return {
      theme: "light" as Theme,
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return context;
}
