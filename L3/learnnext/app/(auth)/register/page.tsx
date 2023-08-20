'use client'

import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import { ButtinPrimary } from '../../components/Button';
import { Alert } from '../../components/Alert';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userRegister } from '@/store/api/auth';

type TFormRegister = {
  email: string;
  name: string;
  phone_number: string;
  domicile: string;
  gender: string;
  password: string;
}

const RegisterPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { postRegister } = useSelector(
    (state: RootState) => state.auth
  );
  const { register, handleSubmit, formState: { errors } } = useForm<TFormRegister>();

  const formSubmit: SubmitHandler<TFormRegister> = (data) => {
    dispatch(userRegister({field: {
      email: data.email, 
      name: data.name,
      phone_number: data.phone_number,
      domicile: data.domicile,
      gender: data.gender,
      password: data.password,
    }
  }))
  }

  useEffect(() => {
    if(postRegister?.status === '200') {
      Alert.successAlert({text: postRegister?.message})
    } else {
      Alert.errorAlert({text: postRegister?.message})
    }
  },[postRegister])

  return (
    <>
      <div className="block mb-8 text-2xl font-semibold text-center text-white">
        Register
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Email</label>
        <input type="text" {...register("email", {required: "email tidak boleh kosong"})}
          className='w-full text-black rounded' id='email' />
        {errors.email && <p className="text-sm text-red-500">{errors.email?.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Nama</label>
        <input type="text" {...register("name", {required: "name tidak boleh kosong"})}
          className='w-full text-black rounded' id='username' />
        {errors.name && <p className="text-sm text-red-500">{errors.name?.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">No Telepon</label>
        <input type="text" {...register("phone_number", {required: "no tlp tidak boleh kosong"})}
          className='w-full text-black rounded' id='phone_number' />
        {errors.phone_number && <p className="text-sm text-red-500">{errors.phone_number?.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Domisili</label>
        <input type="text" {...register("domicile", {required: "domisili tidak boleh kosong"})}
          className='w-full text-black rounded' id='domicile' />
        {errors.domicile && <p className="text-sm text-red-500">{errors.domicile?.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Jenis Kelamin</label>
        <input type="text" {...register("gender", {required: "jenis kelamin tidak boleh kosong"})}
          className='w-full text-black rounded' id='gender' />
        {errors.gender && <p className="text-sm text-red-500">{errors.gender?.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Password</label>
        <input type="password" {...register("password", {required: "password tidak boleh kosong"})}
          className='w-full text-black rounded' id='password' />
        {errors.password && <p className="text-sm text-red-500">{errors.password?.message}</p>}
      </div>
      <ButtinPrimary title="Register" onClick={handleSubmit(formSubmit)} />
      <div className="mt-2 text-center text-white">Sudah punya akun ? <Link className='underline' href={"/login"} >Login</Link></div>
      <ToastContainer />
    </>
  )
}

export default RegisterPage