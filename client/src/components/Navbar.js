import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import WardRobeLogo from '../images/WardRobe360.webp';
import { FaShoppingBag } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { addCounterContext } from '../Context/Context';

function Navbar() {
  const { count } = useContext(addCounterContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className='bg-[#b91c1c] h-[70px] w-full flex items-center justify-around gap-[400px] max-md:gap-60 max-lg:gap-10 max-sm:gap-5'>
        <div className='h-[268px] w-[268px]'>
          <Link to='/'>
            <img src={WardRobeLogo} alt="Wardrobe Logo" />
          </Link>  
        </div>
        <div className='flex items-center justify-center gap-4 hidden md:flex'>
          <Link to='/cart'>
            <button className='h-11 w-11 bg-white flex items-center justify-center rounded-full relative'>
              <div className='absolute h-4 w-4 top-0 right-0 mr-1 bg-white rounded-2xl flex items-center justify-center font-bold'>{count}</div>  
              <FaShoppingBag className='text-2xl text-black'/>
            </button>
          </Link>
          <Link to='/login'>
            <button className="relative inline-block px-5 py-2.5 font-bold text-[16.5px] tracking-wide transition-all duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] outline-none border-none cursor-pointer rounded-lg overflow-hidden bg-black text-black group">
              <span className="relative z-10 transition-colors duration-400 group-hover:text-white">Login</span>
              <div className="absolute inset-0 w-[123%] -left-[11%] h-full bg-white skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
            </button>
          </Link>
          <Link to='/signup'>
            <button className="relative inline-block px-5 py-2.5 font-bold text-[16.5px] tracking-wide transition-all duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] outline-none border-none cursor-pointer rounded-lg overflow-hidden bg-black text-black group">
              <span className="relative z-10 transition-colors duration-400 group-hover:text-white">Signup</span>
              <div className="absolute inset-0 w-[123%] -left-[11%] h-full bg-white skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
            </button>
          </Link>
        </div>
        <div className='md:hidden'>
          <button className='navIcon' onClick={handleNavigation}>
            {isNavOpen ? <IoClose className='text-3xl text-white' /> : <IoMenu className='text-3xl text-white' />}
          </button>  
        </div>
      </div>
      
      {isNavOpen && (
        <div id='mobileNav' className='flex h-60  w-full bg-black items-center justify-center flex-col gap-4 md:hidden'>
          <Link to='/cart'>
            <button className='h-11 w-11 bg-white flex items-center justify-center rounded-full relative'>
              <div className='absolute h-4 w-4 top-0 right-0 mr-1 bg-white rounded-2xl flex items-center justify-center font-bold'>{count}</div>  
              <FaShoppingBag className='text-2xl text-black'/>
            </button>
          </Link>
          <Link to='/login'>
            <button className="relative inline-block px-5 py-2.5 font-bold text-[16.5px] tracking-wide transition-all duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] outline-none border-none cursor-pointer rounded-lg overflow-hidden bg-black text-black group">
              <span className="relative z-10 transition-colors duration-400 group-hover:text-white">Login</span>
              <div className="absolute inset-0 w-[123%] -left-[11%] h-full bg-white skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
            </button>
          </Link>
          <Link to='/signup'>
            <button className="relative inline-block px-5 py-2.5 font-bold text-[16.5px] tracking-wide transition-all duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] outline-none border-none cursor-pointer rounded-lg overflow-hidden bg-black text-black group">
              <span className="relative z-10 transition-colors duration-400 group-hover:text-white">Signup</span>
              <div className="absolute inset-0 w-[123%] -left-[11%] h-full bg-white skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
