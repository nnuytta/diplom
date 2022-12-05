import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/actions/actionCreators/cartActionCreators';


interface ICartItemProps {
    image: string,
    title: string,
    author: string,
    year: string,
    price: string,
    id: string,
    num: number
}

const CartItem = (props: ICartItemProps) => {
    const [itemNum, setItemNum] = useState(1);
    const [disabled, setDisabled] = useState(false);

    const dispatch = useDispatch();

    let increaseNum = () => {
        setItemNum(itemNum + 1);
    }

    let decreaseNum = () => {
        itemNum - 1  > 0 ? setItemNum(itemNum - 1) : setDisabled(true);
    }

    let removeItemFromCart = () => {
        dispatch(removeFromCart(props.id));
    }

    return (
        <div className='cart-item'>
            <div className='book-image'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='book-info-container'>
                <div className='book-title'>{props.title}</div>
                <div className='book-info'>{props.author}, {props.year}</div>
                <div className='controls'>
                    <button className='decrease' onClick={decreaseNum} disabled={disabled}></button>
                    <span>{itemNum}</span>
                    <button className='increase' onClick={increaseNum}></button>
                </div>
            </div>
            <div className='book-price'>{props.price}</div>
            <button className='remove' onClick={removeItemFromCart}></button>
        </div>
    )
}

export default CartItem;