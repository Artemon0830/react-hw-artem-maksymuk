import React, {useEffect} from 'react';
import {userAction} from "../redux/slice/userSlice";
import {useAppDispatch, useAppSelector} from "../redux/store";
import UsersComponent from "../Components/UsersComponent";

const UsersPage = () => {

    let dispatch = useAppDispatch();

    let {users, isLoaded, error} = useAppSelector(state => state.userStore);


    useEffect(() => {
        dispatch(userAction.loadUsers());
    }, []);
    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;
