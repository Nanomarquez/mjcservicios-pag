import React from 'react'
import img from '../img/fondo.jpg'
import {motion} from 'framer-motion'

function Contacto() {
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


    <div id='contacto' className='bg-gray-600'>
      <div className='w-screen h-full'>
        <img src={img} alt="" className='absolute w-full h-screen object-cover' />
      </div>
      <div className='absolute text-center w-full pt-5 sm:relative'>
        <h1 className='text-start text-5xl text-gray-300 text-shadow-lg shadow-white font-extrabold ml-5 mb-5 sm:text-center'>Soluciones Integrales</h1>
        <p className='text-center text-xl text-gray-300 text-shadow-lg shadow-white  font-bold my-5'>Todos nuestros servicios son llevados a cabo por profesionales idoneos, capacitados y matriculados</p>
      </div>
      <div className='bg-slate-500/60 backdrop-blur-sm rounded-lg w-screen sm:w-1/2 block translate-y-[250px] sm:translate-y-0 p-5 sm:mx-[25%]'>
        <div className='h-10 bg-yellow-400 hover:bg-yellow-500/80 duration-200 text-center p-1 mb-5 text-2xl rounded font-medium text-gray-600'>CONTACTO</div>
      <form
            action="https://getform.io/f/dc82c6f2-c193-4eed-a6c9-2a29f660250e"
            method="POST"
            className="flex flex-col mx-10 gap-5 place-content-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre y Apellido"
              className="p-2 bg-gray-100/80 hover:bg-gray-100/70 duration-200 border-2 capitalize rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Correo Electrónico"
              className="p-2 bg-gray-100/80 hover:bg-gray-100/70 duration-200 border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono"
              className="p-2 bg-gray-100/80 hover:bg-gray-100/70 duration-200 border-2 rounded-md text-white focus:outline-none"
            />
            <textarea name="mensaje"
            placeholder='Escriba su consulta'
            rows='5'
            className="p-2 bg-gray-100/80 hover:bg-gray-100/70 duration-200 border-2 rounded-md text-white focus:outline-none"
            >
            </textarea>            
            <button className="p-2 mx-5 bg-yellow-400 hover:bg-yellow-500/80 duration-200 font-semibold text-xl rounded-md text-gray-600 focus:outline-none">
              ENVIAR
            </button>            
            </form>
      </div>
    </div>
    </motion.div>
  )
}

export default Contacto