import { Outlet } from "react-router";
import Layout from "./UserManage/Layout/Layout";
import ManageUsers from "./UserManage/Screens/ManageUsers";
import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
  {
    path: "",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <ManageUsers />,
      },
      {
        path: "MiCuenta",
      },
      {
        path: "CambiarContraseña",
      },
      {
        path: "Lista_de_Usuarios",
      },
      {
        path: "Lista_de_Roles",
      },
      {
        path: "Ayuda",
      },
    ],
  },
]);

export default Routes;
