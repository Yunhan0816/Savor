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
                        This will be a user's profile page.
                    </h1>
                </section>
            </div>
        </div>
    )
}