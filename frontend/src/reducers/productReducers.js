export const listProducts = (state = {
  products: [],
  total: 0,
}, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return {
        loading: true,
        products: [],
        total: 0,
      };



    case 'PRODUCT_LIST_SUCCESS':

      return {
        loading: false,
        products: action.payload,
        total: action.payload.reduce((total, product) => total + Number(product.price), 0),

      };

    case 'PRODUCT_LIST_FAIL':
      return {
        loading: false,
        error: action.payload,
      };



    default:
      return state;
  }
};




export const calculateTotal = (state = {
  subtotal: 0,
}, action) => {
  switch (action.type) {


    case 'TOTAL_SUCCESS':

      return {

        subtotal: action.payload

      };


    default:
      return state;
  }
};