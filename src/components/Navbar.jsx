import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState('');

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const submitSearch = () => {

    console.log('Búsqueda:', search);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT</h1>
      

      <div className='hidden md:flex items-center'>



        

          <div className='relative ml-4 hidden md:block'>
          <input
            type='text'
            placeholder='Buscar...'
            value={search}
            onChange={handleSearchChange}
            className='pl-10 pr-2 py-2 text-black'
            onKeyPress={(event) => event.key === 'Enter' && submitSearch()}
          />
          <AiOutlineSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500' size={20} />
          </div>

        <ul className='flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Catalogue</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
{/* Cart button */}
<button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' /> Cart
      </button>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT</h1> {/* Cart button */}

        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Catalogue</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>

        <div className='relative ml-4'>
          <input
            type='text'
            placeholder='Buscar...'
            value={search}
            onChange={handleSearchChange}
            className='pl-10 pr-2 py-2 text-black'
            onKeyPress={(event) => event.key === 'Enter' && submitSearch()}
          />
          <AiOutlineSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500' size={20} />
        </div>


        <button className='mt-4 absolute left-2 border border-white text-white flex items-center py-2 px-4 rounded-full p-4 '>
            <BsFillCartFill size={20} className='mr-2' /> Cart
        </button>

      </div>
   
   
    </div>
  );
};

export default Navbar;
