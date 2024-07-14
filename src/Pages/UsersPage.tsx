import React, {useEffect, useState} from 'react';
import {IUser} from "../Modeles/IUser";
import {getAllUsers} from "../service/API";
import UserComponent from "../Components/UsersComponent";
import style from '../СSS-project/Project.module.css'

const UsersPage = () => {
    const [user, setUser] = useState<IUser[]>([]);
    useEffect(() => {
        getAllUsers().then(value => setUser([...value]));
    }, []);
    return (
        <div className={style.container} >
            <h1 className={style.page} >Users Page</h1>

            <div ><UserComponent users={user}/></div>
        </div>
    );
};

export default UsersPage;