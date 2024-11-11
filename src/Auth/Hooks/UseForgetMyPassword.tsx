import { useMutation } from "react-query";
import { forgetPassword } from "../Services/Auth";
import toast from "react-hot-toast";
import { ApiError, RecoveryForm } from "../Types/Type";

const UseForgetMyPassword = () => {
  return useMutation({
    mutationFn: (data: RecoveryForm) =>
      toast.promise(forgetPassword(data), {
        loading: "Solicitando...",
        success: (
          <span>Solicitud exitosa, Se enviaron mas detalles a su correo.</span>
        ),
        error: (error: ApiError) => (
          <span>Error en la solicitud: {error.message}</span>
        ),
      }),
  });
};

export default UseForgetMyPassword;
