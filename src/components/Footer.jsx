import React from 'react';
import logo from '../img/logo.jpg';

function Footer() {
  return (
    <>
<footer class="p-4 rounded-lg shadow md:px-6 md:py-8 bg-gray-300 relative h-[150px] bottom-0">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0">
            <img src={logo} class="mr-3 h-8" alt="Flowbite Logo" />
            <span id='span' class="self-center text-2xl tracking-tighter whitespace-nowrap text-shadow-md"><span id='spandos' className='text-yellow-500'>MJC</span> Servicios H{`&`}S</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="/" class="mr-4 hover:font-extrabold duration-150 md:mr-6 ">Home</a>
            </li>
            <li>
                <a href="/contacto" class="mr-4 hover:font-extrabold duration-150 md:mr-6">Contacto</a>
            </li>
            <li>
                <a href="/servicios" class="mr-4 hover:font-extrabold duration-150 md:mr-6 ">Servicios</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center -translate-y-5">© 2022 Design by: <a href="https://portfolionanomarquez.netlify.app/" target='_BLANK' class="hover:font-extrabold duration-150">Federico Marquez™</a>. All Rights Reserved.
    </span>
</footer>
    </>
  )
}

export default Footer