import React from 'react'
import "./style.css";

// import icons
import { FiberManualRecordIcon,CreateIcon, InsertCommentIcon, InboxIcon, DraftsIcon, BookmarkBorderIcon, AppsIcon, PeopleAltIcon, FileCopyIcon, ExpandLessIcon, ExpandMoreIcon, AddIcon } from "./../../material-icons";
// import component 
import { SidebarOption } from "./../index";

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar__header">
               <div className="sidebar__info">
                    <h2>Ananda Dwi Prayoga</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Ananda Prayoga
                    </h3>
               </div>
                <CreateIcon />
            </div>   
            <SidebarOption Icon={InsertCommentIcon} title="Thread" />
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Show more" />
            <hr/>
            <SidebarOption Icon={AddIcon} title="Add Channel" />
        </div>
    );
};

export default Sidebar;