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
                        Set your preferences. 
                    </h1>
                    <div className="outerBox">
                        <div>
                            <h4>Buget</h4>
                        </div>

                        <div>
                            <h4>Group Size</h4>
                        </div><div>
                            <h4>Dietary Restrictions</h4>
                        </div>
                    </div>

                    <button><a href="/mealDashboard">Next</a></button>

                </section>
            </div>
        </div>
    )
}