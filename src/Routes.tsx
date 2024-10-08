import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./Auth/Components/Login";
import Register from "./Auth/Components/Register";
import Layout from "./UserManage/Layout/Layout";
import ManageUsers from "./UserManage/Screens/ManageUsers";

const Routes = createBrowserRouter([
  {
    index: true,
    element: <Login />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "Dashboard",
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
