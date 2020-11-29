import React from "react";

const SignUpStart = () => (
  
    <div class="container" >

      <h2 className="sign-up-title">Sign Up</h2>

      <p className="sign-up-subtitle">Sign up with your email or phone number and create a password to get started.</p>

      <form>
        <div class="form-group"> 
          <label for="email_input" class="titleEmail">Email</label>
          <input type="email" class="form-control" id="email_input" ></input>
        </div>
        <div class="form-group">
          <label for="phone_number_input" class="titlePhoneNumber">Phone Number</label>
          <input type="number" class="form-control" id="phone_number_input" ></input>
        </div>
        <div class="form-group">
          <label for="password_input" class="titlePassword">Password</label>
          <input type="password" class="form-control" id="password_input" ></input>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="remember_me_check"></input>
            <label class="form-check-label textRememberMe" for="remember_me_check">Remember Me</label>
        </div>
        <button type="submit" class="btnSignUp">Sign Up</button>
      </form>

      {/* <div className="row">

        <div className="col-12 col-md-7">
          <h5 className="how-it-works">How it works</h5>
          three boxes down here
        </div>

        <div className="col-12 col-md-3 email-container">
          <h5 className="titleEmail">Email</h5>
          <input className="inputEmail" type="email"/>
          <button className="btnSignUp" > Sign Up </button>
        </div>

      </div> */}

  </div>
);

export default SignUpStart;