/* used to combine all the reducers in single reducer */
import { combineReducers } from 'redux';
import { productReducer } from './productReducer';

let allReducers = combineReducers({
    allProduct: productReducer
})

export default allReducers;