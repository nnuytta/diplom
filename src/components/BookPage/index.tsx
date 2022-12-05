import SubscribeForm from '../SubscribeForm';
import post from './../../api.js';
import { useState, useEffect } from 'react'
import { IBookItem } from '../MainPage';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, IBook } from '../../redux/actions/actionCreators/cartActionCreators';

let defaultItem = {
    title: '',
    image: '',
    subtitle: '',
    price: '',
    rating: '',
    authors: '',
    publisher: '',
    language: '',
    desc: '',
    year: '',
    num: 1
}

const BookPage = (props: any) => {

    const [item, setItem] = useState(defaultItem);
    const [itemId, setItemId] = useState('');
    const [favorite, setFavorite] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const book = useSelector((state : any) => state.item);
    
    useEffect(() => {
        setItemId(book);
    }, [])

    useEffect(() => {
        post('https://api.itbook.store/1.0/books/' + '/' + itemId)
        .then((res) => {
            setItem(res);
        });
    }, [itemId])

    let goBack = (): void => {
        navigate('/');
    }

    let addToFavorites = () => {
        setFavorite(!favorite);
    }

    let addItemToCart = () => {
        let bookItem : IBook = {
            price: item.price,
            title: item.title,
            author: item.authors,
            year: item.year,
            id: itemId,
            image: item.image,
            num: 1
        }
        dispatch(addToCart(bookItem));
    }

    return (
        <div className='book-page'>
            <div className='container'>
                <button className='back-button' onClick={goBack}></button>
                <h1 className='page-title'>{item.title}</h1>
                <div className='book-info'>
                    <div>
                        <div className='book-image'>
                            <img src={item.image} alt={item.title} />
                            <button className={favorite ? 'add-to-favorites-button button favorite' : 'add-to-favorites-button button'} onClick={addToFavorites} />
                        </div>
                        <div className='book-main-info'>
                            <div className='book-short-info'>
                                <span className='book-price'>{item.price}</span>
                                <div className='book-rating'>
                                    {
                                        Number(item.rating) === 1 ? <span className='one'></span> :
                                        Number(item.rating) === 2 ? <span className='two'></span> :
                                        Number(item.rating) === 3 ? <span className='three'></span> :
                                        Number(item.rating) === 4 ? <span className='four'></span> :
                                        Number(item.rating) === 5 ? <span className='five'></span> :
                                        null
                                    }
                                </div>
                            </div>
                            <div className='info-field'>
                                <span>Author</span>
                                <span>{item.authors}</span>
                            </div>
                            <div className='info-field'>
                                <span>Publisher</span>
                                <span>{item.publisher}</span>
                            </div>
                            <div className='info-field'>
                                <span>Language</span>
                                <span>{item.language}</span>
                            </div>
                            <div className='info-field'>
                                <span>Year</span>
                                <span>{item.year}</span>
                            </div>
                            <button className='button' onClick={addItemToCart}>Add to cart</button>
                        </div>
                    </div>
                    <div className='book-description'>
                        {item.desc}
                    </div>
                    <div>
                        <a className='social-media-link' href='https://www.facebook.com/' target='_blank'>
                            <img src='/img/facebook.png' alt='facebook' />
                        </a>
                        <a className='social-media-link' href='https://www.twitter.com/' target='_blank'>
                            <img src='/img/twitter.png' alt='twitter' />
                        </a>
                    </div>
                </div>
                <SubscribeForm />
            </div>
        </div>
    )
}

export default BookPage;