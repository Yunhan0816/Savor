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
                        A Monthly meal kit personalized for you.
                    </h1>

                    <div className="outerBox">
                        <h2>Choose your subscription</h2>
                        <p>(Don't worry, you can change your subcription anytime)</p>

                        <div className="row">
                            <div className="col-12 col-md-6 smallBox">
                                <h4>Free</h4>
                                 </div>
                                 <div className="col-12 col-md-6 smallBox">
                                <h4>Premium</h4>
                                 </div>
                        </div>

                    </div>
                    <button><a href="/preferences">Select</a></button>


                </section>
            </div>
        </div>
    )
}