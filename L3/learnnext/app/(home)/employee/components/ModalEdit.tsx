'use client'

import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import { fetchEmployee, fetchEmployeeById, updateEmployee } from "@/store/api/employee";
import { AddFormEmployee, ParamsEdit, validation } from "@/utilities";
import { SubmitHandler, useForm } from "react-hook-form";

const ModalEdit = ({ id, isShowModal, closeModal }: ParamsEdit) => {
  const { dataEmployeeId } = useSelector(
    (state: RootState) => state.employee
  );
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<AddFormEmployee>();

  useEffect(() => {
    if (dataEmployeeId) {
      setValue("name", dataEmployeeId?.name)
      setValue("address", dataEmployeeId?.address)
      setValue("dob", dataEmployeeId?.dob?.slice(0, 10))
      setValue("nik", dataEmployeeId?.karyawanDetail?.nik)
      setValue("npwp", dataEmployeeId?.karyawanDetail?.npwp)
      setValue("status", dataEmployeeId?.status)
    }
  }, [dataEmployeeId, setValue])

  const formSubmit: SubmitHandler<AddFormEmployee> = async (data) => {
    const dataEMployee = {
      id: id,
      name: data.name,
      dob: data.dob,
      status: data.status,
      address: data.address,
      karyawanDetail: {
        nik: data.nik,
        npwp: data.npwp
      }
    }
    await dispatch(updateEmployee({ field: dataEMployee }))
    await dispatch(fetchEmployeeById({ id: id }))
    await dispatch(fetchEmployee())
    closeModal()
  };

  return (
    <section className={isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">

          <div className="w-11/12 p-5 overflow-scroll text-black bg-white rounded md:w-5/12 h-8/12 md:p-7">
            <div className="text-2xl font-semibold mb-7">Edit Data Pegawai</div>
            <form className="mb-5 text-start">
              <div className="mb-4">
                <label className="block mb-1">Nama</label>
                <input type="text" className="w-full text-black rounded" id="name" {...register("name", validation.addEmployee.name)} />
                {errors.name && <p className="text-sm text-red-500">{errors.name?.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-1">Alamat</label>
                <input type="text" className="w-full text-black rounded" id="address" {...register("address", validation.addEmployee.address)} />
                {errors.address && <p className="text-sm text-red-500">{errors.address?.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-1">Tanggal Lahir</label>
                <input type="date" className="w-full text-black rounded" id="bod" {...register("dob", validation.addEmployee.dob)} />
                {errors.dob && <p className="text-sm text-red-500">{errors.dob?.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-1">NIK</label>
                <input type="number" className="w-full text-black rounded" id="nik" {...register("nik", validation.addEmployee.nik)} />
                {errors.nik && <p className="text-sm text-red-500">{errors.nik?.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-1">NPWP</label>
                <input type="text" className="w-full text-black rounded" id="npwp" {...register("npwp", validation.addEmployee.npwp)} />
                {errors.npwp && <p className="text-sm text-red-500">{errors.npwp?.message}</p>}
              </div>
              <div className="mb-4 align-center">
                <label className="block mb-1">Status</label>
                <div className="flex items-center">
                  <input type="radio" className="me-1" id="status-active" value="active" {...register("status", validation.addEmployee.status)} />
                  <label htmlFor="status-active" className="me-3">Aktif</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" className="me-1" id="status-nonactive" value="nonactive" {...register("status", validation.addEmployee.status)} />
                  <label htmlFor="status-nonactive">Nonaktif</label>
                </div>
                {errors.status && <p className="text-sm text-red-500">{errors.status?.message}</p>}
              </div>
            </form>
            <div className="flex justify-end">
              <div className="btn btn-sm me-2" onClick={closeModal}>Batal</div>
              <div className="text-white btn btn-sm bg-primary-color" onClick={handleSubmit(formSubmit)}>Edit</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ModalEdit