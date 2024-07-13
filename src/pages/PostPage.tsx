import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useAppLocation } from "../hooks/useAppLocation";
import { getPostPageById } from "../servise/API";
import { IUsers } from "../modules/IUsers";

const PostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { state: { user: item } } = useAppLocation<{ user: IUsers }>();
    const [user, setUser] = useState<IUsers | null>(null);

    useEffect(() => {
        if (item) {
            setUser(item);
        } else if (id) {
            getPostPageById(id)
                .then((value: IUsers) => setUser(value))
                .catch(error => console.error('Failed to fetch user:', error));
        }
    }, [id, item]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>ID: {user.id}</h2>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <ul>
                <li>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</li>
                <li>Geo: {user.address.geo.lat}, {user.address.geo.lng}</li>
            </ul>
        </div>
    );
};

export default PostPage;