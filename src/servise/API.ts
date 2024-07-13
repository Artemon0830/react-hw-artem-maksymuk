import axios from "axios";
import {IUsers} from "../modules/IUsers";
import {IComments} from "../modules/IComments";
import {IPosts} from "../modules/IPosts";

let axiosInstance = axios.create(
    {baseURL: 'https://jsonplaceholder.typicode.com',
    headers: { "Content-Type": "application/json" }});
const getOfUsers=async():Promise<IUsers[]>=>{
    return await axiosInstance.get('/users').then (response=>  response.data)
}
const getPostsOfUser=async():Promise<IPosts[]>=>{
    return await axiosInstance.get('/posts').then (response=>  response.data)
}
const getCommentsOfPost=async():Promise<IComments[]>=>{
    return await axiosInstance.get('/comments').then (response=> response.data)
}
// POST PAGE
const getPostPageById =async (id:string):Promise<IUsers>=>{
    return await axiosInstance.get('/users/'+ id).then(response =>response.data)

}

export {getOfUsers,getPostsOfUser,getCommentsOfPost,getPostPageById}



