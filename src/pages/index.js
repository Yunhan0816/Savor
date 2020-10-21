import React from "react"
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
          <p>
            The meal kit everyone relies on
          </p>
        </section>
      </div>
    </div>
  )
}