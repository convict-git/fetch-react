import React from 'react';

const colors = {
  dark: {
    'bg-color-1': 'rgb(32, 4, 68)',
    'bg-color-2': 'rgb(42, 9, 85)',
    'fg-color-2': 'rgb(236, 235, 235)',
    'fg-color-1': 'whitesmoke',
  },
  light: {
    'bg-color-1': 'whitesmoke',
    'bg-color-2': 'rgb(236, 235, 235)',
    'fg-color-2': 'rgb(42, 9, 85)',
    'fg-color-1': 'rgb(32, 4, 68)',
  },
};

interface ThemeType {
  mode: 'dark' | 'light';
  'bg-color-1': string;
  'bg-color-2': string;
  'fg-color-2': string;
  'fg-color-1': string;
}

const ThemeContext = React.createContext(null);

const themeReducer = (state: ThemeType, action: string): ThemeType => {
  switch (action) {
    case 'TOGGLE': {
      return state.mode === 'dark'
        ? { mode: 'light', ...colors['light'] }
        : { mode: 'dark', ...colors['dark'] };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};

const ThemeProvider = (props: any) => {
  const [themeData, dispachThemeData] = React.useReducer(themeReducer, {
    mode: 'light',
    ...colors['light'],
  });

  return (
    <ThemeContext.Provider value={[themeData, dispachThemeData]} {...props} />
  );
};

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
export type { ThemeType };
