import { Button, Card, FloatingLabel } from "flowbite-react";
import UseLogin from "../Hooks/UseLogin";
import { useForm } from "react-hook-form";
import { credencial } from "../Types/Type";
import { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import RecoverPasswordModal from "./ForgetPasswordModal";

const Login = () => {
  const { mutate: logIn } = UseLogin();

  const { register, handleSubmit } = useForm<credencial>();

  const onSubmit = async (data: credencial) => {
    logIn(data, {
      onSuccess: () => {},
      onError: () => {},
    });
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <Card className="max-w-lg w-full">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Iniciar Sesión
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            ¿No posees una cuenta?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Regístrate aquí.
            </a>
          </p>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <FloatingLabel
                variant="outlined"
                label="Correo"
                type="email"
                required
                {...register("username")}
              />
            </div>

            <div className=" relative">
              <FloatingLabel
                variant="outlined"
                label="Contraseña"
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <button
                type="button"
                className=" absolute right-4 top-4"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <IoEyeOffSharp size={20} className=" hover:text-stone-500" />
                ) : (
                  <IoEyeSharp size={20} className=" hover:text-stone-500" />
                )}
              </button>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="hover:text-cyan-500 cursor-pointer" onClick={() => setOpen(true)}>
                ¿Olvidó su contraseña?
              </p>
            </div>

            <Button type="submit" gradientMonochrome="info" fullSized>
              Iniciar Sesión
            </Button>
          </form>
        </Card>
      </div>
      <RecoverPasswordModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Login;
