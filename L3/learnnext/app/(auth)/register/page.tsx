'use client'

import React, { useCallback, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { ButtinPrimary } from '../../components/Button';
import { Alert } from '../../components/Alert';
import Link from 'next/link';

const RegisterPage = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleChange = useCallback((setState: (value: string) => void) => (event: any) => {
    setState(event.target.value)
  }, [])

  const registerUser = () => {
    if (email == "" || username == "" || password == "") {
      return Alert.warningAlert({ text: "email username atau password tidak boleh kosong" })
    } else if(email && username && password) {
      return Alert.successAlert({ text: "akun anda berhasil terdaftar !" })
    }
  }

  return (
    <>
      <div className="block mb-8 text-2xl font-semibold text-center text-white">
        Register
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Email</label>
        <input type="text" value={email} onChange={handleChange(setEmail)}
          className='w-full text-black rounded' id='email' />
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
      <ButtinPrimary title="Register" onClick={registerUser} />
      <div className="mt-2 text-center text-white">Sudah punya akun ? <Link className='underline' href={"/login"} >Login</Link></div>
      <ToastContainer />
    </>
  )
}

export default RegisterPage