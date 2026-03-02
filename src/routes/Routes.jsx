import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import PlantDetails from "../pages/PlantDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Mainlayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('/Plants.json')
            },
            {
                path: '/plants',
                Component: Plants,
                loader: () => fetch('/Plants.json')
            },
            {
                path: '/plantDetails/:id',
                element: <PrivateRoute><PlantDetails /></PrivateRoute>,
                loader: () => fetch('/Plants.json')
            },
            {
                path: '/myProfile',
                element: <PrivateRoute><MyProfile /></PrivateRoute>
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
