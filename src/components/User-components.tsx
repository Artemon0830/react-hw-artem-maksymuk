import React, {FC} from 'react';
import {IUser} from "../model/IUser";

interface IProps {
user:IUser
}
const UserComponents:FC<IProps> = ({user}) => {
    let {id,
    firstName,
    username,
    email ,
    phone,
    gender,
    lastName,
    age,
    image,
    password,birthData}=user
    return (
        <div>
            <h2>{id}</h2>
            <p>firstName:{firstName}</p>
            <p>lastName:{lastName}</p>
            <p>email:{email};
            phone:{phone}</p>
            <p>gender:{gender},age:{age}</p>
            <img src={image} alt={username}/>
            <p>Details of User:
            username:{username}
            password:{password}
            </p>
            {/*<button onClick={()=>*/}
            {/*getPosts}></button>*/}
        </div>
    );
};

export default UserComponents;