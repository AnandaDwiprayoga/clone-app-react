import React from 'react'
import  { Link } from 'react-router-dom';
import './style.css';

// import material icons
import { 
    SearchIcon, 
    ExpandMoreIcon, 
    Avatar, 
    LanguageIcon 
} from "./../../material-icons";



function  Header() {
    return (
        <header className="header">
            <Link to="/">
                <img 
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" 
                    alt="airbnb-logo"/>
            </Link>

            <div className="header__center">
                <input type="text"/>
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </header>
    )
}

export default Header
