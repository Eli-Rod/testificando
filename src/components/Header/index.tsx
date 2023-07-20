import React, { useContext } from 'react';
import Switch from 'react-switch';
import { DefaultTheme, ThemeContext } from 'styled-components';
import { shade } from 'polished'

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

  const { colors } = useContext<DefaultTheme | undefined>(ThemeContext);

  console.log("colors")
  console.log(colors)

  return (
    <>
      <Container>
        Hello World

        <Switch
          id="switch"
          onChange={toggleTheme}
          checked={true}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={40}
          handleDiameter={20}
          offColor={shade(0.35, "#6433df")}
        // onColor={colors.secundary}
        // onColor={shade(0.35, "#c62e65")}
        />
      </Container>

      {/* <div class="main">
        <div id="illustration"></div>
        <div class="form-container">
          <div class="theme-selector">
            <input
              type="checkbox"
              id="switch"
              onchange="onThemeChange()"
              value="dark"
            />
            <label for="switch">Toggle</label>
          </div>
          <div class="form-header">
            <h3>Entre nessa viagem</h3>
            <p>Não tem uma conta? <a>Cadastre-se</a></p>
          </div>
          <form>
            <input placeholder="Email" />
            <input placeholder="Senha" type="password" />
            <button type="submit" form="form" value="Submit">Continuar</button>
          </form>
          <div class="form-buttons">
            <button>
              <i class="fa-brands fa-google"></i>
              <span>Continuar com Google</span>
            </button>
            <button>
              <i class="fa-brands fa-facebook"></i>
            </button>
            <button>
              <i class="fa-brands fa-apple"></i>
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Header;