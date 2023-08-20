'use client'

import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import { ButtinPrimary } from '../../components/Button';
import { Alert } from '../../components/Alert';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userConfirmPassword } from '@/store/api/auth';

type TConfirmPassword = {
  newPassword: string,
  confirmNewPassword: string,
}

const ConfirmPasswordPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, formState: { errors } } = useForm<TConfirmPassword>();
  const { postConfirmPassword, postForgot } = useSelector(
    (state: RootState) => state.auth
  );
  const OTP = postForgot?.data.replace(/[^-.0-9]/g,'')

  const formSubmit: SubmitHandler<TConfirmPassword> = (data) => {
    dispatch(userConfirmPassword({
      field: {
        email: email,
        newPassword: data.newPassword,
        confirmNewPassword: data.confirmNewPassword,
        otp: OTP
      }
    }))
  }

  useEffect(() => {
    if (postConfirmPassword?.status === '200') {
      Alert.successAlert({ text: postConfirmPassword?.data })
      router.push("/login")
    } else {
      Alert.errorAlert({ text: postConfirmPassword?.message })
    }
  }, [postConfirmPassword])

  return (
    <>
      <div className="block mb-8 text-2xl font-semibold text-center text-white">
        Konfirmasi Password
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Password Baru</label>
        <input type="password" {...register("newPassword", { required: "password baru tidak boleh kosong" })}
          className='w-full text-black rounded' id='newPassword' />
        {errors.newPassword && <p className="text-sm text-red-500">{errors.newPassword?.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-white">Konfirmasi Password</label>
        <input type="password" {...register("confirmNewPassword", { required: "konfirmasi password tidak boleh kosong" })}
          className='w-full text-black rounded' id='confirmNewPassword' />
        {errors.confirmNewPassword && <p className="text-sm text-red-500">{errors.confirmNewPassword?.message}</p>}
      </div>
      <ButtinPrimary title="Reset" onClick={handleSubmit(formSubmit)} />
      <ToastContainer />
    </>
  )
}

export default ConfirmPasswordPage