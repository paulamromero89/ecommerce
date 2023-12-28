import React from 'react';
import Typed from 'react-typed';


function Hero() {
  return (
    <div class="bg-[url(https://gshock.casio.com/content/experience-fragments/casio/en/feature/timepiece/watch/g-shock/mr_g/mrg-b5000ba/features1/master/_jcr_content/root/container_542574431/teaser_copy.casiocoreimg.jpeg/1652754117738/bg1.jpeg)] bg-cover bg-opacity-50 bg-center bg-no-repeat h-[90vh]">
      <div className='max-w-[800px] mt-[10px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

        <h1 className='text-white md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> MR-G</h1>
        <div>
          <p className='text-white md:text-5xl sm:text-4xl text-xl font-bold py-4'>MRG-B5000BA</p>

          <Typed 
          className='text-gray-200 md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['Tough Solar', 'Multiband 6', 'Bluetooth']} 
          typeSpeed={120}
          backSpeed={140}
          loop
          />

          <div>
            <p className='md:text-2xl text-xl font-bold text-gray-200'> G-Shock MR-G Carcasa y correa de titanio </p>
            <button className=' border border-white w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-gray-200'> <a href="./productDetail">+ INFO </a></button>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Hero

