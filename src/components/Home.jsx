import img from '../img/logo.jpg'
import industria from '../img/industria.jpg'
import fb from '../img/facebook.png'
import ins from '../img/instagram.png'
import wsp from '../img/whatsapp.png'
import Footer from './Footer'
import {motion} from 'framer-motion'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Contacto', href: '#contacto' },
  { name: 'Servicios', href: '#servicios' },
]

export default function Home() {
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
    variants={containerVariants} className="relative bg-white overflow-hidden" id='home'>
      <div className="max-w-7xl mx-auto bg-white">
        <div className="relative h-screen z-10 bg-white lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className='flex h-28 justify-center pt-5'>
            <img src={img} alt="" />
          </div>

          <main className="mx-auto max-w-7xl -translate-y-5 sm:px-6 lg:px-8">
            <div className="sm:text-center "><br />
              <h1 className="tracking-tight  font-extrabold text-gray-400 sm:text-5xl md:text-6xl">
            <span id='spandos' className="block text-center text-5xl drop-shadow-md text-yellow-500 shadow-black">MJC</span>
                <span className="block text-4xl text-gray-600 drop-shadow-md text-center shadow-black">Servicios de Higiene y Seguridad</span>
                
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:max-w-xl drop-shadow-md shadow-black text-center sm:text-xs  sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Brindamos servicios integrales y asesoria en materia de higiene y seguridad. <br />Nuestro compromiso es brindar un servicio enfocado en la deteccion temprana de sus necesidades, conociendo las variables de un mercado que propone cambios constantes nos comprometemos a adaptarnos para lograr una buena relación costo-beneficio. <br />Creemos en el desarrollo de vinculos sólidos entre profesional y cliente que conduzcan a la mejora continúa de su organización.
              </p>
                  <div className='flex flex-col gap-5 h-44 w-full text-gray-500 drop-shadow-md items-center justify-center'>
                      <div className='flex flex-row gap-5'>
                        <img src={wsp} alt="wsp" className='shadow-md cursor-pointer hover:scale-110 duration-200'/>
                        <img src={ins} alt="instagram" className='shadow-md cursor-pointer hover:scale-110 duration-200'/>
                        <img src={fb} alt="facebook" className='shadow-md cursor-pointer hover:scale-110 duration-200' />
                      </div>
                      <div className='flex flex-col text-center font-medium'>
                        <p className='hover:text-yellow-600 cursor-pointer duration-150'>Teléfono:(011)-5212345</p>
                        <p className='hover:text-yellow-600 cursor-pointer duration-150'>Mail: javi@gmail.com</p>
                      </div>
                  </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={industria}
          alt=""
        />
      </div>
      <Footer/>
    </motion.div>
  )
}