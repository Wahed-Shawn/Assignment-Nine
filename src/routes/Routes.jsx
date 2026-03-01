import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Mainlayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/plants',
                Component: Plants
            },
            {
                path: '/myProfile',
                Component: MyProfile
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
        ]
    },
]);

export default router
