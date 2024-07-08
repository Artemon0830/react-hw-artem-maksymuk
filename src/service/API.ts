import axios, {AxiosResponse} from "axios";
import {IPropsForm} from "../module/IPropsForm";



let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{"Content-Type":"application/json"}
});
let instance = axios.create({baseURL:'https://jsonplaceholder.typicode.com',
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'}}
);
const postsOfUsers = async ():Promise<IPropsForm[]> => {
    return await axiosInstance.get('/posts').then((response :AxiosResponse<IPropsForm[]>)=>response.data);
}
const postAdd = async (formDataProps: IPropsForm):Promise<IPropsForm[]> => {
    return await instance.get('/posts').then((response :AxiosResponse<IPropsForm[]>)=>response.data);
}
export {postsOfUsers,postAdd};