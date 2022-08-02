//importar reducers
import listBlogPosts from "./reducers/blogReducers";
import { listProducts } from "./reducers/productReducers";
import { listCoupons, applyCoupons } from "./reducers/couponReducers";


//combinar reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
    list_Products: listProducts,
    list_Coupons: listCoupons,
    apply_Coupons: applyCoupons,
});

export default allReducers;