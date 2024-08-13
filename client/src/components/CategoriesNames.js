import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesNames() {

  let categoriesNames = [
    {
      "id": 1,
      "name": "Men",
      "path": "/categories/men"
    },
    {
      "id": 2,
      "name": "Women",
      "path": "/categories/men"
    },
    {
      "id": 3,
      "name": "Children",
      "path": "/categories/children"
    },
    {
      "id": 4,
      "name": "Bags",
      "path": "/categories/bags"
    },
    {
      "id": 5,
      "name": "Shoes",
      "path": "/categories/shoes"
    },
    {
      "id": 6,
      "name": "Accessories",
      "path": "/categories/accessories"
    },
  ]
  return (
    <div className='flex items-center justify-center bg-gray-100 max-sm:hidden'>
      <div className='bg-black h-12 w-auto flex items-center justify-center rounded-full my-8 px-6'>
        <ul className='flex items-center justify-center gap-20 max-xl:gap-16 max-lg:gap-12 max-md:gap-10'>
          { 
          categoriesNames.map((category) => (  
          <li className='text-xl text-white hover:text-[#b91c1c] hover:ease-linear duration-150' key={category.id}>
            <Link to={category.path}>{category.name}</Link>
          </li>
          ))
        }
        </ul>
      </div>
    </div>
  )
}

export default CategoriesNames