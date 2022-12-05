import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  IBook } from '../../redux/actions/actionCreators/cartActionCreators';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';


const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    const cart = useSelector((state : any) => state.cart);

    let getTotalPrice = () => {
        const total = cartItems.reduce((accumulator: number, currentValue: IBook) => accumulator + Number(currentValue.price.slice(1)), 0);
        return total;
    }

    let goBack = (): void => {
        navigate('/');
    }

    useEffect(() => {
        setCartItems(cart);
    }, [cart])
    
    return (
        <div className='container'>
            <button className='back-button' onClick={goBack}></button>
            <h1 className='page-title'>
                { cartItems.length ? 'Your cart' : 'No items yet' }
            </h1>
            {
                cartItems && cartItems.map((item: IBook) => <CartItem image={item.image} title={item.title}
                author={item.author} year={item.year} price={item.price} num={item.num} id={item.id} key={item.id}/>)
            }
            {
                cartItems.length !== 0 && 
                <div className='check-out-container'>
                    <div>
                        <div className='total-price'>
                            <span>TOTAL:</span>
                            <span>${getTotalPrice()}</span>
                        </div>
                        <button className='button check-out'>Check out</button>
                    </div>
                </div> 
            }
        </div>
    )
}


export default CartPage;