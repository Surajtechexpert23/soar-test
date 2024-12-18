import { toast } from "react-toastify";

const useToast = () => {
  const showToast = (promise) => {
    toast.promise(promise, {
      pending: "Loading...",
      success: "Data Saved!",
      error: "An error occurred!",
    });
  };

  return { showToast };
};

export default useToast;
