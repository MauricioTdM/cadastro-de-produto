import { toast } from 'react-toastify';

export const RegisterSuccess = (Msg) => {
    
    toast.success(Msg, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
}