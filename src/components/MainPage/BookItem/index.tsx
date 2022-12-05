import {redirect} from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setItem } from '../../../redux/actions/actionCreators/bookItemActionCreators';

interface IBookItemProps {
    title: string,
    imageUrl: string,
    description: string,
    price: string,
    rating: number,
    id: string,
}

const BookItem = (props: IBookItemProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let onItemClick = (): void => {
        dispatch(setItem(props.id))
        navigate('/book');
    }

    return (
        <div className='book' onClick={onItemClick}>
            <div className='book-image'>
                <img src={props.imageUrl} alt={props.title} />
            </div>
            <div className='book-title'>{props.title}</div>
            <div className='book-short-description'>{props.description}</div>
            <div className='book-short-info'>
                <span className='book-price'>{props.price}</span>
            </div>
        </div>
    )
}

export default BookItem;