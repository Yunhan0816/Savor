import React from "react";
import Layout from "../components/layout";
import {getUser, isLoggedIn} from "../services/auth";
import Login from "../components/login";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");
// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// const firebaseConfig = {
//   apiKey: "AIzaSyBsPqwePo9hmTG3H_xCwpc534_ynne1IsU",
//   authDomain: "savor-3e31c.firebaseapp.com",
//   databaseURL: "https://savor-3e31c.firebaseio.com",
//   projectId: "savor-3e31c",
//   storageBucket: "savor-3e31c.appspot.com",
//   messagingSenderId: "641219173895",
//   appId: "1:641219173895:web:f897d37ebd34e5d78d14a2"
// };
//
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export default () => (
    <Layout>
      <App />
    </Layout>
);

const App = () =>{
  return (
      <div className="page-body">
        <div className="login">
          <section className="start-section">
            <h1>
              Welcome to Savor, {isLoggedIn() ? getUser().displayName : "but you are not logged in"}.
            </h1>
            <p>
              {isLoggedIn() ? (
                  <>
                    You are logged in, {getUser().displayName}!
                    {/*so check your {" "}*/}
                    {/*<Link to={"/app/profile"}>profile</Link>*/}
                  </>
              ): (
                  <Login>
                    You should log in to view restricted content.
                  </Login>
              )}
            </p>
          </section>
        </div>
      </div>
  )};