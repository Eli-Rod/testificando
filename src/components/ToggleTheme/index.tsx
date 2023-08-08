import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished'

import Switch from 'react-switch';

interface Props {
  toggleTheme(): void;
}

const ToggleTheme: React.FC<Props> = ({ toggleTheme }) => {
  const dataTheme = useContext(ThemeContext);

  const title = dataTheme?.title;

  const colorsPrimary = dataTheme?.colors.primary;
  const colorsSecoundary = dataTheme?.colors.secoundary;
  
  return (
    <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colorsPrimary as string)}
        onColor={colorsSecoundary as string}
      />
  )
}

export default ToggleTheme;
