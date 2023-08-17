'use client'

import React, {useEffect, useState} from 'react'
import { MdEdit, MdDelete, MdRemoveRedEye } from "react-icons/md"
import { ModalAdd, ModalDelete, ModalDetail, ModalEdit } from './components'
import { AppDispatch, RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClass } from '@/store/api/class'

const ClassPage = () => {

  const [showModalDetail, setShowModalDetail] = useState(false)
  const [showModalAdd, setShowModalAdd] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [selected, setselected] = useState<any>()
  const { dataClass } = useSelector(
    (state: RootState) => state.classTraining
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const data = dispatch(fetchClass());
    return () => {
      data
    };
  }, []);

  return (
    <section className="text-black">
      <div className="flex justify-between mb-4 align-center">
        <div className="text-lg font-semibold">
          List Data Pegawai Pelatihan
        </div>
        <div className="text-sm text-white btn btn-sm bg-primary-color" onClick={() => setShowModalAdd(true)}>
          Tambah Data
        </div>
      </div>
      <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>NIK</th>
              <th>Pelatihan</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataClass?.content?.length ? dataClass?.content.map((value: any, index: number) => (
              <tr key={index} className="hover:bg-primary-color hover:text-white">
                <th>{index+1}</th>
                <td>{value?.karyawan?.name}</td>
                <td>{value?.karyawan?.karyawanDetail?.nik}</td>
                <td>{value?.training?.tema}</td>
                <td>
                  <div className="hover:cursor-pointer" onClick={() => {
                    setShowModalDetail(true)
                    setselected(value)
                  }}>
                    <MdRemoveRedEye />
                  </div>
                </td>
                <td>
                  <div className="hover:cursor-pointer" onClick={() => {
                    setShowModalEdit(true)
                    setselected(value)
                  }}>
                    <MdEdit/>
                  </div>
                </td>
                <td>
                  <MdDelete className="hover:cursor-pointer" onClick={() => {
                    setShowModalDelete(true)
                    setselected(value)
                  }}/>
                </td>
              </tr>
            )): (<tr>
              <td colSpan={7} align="center">
                Data Kelas Tidak Ada
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
      </div>

      <ModalDetail
        idClass={selected?.id}
        isShowModal={showModalDetail}
        closeModal={() => setShowModalDetail(false)}
      />

      <ModalAdd
        isShowModal={showModalAdd}
        closeModal={() => setShowModalAdd(false)}
      />

      <ModalEdit
        id={selected?.id}
        isShowModal={showModalEdit}
        closeModal={() => setShowModalEdit(false)}
      />

      <ModalDelete
        idClass={selected?.id}
        isShowModal={showModalDelete}
        closeModal={() => setShowModalDelete(false)}
      />
      
    </section>
  )
}

export default ClassPage