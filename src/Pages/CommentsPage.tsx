import React, {useEffect, useState} from 'react';
import {IComment} from "../Modeles/IComment";
import {getCommentsOfPost} from "../service/API";
import CommentsComponent from "../Components/CommentsComponent";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../Components/Pagination-Component/PaginationComponent";
import style from '../СSS-project/Project.module.css'

const CommentsPage = () => {
    let [searchParams] = useSearchParams();
    let page = searchParams.get('page');
    const [comment, setComment] = useState<IComment[]>([]);
    useEffect(() => {
        let skip1;
        if (page) {
            skip1 = Number(page)*5-5;
            getCommentsOfPost(skip1).then(value => setComment([...value]));
        } else {
            getCommentsOfPost(0).then(value => setComment([...value]));
        }
    }, [page]);
    return (
        <div className={style.container}>
            <h1 className={style.page} >Comments</h1>
            <CommentsComponent comments={comment}/>
            <PaginationComponent/>
        </div>
    );
};

export default CommentsPage;