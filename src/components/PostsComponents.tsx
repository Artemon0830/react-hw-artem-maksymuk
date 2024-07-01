import React, {FC} from 'react';
import {IPost} from "../model/IPost";

interface IProps{
    post:IPost

}
const PostsComponents:FC<IProps> = ({post}) => {
    const {id,title,body,userId}=post
    return (
        <div>
            {id}
            {title}
            {body}
            {userId}

        </div>
    );
};

export  {PostsComponents};