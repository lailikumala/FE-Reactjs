export const validation = {
  addEmployee: {
    name: { 
      required: "nama karyawan tidak boleh kosong", 
      minLength: {value: 4, message: "minimal 4 karakter"}, 
      maxLength: {value: 100, message: "maksimal 100 karakter"} 
    },
    address: {
      required: "alamat tidak boleh kosong",
    },
    dob: {
      required: "tgl lahir tidak boleh kosong",
    },
    nik: {
      required: "nik tidak boleh kosong",
      maxLength: {value: 16, message: "nik maksimal 16 digit"}
    },
    npwp: {
      required: "npwp tidak boleh kosong",
    },
    status: {
      required: "pilih salah satu status",
    },
  },
    addTraining: {
      tema: { 
        required: "nama pelatih tidak boleh kosong", 
      },
      pengajar: { 
        required: "nama pengajar tidak boleh kosong", 
        minLength: {value: 4, message: "minimal 4 karakter"}, 
        maxLength: {value: 100, message: "maksimal 100 karakter"} 
      }
    }
}