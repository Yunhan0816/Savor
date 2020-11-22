import React from "react";
// import { Link } from "gatsby";
import Meal from "../components/mealPage/Meal"
import Layout from "../components/layout";
export default () => (
  <Layout>
    <MealDashboard />
  </Layout>
);
const MealDashboard = () => {
  return (
    <div className="page-body">
      <div className="meal-dashboard">
        <section className="start-section">
     <Meal />
        </section>
      
      </div>
    </div>
  );
};