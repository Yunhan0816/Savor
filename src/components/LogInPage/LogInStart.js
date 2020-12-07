import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../../services/auth"
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
            navigate(`/profile`)
        }

        return (
  
                <div class="container" >

                <h2 className="Log-in-title">Log In </h2>

                <p className="Log-in-subtitle">Log In with your email and password </p>

                <form>
                    <div class="form-group"> 
                    <label for="email_input" class="titleEmail">Email</label>
                    <input type="email" class="form-control" id="email_input" ></input>
                    </div>
                    <div class="form-group">
                    <label for="password_input" class="titlePassword">Password</label>
                    <input type="password" class="form-control" id="password_input" ></input>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="remember_me_check"></input>
                        <label class="form-check-label textRememberMe" for="remember_me_check">Remember Me</label>
                    </div>
                    <button type="submit" class="btnSignUp"> Log In </button>
                </form>
            </div>
        );
    }
}
export default LogInStart;