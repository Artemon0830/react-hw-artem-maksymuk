import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import CustomErrorLayout from "./layouts/Error/CustomErrorLayout";
import HomePage from "./pages/HomePage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
    {path:'/', element: <div><MainLayout/></div>,
        errorElement:<CustomErrorLayout/>,
    children:[
        {index: true, element:<HomePage/>},
        {path:'users', element:<UsersPage/>},
        {path:'posts', element:<PostsPage/>},
        {path:'comments', element:<CommentsPage/>},

    ]},

]);
root.render(
<RouterProvider router={router}/>
);

