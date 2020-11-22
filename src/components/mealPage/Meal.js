import React from "react";
import MealPlan from "../mealPage/MealPlan"
import Recommendation from "../mealPage/Recommendation"
import ThirdColumn from "../mealPage/ThirdColumn"
const Meal = () => (
  
    <div className="mealpage-container">

      <h2 className="mealpage-title">Meal Plan</h2>

      <p className="mealpage-subtitle">Use Existing Meal Plan?</p>

      <div className="row">

        <div className="col-12 col-md-4 mealplan">
          <MealPlan />
        </div>

        <div className="col-12 col-md-3 recommendations">
         <Recommendation />
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