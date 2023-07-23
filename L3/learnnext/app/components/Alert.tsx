import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

interface Params {
  text: string;
  delay?: number;
}

export const Alert = {
  successAlert : (params: Params) => {
    return toast.success(params.text, {
      position: "top-right",
      autoClose: params.delay || 5000
    })
  },
  errorAlert : (params: Params) => {
    return toast.error(params.text, {
      position: "top-right",
      autoClose: params.delay || 5000
    })
  },
  warningAlert : (params: Params) => {
    return toast.warn(params.text, {
      position: "top-right",
      autoClose: params.delay || 5000
    })
  },
}