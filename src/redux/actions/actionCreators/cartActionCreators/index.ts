import { ActionCreator } from 'redux';
import { ADDTOCART, REMOVEFROMCART } from '../../actions';

interface IAddToCartAction {
    type: typeof ADDTOCART,
    payload: IBook
}

interface IRemoveFromCartAction {
    type: typeof REMOVEFROMCART,
    payload: string
}

export interface IBook {
    price: string,
    title: string,
    image: string,
    author: string,
    year: string,
    id: string,
    num: number
}

export type TCartActionTypes = IAddToCartAction | IRemoveFromCartAction;

export const addToCart: ActionCreator<TCartActionTypes> = (item: IBook) => {
    return (
        {
            type: ADDTOCART,
            payload: item
        }
    )
}

export const removeFromCart: ActionCreator<TCartActionTypes> = (itemId: string) => {
    return (
        {
            type: REMOVEFROMCART,
            payload: itemId
        }
    )
}