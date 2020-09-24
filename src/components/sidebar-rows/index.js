import React from 'react'
import "./style.css";

import { Avatar } from "./../../material-icons";

function SideBarRows({src, Icon, title}) {
    return (
        <div className="sidebarRow"> 
           {src && <Avatar src={src} />}
           {Icon && <Icon/>}

            <h4>{title}</h4>
        </div>
    )
}

export default SideBarRows
