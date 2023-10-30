import React, { useState } from 'react'
import Header from './Header'
import { background_img } from '../Utils/constants'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)

  }
  return (
    <div ><Header />
      <div className="absolute ">
        <img src={background_img} alt="Background-image" />
      </div>
      <form className="absolute w-3/12  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80" >
        <h1 className="font-bold text-3xl py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-[#333333] rounded-lg" />}
        <input type="email" placeholder="Email Address" className="p-4 my-4 w-full bg-[#333333] rounded-lg" />
        <input type="Password" placeholder="Password" className="p-4 my-4  w-full bg-[#333333] rounded-lg" />
        <button className="p-4 my-6  bg-red-700 text-white rounded-lg w-full ">Sign In</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already registered!! Sign up now"}</p>
      </form>
    </div>

  )
}

export default Login