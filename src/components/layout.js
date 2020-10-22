
import React from "react";
import Nav from "./navbar";
import Footer from "./footer/footer";

import "../styles/main.scss";


const Layout = ({ children }) => (
  <div>
    <Nav />
    <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;
