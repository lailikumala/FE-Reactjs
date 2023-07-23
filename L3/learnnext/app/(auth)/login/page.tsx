'use client'

import React, { useCallback, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { ButtinPrimary } from '../../components/Button';
import { Alert } from '../../components/Alert';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginPage = () => {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleChange = useCallback((setState: (value: string) => void) => (event: any) => {
    setState(event.target.value)
  }, [])

  const loginUser = () => {
    if (username == "" || password == "") {
      return Alert.warningAlert({ text: "username atau password tidak boleh kosong" })
    } else {
      router.push('/employee')
    }
  }

  return (
    <>
      <div className="block mb-8 text-2xl font-semibold text-center text-white">
        Login
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Username</label>
        <input type="text" value={username} onChange={handleChange(setUsername)}
          className='w-full text-black rounded' id='username' />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Password</label>
        <input type="password" value={password} onChange={handleChange(setPassword)}
          className='w-full text-black rounded' id='password' />
      </div>
      <div className='justify-end mt-2 mb-1 text-right text-white underline'>
        <Link href={"/forgotpassword"}>Lupa Password ?</Link>
      </div>
      <ButtinPrimary title="Login" onClick={loginUser} />
      <div className="mt-2 text-center text-white">Belum punya akun ? <Link className='underline' href={"/register"} >Register</Link></div>
      <ToastContainer />
    </>
  )
}

export default LoginPage