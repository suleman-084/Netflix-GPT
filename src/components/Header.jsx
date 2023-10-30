import React from 'react'
import { logo } from "../Utils/constants"

const Header = () => {
  return (
    <div className="absolute z-10  px-8 py-2 bg-gradient-to-b from-black">
      <img className=" w-40" src={logo} alt="logo"/>
    </div>
  )
}

export default Header
