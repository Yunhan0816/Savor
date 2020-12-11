import Layout from "../components/layout";
import ProfileStart from "../components/StartYourProfilePage/ProfileStart"
import style from "../styles/profile.scss";
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
                    <h1 className = "welcome">
                    Welcome! 
                    </h1>
                    <ProfileStart/>
                </section>
            </div>
        </div>
    )
}