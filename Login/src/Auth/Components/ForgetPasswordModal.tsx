import { Button, FloatingLabel, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { RecoveryForm } from "../Types/Type";
import UseForgetMyPassword from "../Hooks/UseForgetMyPassword";

const ForgetPasswordModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, handleSubmit } = useForm<RecoveryForm>();

  const { mutate: forgetPassword } = UseForgetMyPassword();

  const onSubmit = (data: RecoveryForm) => {
    forgetPassword(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal show={open} size="md" onClose={() => setOpen(false)} popup>
      <Modal.Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Recuperar Contraseña
            </h3>
            <div>
              <FloatingLabel
                variant="outlined"
                label="Correo"
                type="email"
                required
                {...register("email")}
              />
            </div>

            <div>
              <FloatingLabel
                variant="outlined"
                label="Cedula"
                type="number"
                required
                {...register("cedula")}
              />
            </div>
            <div className="flex justify-between mt-4 space-x-2">
              <Button
                color="gray"
                className="w-full transition-transform hover:scale-105"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                color="blue"
                className="w-full transition-transform hover:scale-105"
              >
                Confirmar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </form>
    </Modal>
  );
};

export default ForgetPasswordModal;
