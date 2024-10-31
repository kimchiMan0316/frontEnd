import { createBrowserRouter } from "react-router-dom";
import Home from "./page/home";
import Login from "./page/login";
import Layout from "./Layout/Layout";
import Profile from "./page/profile";
import CreateAccount from "./page/createAccount";
import Protect from "../Auth/protect";
import ForgetAccount from "./page/forget-account";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/profile/:username",
                element:<Profile/>
            }
        ]
    },
    {
        path:"/login",
        element:<Login/>,
    },
    {
        path:"/create-account",
        element:<CreateAccount/>,
    },
    {
        path:"forget-account",
        element:<ForgetAccount/>
    }
])