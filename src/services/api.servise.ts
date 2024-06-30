import axios from "axios";
let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: { "Content-Type": "application/json" },
});
const getAllUsers = async () => {
    // return await axiosInstance.get('/users').then((response )=>response.data )
    const { data } = await axiosInstance.get("/users");
    console.log("data.users", data.users);
    return data.users;
};
const  getPostsOfUserById = async (id:number)=>{
    const {data}= await axiosInstance.get('/users/' +id+ '/posts' )
    console.log(data.posts)
    return data.posts
}
export { getAllUsers,getPostsOfUserById  };
