import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CustomErrorLayout from "../layouts/Error/CustomErrorLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import PostPage from "../pages/PostPage";
import CommentsPage from "../pages/CommentsPage";
import React from "react";

export const router = createBrowserRouter([
    {path:'/', element: <div><MainLayout/></div>,
        errorElement:<CustomErrorLayout/>,
        children:[
            {index: true, element:<HomePage/>},
            {path:'users', element:<UsersPage/>,children:[]},
            {path:'posts', element:<PostsPage/>,children:[
                    {path:':id', element:<PostPage/>}
                ]},
            {path:'comments', element:<CommentsPage/>},

        ]},
]);
