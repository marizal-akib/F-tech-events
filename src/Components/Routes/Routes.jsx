import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root";
import About from "../Pages/About/About";
import Login from "../Auth/Login";
import Career from "../Career/Career";
import Registration from "../Auth/Registration";
import ServicesDetails from "../Pages/Home/Services/servicesDetails";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/services.json')
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/career',
                element:<Career></Career>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            },
            {
                path:'/service/:id',
                element:<ServicesDetails></ServicesDetails>
            }
        ]

    }
])

export default Routes;