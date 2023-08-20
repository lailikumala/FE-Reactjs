'use client'

import React from 'react'
import { ToastContainer } from 'react-toastify';
import { ButtinPrimary } from '../../components/Button';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userForgot } from '@/store/api/auth';

type TForgot = {
  email: string;
}

const ForgotPasswordPage = () => {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, formState: { errors } } = useForm<TForgot>();
  
  const formSubmit: SubmitHandler<TForgot> = async (data) => {
    await dispatch(userForgot({field: {
      email: data.email, 
      }
    }))
    router.push(`/confirmpassword?email=${data.email}`)
  }

  return (
    <>
      <div className="block mb-8 text-2xl font-semibold text-center text-white">
        Reset Password
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Email</label>
        <input type="text" {...register("email", {required: "email tidak boleh kosong"})}
          className='w-full text-black rounded' id='email' />
        {errors.email && <p className="text-sm text-red-500">{errors.email?.message}</p>}
      </div>
      <ButtinPrimary title="Reset" onClick={handleSubmit(formSubmit)} />
      <ToastContainer />
    </>
  )
}

export default ForgotPasswordPage