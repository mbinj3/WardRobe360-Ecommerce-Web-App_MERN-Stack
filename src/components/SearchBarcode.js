import React from 'react'

function SearchBarcode() {
  return (
    <div className='h-9 w-80 bg-white border border-black rounded-2xl pl-2 flex items-center gap-20 max-md:w-48 max-md:gap-1 max-sm:hidden'>
        <input type="text" placeholder='Search for products...' className='h-8 ml-1 focus:outline-none max-md:w-36'
        />
        <button>
        {/* <IoSearchSharp className='text-2xl'
        /> */}
        </button> 
      </div>
  )
}

export default SearchBarcode