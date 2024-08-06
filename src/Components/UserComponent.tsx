import React, {FC} from 'react';
import {IUserModel} from "../Models/IUserModel";
interface IProps {
    user:IUserModel;

}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.city}</p>
            <p>{user.address.zipcode}</p>
            <p>{user.address.geo.lat}</p>
            <p>{user.address.geo.lng}</p>
        </div>
    );
};

export default UserComponent;