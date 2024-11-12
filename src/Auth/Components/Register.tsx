import {
  Button,
  Card,
  Checkbox,
  FloatingLabel,
  Label,
  Popover,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import { User } from "../Types/Type";
import { useEffect, useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { IoAlert } from "react-icons/io5";
import UseRegister from "../Hooks/UseRegister";
import { useNavigate } from "react-router";

const Register = () => {
  const { register, watch, handleSubmit, reset } = useForm<User>();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [fail, setFail] = useState<boolean>(false);
  const [formatFail, setFormatFail] = useState<boolean>(false);
  const Password = watch("password");
  const RPassword = watch("repeatPassword");

  useEffect(() => {
    const isValidLength = Password && Password.length >= 8;
    const hasUpperCase = Password && /[A-Z]/.test(Password);
    const hasLowerCase = Password && /[a-z]/.test(Password);
    const hasSpecialChar = Password && /[!@#$%^&*(),.?":{}|<>]/.test(Password);
    if (Password) {
      if (Password && RPassword && Password !== RPassword) {
        setFail(true);
      } else {
        setFail(false);
      }

      if (!isValidLength || !hasUpperCase || !hasLowerCase || hasSpecialChar) {
        setFormatFail(true);
      } else {
        setFormatFail(false);
      }
    } else {
      setFormatFail(false);
    }
  }, [Password, RPassword]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { mutate: newRegister } = UseRegister();

  const onSubmit = (data: User) => {
    newRegister(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  const navi = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-8">
      <Card className="max-w-screen-sm w-full">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">
            Registro de usuario
          </h2>
          <p className="text-sm mb-4">
            ¿Posees una cuenta?{" "}
            <a
              onClick={() => navi(-1)}
              className="text-blue-500 hover:underline"
            >
              Inicia Sesión aquí.
            </a>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className=" grid grid-cols-2 gap-3">
              <div>
                <FloatingLabel
                  required
                  type="number"
                  variant="outlined"
                  label="Cedula"
                  {...register("cedula")}
                />
              </div>
              <div>
                <FloatingLabel
                  required
                  variant="outlined"
                  label="Nombre"
                  {...register("name")}
                />
              </div>
              <div>
                <FloatingLabel
                  required
                  variant="outlined"
                  label="Apellido"
                  {...register("lastName1")}
                />
              </div>
              <div>
                <FloatingLabel
                  variant="outlined"
                  label="Segundo Apellido"
                  {...register("lastName2")}
                />
              </div>
              <div>
                <FloatingLabel
                  required
                  variant="outlined"
                  label="Fecha de Nacimiento"
                  type="date"
                  {...register("birthDate")}
                />
              </div>
              <div>
                <FloatingLabel
                  required
                  variant="outlined"
                  label="Correo"
                  type="email"
                  {...register("email")}
                />
              </div>
              <div>
                <FloatingLabel
                  required
                  variant="outlined"
                  label="Telefono"
                  type="text"
                  pattern="^[+\-\d]+$"
                  {...register("phone")}
                />
              </div>
              <div>
                <FloatingLabel
                  required
                  variant="outlined"
                  label="Dirección"
                  {...register("address")}
                />
              </div>
              <div className=" relative">
                <FloatingLabel
                  required
                  variant="outlined"
                  label="Contraseña"
                  color={formatFail ? "error" : "default"}
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                />
                <Popover
                  placement="right"
                  content={
                    <div
                      className={`m-2 text-red-900 bg-slate-50 rounded-lg z-50
                    ${formatFail ? "" : "hidden"}`}
                    >
                      La contraseña no puede contener caracteres especiales.{" "}
                      <br />
                      Debe contener almenos 1 mayuscula y una minuscula. <br />
                      Debe tener una longitud minima de 8 caracteres
                    </div>
                  }
                >
                  <button type="button" className=" absolute right-4 top-4">
                    {formatFail ? (
                      <IoAlert size={20} className=" hover:text-stone-500" />
                    ) : (
                      ""
                    )}
                  </button>
                </Popover>
              </div>
              <div className="relative">
                <FloatingLabel
                  required
                  variant="outlined"
                  label="Repetir contraseña"
                  type={showPassword ? "text" : "password"}
                  color={fail ? "error" : "default"}
                  {...register("repeatPassword")}
                />
                <button
                  type="button"
                  className=" absolute right-4 top-4"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <IoEyeOffSharp
                      size={20}
                      className=" hover:text-stone-500"
                    />
                  ) : (
                    <IoEyeSharp size={20} className=" hover:text-stone-500" />
                  )}
                </button>
                {fail && (
                  <span className=" absolute text-red-500 text-sm">
                    Las contraseñas no coinciden
                  </span>
                )}
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="AcceptTermsAndConditions"
                  required
                  {...register("termsAndCondicions")}
                />
                <Label htmlFor="AcceptTermsAndConditions" className="ml-2">
                  Acepto los{" "}
                  <a href="" className=" hover:text-Body">
                    {" "}
                    Términos y Condiciones
                  </a>
                </Label>
              </div>
            </fieldset>
            <div className="flex justify-between mt-5">
              <Button
                tabIndex={2}
                type="button"
                color="failure"
                onClick={() => navi(-1)}
              >
                Cancelar
              </Button>
              <Button type="submit" color="blue" disabled={fail || formatFail}>
                Confirmar
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Register;
