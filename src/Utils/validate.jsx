import React from 'react'

export const checkValidData = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)

    const isPasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)

    const isNameValid = 
    /^[A-Za-z\s]+$/i.test(name)
   
    if(!isEmailValid) return "email id is not valid"

    if(!isPasswordValid) return "password  is not valid"

    if(!isNameValid) return "Enter a valid name"
    // if(isNameValid === null)  return  "Enter a valid names"

    return null;


 
}


