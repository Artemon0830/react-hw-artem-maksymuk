import React, {FC} from 'react';
import {IPosts} from "../modules/IPosts";
import {Link} from "react-router-dom";
interface IProps {
    posts:IPosts[]

}
const PostsComponents:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post =><div key={post.id} >
                    <h2> post id : {post.id}</h2>
                    <p>title : {post.title}</p>
                    <p> body : {post.body}</p>
                    <p> userId : {post.userId}</p>
                </div> )
            }
        </div>
    );
};

// <Link to={post.id.toString()}>{post.title}</Link>
export default PostsComponents;