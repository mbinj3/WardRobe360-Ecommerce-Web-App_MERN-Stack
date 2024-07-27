import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addCounterContext } from '../Context/Context';


function Cart() {

  const { cart, removeFromCart } = useContext(addCounterContext);
  
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    cart.forEach(item => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  const productIncrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
  };

  const productDecrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(prevQuantities[productId] - 1, 1),
    }));
  };

  const calculateTotalPrice = (productId, price) => {
    return (quantities[productId] * price).toFixed(2);
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * quantities[item.id], 0).toFixed(2);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="h-auto py-28 bg-gray-100 pt-20">
      <p className="mb-10 text-center text-3xl font-bold text-[#b91c1c]">Cart Items</p>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart.map((cartItem) => (
            <div key={cartItem.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img src={cartItem.thumbnail} alt="product" className="w-full rounded-lg sm:w-40" />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <p className="text-xl font-semibold text-black">{cartItem.title}</p>
                  <p className="mt-1 text-xs text-gray-700">Size: 8.5</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span
                      className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 hover:bg-[#b91c1c]"
                      onClick={() => productDecrement(cartItem.id)}
                    >
                      -
                    </span>
                    <span className="h-8 w-8 border bg-white flex items-center justify-center">{quantities[cartItem.id]}</span>
                    <span
                      className="cursor-pointer rounded-r bg-gray-100 py-1 px-3.5 hover:bg-[#b91c1c]"
                      onClick={() => productIncrement(cartItem.id)}
                    >
                      +
                    </span>
                  </div>
                  <div className="flex items-center justify-between space-x-4">
                    <p className="text-black text-lg font-semibold">${calculateTotalPrice(cartItem.id, cartItem.price)}</p>
                    <svg
                      onClick={() => handleRemoveFromCart(cartItem.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer duration-150 hover:text-[#b91c1c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${calculateSubtotal()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-black text-xl font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-black text-xl font-bold">${(parseFloat(calculateSubtotal()) + 4.99).toFixed(2)}</p>
            </div>
          </div>
          <Link to='/checkout'>
          <button className="mt-6 w-full rounded-md bg-[#b91c1c] py-2 text-white text-lg font-semibold" >Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
