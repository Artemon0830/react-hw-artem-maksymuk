import axios from 'axios';
import {baseUrl, urls} from "../Constants/urls";
import {IUserModel} from "../Models/IUserModel";
import {IPostModel} from "../Models/IPostModel";

let axiosInstance = axios.create({
    baseURL: baseUrl,
});

export const userService = {
    getAll: async (): Promise<IUserModel[]> => {
        let response = await axiosInstance.get<IUserModel[]>(urls.users.base);
        return response.data;
    },
    getById: async (id: number): Promise<IUserModel> => {
        let response = await axiosInstance.get<IUserModel>(urls.users.byId(id));
        return response.data;
    }
}
export const postService = {
    getAll: async (): Promise<IPostModel[]> => {
        let response = await axiosInstance.get<IPostModel[]>(urls.posts.base);
        return response.data;
    },
    getById: async (id: number): Promise<IPostModel> => {
        let response = await axiosInstance.get<IPostModel>(urls.posts.byId(id));
        return response.data;
    }
}
