import React from 'react'
import Card from './Card'
import logo from '../img/discusion.png';
import fondo from '../img/fondoservicios.jpg'
import estudios from '../img/estudios.png'
import gestion from '../img/gestion.png'
import {motion} from 'framer-motion'

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
        <h3 className='text-gray-300 text-2xl drop-shadow-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, tempora possimus necessitatibus at perferendis voluptate animi eum adipisci laboriosam eaque eligendi fuga earum, repellat quibusdam dicta illo ad quod illum!</h3>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
            <Card title='Asesoramiento' img={logo} parrafo='Asesoramos y capacitamos sobre las normas y reglamentaciones con el fin de que se cumpla lo establecido en la Ley 19.587 de Higiene y Seguridad en el trabajo.'></Card>
            <Card title='Estudios y Mediciones' img={estudios} parrafo='Tanto mediciones ambientales como ocupacionales son estudios técnicos que sirven para controlar los riesgos prioritarios provenientes de peligros químicos, físicos y/o biológicos, que puedan afectar la salud en la empresa.'></Card>
            <Card title='Tramites y Gestiones' img={gestion} parrafo='DDJJ RGRL SRT 463/09
DDJJ RAR SRT 37/10
DDJJ Agentes canrcinogenos SRT 81/19
Ceprosa
Gestion de documentacion
Implementacion de sistemas de gestion
SST
Medio ambiente'></Card>
        </div>
    </motion.div>
  )
}

export default Servicios