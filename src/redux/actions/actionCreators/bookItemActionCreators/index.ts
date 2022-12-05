import { ActionCreator } from 'redux';
import { SETITEM } from '../../actions';

interface ISetItemAction {
    type: typeof SETITEM,
    payload: string
}

export type TItemActionTypes = ISetItemAction;

export const setItem: ActionCreator<TItemActionTypes> = (bookId: string) => {
    return (
        {
            type: SETITEM,
            payload: bookId
        }
    )
}

