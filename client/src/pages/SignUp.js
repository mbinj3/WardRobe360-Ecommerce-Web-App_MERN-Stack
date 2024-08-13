import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import FormImage from '../images/image11.webp';

function SignUp() {

  const imageContainerStyle = {
    backgroundImage: `url(${FormImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch(`${window.location.origin}/user/signup`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      navigate('/login')
    }catch(err){
      console.error(err);
    }finally{
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    }
  }
    
  return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 py-20" >
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
              <div className="w-ful lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={imageContainerStyle}>
                
                <div className='mt-32'>
                  <p className="text-white text-3xl font-bold font-serif">
                    Choose the Fashion, that Fits with Your Style
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 py-16 px-12">
            <h2  className="text-3xl mb-4 text-[#b91c1c] font-semibold">Signup</h2>
            <p className="mb-4">
              Signup with your credentials to make secure and hassle free shopping
            </p>
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <input type="text"
                name="firstName"
                placeholder="First Name" 
                typeof={formData.firstName}
                onChange={handleInputChange}
                className="border border-gray-400 py-2 px-2" required/>
                <input type="text"
                name="lastName"placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange} className="border border-gray-400 py-2 px-2" required/>
              </div>
              <div className="mt-5">
                <input type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange} className="border border-gray-400 py-2 px-2 w-full" required/>
              </div>
              <div className="mt-5">
                <input type="password"name="password"placeholder="Password"
                value={formData.password}
                onChange={handleInputChange} className="border border-gray-400 py-2 px-2 w-full" required/>
              </div>
              <div className="mt-5">
                <input type="password"name="confirmPassword" placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange} 
                className="border border-gray-400 py-2 px-2 w-full" required/>
              </div>
              
              <div className="mt-7">
                <button className="w-full bg-[#b91c1c] py-2.5 text-center text-white text-lg font-semibold rounded-md">Signup</button>
              </div>
            </form>
          </div>
          </div>
          </div>
      </div>
  )
}

export default SignUp