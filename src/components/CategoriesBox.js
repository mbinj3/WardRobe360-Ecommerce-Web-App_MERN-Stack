import React from 'react';
import { Link } from 'react-router-dom';
import CatImage1 from '../images/image7.jpeg';
import CatImage2 from '../images/image8.jpeg';
import CatImage3 from '../images/image9.jpeg';
import CatImage4 from '../images/image10.jpeg';


let catImages = [
  { "id":1,
    "path": "/categories/men",
    "img": CatImage1,
    "name": "Men"
  },
  { "id":2,
    "path": "/categories/women",
    "img": CatImage2,
    "name": "Women"
  },
  { "id":3,
    "path": "/categories/children",
    "img": CatImage3,
    "name": "Children"
  }, 
  { "id":4,
    "path": "/categories/accessories",
    "img": CatImage4,
    "name": "Accessories"
  },
];

function CategoriesBox() {

  return (
    <div className=' w-full h-auto py-28 bg-gray-100 flex items-center justify-center flex-col max-md:py-16'>
      <p className='text-center text-2xl px-3.5 py-0.5 border-2 border-black text-[#b91c1c] rounded-full font-semibold  tracking-wide'>Categories</p>

    <div className='w-full flex items-center justify-center gap-20 pt-20 max-xl:gap-10 max-lg:flex-wrap max-lg:gap-12'>
      
      {catImages.map((category)=>
      <Link to={category.path}> 
        <div className='w-52 h-52 rounded-2xl relative group overflow-hidden cursor-pointer shadow-2xl' key={category.id}>
         
          <img src={category.img} className='w-52 h-52 bg-cover group-hover:opacity-75 transition-opacity duration-300' alt='categories'/>          
        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300'></div>
        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <p className='text-2xl text-white  font-bold'>{category.name}</p>   
        </div>
        </div>
        </Link>
      )}  
    </div>
    </div>
  );
}

export default CategoriesBox;
