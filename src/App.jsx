import React from 'react';
import NavBar from './components/NavBar.jsx';
import { Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion';
import Home from './components/Home'
import Contacto from './components/Contacto'
import Servicios from './components/Servicios'
import './index.css'
import Wsp from './components/Wsp.jsx';
import Asesoramiento from './components/pages/Asesoramiento.jsx';
import Estudios from './components/pages/Estudios.jsx';
import Gestion from './components/pages/Gestion.jsx';

function App() {

  const location = useLocation();

  return (
    <div>

      <Wsp/>
      <NavBar/>
    <AnimatePresence>
    <Routes location={location} key={location.key}>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/servicios'} element={<Servicios/>} />
          <Route path={'/contacto'} element={<Contacto/>} />
          <Route path={'/asesoramiento'} element={<Asesoramiento/>} />
          <Route path={'/estudios'} element={<Estudios/>} />
          <Route path={'/gestion'} element={<Gestion/>} />
      </Routes>
    </AnimatePresence>
    </div>
  )
}

export default App