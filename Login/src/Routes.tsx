import { createBrowserRouter } from "react-router-dom";
import Login from "./Auth/Components/Login";
import Register from "./Auth/Components/Register";

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
]);

export default Routes;
