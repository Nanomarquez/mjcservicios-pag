import React from 'react';
import NavBar from './components/NavBar.jsx';
import { Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion';
import Home from './components/Home'
import Contacto from './components/Contacto'
import Servicios from './components/Servicios'
import './index.css'

function App() {

  const location = useLocation();

  return (
    <div>
      <NavBar/>
    <AnimatePresence>
    <Routes location={location} key={location.key}>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/servicios'} element={<Servicios/>} />
          <Route path={'/contacto'} element={<Contacto/>} />
      </Routes>
    </AnimatePresence>
    </div>
  )
}

export default App