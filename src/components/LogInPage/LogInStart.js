import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../../services/auth"
import style from "./LogInStart.scss"
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

class LogInStart extends React.Component {

    handleSubmit = event => {
        event.preventDefault()
        handleLogin()
    }

    render() {
        if (isLoggedIn()) {
            navigate(`/mealDashboard`)
        }

        return (
            <div class="container" >

                <h2 className="sign-up-title">Log In</h2>
                
                <form method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                        navigate(`/profile`)
                    }}>
                    
                    {/* email */}
                    <div class="form-group"> 
                        <label for="email_input" class="titleEmail">Email</label>
                        <input type="email" class="form-control" id="email_input" ></input>
                    </div>

                    {/* password */}
                    <div class="form-group">
                        <label for="password_input" class="titlePassword">Password</label>
                        <input type="password" class="form-control" id="password_input" ></input>
                    </div>

                    {/* remember me */}
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="remember_me_check"></input>
                        <label class="form-check-label textRememberMe" for="remember_me_check">Remember Me</label>
                    </div>

                    {/* log in */}
                    <button type="submit" class="btnLogin">Log In</button>
                    <input type="submit" class="btnLogin" value="Log in with Google" />

                </form>
            </div>
        );
    }
}
export default LogInStart;