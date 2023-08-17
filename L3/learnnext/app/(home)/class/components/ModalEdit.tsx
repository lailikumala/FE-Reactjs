'use client'

import { AppDispatch, RootState } from "@/store";
import { fetchClass, fetchClassById, updateClass } from "@/store/api/class";
import { fetchEmployee } from "@/store/api/employee";
import { fetchTraining } from "@/store/api/training";
import { AddFormClass, ParamsEdit, validation } from "@/utilities";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const ModalEdit = ({ id, isShowModal, closeModal }: ParamsEdit) => {
  const { dataClassId } = useSelector(
    (state: RootState) => state.classTraining
  );
  const { dataTraining } = useSelector(
    (state: RootState) => state.training
  );
  const { dataEmployee } = useSelector(
    (state: RootState) => state.employee
  );
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<AddFormClass>();

  useEffect(() => {
    dispatch(fetchEmployee())
    dispatch(fetchTraining())
  }, [])

  useEffect(() => {
    if (dataClassId) {
      setValue("karyawan", dataClassId?.karyawan?.id)
      setValue("training", dataClassId?.training?.id)
      setValue("training_date", dataClassId?.training_date?.slice(0, 10))
      setValue("training_time", dataClassId?.training_date?.slice(11, 16))
    }
  }, [dataClassId, setValue])

  const formSubmit: SubmitHandler<AddFormClass> = async (data) => {
    const dataClass = {
      id: id,
      karyawan: {
        id: data.karyawan
      },
      training: {
        id: data.training
      },
      training_date: data.training_date.concat(" ", data.training_time + ":00")
    }

    await dispatch(updateClass({ field: dataClass }))
    await dispatch(fetchClassById({ id: id }))
    await dispatch(fetchClass())
    closeModal()
  };

  return (
    <section className={isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">

          <div className="w-11/12 p-5 overflow-scroll text-black bg-white rounded md:w-5/12 h-8/12 md:p-7">
            <div className="text-2xl font-semibold mb-7">Edit Data Kelas</div>
            <form className="mb-5 text-start">
              <div className="mb-4">
                <select className="w-full bg-white select select-bordered" {...register("karyawan", validation.addClass.karyawan)}>
                  <option value={""}>Pilih Pegawai:</option>
                  {dataEmployee?.content?.map((value: any, index: number) => (
                    <option key={index} value={value?.id}>{value?.name}</option>
                  ))}
                </select>
                {errors.karyawan && <p className="text-sm text-red-500">{errors.karyawan?.message}</p>}
              </div>
              <div className="mb-4">
                <select className="w-full bg-white select select-bordered" {...register("training", validation.addClass.training)}>
                  <option value={""}>Pilih Pelatihan:</option>
                  {dataTraining?.content?.map((value: any, index: number) => (
                    <option key={index} value={value?.id}>{value?.tema}</option>
                  ))}
                </select>
                {errors.training && <p className="text-sm text-red-500">{errors.training?.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-1">Tanggal Pelatihan</label>
                <input type="date" className="w-full text-black rounded" id="training_date" {...register("training_date", validation.addClass.training_date)} />
                {errors.training_date && <p className="text-sm text-red-500">{errors.training_date?.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-1">Jam Pelatihan</label>
                <input type="time" className="w-full text-black rounded" id="appt" {...register("training_time", validation.addClass.training_time)} />
                {errors.training_time && <p className="text-sm text-red-500">{errors.training_time?.message}</p>}
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