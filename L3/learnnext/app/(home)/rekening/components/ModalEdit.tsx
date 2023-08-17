'use client'

import { AppDispatch, RootState } from "@/store";
import { fetchRekening, fetchRekeningById, updateRekening } from "@/store/api/rekening";
import { AddFormRekening, FormRekening, ParamsEdit, validation } from "@/utilities"
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const bank = [
  { label: "BCA", value: "BCA" },
  { label: "Mandiri", value: "Mandiri" },
  { label: "BNI", value: "BNI" },
  { label: "BRI", value: "BRI" },
  { label: "Permata", value: "Permata" }
]

const ModalEdit = ({ id, isShowModal, closeModal }: ParamsEdit) => {
  const { dataRekeningId } = useSelector(
    (state: RootState) => state.rekening
  );
  
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<FormRekening>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (dataRekeningId) {
      setValue("jenis", dataRekeningId?.jenis)
      setValue("norek", dataRekeningId?.norek)
    }
  }, [dataRekeningId, setValue])
  
  const formSubmit: SubmitHandler<AddFormRekening> = async (data) => {
    const dataRekening = {
      id: id,
      nama: dataRekeningId?.nama,
      jenis: data.jenis,
      norek: data.norek,
      alamat: dataRekeningId?.karyawan?.address,
      karyawan: {
          id: dataRekeningId?.karyawan?.id
      }
    }

    await dispatch(updateRekening({ field: dataRekening }))
    await dispatch(fetchRekeningById({ id: id }))
    await dispatch(fetchRekening())
    closeModal()
  };

  return (
    <section className={isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">

          <div className="w-11/12 p-5 overflow-scroll text-black bg-white rounded md:w-5/12 h-8/12 md:p-7">
            <div className="text-2xl font-semibold mb-7">Edit Data Rekening</div>
            <form className="mb-5 text-start">
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
              <div className="text-white btn btn-sm bg-primary-color" onClick={handleSubmit(formSubmit)}>Edit</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ModalEdit