import React, {FC} from 'react';
import {IPostModel} from "../Models/IPostModel";
interface IProps {
    posts:IPostModel[]
}
const PostComponent:FC<IProps> = ({posts}) => {
    return (
        <ul>
            {posts.map(post=><li key={post.id}>
                <li>id:{post.id}</li>
                <li>title:{post.title}</li>
                <li>body:{post.body}</li>
                <li>userId:{post.userId}</li>
            </li>)}

        </ul>
    );
};

export default PostComponent;