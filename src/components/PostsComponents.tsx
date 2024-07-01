import React, {FC} from 'react';
import {IPost} from "../model/IPost";

interface IProps{
    posts:IPost

}
const PostsComponents:FC<IProps> = ({posts}) => {
    const {id,title,body,tags,reactions,userId}=posts
    return (
        <div>
            {id}
            {title}
            {body}
            {reactions}
            {userId}
            {tags}

        </div>
    );
};

export  {PostsComponents};