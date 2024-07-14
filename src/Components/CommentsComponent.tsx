import React, {FC} from 'react';
import {IComment} from "../Modeles/IComment";
interface IProps {
    comments:IComment[]

}
export const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            <ul>
                {comments.map((comment) =><div key={comment.id}>
                    <h3>PostId: {comment.postId}</h3>
                    <p> Id:{comment.id}</p>
                    <p> Name : {comment.name}</p>
                    <p> Email : {comment.email}</p>
                    <p> Body: {comment.body}</p>
                </div>)}
            </ul>

        </div>
    );
};

export default CommentsComponent;