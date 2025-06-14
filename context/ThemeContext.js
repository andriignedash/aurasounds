import React, {createContext, useState} from 'react';
import {COLORS} from '../constants/colors';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

    const themeColors = COLORS[theme] ?? COLORS.light;

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, themeColors}}>
      {children}
    </ThemeContext.Provider>
  );
};
