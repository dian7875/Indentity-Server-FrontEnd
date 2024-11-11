import toast from "react-hot-toast";
import { ApiError, credencial } from "../Types/Type";
import { useMutation } from "react-query";
import { LogIn } from "../Services/Auth";

const UseLogin = () => {
  return useMutation({
    mutationFn: (data: credencial) =>
      toast.promise(LogIn(data), {
        loading: "Iniciando sesión...",
        success: <span>Inicio de sesión exitoso.</span>,
        error: (error: ApiError) => (
          <span>Error al iniciar sesión: {error.message}</span>
        ),
      }),
    onSuccess() {
     
    },
  });
};

export default UseLogin;
