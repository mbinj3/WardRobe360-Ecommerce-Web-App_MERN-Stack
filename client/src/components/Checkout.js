import React, {useState,useEffect, useContext } from 'react';
import { addCounterContext } from '../Context/Context';

function Checkout() {
  const { cart } = useContext(addCounterContext);

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    cart.forEach(item => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * quantities[item.id], 0).toFixed(2);
  };

  return (
    <div className='h-auto py-28 bg-gray-100 pt-20'>
      <p className="mb-10 text-center text-3xl font-bold text-[#b91c1c]">Checkout</p>
    <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
      
    <div className="mt-10 bg-white px-10 pt-10 pb-2 rounded-lg lg:mt-0">
        <p className="text-xl font-medium">Payment Details</p>
        <p className="text-gray-400">Complete your order by providing your payment details.</p>
        <div className="">
          <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
          <div className="relative">
            <input type="text" id="email" name="email" className="w-full border border-gray-400 px-4 py-3 pl-11 text-sm shadow-sm" placeholder="youremail@gmail.com" required/>
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
          </div>
          <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
          <div className="relative">
            <input type="text" id="card-holder" name="card-holder" className="w-full border border-gray-400 px-4 py-3 pl-11 text-sm shadow-sm" placeholder="Your full name" />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
            </div>
          </div>
          <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">Card Details</label>
          <div className="flex">
            <div className="relative w-7/12 flex-shrink-0">
              <input type="text" id="card-no" name="card-no" className="w-full border border-gray-400 px-2 py-3 pl-11 text-sm shadow-sm" placeholder="xxxx-xxxx-xxxx-xxxx" />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                </svg>
              </div>
            </div>
            <input type="text" name="credit-expiry" className="w-full border border-gray-400 px-2 py-3 text-sm shadow-sm" placeholder="MM/YY" />
            <input type="text" name="credit-cvc" className="w-1/6 flex-shrink-0 border border-gray-400 px-2 py-3 text-sm shadow-sm" placeholder="CVC" />
          </div>
          <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
          <div className="flex flex-col sm:flex-row">
            <div className="relative flex-shrink-0 sm:w-7/12">
              <input type="text" id="billing-address" name="billing-address" className="w-full  border border-gray-400 px-4 py-3 pl-11 text-sm shadow-sm" placeholder="Street Address" />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <img className="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
              </div>
            </div>
            <input type="text" name="billing-state" className="w-full border border-gray-400 px-4 py-3 text-sm" placeholder="State"/>
            <input type="text" name="billing-zip" className="flex-shrink-0 border border-gray-400 px-4 py-3 text-sm shadow-sm sm:w-1/6" placeholder="ZIP" />
          </div>

          
          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${calculateSubtotal()}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-black text-xl font-bold">Total</p>
            <p className="text-black text-xl font-bold">${(parseFloat(calculateSubtotal()) + 4.99).toFixed(2)}</p>
          </div>
        </div>
        <button className="mt-4 mb-8 w-full rounded-md bg-[#b91c1c] py-2.5 text-white text-lg font-semibold px-6  ">Place Order</button>
      </div>    
      <div className="px-4 pt-8">
        {cart.map((checkoutItem) => (
          <div className="mt-8 space-y-3 rounded-lg shadow-md bg-white px-2 py-4 sm:px-6" key={checkoutItem.id}>
          <div className="flex flex-col rounded-lg bg-white sm:flex-row">
            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={checkoutItem.thumbnail} alt="" />
            <div className="flex w-full flex-col px-4 py-4">
              <p className="text-xl font-semibold text-black">{checkoutItem.title}</p>
              
              <p className="mt-auto text-black text-lg font-semibold">${checkoutItem.price}</p>
            </div>
          </div>
        </div>
        ))}    
      </div>
    </div>
    </div>
  );
}

export default Checkout;
