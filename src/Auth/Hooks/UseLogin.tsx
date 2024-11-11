import toast from "react-hot-toast";
import { ApiError, credencial } from "../Types/Type";
import { useMutation } from "react-query";
import { LogIn } from "../Services/Auth";
import { useLocation } from "react-router";

const UseLogin = () => {
  const secondaryURL = import.meta.env.VITE_SECONDARY_URL

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const redirectUrl =
    params.get("redirect") || secondaryURL;
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
      window.location.href = redirectUrl;
    },
  });
};

export default UseLogin;
