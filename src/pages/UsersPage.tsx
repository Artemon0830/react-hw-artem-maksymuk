import React, {FC, useEffect, useState} from 'react';
import UsersComponents from "../components/UsersComponents";
import {IUsers} from "../modules/IUsers";
import {getOfUsers} from "../servise/API";


const UsersPage:FC = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    useEffect(() => {
        getOfUsers().then((value:IUsers[]) =>{
            setUsers(value)
        });
    }, []);
    return (
        <div>
<UsersComponents users={users}/>
        </div>
    );
};

export default UsersPage;