import React, { useEffect, useState } from "react";
import { IUser } from "../model/IUser";
import {getAllUsers, getPostsOfUserById} from "../services/api.servise";
import UserComponents from "./User-components";
import {IPost} from "../model/IPost";
import {PostsComponents} from "./PostsComponents";

const UsersComponents = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([])
    const [skipValue, setSkipValue] = useState<number>(0)
    const getUsers = async () => {
        const response = await getAllUsers();
        setUsers(response)
    };

    const getPosts = async (id:number) => {
        const value = await getPostsOfUserById(id);
        setPosts(value);
    }

    useEffect(() => {
        getUsers();
    }, [skipValue]);

    if (!users.length) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <hr />
            <div>
                {users.map((user) => (
                    <UserComponents key={user.id} user={user} getPosts={getPosts} setSkipValue={setSkipValue}/>
                ))}

            </div>
            <hr/>
            <div>{
                posts.map(post => <PostsComponents key={post.id} post={post}/>)
            }
            </div>
        </div>
    );

}
export {UsersComponents};