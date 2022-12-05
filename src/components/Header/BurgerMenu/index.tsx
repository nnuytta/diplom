interface IBurgerMenuProps {
    onKeyDown: (e: any) => void,
    onSearchClick: () => void,
    onUserFavoritesClick: () => void,
    onUserCartClick: () => void,
    onUserProfileClick: () => void,
    text: string
}

const BurgerMenu = (props: IBurgerMenuProps) => {
    return (
        <div className='burger-menu'>
            <div>
                <div className='header-search'>
                    <input type='text' className='input search-input' placeholder='Search' onKeyDown={props.onKeyDown} />
                    <div className='search-icon' onClick={props.onSearchClick}/>
                </div>
                <button className='user-favorites-menu-button' onClick={props.onUserFavoritesClick}>Favorites</button>
                <button className='user-cart-menu-button' onClick={props.onUserCartClick}>Cart</button>
                <button className='button' onClick={props.onUserProfileClick}>{props.text}</button>
            </div>
        </div>
    )
}

export default BurgerMenu;