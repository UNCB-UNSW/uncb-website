import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Team from './pages/Team'
import Events from './pages/Events'
import Sponsors from './pages/Sponsors'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={ <Home/> } />
        <Route path="/team" element={ <Team/> } />
        <Route path="/events" element={ <Events/> } />
        <Route path="/sponsors" element={ <Sponsors/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
