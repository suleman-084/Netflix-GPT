import {React, useEffect} from 'react'
import { logo } from "../Utils/constants"
import {  signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";



const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)

  
  const handleSignOut= () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    
    });
  }
  useEffect(() => {
    //use the state change api from firebase
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL}))
        navigate("/browse")


      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });


  }, [])
  return (
    <div className="absolute w-full z-10  px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className=" w-40" src={logo} alt="logo"/>
     {user && <div className="flex p-4">
        <img className="h-12 w-12" alt="userIcon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className="font-bold text-white p-2">(Sign out)</button>

      </div>}
    </div>
  )
}

export default Header
