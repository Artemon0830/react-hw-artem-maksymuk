import React, {FC} from 'react';
import {IUser} from "../Modeles/IUser";
import {useNavigate} from "react-router-dom";
import styles from '../СSS-project/Project.module.css'
interface IProps {
    users:IUser[]


}
export const UsersComponent:FC<IProps> = ({users}) => {
    let navigate = useNavigate();
    return (
        <div className={styles.users}>
                {users.map((user) => <div key={user.id}>
                    <h3>Id: {user.id}</h3>
                    <p> Name:{user.name}</p>
                    <p> Username : {user.username}</p>
                    <p> Email: {user.email}</p>
                    <p> Phone: {user.phone}</p>
                    <p> Website: {user.website}</p>
                    <p> Address: {user.address.street} {user.address.suite}</p>
                    <p>{user.address.city} {user.address.zipcode}</p>
                    <button className={styles.button} onClick={
                        () => {
                           navigate(user.id.toString()+'/posts')
                    }}>posts of User</button>


                </div>)}
        </div>
    )
};

export default UsersComponent;