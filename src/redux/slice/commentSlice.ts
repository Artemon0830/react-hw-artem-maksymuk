import { createAsyncThunk, createSlice, isRejected } from "@reduxjs/toolkit";
import { commentService } from "../../services/api.service";
import { AxiosError } from "axios";
import { ICommentModel } from "../../Models/ICommentModel";

type CommentSliceType = {
    comments: ICommentModel[];
    isLoaded: boolean;
    error: string;
    comment: ICommentModel | null;
};

const initialState: CommentSliceType = {
    comments: [],
    isLoaded: false,
    error: '',
    comment: null,
};

let loadComments = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI) => {
    try {
        let comments = await commentService.getAll();
        return thunkAPI.fulfillWithValue(comments);
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
});

let loadComment = createAsyncThunk('userSlice/loadUser', async (postId: number, thunkAPI) => {
    try {
        let comment = await commentService.getByPostId(postId);
        return thunkAPI.fulfillWithValue(comment); // Return the comment object
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
});

export const commentSlice = createSlice({
    name: "commentSliceName",
    initialState: initialState,
    reducers: {
        fillUser: (state, action) => {
            state.comment = action.payload;
        },
        refillUsers: (state, action) => {
            state.comments = action.payload;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action) => {
                state.comments = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadComment.fulfilled, (state, action) => {
                state.comment = action.payload;
            })
            .addMatcher(
                isRejected(loadComments, loadComment),
                (state, action) => {
                    state.error = action.payload as string;
                }
            ),
});

export const commentActions = {
    ...commentSlice.actions,
    loadComments,
    loadComment,
};

