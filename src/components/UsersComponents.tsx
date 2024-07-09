import React, {FC, useEffect, useState} from 'react';
import {IUsers} from "../modules/IUsers";
interface IProps {
    users:IUsers[]

}
const UsersComponents:FC<IProps> = ({users}) =>{

    return (
        <div>
            {users.map((user)=>(
                <div><h2 >id:{user.id}</h2>
                <p>name:{user.name} </p>
                <p>username:{user.username}</p>
                <p>email:{user.email}</p>
                    <ul>
                        <li>address:{user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}</li>
                        <li>geo:{user.address.geo.lat},{user.address.geo.lng}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default UsersComponents;