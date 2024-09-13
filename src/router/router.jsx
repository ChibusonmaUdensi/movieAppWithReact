//import { Outlet } from "react-router-dom";
import NowPlayingMovie from "../component/NowPlayingMovie";
import Layout from "../layout/Layout";
// import SignUp from "../app/auth/SignUp";
// import Login from "../app/auth/Login";
import PopularMovie from "../component/PopularMovie";
const ROUTES = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <NowPlayingMovie/>
            }
        ]
    },
        {
            path: '/popular',
            element: <PopularMovie/>
        },
    // {
    //     path: "/signup",
    //     element: <SignUp/>
    // },
    // {
    //     path: "/login",
    //     element: <Login/>
    // },
]

export default ROUTES;
