import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY,
    SUB_QUANTITY,
    EMPTY_CART
} from './constants'

const initialState = {
    carts : []
};

export default (state = initialState.carts, action) => {
    let doesItemExist;
    switch (action.type) {
        case ADD_TO_CART:
            doesItemExist = false;
            const newState = state.filter((item) => {
                if (item.id === action.data.id) {
                    item.qty += 1;
                    doesItemExist = true;
                }
                return item;
            });
            if (doesItemExist) {
                return newState;
            }

            return [...state, {...action.data, qty: 1}];
        case UPDATE_QUANTITY:
            doesItemExist = false;
            const newState2 = state.filter((item) => {
                if (item.id === action.id) {
                    item.qty = action.qty;
                    doesItemExist = true;
                }
                return item;
            });
            if (doesItemExist) {
                return newState2;
            }
            return false;
        case REMOVE_FROM_CART:
            const newStates = state.filter((item,index) => {
                if (item.id !== action.id) {
                    return item;
                }
            });

            return [];
        case EMPTY_CART:
            return [];
        default:
            return state;
    }
};
