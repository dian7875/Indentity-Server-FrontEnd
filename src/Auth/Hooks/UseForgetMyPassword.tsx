import { useMutation } from "react-query";
import { forgetPassword } from "../Services/Auth";
import toast from "react-hot-toast";
import { ApiError, RecoveryForm } from "../Types/Type";

// No se uso on error ni on sucees de la mutacion por el tiempo de espera de esta solicitud
// si embargo por defecto la mutacion permitira su uso en el componente para hacer uso de funciones como
// Resert o alguna redireccion en caso de necesitarse

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
