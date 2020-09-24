import React from 'react'
import { AccountCircleIcon, Avatar, ChatBubbleOutlineIcon, ExpandMoreIcon, NearMeIcon, ThumbUpIcon } from '../../material-icons'
import "./style.css"

function Post({profilePic, image, starname, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
               <Avatar 
                    src={profilePic}
                    className="post__avatar" />
                <div className="post__top-info">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
