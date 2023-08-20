'use client'

import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import { fetchEmployeeById } from "@/store/api/employee";

type ParamsDetail = {
  idEmployee: any,
  isShowModal: boolean,
  closeModal: () => void
}

const ModalDetail = ({idEmployee, isShowModal, closeModal} : ParamsDetail) => {

  const { dataEmployeeId } = useSelector((state: RootState) => state.employee);
  const { postLogin } = useSelector((state: RootState) => state.auth);
  const token = postLogin?.data?.access_token

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {

    if(idEmployee) {
      dispatch(fetchEmployeeById({id: idEmployee, token: token}));
    }
    
  }, [idEmployee, token]);
  
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
                      <li>Tgl Lahir</li>
                      <li>Alamat</li>
                      <li>Status</li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <ul className="list-none">
                      <li>: {dataEmployeeId?.name}</li>
                      <li>: {dataEmployeeId?.karyawanDetail?.nik}</li>
                      <li>: {dataEmployeeId?.karyawanDetail?.npwp}</li>
                      <li>: {dataEmployeeId?.dob?.slice(0,10)}</li>
                      <li>: {dataEmployeeId?.address}</li>
                      <li>: {dataEmployeeId?.status}</li>
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