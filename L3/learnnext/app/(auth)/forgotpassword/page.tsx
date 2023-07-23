'use client'

import React, { useCallback, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { ButtinPrimary } from '../../components/Button';
import { Alert } from '../../components/Alert';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("")

  const handleChange = useCallback((setState: (value: string) => void) => (event: any) => {
    setState(event.target.value)
  }, [])

  const forgotPass = () => {
    if (email == "") {
      return Alert.warningAlert({ text: "email tidak boleh kosong" })
    } else  {
      return Alert.successAlert({ text: "reset password dikirim ke email anda" })
    }
  }

  return (
    <>
      <div className="block mb-8 text-2xl font-semibold text-center text-white">
        Reset Password
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Email</label>
        <input type="text" value={email} onChange={handleChange(setEmail)}
          className='w-full text-black rounded' id='email' />
      </div>
      <ButtinPrimary title="Reset" onClick={forgotPass} />
      <ToastContainer />
    </>
  )
}

export default ForgotPasswordPage