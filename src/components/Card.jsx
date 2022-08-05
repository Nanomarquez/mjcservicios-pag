import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';

function Card(props) {
  return (
    <div className='servicios'>
    <div className='container w-[300px] items-center justify-center flex'>
      <div className="card h-[350px] bg-gradient-to-tr from-gray-400 via-gray-200 to-gray-400 w-[90%] my-[30px] rounded-2xl drop-shadow-lg">
        <div className="imgBox absolute top-[10px] left-[10px] backdrop-blur-md h-[calc(100%-20px)] w-[calc(100%-20px)] z-10 flex justify-center items-center overflow-hidden rounded-2xl border-solid border border-white/10 shadow-box duration-500 ease-in-out">
          <h1 className='flex absolute top-0 pt-3 font-bold duration-700 text-center -translate-y-1 text-xl text-white drop-shadow-lg'>{props.title}</h1>
          <img src={props.img} alt="" className='max-w-[150px] invert duration-500 ease-in-out'/>
        </div>
        <div className="content absolute mx-[50px] right-0 w-[calc(100%-75px)] h-[100%] flex items-center">
          <div>
            <h3 className='text-black mb-[5px] ml-8 text-2xl text-center drop-shadow-lg'>{props.title}</h3>
            <img src={props.imagen} alt="" className='rounded-lg ml-3' />
            <Link to={props.ruta}>            
            <a href={props.ruta} className='ml-12 group inline-block mt-[10px] py-[8px] px-[20px] rounded-md bg-gray-500  text-white font-bold drop-shadow-md text-shadow-md shadow-black'><div className="absolute top-0 -inset-full h-full w-[70%] z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-0 hover:opacity-20 group-hover:animate-shine " />
Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card