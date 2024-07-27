import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesNames() {
  return (
    <div className='flex items-center justify-center bg-gray-100 max-sm:hidden'>
      <div className='bg-black h-12 w-auto flex items-center justify-center rounded-full my-8 px-6'>

        <ul className='flex items-center justify-center gap-20 max-xl:gap-16 max-lg:gap-12 max-md:gap-10'>
          <li className='text-xl text-white hover:text-[#b91c1c]'>
            <Link to='/categories/men'>Men</Link>
          </li>
          <li className='text-xl text-white hover:text-[#b91c1c]'>
            <Link to='/categories/women'>Women</Link>
          </li>
          <li className='text-xl text-white hover:text-[#b91c1c]'>
            <Link to='/categories/children'>Children</Link>
          </li>
          <li className='text-xl text-white hover:text-[#b91c1c]'>
            <Link to='/categories/bags'>Bags</Link>
          </li>
          <li className='text-xl text-white hover:text-[#b91c1c]'>
            <Link to='/categories/shoes'>Shoes</Link>
          </li>
          <li className='text-xl text-white hover:text-[#b91c1c]'>
            <Link to='/categories/accessories'>Accessories</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CategoriesNames