'use client'

type ParamsEdit = {
  idClass: string,
  isShowModal: boolean,
  closeModal: () => void
}

const ModalEdit = ({idClass, isShowModal, closeModal} : ParamsEdit) => {
  
  return (
    <section className={isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            
            <div className="w-11/12 p-5 overflow-scroll text-black bg-white rounded md:w-5/12 h-8/12 md:p-7">
              <div className="text-2xl font-semibold mb-7">Edit Data Kelas</div>
              <form className="mb-5 text-start">
                <div className="mb-4">
                  <select className="w-full bg-white select select-bordered">
                    <option>Pilih Pegawai:</option>
                    <option>Brodi</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div className="mb-4">
                  <select className="w-full bg-white select select-bordered">
                    <option>Pilih Pelatihan:</option>
                    <option>Javascript</option>
                    <option>Java Spring Boot</option>
                  </select>
                </div>
              </form>
              <div className="flex justify-end">
                <div className="btn btn-sm me-2" onClick={closeModal}>Batal</div>
                <div className="text-white btn btn-sm bg-primary-color" onClick={closeModal}>Edit</div>
              </div>
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default ModalEdit