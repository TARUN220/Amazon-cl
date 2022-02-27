import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { useAuth } from './firebase';


function Header() {

    const currentUser = useAuth();

    const [{ basket }] = useStateValue();

    console.log(basket);

    return (
        <nav className='header'>
            <Link to="/login">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=''/>
            </Link>

            {/* Search box */}
            <div className="header__search"> 
                <input type="text" className="header__searchInput"  />
                <SearchIcon className="header__searchIcon" /> 
            </div> 

            {/* 3 Links */}
            <div className="header__nav">
                <Link to="/login" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Hello {currentUser?.email}</span>
                        <span className='header__optionLineTwo'>Sign in</span>
                    </div>
                </Link>
 
                <Link to="/" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& orders</span>
                    </div>
                </Link>

                <Link to="/" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
                </Link>
                 
            </div> 


        </nav>

    )
}

export default Header

