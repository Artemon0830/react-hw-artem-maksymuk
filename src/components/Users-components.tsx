import React, {useEffect, useState} from 'react';
import {IUser} from "../model/IUser";
import {getAllUsers} from "../services/api.servise";
import UserComponents from "./User-components";

const UsersComponents = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {

fetch('https://dummyjson.com/users')
        .then(value => value.json())
        .then(value => {
            value.user
        })
    }, []);



    return (
        <div>
            <hr/>
            <div>
                {
                    users.map((user) => (
                        <UserComponents
                            key={user.id}
                            user={user}
                        />))
                }
            </div>
            <hr/>



        </div>
    );
};

export default UsersComponents;