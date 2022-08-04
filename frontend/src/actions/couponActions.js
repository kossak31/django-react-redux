/* AXIOS */
import axios from "axios";


/* ACTION CREATOR USED IN HomeScreen COMPONENT */
export const listCoupons = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'COUPON_LIST_REQUEST',
      });

      const { data } = await axios.get(`/api/coupons`);

      dispatch({
        type: 'COUPON_LIST_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'COUPON_LIST_FAIL',
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };



  export const applyCoupons = (data) => (dispatch) => { 

   
      dispatch({
        type: 'APPLY_COUPON_SUCCESS',
        payload: data,
      });
   
     
    
  };
