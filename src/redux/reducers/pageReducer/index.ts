import { TPageActionTypes } from '../../actions/actionCreators/pageActionCreators';
import { SETPAGE } from '../../actions/actions';

export const initialState = 1

const pageReducer = (state = initialState, { type, payload } : TPageActionTypes) => {
    switch(type) {
        case SETPAGE: 
            return payload;
        default: return state;
    }
}

export default pageReducer;