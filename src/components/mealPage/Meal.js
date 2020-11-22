import React from "react";

const Meal = () => (
  
    <div className="mealpage-container">

      <h2 className="mealpage-title">Meal Plan</h2>

      <p className="mealpage-subtitle">Use Existing Meal Plan?</p>

      <div className="row">

        <div className="col-12 col-md-4 mealplan">
         <div className="mealplan-title">Meal Plan</div>
         <div classname="mealplan-date">Sunday, 24 May</div>
        </div>

        <div className="col-12 col-md-3 recommendations">
        <div className="recommendation-title">Recommendations</div>
 
         </div>  
         
          <div className="col-12 col-md-4 thirdcolumn ">
         <div className="budget">
         <div className="budget-title">Recommendations</div>

         </div>
         <div className="groupSize">
         <div className="groupsize-title">Group Size</div>
        
         </div>
         <div className="dietaryRes">
         <div className="dietary-title">Dietary Restrictions</div>

         </div>
         </div>
        </div>
        <br/>
        <button className="btnSignUp" >Order </button>

      </div>

  
);

export default Meal;