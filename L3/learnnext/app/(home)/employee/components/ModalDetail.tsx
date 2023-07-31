'use client'

type ParamsDetail = {
  idEmployee: String,
  isShowModal: boolean,
  closeModal: () => void
}

const ModalDetail = ({idEmployee, isShowModal, closeModal} : ParamsDetail) => {
  
  return (
    <section className={isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            {/* modal start */}
            <div className="w-11/12 p-5 overflow-scroll text-black bg-white rounded md:w-5/12 min-h-8/12 md:p-7">
              <div className="text-2xl font-semibold mb-7">Detail Pegawai</div>
              <div className="mb-5">
                <div className="grid grid-cols-3 gap-4 text-start">
                  <div>
                    <ul className="list-none">
                      <li>Nama</li>
                      <li>NIK</li>
                      <li>NPWP</li>
                      <li>Tanggal Lahir</li>
                      <li>Alamat</li>
                      <li>Status</li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <ul className="list-none">
                      <li>: Ganderton</li>
                      <li>: 124239</li>
                      <li>: 12918738</li>
                      <li>: 25 Feb 2019</li>
                      <li>: Jakarta</li>
                      <li>: Aktif</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="btn btn-sm" onClick={closeModal}>Tutup</div>
              </div>
            </div>
            {/* modal end */}
          </div>
        </div>
    </section>
  )
}

export default ModalDetail