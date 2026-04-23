'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read the theme that was set by the inline script in layout.tsx
    // This ensures we're in sync with the initial script
    const htmlElement = document.documentElement;
    
    const hasLight = htmlElement.classList.contains('light');
    const hasDark = htmlElement.classList.contains('dark');
    
    let initialTheme: Theme = 'light'; // Default to light

    console.log('hasDark', hasDark);
    console.log('hasLight', hasLight);
    console.log('initialTheme', htmlElement);

    if (hasDark) {
      initialTheme = 'dark';
    } else if (hasLight) {
      initialTheme = 'light';
    } else {
      // Only check localStorage if user has explicitly set a preference
      // Default to 'light' if no preference is saved
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        initialTheme = savedTheme;
      } else {
        // Default to light, ignore system preference
        initialTheme = 'light';
      }
      // Apply it to the HTML element
      htmlElement.classList.remove('light', 'dark');
      htmlElement.classList.add(initialTheme);
    }
    
    setThemeState(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const htmlElement = document.documentElement;
      htmlElement.classList.remove('light', 'dark');
      htmlElement.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    if (mounted) {
      setThemeState(newTheme);
    }
  };

  const toggleTheme = () => {
    if (mounted) {
      setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
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
      theme: 'light' as Theme,
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return context;
}

