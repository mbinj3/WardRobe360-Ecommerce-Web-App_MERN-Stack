import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import WardRobeLogo from '../images/WardRobe360.png'
import { FaShoppingBag } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { addCounterContext } from '../Context/Context';




function Navbar() {
  const { count } = useContext(addCounterContext);
  const [navIcon, setNavIcon] = useState('true');

  const handleNavigation = () => {
    let navIcon = document.getElementsByClassName('navIcon');
    let mobileNav = document.getElementById('mobile-nav');
    navIcon.onclick = mobileNav.classList.toggle('sm:hidden');
    navIcon.onclick = mobileNav.classList.toggle('md:hidden');
    setNavIcon('false'); 
  };
  
  return (
    <div>
      <div className='bg-[#b91c1c] h-[70px] w-full flex items-center justify-around gap-[400px] max-md:gap-60 max-lg:gap-10 max-sm:gap-5'>
        <div className='h-[268px] w-[268px]'>
        <Link to='/'>
          <img src={WardRobeLogo} alt="" />
        </Link>  
        </div>
        <div className='flex items-center justify-center gap-4 max-sm:hidden max-md:hidden'>
          <Link to='/cart'>
            <button className='h-10 w-12 relative'>
              <div className='absolute h-4 w-4 top-0 right-0 mr-1 bg-white rounded-2xl flex items-center justify-center font-bold'>{count}</div>  
              <FaShoppingBag className='text-3xl text-white'/>
            </button>
          </Link>
          <Link to='/signup&login'>
            <button type='button' className='h-10 w-20 bg-white rounded-md'>Log In</button>
          </Link>
          <Link to='/signup&login'>
            <button type='button' className='h-10 w-20 bg-white rounded-md'>Sign Up</button>
          </Link>
        </div>
        <div className='hidden max-md:inline-block'>
          <button className='navIcon' onClick={handleNavigation}>
            {navIcon === 'true' ? <IoMenu className='text-3xl text-white' /> : <IoClose className='text-3xl text-white' />}
          </button>  
        </div>
      </div>
      <div>
        <div id='mobile-nav' className='flex h-64 w-full bg-black items-center justify-center flex-col gap-4 max-sm:hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
          <Link to='/cart'>
            <button className='h-10 w-12 relative'>
              <div className='absolute h-4 w-4 top-0 right-0 mr-1 bg-white rounded-2xl flex items-center justify-center font-bold'>{count}</div>  
              <FaShoppingBag className='text-3xl text-white'/>
            </button>
          </Link>
          <Link to='/signup&login'>
            <button type='button' className='h-10 w-20 bg-white rounded-md'>Log In</button>
          </Link>
          <Link to='/signup&login'>
            <button type='button' className='h-10 w-20 bg-white rounded-md'>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
