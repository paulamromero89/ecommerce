import React from 'react';
import Typed from 'react-typed';


function Hero() {
  return (
    <div class="bg-[url(https://nipponargentina.com/wp-content/uploads/2022/03/casio-g-shock-ga-2100fr-3aer-mystic-forest.webp)] bg-cover bg-opacity-50 bg-center bg-no-repeat h-[90vh]">
      <div className='max-w-[800px] mt-[10px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

        <h1 className='text-white md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> Nuevo G-shock</h1>
        <div>
          <p className='text-[#c0c0c0] md:text-5xl sm:text-4xl text-xl font-bold py-4'>Todo lo que necesitas</p>

          <Typed 
          className='text-gray-200 md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={[' G-SHOCK GA-2100 ', 'Estilo', 'Elegancia']} 
          typeSpeed={120}
          backSpeed={140}
          loop
          />

          <div>
            <p className='md:text-2xl text-xl font-bold text-gray-200'> Reloj G-shock correa de resina </p>
            <button className=' border border-white w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-gray-200'> <a href="./productDetail">+ INFO </a></button>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Hero

