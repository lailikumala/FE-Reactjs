'use client'

import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import { fetchTrainingById } from "@/store/api/training";

type ParamsDetail = {
  idTraining: string;
  isShowModal: boolean;
  closeModal: () => void;
}

const ModalDetail = ({ idTraining, isShowModal, closeModal } : ParamsDetail ) => {

  const { dataTrainingId } = useSelector((state: RootState) => state.training);
  const { postLogin } = useSelector((state: RootState) => state.auth);
  const token = postLogin?.data?.access_token
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if(idTraining) {
      dispatch(fetchTrainingById({id: idTraining, token: token}));
    }
    
  }, [idTraining, token]);

  return (
    <section className={isShowModal ? "ralative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">

          <div className="w-11/12 p-5 overflow-scroll text-black bg-white rounded md:w-5/12 h-8/12 md:p-7">
            <div className="text-2xl font-semibold mb-7">Detail Pelatihan</div>
            <div className="mb-5">
              <div className="grid grid-cols-3 gap-4 text-start">
                <div>
                  <ul className="list-none">
                    <li>Nama</li>
                    <li>Pengajar</li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <ul className="list-none">
                    <li>: {dataTrainingId?.tema}</li>
                    <li>: {dataTrainingId?.pengajar}</li>
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