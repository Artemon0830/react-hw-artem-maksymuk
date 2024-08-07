import React, {useEffect} from 'react';
import CommentComponent from "./CommentComponent";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/slice/commentSlice";

const CommentsComponent = () => {
    let {comments,comment} = useAppSelector(state => state.commentStore);
    let dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(commentActions.loadComments())
    }, []);
    return (
        <div>
            <CommentComponent comments={comments}/>
        </div>
    );
};

export default CommentsComponent;