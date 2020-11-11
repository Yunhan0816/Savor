import React from "react";

const SignUpStart = () => (

    // <div className="signup-container">
    //   <h1 className="sign-up-title">$60 Offer - Get $20 Off Each of Your First 3 Boxes!</h1>
    // </div>
    <div className="signup-container">

      <h2 className="sign-up-title">$60 Offer - Get $20 Off Each of Your First 3 Boxes!</h2>

      <p className="sign-up-subtitle">Enter your email address and password to get started</p>

      <div className="row">

        <div className="col-12 col-md-6">
          <h5 className="how-it-works">How it works</h5>
          {/* three boxes down here */}
        </div>

        <div className="col-12 col-md-6">
          <h5 className="login">Email</h5>
          <input type="email"/>

        </div>

      </div>

  </div>
);

export default SignUpStart;