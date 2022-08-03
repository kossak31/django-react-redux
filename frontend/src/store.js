//importar reducers
import listBlogPosts from "./reducers/blogReducers";
import { listProducts, calculateTotal } from "./reducers/productReducers";
import { listCoupons, applyCoupons } from "./reducers/couponReducers";


//combinar reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
    list_Products: listProducts,
    list_Coupons: listCoupons,
    calculate_Total: calculateTotal,
    apply_Coupons: applyCoupons,
});

export default allReducers;