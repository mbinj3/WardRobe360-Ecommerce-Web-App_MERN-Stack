import React,{useContext} from 'react';
import { addCounterContext } from '../Context/Context';


function ChildrenCategories() {

    const {addToCart, childrenProducts} = useContext(addCounterContext)

  return (
    <div className='w-full h-auto flex items-center justify-center flex-col bg-gray-100 pt-20'>
      <p className='text-center text-2xl px-3.5 py-0.5 border-2 border-black text-[#b91c1c] rounded-full font-semibold  tracking-wide'>Children Sports</p>
      <div className='w-full h-auto py-20 px-20'>
      <div className='w-full h-auto flex flex-wrap items-center justify-center gap-7 '>
      {childrenProducts.map((product)=>(
        <div className='w-64 h-[335px] bg-black rounded-2xl m-auto' key={product.id}>
            <img src={product.thumbnail} className='w-64 h-60 rounded-2xl cursor-pointer'alt='product-images'/>
            <div className='flex  pt-4'>
            <p className='text-white w-52 pl-3'>{product.title.slice(0,18)}</p>
            <p className='text-white pr-3'>${product.price}</p>
            </div>
            <button className='w-64 h-10 bg-[#b91c1c] text-xl font-semibold cursor-pointer' onClick={() => addToCart(product.id, 'children')}>Add to Cart</button>
        </div>
       ))} 
      </div> 
      </div> 
    </div>
  )
}

export default ChildrenCategories