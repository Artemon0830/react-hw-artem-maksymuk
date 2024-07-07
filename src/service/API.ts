import axios from "axios";


let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{"Content-Type":"application/json"}
});
const postsOfUsers = async () => {
    return await axiosInstance.get('/posts/101').then((response)=>response.data);
}
export {postsOfUsers}