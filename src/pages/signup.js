  
import React from "react";
// import { Link } from "gatsby";
import SignUpStart from "../components/SignUpPage/SignUpStart"
import Layout from "../components/layout";
export default () => (
  <Layout>
    <SignUp />
  </Layout>
);
const SignUp = () => {
  return (
    <div className="page-body">
      <div className="signUp">
        <section className="start-section">
     <SignUpStart />
        </section>
      
      </div>
    </div>
  );
};