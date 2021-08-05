/* describes action from actionType: var function which return obj */
import { actionTypes } from "../constants/actionTypes";

export const setProducts = (products) => {
    return ({
        type: actionTypes.SET_PRODUCTS,
        payload: products
    });
}

export const selectedProduct = (product) => {
    return ({
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    })
}

export const removeSelectedProduct = (product) => {
    return ({
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
        payload: product
    })
}