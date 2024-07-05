import React, {Component} from 'react';
import {IUser} from "./models/IUser";
import {getPostsOfUser} from "../servise/api.servises";
interface IProps {
    user:IUser
    getPosts:(id:number)=>void

}
class UserComponent extends Component<IProps> {
    render() {
        return (
            <div>
                <h2>{this.props.user.id} - firstName: {this.props.user.firstName} - username: {this.props.user.username} - lastName: {this.props.user.lastName}</h2>
                <h3>email: {this.props.user.email} </h3>
                <button onClick={()=>{
                  this.props.getPosts(this.props.user.id)
                }}>User of posts</button>
            </div>
        );
    }
}

export default UserComponent ;