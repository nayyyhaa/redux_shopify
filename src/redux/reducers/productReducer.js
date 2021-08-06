/* takes current state and actions: change the state */
import { actionTypes } from "../constants/actionTypes";

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case actionTypes.SET_PRODUCTS: return {...state, products: payload };
        default: return state;
    }
}

export const selectedProductReducer = (state = {}, action) => {
    let {type, payload} = action;
    switch(type) {
        case actionTypes.SELECTED_PRODUCT: return {...state, ...payload };
        case actionTypes.REMOVE_SELECTED_PRODUCT: return {};
        default: return state;
    }
}