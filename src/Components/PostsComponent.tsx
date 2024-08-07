import React, {useEffect} from 'react';
import PostComponent from "./PostComponent";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slice/postSlice";

const PostsComponent = () => {
    let dispatch = useAppDispatch();
    let {posts} = useAppSelector(state => state.postStore);
    let {user} = useAppSelector(state => state.userStore);
    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);
    return (
        <div>
            <PostComponent posts={posts}/>
        </div>
    );
};

export default PostsComponent;