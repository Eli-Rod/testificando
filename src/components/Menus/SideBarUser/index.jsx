import React from 'react'
import Switch from 'react-switch';

import Divider from "@material-ui/core/Divider";

import { Container, Content } from './styles'
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa';

import {
  FaArrowRight
} from "react-icons/fa6";


import SidebarUserItem from '../SidebarUserItem'
import ToggleTheme from '../../ToggleTheme';



const DataItems = [
  { Link: 'usuarios', Icon: FaUserAlt, Text: 'Usuários' },
  { Link: 'email', Icon: FaEnvelope, Text: 'E-mail' },
  { Link: 'employees', Icon: FaRegCalendarAlt, Text: 'Calendário' },
  { Link: 'relatorios', Icon: FaRegFileAlt, Text: 'Relatorios' },
  { Link: 'statistics', Icon: FaChartBar, Text: 'Statistics' },
  { Link: 'configuracoes', Icon: FaRegSun, Text: 'Configurações' },
];

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaArrowRight onClick={closeSidebar} style={{ width: 20 }} />      

      <Content onClick={closeSidebar}>

        <Divider style={{ margin: 10, backgroundColor: 'white' }} />

        <ToggleTheme toggleTheme={ToggleTheme} />        

        <Divider style={{ margin: 10, backgroundColor: 'white' }} />
        

        {DataItems.map((item) => (
          <SidebarUserItem
            Icon={item.Icon}
            Text={item.Text}
          />
        ))}
      </Content>
    </Container>
  )
}

export default Sidebar