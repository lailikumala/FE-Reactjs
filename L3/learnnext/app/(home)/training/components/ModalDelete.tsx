'use client'
import { CgDanger } from "react-icons/cg"
import { AppDispatch } from "@/store"
import { deleteTraining, fetchTraining } from "@/store/api/training"
import { useDispatch } from "react-redux"

type ParamsDelete = {
  idTraining: string;
  trainingName: string;
  isShowModal: boolean;
  closeModal: () => void;
}



const ModalDelete = ({idTraining, trainingName, isShowModal, closeModal} : ParamsDelete) => {

  const dispatch = useDispatch<AppDispatch>();

  const deleteData = async () => {
    await dispatch(deleteTraining({id: idTraining}))
    await dispatch(fetchTraining())
    closeModal()
  }

  return (
    <section className={isShowModal ? "ralative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">

          <div className="w-11/12 p-5 overflow-scroll text-black bg-white rounded md:w-5/12 h-8/12 md:p-7">
            <div className="text-2xl font-semibold mb-7">Hapus Data Pelatihan</div>
            <form className="mb-5">
              <div className="flex justify-center mb-4 text-4xl text-red-500">
                <CgDanger/>
              </div>
              <div>
                Anda yakin ingin <span className="font-semibold text-red-500">menghapus</span> data pelatihan <span className="font-semibold">{trainingName}</span> ?
              </div>
            </form>
            <div className="flex justify-center">
              <div className="btn btn-sm me-2" onClick={closeModal}>Batal</div>
              <div className="text-white btn btn-sm btn-error" onClick={deleteData}>Hapus</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ModalDelete