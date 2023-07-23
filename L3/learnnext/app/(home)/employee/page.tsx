'use client'

import { useState } from "react"
import { MdEdit, MdDelete, MdRemoveRedEye } from "react-icons/md"
import { ModalAdd, ModalDelete, ModalDetail, ModalEdit } from "./components"

const EmployeePage = () => {

  const [showModalDetail, setShowModalDetail] = useState(false)
  const [showModalAdd, setShowModalAdd] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  return (
    <section className="text-black">
      <div className="flex justify-between mb-4 align-center">
        <div className="text-lg font-semibold">
          List Data Pegawai
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
              <th>Alamat</th>
              <th>Status</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-primary-color hover:text-white">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>124239</td>
              <td>Jakarta</td>
              <td>Active</td>
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
                <div className="hover:cursor-pointer" onClick={() => setShowModalDelete(true)}>
                  <MdDelete />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>

      <ModalDetail
        idEmployee="122"
        isShowModal={showModalDetail}
        closeModal={() => setShowModalDetail(false)}
      />

      <ModalAdd
        isShowModal={showModalAdd}
        closeModal={() => setShowModalAdd(false)}
      />

      <ModalEdit
        idEmployee="123"
        isShowModal={showModalEdit}
        closeModal={() => setShowModalEdit(false)}
      />

      <ModalDelete
        idEmployee="123"
        nameEmployee="Ganderton"
        isShowModal={showModalDelete}
        closeModal={() => setShowModalDelete(false)}
      />

    </section>
  )
}

export default EmployeePage