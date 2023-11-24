import { React, useEffect } from 'react'
import { SUPPORTED_LANGUAGES, logo } from "../Utils/constants"
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from '../Utils/gptSearchslice';
import { changeLang } from '../Utils/configSlice';



const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store => store.gpt.toggleGptSearchView)


  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      navigate("/error")

    });
  }
  useEffect(() => {
    //use the state change api from firebase

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")


      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });

    //unsubscribe when component unmount
    return () => unsubscribe()


  }, [])

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())

  }
  const handlelanguageChange = (e) => {
    dispatch(changeLang(e.target.value))

  }
  return (
    <div className="absolute w-full z-10  px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className=" w-40" src={logo} alt="logo" />
      {user && <div className="flex p-4">
        {showGptSearch && (<select onChange={handlelanguageChange} className='p-2 m-2 bg-gray-900 text-white '>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>)}
        <button onClick={handleGptSearchClick} className="bg-purple-800 px-4 py-2  mx-4 rounded-lg text-white font-semibold">{showGptSearch ? "HomePage" : "Gpt Search" }</button>
        <img className="h-12 w-12" alt="userIcon" src={user?.photoURL} />
        <button onClick={handleSignOut} className="font-bold text-white p-2">(Sign out)</button>

      </div>}
    </div>
  )
}

export default Header
