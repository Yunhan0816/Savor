import React from "react"
import { auth, db} from "../../services/auth";


import style from "./ProfileStart.scss"

class ProfileStart extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          firstName: '',
          lastName: '',
          dob:'',
          phone:'',
          email:'',
          hearAboutUs:'',
          currentUser: {},
        }
    
        this.userRef = db.collection('users');
        this.handleFN = this.handleFN.bind(this);
        this.handleLN = this.handleLN.bind(this);
        this.handleDOB = this.handleDOB.bind(this);
        this.handlePhone = this.handleDOB.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleHearUs = this.handleHearUs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
        auth.onAuthStateChanged((currentUser) => {
          this.setState({ currentUser: currentUser || {} });      
          
          if (currentUser) {
            // Init current user Refs
            this.userRef = db.collection('users').child(currentUser.uid);
    
          } else {
            this.setState({ firstName: '', lastName: '',dob:'', phone:'', email:'', hearAboutUs:'' });
          }
        });
      }

      handleFN(event) {
        const firstName = event.target.value;
        this.setState({ firstName })
      }

      handleLN(event) {
        const lastName = event.target.value;
        this.setState({ lastName })
      }
      
      handleDOB(event) {
        const dob = event.target.value;
        this.setState({ dob })
      }

      handlePhone(event) {
        const phone = event.target.value;
        this.setState({ phone })
      }
      handleEmail(event) {
        const email = event.target.value;
        this.setState({email })
      }
      handleHearUs(event) {
        const hearAboutUs = event.target.value;
        this.setState({ hearAboutUs })
      } 
      handleSubmit(event) {
        event.preventDefault();
        const {currentUser, firstName, lastName, dob, phone, email, hearAboutUs } = this.state;
        this.userRef.add({
          uid: currentUser.uid,
          firstName: firstName,
          lastName: lastName,
          dob: dob,
          phone: phone,
          email: email,
          hearAboutUs: hearAboutUs
        });
      }
    

    render() {
        return (
        <div className="firstcontainer">
                    <div className="outerBox">
                        <h2 className = "start">Please start your profile</h2>
                        <p className = "below"> (fill out sections below) </p>
                        <div className="innerBox">
                            <div className = "Space"></div>
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
                                <input type="text" className = "input" onChange={this.handleFN}/>
                                <input type="text" className = "secondinput" onChange={this.handleLN}/>
                                <input type="text" className = "thirdinput" onChange={this.handleDOB}/>
                            </div>
                            <div className = "Space"></div>
                            <div className="row">
                                <div className="col-12 col-md-4 ">
                                    Phone
                                </div>    
                                <div className="col-12 col-md-4 ">
                                    Email
                                </div>          
                           </div>
                           <div className="row">
                                <input type="text" className = "input" onChange={this.handlePhone}/>
                                <input type="text" className = "fourthinput" onChange={this.handleEmail}/>
                            </div>
                            <div className = "Space"></div>
                           <div className = "secondrow">
                               How did you hear about us?
                            </div>
                            <div className = "secondrow"> 
                                <select>
                                    <option > Through a Friend </option>
                                    <option > Social Media </option>
                                    <option > Search Engine(Google, Yahoo, etc.) </option>
                                    <option > Other </option>
                                </select>
                            </div>
                            <div className = "LastSpace"></div>
                        </div>
                        <br />
                        <a href="/subscription"><button type="submit" class="nextbutton" onClick={this.handleSubmit} onClick="location.href='/subscription';" >Next</button></a>
                    </div>
        </div>
        )
    }
}

export default ProfileStart