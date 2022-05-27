import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Team from './pages/Team'
import Events from './pages/Events'
import Sponsors from './pages/Sponsors'

import {ThemeProvider} from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import { ThemeContext } from "./ThemeContext";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <ThemeProvider theme={darkMode === true ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>        
          <Route path="/" element={ <Home /> } />
          <Route path="/team" element={ <Team /> } />
          <Route path="/events" element={ <Events /> } />
          <Route path="/sponsors" element={ <Sponsors /> } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
