import React, { useEffect, useState } from 'react';
import "./App.css";

// import components
import { ImageUpload, Post } from "./components";
// import db
import { auth, db } from './config/firebase';
// import material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input } from "./material-icons";
import Modal from "@material-ui/core/Modal";
import InstagramEmbed from "react-instagram-embed";


// material ui styling
function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
// material ui styling end

function App() {
  //material ui setting
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [ posts, setPosts ] = useState([]);
  const [ open, setOpen ] = useState(false);
  const [ openSignIn, setOpenSignIn ] = useState(false);
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ user, setUser ] = useState(null);

  const signUp = event => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        return authUser.user.updateProfile({
          displayName: username
        })
      })
      .then(() => setOpen(false))
      .catch(error => alert(error.message));

 
  }

  const signIn = event => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => setOpenSignIn(false))
      .catch(error => alert(error.message))

    
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      // user sudah melakukan login
      if(authUser){
        setUser(authUser);

        // check apakah user memiliki displayname
        if(authUser.displayName){

        }else{
          return authUser.updateProfile({
            displayName: username
          })
        }
      }
      // usere belum login
      else{
        setUser(null);
      }
    })

    return () => {
      unsubscribe();
    }
  },[user, username])

  useEffect(() => {
      // nama collection dari firestore cloud firebase
      db.collection("posts")
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
           const postsFromDb = snapshot.docs;

           //membuat array lagi dengan menggunakan map, karena yang ingin diambil hanya datannya saja
           setPosts(postsFromDb.map(post => (
             {
               id: post.id,
               data : post.data()
             }
           )));
        })
  },[]);
  return (
    <div className="app">


        

        {/* meterial ui modal */}
        <Modal
          open={open}
          onClose={() => setOpen(false)}
        >
          <div style={modalStyle} className={classes.paper}>
            <form className="app__sign-up">
              <center>
                <img 
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                    alt="Instagram Logo" 
                    className="modal__img"/>  
              </center>

              <Input 
                placeholder="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                
              <Input 
                placeholder="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

              <Input 
                placeholder="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />

              <Button onClick={signUp}>Sign Up</Button>
            </form>
          </div>
        </Modal>

        <Modal
          open={openSignIn}
          onClose={() => setOpenSignIn(false)}
        >
          <div style={modalStyle} className={classes.paper}>
            <form className="app__sign-up">
              <center>
                <img 
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                    alt="Instagram Logo" 
                    className="modal__img"/>  
              </center>
                              
              <Input 
                placeholder="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

              <Input 
                placeholder="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />

              <Button onClick={signIn}>Sign In</Button>
            </form>
          </div>
        </Modal>

        <div className="app__header">
          <img 
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
              alt="Instagram Logo" 
              className="app__header-img"/>  

          {user ? ( 
            <Button 
              onClick={() => auth.signOut()}
              >Log Out  
            </Button >
          ) : (
            <div className="app__open-login">
              <Button 
                onClick={() => setOpenSignIn(true)}
                >Sign In  
              </Button>
              <Button 
                onClick={() => setOpen(true)}
                >Sign Up  
              </Button>
            </div>
          )}
        </div>  

        <div className="app__upload-feed">
            {user  ? (
              <ImageUpload username={user.displayName}/>
            ) : (
              <h3>Login to upload and comments</h3>
            )}
        </div>

        <div className="app__posts">
          <div className="app__posts-left">
              {posts.map(({id, data : post}) => (
                  <Post 
                    key={id}
                    postId={id}
                    user={user}
                    username={post.username}
                    caption={post.caption}
                    imageUrl={post.imageUrl}
                  />
              ))}
          </div>
          <div className="app__posts-right">
            <InstagramEmbed
                url='https://www.instagram.com/p/CDA2q6IDGha/'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
          </div>
        </div>
        
       
    </div>
  );
}

export default App;




