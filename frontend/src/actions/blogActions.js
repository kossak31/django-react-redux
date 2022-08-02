/* AXIOS */
import axios from "axios";


/* ACTION TYPES */
import {
    BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,
    BLOG_LIST_FAIL,
} from "../constants/blogConstants";


/* ACTION CREATOR USED IN HomeScreen COMPONENT */
export const listBlogPosts = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: BLOG_LIST_REQUEST,

        });

     

        const { data } = await axios.get(`/api/produtos`);
        //console.log("data", data);
        dispatch({
            type: BLOG_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: BLOG_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
