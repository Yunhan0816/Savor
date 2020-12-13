import Layout from "../components/layout";
import React from "react";
import style from "../styles/subscription.scss"

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
                    <h1 className = "header">
                        A Monthly meal kit personalized for you.
                    </h1>

                    <div className="outerBox">
                        <h2 className = "choose">Choose your subscription</h2>
                        <p className = "worry">(Don't worry, you can change your subcription anytime)</p>
                        <div className="FreePlan">
                            <h4 className = "title">Free</h4>
                            <h3 className = "price">$0.00</h3>
                            <div className = "freetext">
                                <p> - includes advertisements</p>
                                <p> - Loren Ipsum</p>
                                <p> - Loren Ipsum</p>
                                <p> - Loren Ipsum</p>
                            </div>
                        </div>
                        <div className="PremiumPlan">
                            <h4 className = "title">Free</h4>
                                <h3 className = "price">$0.00</h3>
                                <div className = "premiumtext">
                                    <p> - includes advertisements</p>
                                    <p> - Loren Ipsum</p>
                                    <p> - Loren Ipsum</p>
                                    <p> - Loren Ipsum</p>
                                </div>
                            </div>
                    </div>
                    <button className = "Selectbutton"><a href="/preferences">SELECT</a></button>
                </section>
            </div>
        </div>
    )
}