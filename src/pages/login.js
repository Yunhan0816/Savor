import React from "react"
import LogInStart from "../components/LogInPage/LogInStart"
import Layout from "../components/layout";
export default () => (
    <Layout>
      <LogIn />
    </Layout>
  );
  const LogIn = () => {
    return (
      <div className="page-body">
        <div className="LogIn">
          <section className="start-section">
       <LogInStart/>
          </section>
        </div>
      </div>
    );
  };