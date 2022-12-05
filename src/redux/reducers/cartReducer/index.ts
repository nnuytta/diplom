import { TCartActionTypes } from '../../actions/actionCreators/cartActionCreators';
import { ADDTOCART, REMOVEFROMCART } from '../../actions/actions';
import { IBook } from '../../actions/actionCreators/cartActionCreators';

export const initialState: IBook[] = [];

const cartReducer = (state = initialState, { type, payload } : TCartActionTypes) => {
    switch(type) {
        case ADDTOCART: 
            return [...state, payload];
        case REMOVEFROMCART: 
            return state.filter((item: IBook) => item.id !== payload);
        default: return state;
    }
}

export default cartReducer;