import React from "react"
import { auth, db} from "../../services/auth";



class PreferenceStart extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          budget: '',
          groupSize: '',
          dietaryRes:'',
        }
    
        this.userRef = db.collection('users');
        this.handleBudget = this.handleBudget.bind(this);
        this.handleGroupSize = this.handleGroupSize.bind(this);
        this.handleDietaryRes = this.handleDietaryRes.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
        auth.onAuthStateChanged((currentUser) => {
          this.setState({ currentUser: currentUser || {} });      
          
          if (currentUser) {
            // Init current user Refs
            this.userRef = db.collection('users').child(currentUser.uid);
    
          } else {
            this.setState({ budget: '', groupSize: '',dietaryRes:'' });
          }
        });
      }

      handleBudget(event) {
        const budget = event.target.value;
        this.setState({ budget })
      }

      handleGroupSize(event) {
        const groupSize = event.target.value;
        this.setState({ groupSize })
      }
      
      handleDietaryRes(event) {
        const dietaryRes = event.target.value;
        this.setState({ dietaryRes })
      }

     
      handleSubmit(event) {
        event.preventDefault();
        const {currentUser, budget, groupSize, dietaryRes,} = this.state;
        this.userRef.add({
          uid: currentUser.uid,
          budget:budget,
          groupSize:groupSize,
        dietaryRes: dietaryRes
        });
      }
    

    render() {
        return (
       <div>
            <div className="preferences-container">
            <h2 className="setPreferences-title">Set your preferences.</h2>
   
            {/* Container for Preferences (what's inside the box) */}
            <div className="container">
                <h4 className="budget-title">Budget</h4>

                {/* Input for Budget */}
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" onChange={this.handleBudget}></input>
                    <div class="input-group-append">
                        <span class="input-group-text">.00</span>
                    </div>
                </div>


                <h4 className="groupSize-title">Group Size</h4>

                {/* Input for Group Size */}
                <div class="form-group groupSizeForm">
                    <input type="number" class="form-control groupSizeInput" id="inputGroupSize" placeholder="Enter Your Size"onChange={this.handleGroupSize}></input>
                </div>


                 <h4 className="dietaryRes-title">Dietary Restrictions</h4>

                 {/* The add icon */}
                 {/* <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                    <circle cx="17.5" cy="17.5" r="16.5" fill="#ED7D21"/>
                    </g>
                    <path d="M15.9698 16.38V9.78H19.0298V16.38H25.6298V19.44H19.0298V26.04H15.9698V19.44H9.36977V16.38H15.9698Z" fill="white"/>
                    <defs>
                    <filter id="filter0_d" x="0" y="0" width="39" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="1.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    </defs>
                </svg> */}
                
                {/* Dietary Restrictions Options */}
                <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1" onchange={this.handleDietaryRes}>
                    <option>Gluten Free</option>
                    <option>Gluten Sensitivity</option>
                    <option>Graham Diet</option>
                    {/* <option>4</option>
                    <option>5</option> */}
                    </select>
                </div>

                {/* Add Dietary Restriction button */}
                {/* <button className="addBtn">Add</button> */}

            </div>

            {/* Next Button to go to Meal Dashboard */}
            <div className="container-button">
                <button className="nextBtn" onClick={this.handleSubmit} onClick="location.href='/mealDashboard';"><a href="/mealDashboard">Next</a></button>
            
            </div>

    </div>
    </div>
        )
    }
}

export default PreferenceStart