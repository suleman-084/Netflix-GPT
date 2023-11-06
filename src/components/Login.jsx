import React, { useState } from 'react'
import Header from './Header'
import { background_img, PROFILE_PICTURE } from '../Utils/constants'
import { checkValidData } from '../Utils/validate'
import { useRef } from 'react'
import { auth } from "../Utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";

import { useDispatch } from 'react-redux'
import { addUser } from '../Utils/userSlice'



const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const nameRef = useRef(null)
  const handleButtonClick = () => {
    //validateform
    // console.log("clicked");
    // console.log("email", email.current.value);

    const message = checkValidData(emailRef?.current?.value, passwordRef?.current?.value, nameRef?.current?.value)
    // console.log("msg", message);
    setErrorMessage(message)
    if (message) return;
    if (!isSignInForm) {
      // console.log("is", isSignInForm);
      //sign up logic
      createUserWithEmailAndPassword(auth, emailRef?.current?.value, passwordRef?.current?.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef?.current?.value, photoURL: PROFILE_PICTURE,
          }).then(() => {
            const { uid, email, displayName,photoURL } = auth.currentUser;

            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL})
            )

           
          }).catch((error) => {
            setErrorMessage(error.message)
            
          });
          // console.log("user", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
          // ..
        });
    } else {
    

      //sign in logic
      // console.log("is", isSignInForm);
      signInWithEmailAndPassword(auth, emailRef?.current?.value, passwordRef?.current?.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log("user", user);


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });

    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(prev => !prev)
  // console.log("is sigsn", isSignInForm);
    // setIsSignInForm(!isSignInForm) : Bad approach

  }
  return (
    <div ><Header />
      <div className="absolute ">
        <img src={background_img} alt="Background-image" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80" >
        <h1 className="font-bold text-3xl py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={nameRef} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-[#333333] rounded-lg" />}
        <input ref={emailRef} type="email" placeholder="Email Address" className="p-4 my-4 w-full bg-[#333333] rounded-lg" />
        <input ref={passwordRef} type="Password" placeholder="Password" className="p-4 my-4  w-full bg-[#333333] rounded-lg" />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6  bg-red-700 text-white rounded-lg w-full " onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already registered!! Sign in now"}</p>
      </form>
    </div>

  )
}

export default Login