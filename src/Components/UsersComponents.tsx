import * as React from 'react';
import {getAllUsers} from "../servise/api.servises";
interface MyProps{
    id:number,
    name:string
}
type MyState={
    users:MyProps[]
}
export class UsersComponents extends React.Component<{},MyState> {
    state:MyState ={
        users:[]
    }
    componentDidMount() {
        getAllUsers().then(value => this.setState({...this.state,users:value}))
    }

    render() {
         return (
             <div>
                 {this.state.users.map(user=>(<li>{user.name}</li>) )}
             </div>
         )
     }
 }