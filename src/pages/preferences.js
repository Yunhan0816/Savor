import Layout from "../components/layout";
import React from "react";
import PreferenceStart from "../components/PreferencePage/PreferenceStart";

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

                  <PreferenceStart /> 

                    
                </section>
            </div>
        </div>
    )
}