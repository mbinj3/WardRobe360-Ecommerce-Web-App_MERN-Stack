import React,{useContext} from 'react';
import { addCounterContext } from '../Context/Context';


function ShowsCategories() {

    const {addToCart, shoesProducts} = useContext(addCounterContext)

  return (
    <div className='w-full h-auto flex items-center justify-center flex-col bg-gray-100 pt-20'>
      <p className='text-center text-2xl px-3.5 py-0.5 border-2 border-black text-[#b91c1c] rounded-full font-semibold  tracking-wide'>Men Shoes</p>
      <div className='w-full h-auto py-20 px-20'>
      <div className='w-full h-auto flex flex-wrap items-center justify-center gap-7 '>
      {shoesProducts.map((product)=>(
        <div className='w-64 h-[344px] bg-gray-500 flex flex-col items-center justify-start rounded-2xl m-auto' key={product.id}>
        <img src={product.thumbnail} className='bg-black w-64 h-60 rounded-2xl cursor-pointer'alt='product-images'/>
        <div className='flex  pt-4'>
        <p className='text-white text-lg font-medium w-52 pl-7'>{product.title.slice(0,15)}</p>
        <p className='text-white text-lg pr-7 font-medium'>${product.price}</p>
        </div>
        <button className='w-[235px] h-10 mt-2 bg-[#b91c1c] text-xl rounded-lg font-semibold cursor-pointer' onClick={() => addToCart(product.id, 'shoes')}>Add to Cart</button>
        </div>
       ))} 
      </div> 
      </div> 
    </div>
  )
}

export default ShowsCategories