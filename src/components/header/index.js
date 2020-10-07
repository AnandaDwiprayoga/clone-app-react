import React from 'react'
import "./style.css";

// import material
import { Avatar,AccessTimeIcon,SearchIcon,HelpOutlineIcon } from "./../../material-icons";

function Header() {
    return (
        <header className="header">
             <div className="header__left">
                    <Avatar 
                        className="header__avatar"
                        alt="Ananda"
                        // src={user?.photoUrl}
                        >
                    </Avatar>
                    <AccessTimeIcon />
             </div>
             <div className="header__search">
                 <SearchIcon />
                 <input type="text" placeholder="search channel"/>
             </div>
             <div className="header__right">
                 <HelpOutlineIcon />
             </div>
        </header>
    )
};

export default Header;