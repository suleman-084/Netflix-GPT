import React, { useState } from 'react'
import Header from './Header'
import { background_img } from '../Utils/constants'
import { checkValidData } from '../Utils/validate'
import { useRef } from 'react'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage]= useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const handleButtonClick = () => {
    //validateform
    // checkValidData(email,password)
    console.log("email", email.current.value);
    // console.log("pw", password.current.value);
    // console.log("pw", name.current.value);
    const message = checkValidData(email?.current?.value, password?.current?.value, name?.current?.value)
    // console.log("msg", message);
    setErrorMessage(message)

  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)

  }
  return (
    <div ><Header />
      <div className="absolute ">
        <img src={background_img} alt="Background-image" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80" >
        <h1 className="font-bold text-3xl py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-[#333333] rounded-lg" />}
        <input ref={email} type="email" placeholder="Email Address" className="p-4 my-4 w-full bg-[#333333] rounded-lg" />
        <input ref={password} type="Password" placeholder="Password" className="p-4 my-4  w-full bg-[#333333] rounded-lg" />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6  bg-red-700 text-white rounded-lg w-full " onClick={handleButtonClick}>Sign In</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already registered!! Sign in now"}</p>
      </form>
    </div>

  )
}

export default Login