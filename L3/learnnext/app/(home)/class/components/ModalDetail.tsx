'use client'

type ParamsDetail = {
  idClass: String,
  isShowModal: boolean,
  closeModal: () => void
}

const ModalDetail = ({idClass, isShowModal, closeModal} : ParamsDetail) => {
  
  return (
    <section className={isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            
            <div className="w-11/12 p-5 overflow-scroll text-black bg-white rounded md:w-5/12 min-h-8/12 md:p-7">
              <div className="text-2xl font-semibold mb-7">Detail Kelas</div>
              <div className="mb-5">
                <div className="grid grid-cols-3 gap-4 text-start">
                  <div>
                    <ul className="list-none">
                      <li>Nama Pegawai</li>
                      <li>NIK Pegawai</li>
                      <li>Nama Pelatihan</li>
                      <li>Nama Pengajar</li>
                      <li>Tanggal Kelas</li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <ul className="list-none">
                      <li>: Visko</li>
                      <li>: 16327</li>
                      <li>: Javascript</li>
                      <li>: Brodi</li>
                      <li>: 20 Juli 2023</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="btn btn-sm" onClick={closeModal}>Tutup</div>
              </div>
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default ModalDetail