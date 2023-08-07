'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { MdEdit, MdDelete, MdRemoveRedEye } from "react-icons/md"
import { ModalAdd, ModalDelete, ModalDetail, ModalEdit } from './components'
import { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchTraining } from '@/store/api/training'

const TrainingPage = () => {

  const [showModalDetail, setShowModalDetail] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalAdd, setShowModalAdd] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [selected, setselected] = useState<any>()
  const { dataTraining } = useSelector(
    (state: RootState) => state.training
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const data = dispatch(fetchTraining());
    return () => {
      data
    };
  }, []);

  return (
    <section className="text-black">
      <div className="flex justify-between mb-4 align-center">
        <div className="text-lg font-semibold">
          List Data Pelatihan
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
                <th>Pelatihan</th>
                <th>Pengajar</th>
                <th colSpan={3}>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataTraining?.content?.length ? dataTraining.content.map((value: any, index: number) => (
                <tr key={index} className="hover:bg-primary-color hover:text-white">
                  <th>{index+1}</th>
                  <td>{value.tema}</td>
                  <td>{value.pengajar}</td>
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
                      <MdEdit />
                    </div>
                  </td>
                  <td>
                    <MdDelete className="hover:cursor-pointer" onClick={() => {
                      setShowModalDelete(true)
                      setselected(value)
                    }} />
                  </td>
                </tr>
              )) : (<tr>
                <td colSpan={7} align="center">
                  Data Pelatihan Tidak Ada
                </td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>

      <ModalDetail
        idTraining={selected?.id}
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
        idTraining={selected?.id}
        trainingName={selected?.tema}
        isShowModal={showModalDelete}
        closeModal={() => setShowModalDelete(false)}
      />

    </section>
  )
}

export default TrainingPage