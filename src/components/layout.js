
import React from "react";
import Nav from "./navbar";
import Footer from "./footer/footer";



const Layout = ({ children }) => (
  <div>
    <Nav />
    <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;
