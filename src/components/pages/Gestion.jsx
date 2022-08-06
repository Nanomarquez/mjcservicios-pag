import React from 'react'
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jfif';
import img3 from '../../img/3.jfif';
import img4 from '../../img/4.jfif';
import img5 from '../../img/5.jfif';
import Carousel from '../Carousel';

function Gestion() {

  return (
    <>
      <div className='flex flex-col sm:flex-row items-center gap-10 justify-center text-center bg-amber-500/70 w-screen h-[65%] absolute'>
        <div className='w-[80%] sm:w-1/3 sm:border-r-2 sm:r-10 sm:border-b-0 pb-5 border-b-2 font-bold text-start text-lg drop-shadow-md'>
          <ul>
            <li>✔DDJJ RGRL SRT 463/09</li>
            <li>✔DDJJ RAR SRT 37/10</li>
            <li>✔DDJJ Agentes cancerigenos SRT 81/19</li>
          </ul>
        </div>
        <div className='w-[80%] sm:w-1/3 font-bold text-lg drop-shadow-md text-start'>
        <ul>
            <li>✔CEPROSA</li>
            <li>✔Gestion de documentacion</li>
            <li>✔Implementacion de sistemas de gestion ›<span className='text-base italic underline'>SST/Medio Ambiente</span>‹</li>
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

export default Gestion