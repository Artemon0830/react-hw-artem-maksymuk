import React, {Component} from 'react';
import {IPost} from "./models/IPost";

class PostsComponent  extends Component<{post:IPost}> {
    render() {
        return (
            <div>
                {
                 this.props.post.id}:{this.props.post.title}:{this.props.post.body}

            </div>
        );
    }
}

export default PostsComponent ;