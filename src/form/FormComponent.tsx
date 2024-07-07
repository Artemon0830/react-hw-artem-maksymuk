import React, { FC, useState } from 'react';
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { userValidator } from "../validators/user.validator";
import styles from './FormComponent.module.css';
import {postsOfUsers} from "../service/API";

interface IPropsForm {
    title: string,
    body: string,
    userId: number,
    id: number
}

const FormComponent = () => {
    const { handleSubmit, register, formState: { errors, isValid } } = useForm<IPropsForm>({
        mode: "all", resolver: joiResolver(userValidator)
    });

    const [posts, setPosts] = useState<IPropsForm[]>([]);
    postsOfUsers().then((value:IPropsForm[]) =>{
        setPosts([...value])
    });
    const cumstorHandle = async (formDataProps: IPropsForm) => {
        await fetch('https://jsonplaceholder.typicode.com/posts/101', {
            method: 'POST',
            body: JSON.stringify(formDataProps),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => setPosts(prevPosts => [...prevPosts, json]));

    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(cumstorHandle)}>
                <div><label className={styles.label}>title:
                    {errors.title && <div className={styles.error}>{errors.title.message}</div>}
                    <input className={styles.input} type={"text"} {...register("title")} />
                </label></div>
                <div><label className={styles.label}>body:
                    {errors.body && <div className={styles.error}>{errors.body.message}</div>}
                    <input className={styles.input} type={"text"} {...register("body")} />
                </label></div>
                <div><label className={styles.label}>userId:
                    {errors.userId && <div className={styles.error}>{errors.userId.message}</div>}
                    <input className={styles.input} type={"number"} {...register("userId")} />
                </label></div>
                <div className={styles.button}><button disabled={!isValid}>send</button></div>
            </form>
            <ul>
                <div>Posts</div>
                {posts.map(post => <div>

                    <li> Title:{post.title}</li>
                    <li>Body:{post.body}</li>
                    <li>userId: {post.userId}</li></div>)}
            </ul>

            </div>
    );
};

export default FormComponent;