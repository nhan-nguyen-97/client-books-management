import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastError(message) {
  return toast.error(`${message}`);
}

export function ToastSuccess(message) {
  return toast.success(`${message}`);
}
