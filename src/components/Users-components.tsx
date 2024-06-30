import React, {useEffect, useState} from 'react';
import {IUser} from "../model/IUser";
import {getAllUsers} from "../services/api.servise";
import UserComponents from "./User-components";

const UsersComponents = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getAllUsers().then((response:IUser[])=>{
            setUsers(response);
        })
    }, []);
    return (
        <div>
            <hr/>
            <div>
                {
                    users.map((user) => (
                        <UserComponents
                            user={user}
                        />))
                }
            </div>
            <hr/>
        </div>
    );
};

export default UsersComponents;