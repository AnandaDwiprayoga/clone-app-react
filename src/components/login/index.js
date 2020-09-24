import React, {useContext} from 'react'
import "./style.css";

import { auth, provider } from "./../../config/firebase";
import { Button } from "./../../material-icons";
import { FacebookContext } from '../../config/contexApi';

function Login() {

    const [ [user, setUser] ] = useContext(FacebookContext);


    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithPopup(provider)
            .then(result => setUser(result.user))
            .catch(error => alert(error));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
    
            <Button  onClick={signIn}>
            Sign In
            </Button>
        </div>
    )
}

export default Login
