import React, {useEffect, useState} from 'react';
import PostsComponents from "../components/PostsComponents";
import {IPosts} from "../modules/IPosts";
import {getPostsOfUser} from "../servise/API";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPosts[]>([])
    useEffect(() => {
        getPostsOfUser().then((value:IPosts[]) =>{
            setPosts(value)
        });
    }, []);
    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <PostsComponents posts={posts}/>
        </div>
    );
};

export default PostsPage;