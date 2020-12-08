import React from "react"
import style from "./ProfileStart.scss"

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
                                <input type="text" className = "input"/>
                                <input type="text" className = "secondinput"/>
                                <input type="text" className = "thirdinput" />
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4 ">
                                    Phone
                                </div>    
                                <div className="col-12 col-md-4 ">
                                    Email
                                </div>          
                           </div>
                           <div className="row">
                                <input type="text" className = "input"/>
                                <input type="text" className = "fourthinput"/>
                            </div>
                           <div className = "row">
                               How did you hear about us?
                            </div>
                        </div>
                        <br />
                    </div>
                    <button type="submit" class="nextbutton">Next</button>
        </div>
        )
    }
}

export default ProfileStart