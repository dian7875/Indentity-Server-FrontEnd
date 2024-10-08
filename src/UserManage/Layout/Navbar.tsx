import { Drawer, Sidebar } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import pingu from "../../assets/Icon.png";
const Navbar = ({
  openSide,
  setOpenSide,
}: {
  openSide: boolean;
  setOpenSide: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <Drawer open={openSide} onClose={() => setOpenSide(false)}>
        <Drawer.Header
          title="Gestión de usuarios y roles"
          titleIcon={() => (
            <img src={pingu} width={30} className="mr-2" alt=""></img>
          )}
        />
        <Drawer.Items>
          <Sidebar className="[&>div]:bg-transparent w-full [&>div]:p-0 pt-3 ">
            <Sidebar.ItemGroup>
              <Sidebar.Item href="MiCuenta">Cuenta</Sidebar.Item>
              <Sidebar.Item href="CambiarContraseña">
                Cambiar contraseña
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="Lista_de_Usuarios">
                Lista de usuarios
              </Sidebar.Item>
              <Sidebar.Item href="Lista_de_Roles">Lista de Roles</Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="Ayuda">Ayuda</Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default Navbar;
