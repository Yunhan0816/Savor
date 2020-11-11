import React from "react";
import Layout from "../components/layout";

// export default function Home() {
//   return <div>Homepage</div>
// }
export default () => (
  <Layout>
    <App />
  </Layout>
);

const App = () =>{
  return (
    <div className="page-body">
      <div className="home">
        <section className="start-section">
          <div className="textbox">
            <h1>
              The meal kit everyone relies on.
            </h1>
            <div className="learn-more-container">
              <button>Learn More</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}