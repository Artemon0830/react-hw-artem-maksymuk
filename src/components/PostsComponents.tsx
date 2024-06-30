import React, {FC} from 'react';
import {IPost} from "../model/IPost";

interface IProps{
    posts:IPost[]

}
const PostsComponents:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(value =><li key={value.id} >{value.id}:{value.title}</li> )
            }
        </div>
    );
};

export default PostsComponents;