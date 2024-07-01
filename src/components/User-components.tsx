import React, {FC} from 'react';
import {IUser} from "../model/IUser";
import {PostsComponents} from "./PostsComponents";
import {IPost} from "../model/IPost"


interface IProps {
user:IUser;
    getPosts:(id:number)=>void
    setSkipValue:(value:number)=>void
}
const UserComponents:FC<IProps> = ({user,getPosts,setSkipValue}) => {
    let {id,
    firstName,
    username,
    email ,
    phone,
    gender,
    lastName,
    age,
    image,
    password}=user

    return (
        <div>
            <h2>{id}</h2>
            <p>firstName:{firstName}</p>
            <p>lastName:{lastName}</p>
            <ul>
                <li>email:'{email}';</li>
                <li>phone:{phone};</li>
                <li>gender:{gender}</li>
                <li>age:{age}</li>
                <img src={image} alt={username}/>
                <p>Details of User:</p>
                <li>username:{username}</li>
                <li>password:{password}</li>
            </ul>
            <button onClick={() => {
                getPosts(user.id);
            }}>Posts of User
            </button>
            <button onClick={() => {
                setSkipValue(-5);
                console.log('dec');
            }}>prev
            </button>
            <button onClick={() => {

                setSkipValue(+5);
                console.log('inc');
            }}>next
            </button>
        </div>
    );
};

export default UserComponents;