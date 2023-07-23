'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const DefaultPage = () => {
  const router = useRouter()
  useEffect(() => {
    const isLoggedIn = false
    if(isLoggedIn) {
      router.push("/employee")
    } else {
      router.push("/login")
    }
  })
}

export default DefaultPage
