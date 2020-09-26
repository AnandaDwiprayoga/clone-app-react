import React, { useEffect, useState } from 'react';
import "./style.css";

// import materials icon
import { Avatar } from "./../../material-icons";
import { db } from '../../config/firebase';
import firebase from "firebase";

function Post({postId,user, username, imageUrl, caption}) {  
    const [ comments, setComments ] = useState([]);
    const [ comment, setComment ] = useState([]);

    useEffect(() => {
        let unsubscribe;
        if(postId){
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments") 
                .onSnapshot(snapshot => {
                    setComments(snapshot.docs.map(com => com.data()))
                })
        }

        return () => {
            unsubscribe();
        }
    }, [postId])

    const postComment = e => {
        e.preventDefault();

        db
          .collection("posts")
          .doc(postId)
          .collection("comments")
          .add({
              text : comment,
              username : user.displayName,
              timestamp : firebase.firestore.FieldValue.serverTimestamp()
          });

        setComment("");
    }


    return (
    <div className="post">
        <div className="post__header">
            <Avatar  
                className="post__avatar"
                alt={username}
                src="/static/images/avatar/1.jpg"
                />
            <h3>{username}</h3>
        </div>
            <img
                className="post__image"
                src={imageUrl} alt={username}/>
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4> 

            <div className="post__comments">
                {comments.map(com => {
                    console.log(com)
                    return <p key={Math.random * 1000}>
                        <strong>{com.username}</strong> {com.text}
                    </p>
                })}
            </div>

            {user && (
                <form className="post__comment-box">
                    <input  
                        type="text"
                        className="post__input"
                        placeholder="Add a comment..."
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        />
                    <button 
                        className="post__button"
                        disabled={!comment}
                        type="submit"
                        onClick={postComment}
                        >Post
                    </button>
                </form>
                )}
        </div>
    )
}

export default Post
