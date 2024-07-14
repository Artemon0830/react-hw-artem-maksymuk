import {createBrowserRouter} from "react-router-dom";
import MainLayuot from "../Layouts/MainLayout";
import CustomErrorLayuot from "../Layouts/CustomErrorLayuot";
import HomePage from "../Pages/HomePage";
import UsersPage from "../Pages/UsersPage";
import PostsPage from "../Pages/PostsPage";
import CommentsPage from "../Pages/CommentsPage";
import PostPage from "../Pages/PostPage";


export const router = createBrowserRouter([
    {
        path: "/", element: <div><MainLayuot/></div>,
        errorElement: <div><CustomErrorLayuot/></div>,
        children: [{path: "", element: <div><HomePage/></div>},
            {path: "users", element: <div><UsersPage/></div>},
            {path: "users/:id/posts", element: <div><PostPage/></div>},
            {path: "posts", element: <div><PostsPage/></div>},
            {path: "comments", element: <div><CommentsPage/></div>},
        ]

    }])