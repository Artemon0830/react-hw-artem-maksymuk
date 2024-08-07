import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPostModel} from "../../Models/IPostModel";
import {postService} from "../../services/api.service";
import {AxiosError} from "axios";
type PostSliceType = {
    posts:IPostModel[],
    postsOfUser:(userId:number)=>IPostModel[],
    post:IPostModel | null
}
let initState:PostSliceType= {posts: [],
    postsOfUser:()=>[],
    post:null}
let loadPosts = createAsyncThunk('postSlice/loadPosts', async (_,thunkAPI)=> {
    try {
        let posts = await postService.getAll();
        return thunkAPI.fulfillWithValue(posts);
    }catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
})

export const postSlice = createSlice({
    name: "postSlice",
    initialState:initState,
    reducers:{
        fillPosts:(state,action)=>{
            state.posts = action.payload;
        }
    },
    extraReducers:builder => builder.addCase(loadPosts.fulfilled,(state,action)=> {
        state.posts = action.payload;
    })

})
export const postActions = {
    ...postSlice.actions,
    loadPosts,

}