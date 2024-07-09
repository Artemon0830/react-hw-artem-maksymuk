import React, {FC, useEffect, useState} from 'react';
import {IUsers} from "../modules/IUsers";
import {getOfUsers} from "../servise/API";
interface IProps {
    user:IUsers

}
const UsersComponents:FC<IProps> = ({user}) =>{
    const {id,name,username,email,address}=user
    const [users, setUsers] = useState<IUsers[]>([])
    useEffect(() => {
        getOfUsers().then((value:IUsers[]) =>{
            setUsers([...value])
        });
    }, []);
    return (
        <div>
            {users.map(user=>
                <div><h2 key={id}>{id}:{name} </h2>,
                <p>{username}</p>,
                <p>{email}</p>,
                    <p>{address.street}</p>
                </div>
           )}
        </div>
    );
};

export default UsersComponents;