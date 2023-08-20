'use client'
import { AppDispatch, RootState } from "@/store"
import { deleteEmployee, fetchEmployee } from "@/store/api/employee"
import { CgDanger } from "react-icons/cg"
import { useDispatch, useSelector } from "react-redux"

type ParamsDelete = {
  idEmployee: any,
  nameEmployee: String,
  isShowModal: boolean,
  closeModal: () => void
}

const ModalDelete = ({isShowModal, idEmployee, nameEmployee, closeModal} :ParamsDelete) => {
  const dispatch = useDispatch<AppDispatch>();
  const { postLogin } = useSelector((state: RootState) => state.auth);
  const token = postLogin?.data?.access_token

  const deleteData = async () => {
    await dispatch(deleteEmployee({id: idEmployee, token: token}))
    await dispatch(fetchEmployee({token: token}))
    closeModal()
  }
  
  return (
    <section className={isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            
            <div className="w-11/12 p-5 overflow-scroll text-black bg-white rounded md:w-5/12 min-h-8/12 md:p-7">
              <div className="text-2xl font-semibold mb-7">Hapus Data Pegawai</div>
              <div className="mb-5">
                <div className='flex justify-center mb-4 text-4xl text-red-500'>
                  <CgDanger />
                </div>
                <div>
                  Anda yakin ingin <span className="font-semibold text-red-500">menghapus</span> data pegawai <span className="font-semibold">{ nameEmployee }</span> ?
                </div>
              </div>
              <div className="flex justify-center">
                <div className="btn btn-sm me-2" onClick={closeModal}>Batal</div>
                <div className="text-white btn btn-sm btn-error" onClick={deleteData}>Ya, Hapus</div>
              </div>
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default ModalDelete
