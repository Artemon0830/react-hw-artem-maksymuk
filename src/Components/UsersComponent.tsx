import React, {FC, useEffect} from 'react';
import {Link} from "react-router-dom";
import {IUserModel} from "../Models/IUserModel";


interface IProps {
    users: IUserModel[];
}

const Users: FC<IProps> = ({users}) => {


    return (
        <ul>

            {
                users.map(user => (<li key={user.id}>
                    <Link to={'/users/' + user.id}>{user.id}: {user.name}</Link>
                </li>))

            }
        </ul>
    );
};

export default Users;
