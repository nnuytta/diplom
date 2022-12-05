import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import pageReducer from './pageReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    item: itemReducer,
    page: pageReducer,
    cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;