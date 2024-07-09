import axios from "axios";

let axiosInstance = axios.create(
    {baseURL: 'https://jsonplaceholder.typicode.com',
    headers: { "Content-Type": "application/json" }});
const getOfUsers=async()=>{
    return await axiosInstance.get('/users').then (response=>  response.data)
}
const getPostsOfUser=async()=>{
    return await axiosInstance.get('/posts').then (response=>  response.data)
}
const getCommentsOfPost=async()=>{
    return await axiosInstance.get('/comments').then (response=> response.data)
}
export {getOfUsers,getPostsOfUser,getCommentsOfPost}



