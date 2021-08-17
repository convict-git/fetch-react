import React from 'react';

import SUN_ICON from '../../../../static/icons8-sun.svg';
import MOON_ICON from '../../../../static/moon-svgrepo-com.svg';

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

export const ThemeToggle = (): JSX.Element => {
  const [theme, setTheme] = React.useState<ThemeType>({
    mode: 'dark',
    ...colors['dark'],
  });

  const rootRef = React.useRef(document.querySelector(':root'));

  const handleClick = () => {
    theme.mode === 'light'
      ? setTheme({ mode: 'dark', ...colors['dark'] })
      : setTheme({ mode: 'light', ...colors['light'] });
  };

  React.useLayoutEffect(() => {
    rootRef.current?.style.setProperty(
      '--dark-color',
      colors[theme.mode]['bg-color-1']
    );
    rootRef.current?.style.setProperty(
      '--medium-color',
      colors[theme.mode]['bg-color-2']
    );
    rootRef.current?.style.setProperty(
      '--light-color',
      colors[theme.mode]['fg-color-2']
    );
    rootRef.current?.style.setProperty(
      '--super-light-color',
      colors[theme.mode]['fg-color-1']
    );
  }, [theme]);

  return (
    <button
      style={{
        height: '50px',
        width: '50px',
        borderRadius: '50px',
        border: '3px solid black',
      }}
      onClick={handleClick}
    >
      <img
        style={{ height: '30px', width: '30px' }}
        src={theme.mode === 'dark' ? SUN_ICON : MOON_ICON}
        alt="just sun"
      />
    </button>
  );
};
