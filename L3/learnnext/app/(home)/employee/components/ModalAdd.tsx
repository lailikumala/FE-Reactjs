'use client'

type ParamsAdd = {
  isShowModal: boolean,
  closeModal: () => void
}

const ModalAdd = ({isShowModal, closeModal} : ParamsAdd) => {
  
  return (
    <section className={isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            
            <div className="w-11/12 p-5 overflow-scroll text-black bg-white rounded md:w-5/12 h-8/12 md:p-7">
              <div className="text-2xl font-semibold mb-7">Tambah Data Pegawai</div>
              <form className="mb-5 text-start">
                <div className="mb-4">
                  <label className="block mb-1">Nama</label>
                  <input type="text" className="w-full text-black rounded" id="name"/>
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Alamat</label>
                  <input type="text" className="w-full text-black rounded" id="address"/>
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Tanggal Lahir</label>
                  <input type="date" className="w-full text-black rounded" id="bod"/>
                </div>
                <div className="mb-4">
                  <label className="block mb-1">NIK</label>
                  <input type="text" className="w-full text-black rounded" id="nik"/>
                </div>
                <div className="mb-4">
                  <label className="block mb-1">NPWP</label>
                  <input type="text" className="w-full text-black rounded" id="npwp"/>
                </div>
                <div className="mb-4 align-center">
                  <label className="block mb-1">Status</label>
                  <div className="flex items-center">
                    <input type="radio" className="me-1" id="status-active" name="status"/>
                    <label htmlFor="status-active" className="me-3">Aktif</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" className="me-1" id="status-nonactive" name="status"/>
                    <label htmlFor="status-nonactive">Nonaktif</label>
                  </div>
                </div>
              </form>
              <div className="flex justify-end">
                <div className="btn btn-sm me-2" onClick={closeModal}>Batal</div>
                <div className="text-white btn btn-sm bg-primary-color" onClick={closeModal}>Tambah</div>
              </div>
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default ModalAdd