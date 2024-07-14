import React, {useEffect, useState} from 'react';
import {IPost} from "../Modeles/IPost";
import {getPostsOfUser} from "../service/API";
import PostsComponent from "../Components/PostsComponent";
import PaginationComponent from "../Components/Pagination-Component/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import style from '../СSS-project/Project.module.css'

const PostsPage = () => {
let [searchParams] = useSearchParams();
let page = searchParams.get('page');
    const [post, setPost] = useState<IPost[]>([]);
    useEffect(() => {
        let skip;
        if (page) {
            skip = Number(page)*10-10;
            getPostsOfUser(skip).then(value => setPost([...value]));
        }
        else {
            getPostsOfUser(0).then(value => setPost([...value]));
        }

    }, [page]);
    return (
        <div className={style.container}>
            <h1 className={style.page}>Posts</h1>
            <PostsComponent posts={post}/>
            <PaginationComponent/>
        </div>
    );
};

export default PostsPage;