import {createBrowserRouter} from "react-router-dom";

import HomePage from "../Pages/HomePage";
import UsersPage from "../Pages/UsersPage";
import PostsPage from "../Pages/PostsPage";
import UserPage from "../Pages/UserPage";
import SortedPage from "../Pages/SortedPage";
import MainLayout from "../Layouts/MainLayout";

export let router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>404 error!</h1>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'users/sort', element: <SortedPage/>},
        ]
    }
]);
