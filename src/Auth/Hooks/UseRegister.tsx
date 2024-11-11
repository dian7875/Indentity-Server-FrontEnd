import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { register } from "../Services/Auth";
import { ApiError, User } from "../Types/Type";
import { useNavigate } from "react-router";

const UseRegister = () => {
  const navi = useNavigate();

  return useMutation({
    mutationFn: (data: User) =>
      toast.promise(register(data), {
        loading: "Registrando...",
        success: <span>Registro exitoso.</span>,
        error: (error: ApiError) => (
          <span>Error al registrarse: {error.message}</span>
        ),
      }),
    onSuccess() {
      navi("/");
    },
  });
};
export default UseRegister;
