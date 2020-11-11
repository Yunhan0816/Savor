import React from "react";

const SignUpStart = () => (
  
    <div className="signup-container">

      <h2 className="sign-up-title">$60 Offer - Get $20 Off Each of Your First 3 Boxes!</h2>

      <p className="sign-up-subtitle">Enter your email address and password to get started</p>

      <div className="row">

        <div className="col-12 col-md-7">
          <h5 className="how-it-works">How it works</h5>
          {/* three boxes down here */}
        </div>

        <div className="col-12 col-md-3 email-container">
          <h5 className="titleEmail">Email</h5>
          <input className="inputEmail" type="email"/>
          <button className="btnSignUp" > Sign Up </button>
        </div>

      </div>

  </div>
);

export default SignUpStart;