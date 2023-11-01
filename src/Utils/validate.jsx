import React from 'react'

export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)

    const isPasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)

    if(!isEmailValid) return "email id is not valid"

    if(!isPasswordValid) return "password  is not valid"

    return null;


 
}


