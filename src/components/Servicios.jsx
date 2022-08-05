import React from 'react'
import Card from './Card'
import logo from '../img/discusion.png';
import fondo from '../img/fondoservicios.jpg'
import estudios from '../img/estudios.png'
import gestion from '../img/gestion.png'
import {motion} from 'framer-motion'
import service from '../img/servicio.jpg';
import service2 from '../img/servicio2.jpg';
import service3 from '../img/servicio3.jpg';
function Servicios() {

    const containerVariants = {
        hidden: {
          opacity: 1,
          x: "100vw",
          transition: {delay: 0.6, duration: 1.7, type: "spring"}
        },
        visible: {
          opacity: 1,
          x: "0vw",
          transition: {delay: 0.8, duration: 1.7, type: "spring"}
        },
        exit: {
          y: "-100vh",
          transition: {ease: 'linear'}
        }
      }
    return (
        <motion.div
    initial="hidden"
    animate='visible'
    exit="exit"
    variants={containerVariants} >
    <img className='h-[150%] lg:h-screen w-screen absolute z-[-1]' src={fondo} alt="" />
        <div className='items-center justify-center text-center pt-16'>
        <h1 className='text-5xl font-extrabold tracking-tight text-gray-300 drop-shadow-lg'>Servicios</h1>
        <h3 className='text-gray-300 text-2xl drop-shadow-lg'>Todos nuestras asistencias son llevadas a cabo por profesionales idoneos, capacitados y matriculados</h3>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
            <Card title='Asesoramiento' img={logo} imagen={service} ruta='/asesoramiento'></Card>
            <Card title='Estudios y Mediciones' img={estudios} imagen={service3}ruta='/estudios'></Card>
            <Card title='Tramites y Gestiones' img={gestion} imagen={service2}ruta='/gestion'></Card>
        </div>
    </motion.div>
  )
}

export default Servicios