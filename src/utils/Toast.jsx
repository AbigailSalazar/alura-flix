import { toast } from "react-toastify";

const toastSettings = {
  autoClose: 3000,
  closeOnClick: true,
  pauseOnHover: false,
};

const showSuccessToast = (message) => {
  toast.success(message, toastSettings);
};

const showErrorToast = (message) => {
  toast.error(message, toastSettings);
};

export { showSuccessToast, showErrorToast };
