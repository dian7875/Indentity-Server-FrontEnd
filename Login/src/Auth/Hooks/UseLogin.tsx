import toast from "react-hot-toast";
import { ApiError } from "../Types/Type";
import { useMutation } from "react-query";
import { LogIn } from "../Services/Auth";
import { useNavigate } from "react-router";

//La mutacion permitira manejar Casos de exito o error desde el hook
// asi como el estado de carga desde el componente si se usara alguna otra forma que no sea toast
// la finalidad es dividir las tareas asi como mantener lo mas limpio posible el componente
const UseLogin = () => {
  const navi = useNavigate();
  return useMutation({
    mutationFn: LogIn,
    onSuccess: () => {
      toast.success("Inicio de sesion exitoso");
      navi("Dashboard");
    },
    onError: (error: ApiError) => {
      toast.error("Error al iniciar sesion: " + error.message);
    },
  });
};

export default UseLogin;