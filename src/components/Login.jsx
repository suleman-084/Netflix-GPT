import React from 'react'
import Header from './Header'
import { background_img } from '../Utils/constants'

const Login = () => {
  return (
    <div className=" "><Header />
      <div className="">
        <img className="  " src={background_img} alt="Background-image" />
      </div>
    </div>

  )
}

export default Login