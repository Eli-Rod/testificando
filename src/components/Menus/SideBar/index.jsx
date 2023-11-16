import React from 'react'
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
  FaArrowLeft,
  FaBookBible,
  FaPersonPraying
} from "react-icons/fa6";

import Divider from "@material-ui/core/Divider";

import SidebarItem from '../SidebarItem'

const DataItems = [
  { Link: 'home', Icon: FaHome, Text: 'Home' },
  { Link: 'leitura', Icon: FaBookBible, Text: 'Leitura' },
  { Link: 'oracao', Icon: FaPersonPraying, Text: 'Motivos de Oração' },
  { Link: 'calendario', Icon: FaRegCalendarAlt, Text: 'Calendario' },
  { Link: 'Employees', Icon: FaIdCardAlt, Text: 'Employees' },
  { Link: 'relatorios', Icon: FaRegFileAlt, Text: 'Relatorios' },
  { Link: 'configuracoes', Icon: FaRegSun, Text: 'Configurações' },
  { Link: 'home', Icon: FaHome, Text: 'Home' },
  { Link: 'leitura', Icon: FaBookBible, Text: 'Leitura' },
  { Link: 'oracao', Icon: FaPersonPraying, Text: 'Motivos de Oração' },
  { Link: 'calendario', Icon: FaRegCalendarAlt, Text: 'Calendario' },
  { Link: 'Employees', Icon: FaIdCardAlt, Text: 'Employees' },
  { Link: 'relatorios', Icon: FaRegFileAlt, Text: 'Relatorios' },
  { Link: 'configuracoes', Icon: FaRegSun, Text: 'Configurações' },
  { Link: 'home', Icon: FaHome, Text: 'Home' },
  { Link: 'leitura', Icon: FaBookBible, Text: 'Leitura' },
  { Link: 'oracao', Icon: FaPersonPraying, Text: 'Motivos de Oração' },
  { Link: 'calendario', Icon: FaRegCalendarAlt, Text: 'Calendario' },
  { Link: 'Employees', Icon: FaIdCardAlt, Text: 'Employees' },
  { Link: 'relatorios', Icon: FaRegFileAlt, Text: 'Relatorios' },
  { Link: 'configuracoes', Icon: FaRegSun, Text: 'Configurações' },
];

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }



  return (
    <Container sidebar={active}>
      <FaArrowLeft onClick={closeSidebar} style={{ width: 20 }} />


      <Content onClick={closeSidebar} onScroll={true}>

        <Divider style={{ margin: 10, backgroundColor: 'white' }} />

        {DataItems.map((item) => (
          <SidebarItem
            Icon={item.Icon}
            Text={item.Text}
          />
        ))}
      </Content>
    </Container>
  )
}

export default Sidebar