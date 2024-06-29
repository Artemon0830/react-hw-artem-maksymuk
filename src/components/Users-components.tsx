import React, {useEffect, useState} from 'react';
import {IUser} from "../model/IUser";
import {getAllUsers} from "../services/api.servise";
import UserComponents from "./User-components";

const UsersComponents = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getAllUsers().then((value:IUser[])=>{
          setUsers(value)
        })
    }, []);
    return (
        <div>
            {users.map((user)=>(
                <UserComponents key={user.id} user={user}/>
                ))
            }

        </div>
    );
};

export default UsersComponents;