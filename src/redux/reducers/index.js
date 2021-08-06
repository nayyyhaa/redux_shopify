/* used to combine all the reducers in single reducer */
import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';

let allReducers = combineReducers({
    allProduct: productReducer,
    selectedProduct: selectedProductReducer
})

export default allReducers;