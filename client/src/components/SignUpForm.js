import React from 'react';
import FormImage from '../images/image11.webp';

function SignUpForm() {

    
    const imageContainerStyle = {
      backgroundImage: `url(${FormImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    }
    
  return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 py-20" >
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={imageContainerStyle}>
                
                <div className='mt-32'>
                  <p className="text-white text-3xl font-bold font-serif">
                    Choose the Fashion, that Fits with Your Style
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 py-16 px-12">
            <h2  className="text-3xl mb-4 text-[#b91c1c] font-semibold">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only take a minute
            </p>
            <form action="#" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2"/>
                <input type="text" placeholder="Surname" className="border border-gray-400 py-1 px-2"/>
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              
              <div className="mt-7">
                <button className="w-full bg-[#b91c1c] py-3 text-center text-white text-lg font-semibold rounded-md">Register Now</button>
              </div>
            </form>
          </div>
          </div>
          </div>
      </div>
  )
}

export default SignUpForm