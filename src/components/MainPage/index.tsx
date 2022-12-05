import { useState, useEffect } from 'react';
import BookItem from './BookItem';
import SubscribeForm from '../SubscribeForm';
import PageNav from '../PageNav';
import post from './../../api.js';
import { useDispatch, useSelector } from 'react-redux';

interface IMainPageProps {
    itemList: number[],
}

export interface IBookItem {
    title: string,
    image: string,
    subtitle: string,
    price: string,
    rating: number
    isbn13: string;
}

const MainPage = () => {
    const [itemList, setItemList] = useState([]);
    const [pageTitle, setPageTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    
    const page = useSelector((state: any) => state.page);

    useEffect(() => {
        post('https://api.itbook.store/1.0/search/%7Bword-to-search%7D/%7Bpage-number-for-pagination%7D')
        .then(res => {
            setItemList(res.books)});
    }, [])

    let updatePage = () => {
        post('https://api.itbook.store/1.0/search/%7Bword-to-search%7D/%7Bpage-number-for-pagination%7D' + '/' + page)
        .then(res => {
            setItemList(res.books)});
    }

    let showSearchResults = (e: any) => {
        post('https://api.itbook.store/1.0/search/слово' + '/' + e.detail)
        .then(res => {
            setItemList(res.books);
            setPageTitle(`\'${e.detail}\' Search results`);
            setSubtitle(`Found ${res.books.length} books`);
        })
    }

    useEffect(() => {
        window.addEventListener('search', (e) => showSearchResults(e));

        return () => {
            window.removeEventListener('search', (e) => showSearchResults(e))
        }
    }, [])

    useEffect(() => {
        updatePage();
    },[page])

    return (
        <>
            <div className='main-page'>
                <div className='container'>
                    <h1 className='page-title'>{pageTitle || 'New Releases Books'}</h1>
                    {
                        subtitle && <div className='subtitle'>{subtitle}</div>
                    }
                    <div className='item-container'>
                        { 
                            itemList && itemList.map((item : IBookItem) => <BookItem title={item.title} imageUrl={item.image} key={item.isbn13}
                                price={item.price} description={item.subtitle} rating={item.rating} id={item.isbn13} />)
                        }
                    </div>
                </div>
            </div>
            <PageNav pageNum={100} currentPage={1} />
            <SubscribeForm />
        </>
    )
}

export default MainPage;