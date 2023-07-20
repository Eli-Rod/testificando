import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global';
import Header from './components/Header/';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  // let themeStorage: string = window.localStorage.getItem("theme") as string;
  // const [changeTheme, setChangeTheme] = useState(light);

  // console.log(dark.title)
  // console.log('typeof(dark)')
  // console.log(typeof (dark))
  // console.log(changeTheme)

  // window.onload = () => {
  //   const themeOnLoad = changeTheme.title;
  //   console.log("themeOnLoad");
  //   console.log(themeOnLoad);
  //   themeStorage = themeStorage ? themeStorage : "light";
  //   window.localStorage.setItem("theme", themeOnLoad);
  //   console.log('themeStorage')
  //   console.log(themeStorage)
  //   // setChangeTheme(themeStorage);
  // };

  // setChangeTheme(themeStorage);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
