import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

const Header: React.FC = () => {
  // const {colors} = useContext(ThemeContext);

  return (
    <Container>
      Hello World

      <Switch
        onChange={() => { }}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        // offColor=""
        // onColor=""
      />
    </Container>
  );
}

export default Header;