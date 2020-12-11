import React from "react";
import MealPlan from "../mealPage/MealPlan"
import Recommendation from "./Recommendation"
import ThirdColumn from "../mealPage/ThirdColumn"
const Meal = () => (
  
    <div className="mealpage-container">


      {/* the title, subtitle, and checkbox */}
      <h2 className="mealpage-title">Meal Plan</h2>

      <div class="container" >
        <p className="mealpage-subtitle">Use Existing Meal Plan?</p>

        <div class="checkbox-container">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="yesCheckbox" value="option1"></input>
            <label class="form-check-label" for="inlineCheckbox1">Yes</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="noCheckbox" value="option2"></input>
            <label class="form-check-label" for="inlineCheckbox2">No</label>
          </div>
        </div>

      </div>


      {/* the three columns */}
      <div className="row">

        <div className="col-12 col-md-4 mealplan">
            <MealPlan />
        </div>

        <div className="col-12 col-md-3 recommendations">
            <Recommendation/>
        </div>

         <div className="col-12 col-md-4 thirdcolumn ">
            <ThirdColumn />
         </div>

      </div>

      <br/>
      <button className="btnSignUp" >Order </button>

    </div>

  
);

export default Meal;