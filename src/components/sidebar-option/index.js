import React from 'react'
import "./style.css";

function SidebarOption({Icon, title}) {
    return (
        <div className="sidebar-option">
            { Icon && <Icon className="sidebar-option__icon"></Icon> }
            { Icon ? <h3>{title}</h3> : <h3 className="sidebar-option__channel"><span className="sidebar-option__hash">#</span> {title}</h3> }
        </div>
    ); 
};

export default SidebarOption;