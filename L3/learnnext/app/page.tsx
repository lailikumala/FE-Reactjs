'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import LoginPage from "./(auth)/login/page"
import HomeLayout from "./(home)/layout"
import EmployeePage from "./(home)/employee/page"

const DefaultPage = () => {
  const router = useRouter()
      const isLoggedIn = false
  
//   useEffect(() => {
//     if(isLoggedIn) {
//       router.push("/employee")
//     } else {
//       router.push("/login")
//     }
//   })
// }
return (
  isLoggedIn ? (<LoginPage/>) : (<EmployeePage/>)
)
}

export default DefaultPage
