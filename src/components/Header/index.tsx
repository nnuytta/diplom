import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BurgerMenu from './BurgerMenu/index.js';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const textInput = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    let onUserFavoritesClick = (): void => {

    }

    let onUserCartClick = (): void => {
        navigate('/cart');
    }

    let onUserProfileClick = (): void => {
        
    }

    let onBurgerClick = (): void => {
        setShowMenu(!showMenu);
    }

    let find = () => {
        if (textInput?.current?.value) {
            let event = new CustomEvent('search', {
                detail: textInput?.current?.value
            })

            window.dispatchEvent(event);

            navigate('/');
        }
    }

    let findItemsByEnter = (e: any) => {
        if (e && e.key === 'Enter') {
            find();
        }
    }

    let findItems = () => {
        find();
    }

    return (
        <>
        <div className='header'>
            <div className='header-logo' />
            <div className='header-search'>
                <input type='text' className='input search-input' placeholder='Search' ref={textInput} onKeyDown={findItemsByEnter} />
                <div className='search-icon' onClick={findItems}/>
            </div>
            <div className='header-control'>
                <button className='user-favorites' onClick={onUserFavoritesClick} />
                <button className='user-cart' onClick={onUserCartClick} />
                <button className='user-profile' onClick={onUserProfileClick} />
                <button className={ showMenu ?  'close' : 'burger' } onClick={onBurgerClick} />
            </div>
        </div>
        { showMenu && 
            <>
                <div className='blur'></div>
                <BurgerMenu text='log out' onUserFavoritesClick={onUserFavoritesClick} 
                onSearchClick={findItems} onKeyDown={findItemsByEnter} onUserCartClick={onUserCartClick}
                onUserProfileClick={onUserProfileClick} />
            </> 
        }
        </>
    )
}

export default Header;