import React from 'react'
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jfif';
import img3 from '../../img/3.jfif';
import img4 from '../../img/4.jfif';
import img5 from '../../img/5.jfif';
import Carousel from '../Carousel';

function Asesoramiento() {
  return (
    <>
      <div className='flex flex-col sm:flex-row items-center gap-5 justify-center text-center bg-amber-500/70 w-screen h-[65%] absolute'>
        <div className='w-[80%] sm:w-1/3 sm:border-r-2 border-b-2 sm:border-b-0 font-bold text-base text-start drop-shadow-md z-[100000000000] sm:z-[1] sm:text-lg'>
          <ul>
            <li>✔Servicios externos en HyS</li>
            <li>✔Estudio antisiniestral</li>
            <li>✔Programas de seguridad en obras</li>
            <li>✔Capacitación para conductores de autoelevadores ›<span className='text-base italic underline'>RES. 960/15</span>‹</li>
          </ul>
        </div>
        <div className='w-[80%] sm:w-1/3 sm:border-r-2 border-b-2 sm:border-b-0 font-bold text-base drop-shadow-md text-start sm:text-lg'>
        <ul>
            <li>✔Planes de emergencia y evacuación</li>
            <li>✔Formación y capacitación de brigadas</li>
            <li>✔Análisis de riesgos</li>
            <li>✔Auditorias internas para la gestión de ›<span className='text-base italic underline'>SST ISO 45.001/18</span>‹</li>
          </ul>
        </div>
        <div className='w-[80%] sm:w-1/3 text-start font-bold text-base drop-shadow-md sm:text-lg'>
        <ul>
            <li>✔Investigación de accidentes, gestión de estadísticas</li>
            <li>✔Supervisión técnica para tareas de riesgo</li>
            <li>✔Visitas técnicas/ART</li>
            <li>✔Capacitaciones</li>
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Carousel>
          <img src={img1} alt="" style={{width:'100%',height:'100%'}} className='object-cover sm:object-contain rounded-md'/>
          <img src={img2} alt="" style={{width:'100%',height:'100%'}} className='object-cover sm:object-contain rounded-md'/>
          <img src={img3} alt="" style={{width:'100%',height:'100%'}} className='object-cover sm:object-contain rounded-md'/>
          <img src={img4} alt="" style={{width:'100%',height:'100%'}} className='object-cover sm:object-contain rounded-md'/>
          <img src={img5} alt="" style={{width:'100%',height:'100%'}} className='object-cover sm:object-contain rounded-md'/>
        </Carousel>
      </div>
    </>
  )
}

export default Asesoramiento