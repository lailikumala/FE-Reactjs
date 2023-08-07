'use client'

import { useEffect, useState } from "react"
import { MdEdit, MdDelete, MdRemoveRedEye } from "react-icons/md"
import { ModalAdd, ModalDelete, ModalDetail, ModalEdit } from "./components"
import { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployee } from "../../../store/api/employee";

const EmployeePage = () => {

  const [showModalDetail, setShowModalDetail] = useState(false)
  const [showModalAdd, setShowModalAdd] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [selected, setselected] = useState<any>()
  const { dataEmployee } = useSelector(
    (state: RootState) => state.employee
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const data =  dispatch(fetchEmployee());
    return () => {
      data
    };
  }, []);

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
            {dataEmployee?.content?.length ? dataEmployee.content.map((value: any,  index: number) => (
              <tr key={index} className="hover:bg-primary-color hover:text-white">
                <th>{index+1}</th>
                <td>{value.name}</td>
                <td>{value.karyawanDetail.nik}</td>
                <td>{value.address}</td>
                <td>{value.status}</td>
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
                  <div className="hover:cursor-pointer" onClick={() => {
                    setShowModalDelete(true)
                    setselected(value)
                  }}>
                    <MdDelete />
                  </div>
                </td>
              </tr>
            )): (<tr>
              <td colSpan={7} align="center">
                Data Karyawan Tidak Ada
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
      </div>

      <ModalDetail
        idEmployee={selected?.id}
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
        idEmployee={selected?.id}
        nameEmployee={selected?.name}
        isShowModal={showModalDelete}
        closeModal={() => setShowModalDelete(false)}
      />

    </section>
  )
}

export default EmployeePage