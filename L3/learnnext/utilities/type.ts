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

export type ParamsAdd = {
  isShowModal: boolean;
  closeModal: () => void;
}

export type ParamsEdit = {
  id: string;
  isShowModal: boolean;
  closeModal: () => void;
}