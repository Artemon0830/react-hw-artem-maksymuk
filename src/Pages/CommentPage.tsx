import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/slice/commentSlice";
import CommentsComponent from "../Components/CommentsComponent";

const CommentPage = () => {

    return (
        <div>

            <CommentsComponent/>

        </div>
    );
};

export default CommentPage;