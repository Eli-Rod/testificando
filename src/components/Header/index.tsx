import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished'

import { Container, MenuSistema, IconMenu } from './styles';
import SideBar from '../Menus/SideBar';
import SideBarUser from '../Menus/SideBarUser';

import { FaBars, FaUserCog, FaUser } from 'react-icons/fa'
import { FcPortraitMode } from "react-icons/fc";



interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const dataTheme = useContext(ThemeContext);
  const [sideBar, setSideBar] = useState(false);
  const [sideBarUser, setSideBarUser] = useState(false);

  const showSidebar = () => setSideBar(!sideBar);
  const showSidebarUser = () => setSideBarUser(!sideBarUser);

  const title = dataTheme?.title;

  const colorsPrimary = dataTheme?.colors.primary;
  const colorsSecoundary = dataTheme?.colors.secoundary;
  console.log("toggleTheme")
  console.log(toggleTheme)
  return (
    <Container>
      <MenuSistema>
        <FaBars onClick={showSidebar} />
        {sideBar && <SideBar active={setSideBar} />}
      </MenuSistema>

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

      <MenuSistema>
        <FaUser onClick={showSidebarUser} />
        {sideBarUser && <SideBarUser active={setSideBarUser} />}
      </MenuSistema>
    </Container>
  );
}

export default Header;