
export const listCoupons = (state = {
    coupons: []
}, action) => {
    switch (action.type) {
        case 'COUPON_LIST_REQUEST':
            return {
                loading: true,
                coupons: [],
            };

        case 'COUPON_LIST_SUCCESS':
            return {
                loading: false,
                coupons: action.payload,
            };

        case 'COUPON_LIST_FAIL':
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};


export const applyCoupons = (state = {
    validar: []
}, action) => {
    switch (action.type) {

        case 'APPLY_COUPON_SUCCESS':

            const item = state.validar.find((pro) => pro === action.payload)
            if (item) {
                console.log('coupon ja existe')
            } else {
                state.validar.push(action.payload)
            }

        // return {
        //     ...state,
        //     validar: [...state.validar, action.payload] //incrementar o array

        //   };







        default:
            return state;
    }
};

/* REDUCER */
// const applyCoupons = (state = {
//     discout: 0,
// }, action) => {
//     switch (action.type) {
//         case 'COUPON_SUCCESS':
//             console.log("reducers: ", action.payload);
//             return {
//                 ...state,
//                 discout: action.payload - state.discout
//             }
//         default:
//             return state;
//     }
// };

// export default applyCoupons;