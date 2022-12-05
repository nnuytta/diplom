import { ActionCreator } from 'redux';
import { SETPAGE } from '../../actions';

interface ISetPageAction {
    type: typeof SETPAGE,
    payload: number
}

export type TPageActionTypes = ISetPageAction;

export const setPage: ActionCreator<TPageActionTypes> = (page: number) => {
    return (
        {
            type: SETPAGE,
            payload: page
        }
    )
}

