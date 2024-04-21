"use client"

import React, { useEffect, useState } from 'react'
import {useRouter} from "next/navigation"

const AuthCheck = () => {
const router = useRouter()
const [userToken, setUserToken] = useState()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authorization") || null
      setUserToken(token)
    }
  })

console.log(userToken)

useEffect(() => {
    if(!userToken){
        router.replace("auth/sign-in")
    } else if (userToken) {
      router.replace("dashbaord")
    }
},[userToken])

  return null
}

export default AuthCheck