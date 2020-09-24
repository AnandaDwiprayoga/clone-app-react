import React from 'react'; 
import Story from "./../story";
import "./style.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://i.ytimg.com/vi/CF_4beStrtk/maxresdefault.jpg"
                profileSrc="https://cdn.cnn.com/cnnnext/dam/assets/160128142407-02-favorite-movie-stars-gettyimages-173720550-super-169.jpg"
                title="Sonny"
            />
            <Story
                image="https://i.ytimg.com/vi/q1RiSCnHypw/maxresdefault.jpg"
                profileSrc="http://www.wallpapersin4k.org/wp-content/uploads/2017/04/Movie-Star-Wallpaper-9.jpg"
                title="Elon"
            />
            <Story
                image="https://i.ytimg.com/vi/c45-OoKDJ-Q/maxresdefault.jpg"
                profileSrc="https://cdn.wallpapersafari.com/58/29/5hIjdY.jpg"
                title="Mark"
            />
            <Story
                image="https://i.ytimg.com/vi/vmzWILlOl0E/maxresdefault.jpg"
                profileSrc="https://www.theblot.com/wp-content/uploads/2014/06/The-10-Best-Female-Movie-Stars-Of-All-Time.jpg"
                title="Wdth"
            />
            <Story
                image="https://i.ytimg.com/vi/vzxip29VekA/maxresdefault.jpg"
                profileSrc="https://www.thewrap.com/wp-content/uploads/2016/06/johansson.jpg"
                title="Fine Thx"
            />
        </div>
    )
}

export default StoryReel
