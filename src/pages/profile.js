import Layout from "../components/layout";
import React from "react";

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
                    <h1>
This is User Profile Page
                    </h1>


                    <button><a href="/preferences">Start</a></button>
                </section>
            </div>
        </div>
    )
}