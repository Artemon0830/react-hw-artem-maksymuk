import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { postValidator } from "../validators/post.validator";
import styles from './FormComponent.module.css';
import { postsOfUsers, postAdd } from "../service/API";
import { IPropsForm } from '../module/IPropsForm';

const FormComponent = () => {
    const { handleSubmit, register, formState: { errors, isValid } } = useForm<IPropsForm>({
        mode: "all", resolver: joiResolver(postValidator)
    });

    const [posts, setPosts] = useState<IPropsForm[]>([]);

    useEffect(() => {
        postsOfUsers().then(value => setPosts([...value]))
    }, []);

    const cumstorHandle = async (formDataProps: IPropsForm) => {
         postAdd(formDataProps).then(value  =>
        setPosts( [ ...value]));

    };
    return (
        <div className={styles.formContainer}>
            <h1>Form</h1>
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
                {posts.map((post) => (
                    <div key={post.id}>
                        <li>Title: {post.title}</li>
                        <li>Body: {post.body}</li>
                        <li>userId: {post.userId}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
};
export default FormComponent;