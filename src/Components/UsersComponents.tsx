import * as React from 'react';
import { getAllUsers, getPostsOfUser } from "../servise/api.servises";
import { IUser } from "./models/IUser";
import UserComponent from "./UserComponent";
import { IPost } from "./models/IPost";
import PostsComponent from "./PostsComponent";

interface MyState {
    users: IUser[],
    posts: IPost[],
    getPosts: (id: number) => void
}

export class UsersComponents extends React.Component<{}, MyState> {
    state: MyState = {
        users: [],
        posts: [],
        getPosts: (id: number) => getPostsOfUser(id).then(value => this.setState({ posts: value }))
    }

    componentDidMount() {
        getAllUsers().then(value => this.setState({ users: value }));
    }

    render() {
        const { getPosts } = this.state;
        return (
            <div>
                {this.state.users.map(user => (
                    <div key={user.id}>
                        <UserComponent user={user} getPosts={getPosts} />
                    </div>
                ))}
                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <PostsComponent post={post} />
                    </div>
                ))}
            </div>
        );
    }
}