'use client'

import React from 'react'
import { ToastContainer } from 'react-toastify';
import { ButtinPrimary } from '../../components/Button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userLogin } from '@/store/api/auth';

type TLogin = {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TLogin>();

  const formSubmit: SubmitHandler<TLogin> = (data) => {
    dispatch(userLogin({field: {email: data.email, password: data.password}}))
  }

  return (
    <>
      <div className="block mb-8 text-2xl font-semibold text-center text-white">
        Login
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Email</label>
        <input type="text" {...register("email", {required: "email tidak boleh kosong"})}
          className='w-full text-black rounded' id='email' />
        {errors.email && <p className="text-sm text-red-500">{errors.email?.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Password</label>
        <input type="password" {...register("password", {required: "password tidak boleh kosong"})}
          className='w-full text-black rounded' id='password' />
        {errors.password && <p className="text-sm text-red-500">{errors.password?.message}</p>}
      </div>
      <div className='justify-end mt-2 mb-1 text-right text-white underline'>
        <Link href={"/forgotpassword"}>Lupa Password ?</Link>
      </div>
      <ButtinPrimary title="Login" onClick={handleSubmit(formSubmit)} />
      <div className="mt-2 text-center text-white">Belum punya akun ? <Link className='underline' href={"/register"} >Register</Link></div>
      <ToastContainer />
    </>
  )
}

export default LoginPage