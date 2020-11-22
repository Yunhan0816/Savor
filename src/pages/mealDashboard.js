import React from "react";
// import { Link } from "gatsby";
import Meal from "../components/mealPage/Meal"
import Layout from "../components/layout";
export default () => (
  <Layout>
    <SignUp />
  </Layout>
);
const SignUp = () => {
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