import React, {useState, useContext} from 'react'
import { FacebookContext } from '../../config/contexApi';
import { Avatar, InsertEmoticonIcon, PhotoLibraryIcon, VideocamIcon } from '../../material-icons';
import "./style.css";
import db from "./../../config/firebase";
import firebase from "firebase";

function MessageSender() {
    const [input, setInput] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [[user]] = useContext(FacebookContext);

    const handleSubmit = e => {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            // generate waktu di firebase
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            profilePic : user.photoURL,
            username: user.displayName,
            image: imageUrl || "",
        });
        // clear inputstuff
        setInput("");
        setImageUrl("");        
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top"> 
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text" className="messageSender__input" 
                        placeholder={`Apa yang sedang anda pikirkan ${user.displayName} ?`}/>   
                    <input 
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        type="text" 
                        placeholder="image URL (optional)"/>

                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color : "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon  style={{color : "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon  style={{color : "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
