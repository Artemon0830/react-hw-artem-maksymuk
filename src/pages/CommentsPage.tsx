import React, {useEffect, useState} from 'react';
import CommentsComponents from "../components/CommentsComponents";
import {IComments} from "../modules/IComments";
import {getCommentsOfPost} from "../servise/API";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComments[]>([])
    useEffect(() => {
        getCommentsOfPost().then((value:IComments[])=>{
            setComments(value)
        })
    }, []);
    return (
        <div>

            <CommentsComponents comments={comments} />
        </div>
    );
};

export default CommentsPage;