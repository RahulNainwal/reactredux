import { Add_POST, Delete_Post, Update_post } from '../actionType';
export const addPost = (data) => {
    return {
        type: Add_POST,
        payLoad: data
    }
}
export const deletePost = (data) => {
    return {
        type: Delete_Post,
        payLoad: data
    }
}
export const updatePost = (data) => {
    return {
        type: Update_post,
        payLoad: data
    }
}