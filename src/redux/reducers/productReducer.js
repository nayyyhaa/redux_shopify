/* takes current state and actions: change the state */
import { actionTypes } from "../constants/actionTypes";

const initialState = {
    product: [],
}

export const productReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case actionTypes.SET_PRODUCTS: return {...state, product: payload };
        default: return state;
    }
}