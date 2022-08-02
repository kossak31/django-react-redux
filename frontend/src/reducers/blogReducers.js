/* ACTION TYPES */
import {
    BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,
    BLOG_LIST_FAIL,
} from "../constants/blogConstants";

/* REDUCER USED IN HomeScreen COMPONENT */
const listBlogPosts = (state = {
    person: [],
    total: 0,
}, action) => {
    switch (action.type) {
        case BLOG_LIST_REQUEST:
            return {
                loading: true,
                person: []

            };

        case BLOG_LIST_SUCCESS:

            let array_prices = action.payload.map(person => person.price)
            var total_price = array_prices.map(Number);
            let total = total_price.reduce((a, b) => a + b)



            return {

                loading: false,
                person: action.payload,
                total: total
            };

        case BLOG_LIST_FAIL:

            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default listBlogPosts;