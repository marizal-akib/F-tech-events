import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root";
import About from "../Pages/About/About";
import Login from "../Auth/Login";
import Career from "../Career/Career";
import Registration from "../Auth/Registration";
import ServicesDetails from "../Pages/Home/Services/servicesDetails";
import PrivateRout from "./PrivateRout";
import ErrorPage from "../Pages/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/about",
        element: (
          <PrivateRout>
            <About></About>,
          </PrivateRout>
        ),
      },
      {
        path: "/career",

        element: (
          <PrivateRout>
            <Career></Career>,
          </PrivateRout>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/service/:id",
        loader: ({ params }) => fetch("/services.json"),
        element: (
          <PrivateRout>
            <ServicesDetails></ServicesDetails>
          </PrivateRout>
        ),
      },
    ],
  },
]);

export default Routes;
