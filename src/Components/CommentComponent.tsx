import React, {FC} from 'react';
import {ICommentModel} from "../Models/ICommentModel";
interface IProps {
    comments: ICommentModel[];

}
const CommentComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map((comment=><div key={comment.id}>
                <p>postId:{comment.postId}</p>
                <p>id:{comment.id}</p>
                <p>name:{comment.name}</p>
                <p>email:{comment.email}</p>
                <p>body:{comment.body}</p>
            </div>))}
        </div>
    );
};

export default CommentComponent;