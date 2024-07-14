import axios from "axios";
import  {IUser}  from "../Modeles/IUser";
import {IPost} from "../Modeles/IPost";
import {IComment} from "../Modeles/IComment";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-type": "application/json"
    }
});

const getAllUsers = async (): Promise<IUser[]> => {
    let response = await axiosInstance.get<IUser[]>('/users');
    return response.data
}
const getPostsOfUserId = async (id:string): Promise<IPost[]> => {
    let response = await axiosInstance.get<IPost[]>('/users/'+id+'/posts');
    return response.data;
}

const getPostsOfUser = async (skip: number): Promise<IPost[]> => {
    let response = await axiosInstance.get<IPost[]>('/posts?_start='+skip+'&_limit=10');
    return response.data;
}
const getCommentsOfPost = async (skip1:number): Promise<IComment[]> => {
    let response = await axiosInstance.get<IComment[]>('/comments?_start='+skip1+'&_limit=5');
    return response.data;
}
export {getAllUsers, getPostsOfUser, getCommentsOfPost, getPostsOfUserId}