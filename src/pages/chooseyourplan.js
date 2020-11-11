import React from "react";
import ChooseYourPlanStart from "../components/SignUpPage/ChooseYourPlanStart"
import Layout from "../components/layout";
export default () => (
  <Layout>
    <ChooseYourPlan/>
  </Layout>
);
const ChooseYourPlan = () => {
  return (
    <div className="page-body">
      <div className="ChooseYourPlan">
        <section className="start-section">
     <ChooseYourPlanStart />
        </section>
      </div>
    </div>
  );
};