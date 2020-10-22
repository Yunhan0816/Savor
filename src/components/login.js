import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// const firebaseConfig = {
//     apiKey: "AIzaSyBsPqwePo9hmTG3H_xCwpc534_ynne1IsU",
//     authDomain: "savor-3e31c.firebaseapp.com",
//     databaseURL: "https://savor-3e31c.firebaseio.com",
//     projectId: "savor-3e31c",
//     storageBucket: "savor-3e31c.appspot.com",
//     messagingSenderId: "641219173895",
//     appId: "1:641219173895:web:9c62c6ce673fe7348d14a2"
// };
//
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

class Login extends React.Component {

    handleSubmit = event => {
        event.preventDefault()
        handleLogin()
    }

    render() {
        if (isLoggedIn()) {
            navigate(`/profile`)
        }

        return (
            <>
                <h1>Log In</h1>
                <form
                    method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                        navigate(`/profile`)
                    }}
                >
                    <input type="submit" value="Log in with Google" />
                </form>
            </>
        )
    }
}

export default Login