import Layout from "../components/layout";
import ProfileStart from "../components/StartYourProfilePage/ProfileStart"
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
                    Welcome! 
                    </h1>
                    <ProfileStart/>
                </section>
            </div>
        </div>
    )
}