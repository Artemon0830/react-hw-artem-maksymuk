import axios from "axios";
let axiosInstance = axios.create({
    baseURL:'https://dummyjson.com',
    headers:{"Content-Type":"application/json"}
});
const getAllUsers =async () => {
    return await axiosInstance.get('/users').then((response )=>response.data )


}

export {getAllUsers}