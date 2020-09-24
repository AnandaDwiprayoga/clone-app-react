import React, {useContext} from 'react'
import './style.css';

import { SearchIcon, IconButton, HomeIcon, FlagIcon, SubscriptionsOutlined, StorefrontOutlinedIcon, SupervisedUserCircleIcon, Avatar, AddIcon, ForumIcon, NotificationsActiveIcon, ExpandMoreIcon } from "./../../material-icons";
import { FacebookContext } from '../../config/contexApi';

function  Header() {

    const [[user]] = useContext(FacebookContext);  
    console.log(user);

    return (
        <header className="header">
            <div className="header__left">
                <img 
                    src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png" 
                    alt=""/>

                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>

            <div className="header__center">
                <div className="header__option--active">
                     <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                     <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                     <SubscriptionsOutlined fontSize="large"/>
                </div>
                <div className="header__option">
                     <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                     <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar  src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </header>
    )
}

export default Header
