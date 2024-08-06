import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";

const PostsPage = () => {

    let {users, user, isLoaded} = useAppSelector(state => state.userStore);
    useEffect(() => {
        console.log(users);
        console.log(user);
        console.log(isLoaded);
    }, []);
    return (
        <div>
            PostsPage
        </div>
    );
};

export default PostsPage;
