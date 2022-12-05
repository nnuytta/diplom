import { useState, useEffect } from 'react';
import useWindowSize from '../.././hooks/useWindowSize';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/actions/actionCreators/pageActionCreators';


interface IPageNav {
    pageNum: number
    currentPage: number
}

const PageNav = (props: IPageNav) => {
    const [currentPage, setCurrentPage] = useState(props.currentPage);
    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledPrev, setDisabledPrev] = useState(false);
    const [pages, setPages] = useState([0]);
    const [currentPages, setCurrentPages] = useState([1, 2, 3]);
    const windowSize = useWindowSize();

    const dispatch = useDispatch();

    const page = useSelector((state : any) => state.page);


    let updatePageNav = () => {
        dispatch(setPage(page));
        setCurrentPage(page);
        updatePages();
    }

    useEffect(() => {
        updatePageNav();
    }, [page]);


    useEffect(() => {
        let p: number[] = [];
        for (let i = 1; i <= props.pageNum; i++) {
            p.push(i);
        }
        setPages(p);
    }, []);


    let updatePages = () => {
        if (windowSize.width && windowSize.width < 660) {
            if (currentPage !== 1 && !currentPages.includes(currentPage)) {
                setCurrentPages(pages.slice(currentPage - 1, currentPage))
            } 
            if (currentPage === 1 && !currentPages.includes(currentPage)) {
                setCurrentPages(pages.slice(0, 2))
            }
        } else {
            if (currentPage !== 1 && !currentPages.includes(currentPage)) {
                setCurrentPages(pages.slice(currentPage - 1, currentPage + 2))
            } 
            if (currentPage === 1 && !currentPages.includes(currentPage)) {
                setCurrentPages(pages.slice(0, 3))
            }
            if (currentPage + 2 === props.pageNum && !currentPages.includes(currentPage)) {
                setCurrentPages(pages.slice(currentPage-1))
            }
            if (currentPage + 2 === props.pageNum) {
                setCurrentPages(pages.slice(currentPage-1))
            }
            if (currentPage === props.pageNum) {
                setCurrentPages(pages.slice(currentPage-3))
            }    
        }
    }

    useEffect(() => {
        updatePages();
    }, [currentPage])

    useEffect(() => {
        currentPage - 1 < 1 ? setDisabledPrev(true) : setDisabledPrev(false);
        currentPage + 1 > props.pageNum ? setDisabledNext(true) : setDisabledNext(false);
    }, [currentPage]);

    let toPrevPage = () => {
        if (currentPage - 1 >= 1) {
            dispatch(setPage(currentPage - 1));
            setCurrentPage(currentPage - 1);
        }         
    }

    let toNextPage = () => {
        if (currentPage + 1 <= props.pageNum) {
            dispatch(setPage(currentPage + 1));
            setCurrentPage(currentPage + 1);
        } 
    }

    let goToPage = (item: number) => {
        dispatch(setPage(item));
        setCurrentPage(item);
    }

    return (
        <div className='page-nav'>
            <button className='page-nav-button back' onClick={toPrevPage} disabled={disabledPrev}>Prev</button>
            <div className='page-controls'>
                {
                    !currentPages.includes(1) && 
                    <>
                        <div onClick={() => goToPage(1)}>1</div>
                        <div className='dots'>...</div>
                    </>
                }
                {
                    currentPages.map(item => {
                        return <div onClick={() => goToPage(item)} className={currentPage === item ? 'current-page' : ''} key={item}>{item}</div>
                    }) 
                }
                {
                    !currentPages.includes(props.pageNum) && 
                    <>
                        <div className='dots'>...</div>
                        <div onClick={() => goToPage(props.pageNum)}>{props.pageNum}</div>
                    </>
                }
            </div>
            <button className='page-nav-button forward' onClick={toNextPage} disabled={disabledNext}>Next</button>
        </div>
    )
}

export default PageNav;