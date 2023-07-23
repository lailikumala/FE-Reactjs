'use client'

import React from 'react'
import { useState } from 'react'
import { MdEdit, MdDelete, MdRemoveRedEye } from "react-icons/md"
import { ModalAdd, ModalDelete, ModalDetail, ModalEdit } from './components'

const TrainingPage = () => {

  const [showModalDetail, setShowModalDetail] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalAdd, setShowModalAdd] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

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
            <tr className="hover:bg-primary-color hover:text-white">
              <th>1</th>
              <td>Javascript</td>
              <td>Masbro</td>
              <td>
                <div className="hover:cursor-pointer" onClick={() => setShowModalDetail(true)}>
                  <MdRemoveRedEye />
                </div>
              </td>
              <td>
                <div className="hover:cursor-pointer" onClick={() => setShowModalEdit(true)}>
                  <MdEdit/>
                </div>
              </td>
              <td>
                <MdDelete className="hover:cursor-pointer" onClick={() => setShowModalDelete(true)}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>

      <ModalDetail 
        idTraining="1"
        isShowModal={showModalDetail}
        closeModal={() => setShowModalDetail(false)}
      />

      <ModalAdd 
        isShowModal={showModalAdd} 
        closeModal={() => setShowModalAdd(false)} 
      />

      <ModalEdit 
        idTraining="1"
        isShowModal={showModalEdit}
        closeModal={() => setShowModalEdit(false)}
      />

      <ModalDelete
        idTraining="1"
        trainingName={"Javascript"}
        isShowModal={showModalDelete}
        closeModal={() => setShowModalDelete(false)}
      />

    </section>
  )
}

export default TrainingPage