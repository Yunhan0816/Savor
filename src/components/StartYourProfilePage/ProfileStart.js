import React from "react"

class ProfileStart extends React.Component {
    render() {
        return (
        <div className="container">
                    <h1>
                    Welcome!
                    </h1>
                    <div className="outerBox">
                        <h2>Please start your profile</h2>
                        <div className="innerBox">
                            <div className="row">
                              <div className="col-12 col-md-4 ">
                                  First Name
                                  </div>    
                                  <div className="col-12 col-md-4 ">
                                      Last Name
                                  </div>   
                                  <div className="col-12 col-md-4 ">
                                  Date of Birth
                                  </div>  
                                  </div>
                            <div className="row">
                            <div className="col-12 col-md-4 ">
                                  Phone
                                  </div>    
                                  <div className="col-12 col-md-4 ">
                                    Email
                                  </div>          
                           </div>
                        <div>How did you hear about us?</div>
                        </div>
                        <br />
                    </div>
                    <button><a href="/subscription">Next</a></button>
        </div>
        )
    }
}

export default ProfileStart