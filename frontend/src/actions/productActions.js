/* AXIOS */
import axios from "axios";


/* ACTION CREATOR USED IN HomeScreen COMPONENT */
export const listProducts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'PRODUCT_LIST_REQUEST',
    });

    const { data } = await axios.get(`/api/produtos`);

    dispatch({
      type: 'PRODUCT_LIST_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_LIST_FAIL',
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }

};


/* ACTION CREATOR USED IN HomeScreen COMPONENT */
export const calculateTotal = (data) => (dispatch, getState) => {

  dispatch({
    type: 'TOTAL_SUCCESS',
    payload: data,
  });



};