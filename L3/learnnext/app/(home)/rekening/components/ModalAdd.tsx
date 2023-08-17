'use client'

import { AppDispatch, RootState } from "@/store";
import { AddFormRekening, validation } from "@/utilities";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchEmployee } from "@/store/api/employee";
import { addRekening, fetchRekening } from "@/store/api/rekening";

type ParamsAdd = {
  isShowModal: boolean;
  closeModal: () => void;
}

const bank = [
  { label: "BCA", value: "BCA" },
  { label: "Mandiri", value: "Mandiri" },
  { label: "BNI", value: "BNI" },
  { label: "BRI", value: "BRI" },
  { label: "Permata", value: "Permata" }
]

const ModalAdd = ({ isShowModal, closeModal }: ParamsAdd) => {
  const { dataEmployee } = useSelector(
    (state: RootState) => state.employee
  );
  const { register, handleSubmit, reset, formState: { errors } } = useForm<AddFormRekening>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEmployee())
  }, [])

  const formSubmit: SubmitHandler<AddFormRekening> = async (data) => {
    const parseData = JSON.parse(data.karyawan)
    const dataRekening = {
      nama: parseData.name,
      jenis: data.jenis,
      norek: data.norek,
      alamat: parseData.address,
      karyawan: {
        id: parseData.id
      }
    }
    await dispatch(addRekening({ field: dataRekening }))
    await dispatch(fetchRekening())
    await reset()
    closeModal()
  }

  return (
    <section className={isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">

          <div className="w-11/12 p-5 overflow-scroll text-black bg-white rounded md:w-5/12 h-8/12 md:p-7">
            <div className="text-2xl font-semibold mb-7">Tambah Data Rekening</div>
            <form className="mb-5 text-start">
              <div className="mb-4">
                <select className="w-full bg-white select select-bordered" {...register("karyawan", { required: true })}>
                  <option value={""}>Pilih Pegawai:</option>
                  {dataEmployee?.content?.map((value: any, index: number) => {
                    let _selected = { id: value.id, name: value.name, address: value.address }
                    return (
                      <option key={index} value={JSON.stringify(_selected)}>{value?.name}</option>
                    )
                  })}
                </select>
                {errors.karyawan && <p className="text-sm text-red-500">nama karyawan tidak boleh kosong</p>}
              </div>
              <div className="mb-4">
                <select className="w-full bg-white select select-bordered" {...register("jenis", validation.addRekening.jenis)}>
                  <option value={''}>Pilih Bank:</option>
                  {bank.map((option: any, index: number) => (
                    <option key={index} value={option.value}>{option.label}</option>
                  ))}
                </select>
                {errors.jenis && <p className="text-sm text-red-500">{errors.jenis?.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-1">No. Rekening</label>
                <input type="number" className="w-full text-black rounded" id="bod" {...register("norek", validation.addRekening.norek)} />
                {errors.norek && <p className="text-sm text-red-500">{errors.norek?.message}</p>}
              </div>
            </form>
            <div className="flex justify-end">
              <div className="btn btn-sm me-2" onClick={closeModal}>Batal</div>
              <div className="text-white btn btn-sm bg-primary-color" onClick={handleSubmit(formSubmit)}>Tambah</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ModalAdd