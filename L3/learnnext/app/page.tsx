'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store"


const DefaultPage = () => {
  const router = useRouter()
  const { postLogin } = useSelector((state: RootState) => state.auth);
  const token = postLogin?.data?.access_token
  
  useEffect(() => {
    if(token) {
      router.push("/employee")
    } else {
      router.push("/login")
    }
  })
}

export default DefaultPage
