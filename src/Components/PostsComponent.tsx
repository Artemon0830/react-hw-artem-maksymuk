import React, {FC} from 'react';
import {IPost} from "../Modeles/IPost";
import styles from '../СSS-project/Project.module.css'
interface IProps {
    posts:IPost[]

}

const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div className={styles.posts}>
            {posts.map((post) => <div className={styles.post} key={post.id}>
                <h3>Id: {post.id}</h3>
                <p> Title:{post.title}</p>
                <p> Body : {post.body}</p>
                <p> UserId: {post.userId}</p>
            </div>)}
            {/*<p> Title: <Link to={post.id.toString()}>{post.title}</Link></p>*/}
        </div>
    );
};

export default PostsComponent;