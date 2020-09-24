import React, {useContext} from 'react'
import { SideBarRows } from './../../components';
import "./style.css";

import { ChatIcon, ExpandMoreIcon, LocalHospitalIcon,EmojiFlagsIcon,StorefrontIcon, VideoLibraryIcon ,PeopleIcon } from "./../../material-icons";
import { FacebookContext } from '../../config/contexApi';

function Sidebar() {
    const [[user]] = useContext(FacebookContext);
    
    return (
        <div className="sidebarRows">
            <SideBarRows src={user.photoURL} title={user.displayName}/>
            <SideBarRows Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SideBarRows Icon={EmojiFlagsIcon} title="Pages"/>
            <SideBarRows Icon={PeopleIcon} title="Friends"/>
            <SideBarRows Icon={ChatIcon} title="Messanger"/>
            <SideBarRows Icon={StorefrontIcon} title="Marketplace"/>
            <SideBarRows Icon={VideoLibraryIcon} title="Videos"/>
            <SideBarRows Icon={ExpandMoreIcon} title="Marketplace"/>
        </div>
    )
}

export default Sidebar
