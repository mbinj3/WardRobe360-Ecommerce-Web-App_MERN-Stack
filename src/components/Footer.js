import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";




function Footer() {
  return (
    <div className='bg-slate-800 w-full flex flex-col'>
      <div className='w-full flex items-center justify-center  bg-slate-200 gap-32 max-xl:gap-14 max-lg:gap-2 max-sm:flex-col max-sm:text-center'>
        <div className='w-80 h-60 flex flex-col items-start justify-center max-lg:w-48 max-md:w-32 max-sm:text-center'>
          <p className='text-2xl text-[#b91c1c] font-bold '>Categories</p>
          <ul className='mt-3 text-xl font-semibold'>
            <li className='my-1 cursor-pointer'>Men</li>
            <li className='my-1 cursor-pointer'>WoMen</li>
            <li className='my-1 cursor-pointer'>Kids</li>
            <li className='my-1 cursor-pointer'>Shoes</li>
            <li className='my-1 cursor-pointer'>Accessories</li>
          </ul>  
        </div>
        <div className=' w-80 h-60 flex flex-col items-start justify-center max-lg:w-48 max-md:w-32 max-sm:text-center'>
          <p className='text-2xl text-[#b91c1c] font-bold '>Brands</p>
          <ul className='mt-3 text-xl font-semibold'>
            <li className='my-1 cursor-pointer'>Levi's</li>
            <li className='my-1 cursor-pointer'>Clarks</li>
            <li className='my-1 cursor-pointer'>Nike</li>
            <li className='my-1 cursor-pointer'>Adidas</li>
            <li className='my-1 cursor-pointer'>Puma</li>
            
          </ul>  
        </div>
        <div className='w-80 h-60 flex flex-col items-start justify-center max-sm:text-center'>
          <p className='text-2xl text-[#b91c1c] font-bold '>About WardRobe 360</p>
          <ul className='mt-3 text-xl font-semibold'>
            <li className='my-1 cursor-pointer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, fugit? Expedita corrupti incidunt ut molestiae ipsam ipsum illo minima sed!</li>
            
          </ul>  
        </div>
      </div>
      <div className='w-full h-10 bg-black flex items-center justify-center gap-56 max-2xl:gap-40 max-xl:gap-16 max-lg:gap-6 max-md:h-44 max-sm:h-72 max-sm:flex-col'>
        <div className='h-10 w-60 flex items-center justify-center gap-4 cursor-pointer'>
        <FaSquareFacebook className='text-3xl text-white'/>
        <FaSquareInstagram className='text-3xl text-white'/>
        <FaSquareWhatsapp className='text-3xl text-white'/>
        <FaTiktok className='text-2xl text-white'/>
        </div>
        <div className='h-10 w-96 flex items-center justify-center gap-4 cursor-pointer'>
        <FaCreditCard className='text-3xl text-white'/>
        <p className='text-white text-2xl'>Fast, Easy and Secure Payments</p>
        </div>
        <div className='h-10 w-72 flex items-center justify-center gap-4 cursor-pointer'>
        <IoChatbubble  className='text-2xl text-white'/>
        <p className='text-white text-2xl'>Chat with, AI Assistant</p>
        </div>
      </div>  
    </div>
  )
}

export default Footer