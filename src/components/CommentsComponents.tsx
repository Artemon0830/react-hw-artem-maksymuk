import React, {FC} from 'react';
import {IComments} from "../modules/IComments";
interface IProps {
    comments:IComments[]

}
const CommentsComponents:FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map(comment=><div key={comment.id}>
                <h2>id : {comment.id}</h2>
               <p> name : {comment.name}</p>
               <p>email : {comment.email}</p>
                   <p>body:{comment.body} </p>
            </div>)}
        </div>
    );
};

export default CommentsComponents;