import React, {useEffect, useState} from 'react';
import {getPostsOfUserId} from "../service/API";
import {IPost} from "../Modeles/IPost";
import {useParams} from "react-router-dom";
import PostsComponent from "../Components/PostsComponent";
import style from '../СSS-project/Project.module.css'
export const PostPage = () => {
   let {id} = useParams()
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        if (id) {
        getPostsOfUserId(id).then(value =>setPosts(value));
    }}, [id]);
    return (
        <div className={style.container} >
            <h1>Post Page(posts of User)</h1>
            <PostsComponent posts={posts}/>

        </div>
    );
};

export default PostPage;