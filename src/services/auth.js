import {navigate} from "@reach/router";
const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBsPqwePo9hmTG3H_xCwpc534_ynne1IsU",
    authDomain: "savor-3e31c.firebaseapp.com",
    databaseURL: "https://savor-3e31c.firebaseio.com",
    projectId: "savor-3e31c",
    storageBucket: "savor-3e31c.appspot.com",
    messagingSenderId: "641219173895",
    appId: "1:641219173895:web:f897d37ebd34e5d78d14a2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const getUser = () => firebase.auth().currentUser;

export const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
    });
}

export const isLoggedIn = () => {
    const user = firebase.auth().currentUser
    if (user === null) return false
    else return true
}

export const logout = () => {
    firebase.auth().signOut().then(_ => {
        // Sign-out successful.
        console.log("User was successfully logged out.")
    });
        navigate('/')
        .catch(function(error) {
        // An error happened.
        console.log(`An error occurred when attempting to sign out. The error was: ${error.message}`);
    });
}