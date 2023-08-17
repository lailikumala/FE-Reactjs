
export type AddFormEmployee = {
  name: string;
  address: string;
  dob: string;
  nik: string;
  npwp: string;
  status: string;
}

export type AddFormTraining = {
  tema: string;
  pengajar: string;
}

export type AddFormClass = {
  karyawan: string,
  training: string,
  training_date: string,
  training_time: string
}

export type AddFormRekening = {
  karyawan: any,
  jenis: string,
  norek: string,
}

export type FormRekening = {
  karyawan: string,
  jenis: string,
  norek: string,
}

export type ParamsAdd = {
  isShowModal: boolean;
  closeModal: () => void;
}

export type ParamsEdit = {
  id: string;
  isShowModal: boolean;
  closeModal: () => void;
}