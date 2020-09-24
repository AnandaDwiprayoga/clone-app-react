import React, { useEffect, useState } from 'react'
import "./style.css";

import db from "./../../config/firebase";
import { StoryReel, MessageSender,Post  } from "./../index";

function Feed() {

    const [posts, setPosts] = useState([]);

    // karena parameter kedua useEffect empty array, akan menjalankan
    // statement di dalamnya satu kali saat komponen ini diload
    useEffect(() => {
        // collection parameter pertama nama db pada cloud firestore firebase
        db.collection('posts')
            .orderBy('timestamp','desc')
            .onSnapshot(snapShot => {
                const postFromDb = snapShot.docs;

                setPosts(postFromDb.map(post => (
                    {id: post.id, data: post.data()}
                ))
            );
         })
    },[]);
    return (
        <div className="feed">
            <StoryReel />  
            <MessageSender />

            {posts.map(post => (
                  <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    username={post.data.username}
                    timestamp={post.data.timestamp}
                    image={post.data.image}
                  />
            ))}
        </div>
    )
}

export default Feed
