'use client'

import { AppDispatch, RootState } from "@/store";
import { fetchRekeningById } from "@/store/api/rekening";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type ParamsDetail = {
  id: String,
  isShowModal: boolean,
  closeModal: () => void
}

const ModalDetail = ({id, isShowModal, closeModal} : ParamsDetail) => {

  const { dataRekeningId } = useSelector(
    (state: RootState) => state.rekening
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {

    if(id) {
      dispatch(fetchRekeningById({id: id}));
    }
    
  }, [id]);
  
  return (
    <section className={isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            
            <div className="w-11/12 p-5 overflow-scroll text-black bg-white rounded md:w-5/12 min-h-8/12 md:p-7">
              <div className="text-2xl font-semibold mb-7">Detail Rekening</div>
              <div className="mb-5">
                <div className="grid grid-cols-3 gap-4 text-start">
                  <div>
                    <ul className="list-none">
                      <li>Nama Pegawai</li>
                      <li>Nama Bank</li>
                      <li>No. Rekening</li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <ul className="list-none">
                      <li>: {dataRekeningId?.nama}</li>
                      <li>: {dataRekeningId?.jenis}</li>
                      <li>: {dataRekeningId?.norek}</li>
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