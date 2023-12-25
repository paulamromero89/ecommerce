import React from 'react';
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>Nuestro producto aqui </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> titulo principal</h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>caracteristicas del producto</p>

          <Typed 
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['BTB', 'BTC', 'SASS']} 
          typeSpeed={120}
          backSpeed={140}
          loop
          />

          <div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Get Started </button>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Hero

