import React from 'react'
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jfif';
import img3 from '../../img/3.jfif';
import img4 from '../../img/4.jfif';
import img5 from '../../img/5.jfif';
import Carousel from '../Carousel';

function Estudios() {

  return (
    <>
      <div className='flex flex-col sm:flex-row items-center gap-10 justify-center text-center bg-amber-500/70 w-screen h-[65%] absolute'>
      <div className='w-[80%] sm:w-1/3 sm:border-r-2 border-b-2 sm:border-b-0 font-bold text-base text-start drop-shadow-md z-[100000000000] sm:z-[1] sm:text-lg'>
          <ul>
            <li>✔Ruido laboral ›<span className='text-base italic underline'>SRT 85/12</span>‹</li>
            <li>✔Iluminación ›<span className='text-base italic underline'>SRT 84/12</span>‹</li>
            <li>✔Estudio de carga de fuego/incendio</li>
          </ul>
        </div>
        <div className='w-[80%] sm:w-1/3 sm:border-r-2 border-b-2 sm:border-b-0 font-bold text-base drop-shadow-md text-start sm:text-lg'>
        <ul>
            <li>✔Ruidos molestos ›<span className='text-base italic underline'>IRAM 4062</span>‹</li>
            <li>✔Puesta a tierra y continuidad <br /> ›<span className='text-base italic underline'>SRT 900/15</span>‹</li>

          </ul>
        </div>
        <div className='w-[80%] sm:w-1/3 text-start font-bold text-base drop-shadow-md sm:text-lg'>
        <ul>
            <li>✔Prueba de disyuntores y diferenciales</li>
            <li>✔Analisis fisico, quimico y bacteorológico para agua de consumo</li>
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

export default Estudios