import { TItemActionTypes } from '../../actions/actionCreators/bookItemActionCreators';
import { SETITEM } from '../../actions/actions';

export const initialState: string = ''

const itemReducer = (state = initialState, { type, payload } : TItemActionTypes) => {
    switch(type) {
        case SETITEM: 
            return payload;
        default: return state;
    }
}

export default itemReducer;