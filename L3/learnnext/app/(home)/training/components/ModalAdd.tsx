'use client'
import { SubmitHandler, useForm } from "react-hook-form";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { addTraining, fetchTraining } from "@/store/api/training";
import { AddFormTraining, ParamsAdd, validation } from "@/utilities";

const ModalAdd = ({ isShowModal, closeModal }: ParamsAdd) => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<AddFormTraining>();
  const dispatch = useDispatch<AppDispatch>();
  const { postLogin } = useSelector((state: RootState) => state.auth);
  const token = postLogin?.data?.access_token

  const formSubmit: SubmitHandler<AddFormTraining> = async (data) => {
    const dataTraining =  {
      tema: data.tema,
      pengajar: data.pengajar
    }
    await dispatch(addTraining({field: dataTraining, token: token}))
    await dispatch(fetchTraining({token: token}))
    await reset()
    closeModal()
  };

  return (
    <section className={isShowModal ? "ralative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">

          <div className="w-11/12 p-5 overflow-scroll text-black bg-white rounded md:w-5/12 h-8/12 md:p-7">
            <div className="text-2xl font-semibold mb-7">Tambah Data Pelatihan</div>
            <form className="mb-5 text-start">
              <div className="mb-4">
                <label className="block mb-1">Nama Pelatih</label>
                <input type="text" id="name" className="w-full text-black rounded" {...register("tema", validation.addTraining.tema)} />
                {errors.tema && <p className="text-sm text-red-500">{errors.tema?.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-1">Pengajar</label>
                <input type="text" id="teacher" className="w-full text-black rounded" {...register("pengajar", validation.addTraining.pengajar)}/>
                {errors.pengajar && <p className="text-sm text-red-500">{errors.pengajar?.message}</p>}
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