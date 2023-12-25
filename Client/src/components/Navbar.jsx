
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate(); 

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const submitSearch = () => {
    console.log('Búsqueda:', search);
  };

  const handleCartClick = () => { 
    navigate('/cart');
  };

  return (

    <div className='bg-black w-full flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <img className ='pl-10 pr-2 py-2 w-[15rem]' src="https://casiostore.rower.com.ve/cdn/shop/files/LOGO_WEB-01-01_868x250.png?v=1692972445" alt="Logo" />

      

      <div className='hidden md:flex items-center '>

          <div className='relative ml-4 hidden md:block'>
          <input
            type='text'
            placeholder='Buscar...'
            value={search}
            onChange={handleSearchChange}
            className='bg-black pl-10 pr-2 py-2 text-gray100 border border-collapse rounded'
            onKeyPress={(event) => event.key === 'Enter' && submitSearch()}
          />
          <AiOutlineSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500' size={20} />
          </div>

        <ul className='flex'>
          <li className='p-4'> <a  href="/">Home</a></li>
          <li className='p-4'> <a  href="/about">About</a></li>
          <li className='p-4'> <a  href="/contact">Contact</a></li>
          <li className='p-4'> <a  href="/login"> Login</a></li>
        </ul>

<button className='mr-4 border border-white text-white flex items-center py-2 mx-auto px-4 rounded-full p-4 '>
        <BsFillCartFill size={20} className='mr-2' onClick={()=>setCartVsible (true)}/> Cart
      </button>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      

        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600'> <a  href="/">Home</a></li>
          <li className='p-4 border-b border-gray-600'> <a  href="/about">About</a></li>
          <li className='p-4 border-b border-gray-600'> <a  href="/contact">Contact</a></li>
          <li className='p-4 border-b border-gray-600'> <a  href="/login"> Login</a></li>
        </ul>

        <div className='relative ml-4'>
          <input
            type='text'
            placeholder='Buscar...'
            value={search}
            onChange={handleSearchChange}
            className='bg-black pl-10 pr-2 py-2 text-gray100 border border-collapse rounded'
            onKeyPress={(event) => event.key === 'Enter' && submitSearch()}
          />
          <AiOutlineSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500' size={20} />
        </div>


        <button 
      className='mt-4 absolute left-2 border border-white text-white flex items-center py-2 px-4 rounded-full p-4'
      onClick={handleCartClick}
    >
      <BsFillCartFill size={20} className='mr-2' /> Cart
    </button>


      </div>
   
  
    </div>
  )
}

  export default Navbar
