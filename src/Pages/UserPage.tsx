import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userAction} from "../redux/slice/userSlice";
import UserComponent from "../Components/UserComponent";

const UserPage = () => {
    let {id} = useParams();

    let dispatch = useAppDispatch();
    let user = useAppSelector(state => state.userStore.user);

    useEffect(() => {
        if (id) dispatch(userAction.loadUser(+id));
    }, [id]);


    return (
        <div>
            <h1>UserPage</h1>
            <UserComponent user={user}/>}

        </div>
    );
};

export default UserPage;
