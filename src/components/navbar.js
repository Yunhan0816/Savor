import React from "react";
import DynamicLink from "./dynamic-link";
import NavLinks from "../data/nav-links.json";


const Nav = () => (
  <nav className="nav">
    <DynamicLink to="/" className=" nav__logo">
    </DynamicLink>

    <ul className="nav__list">
      {NavLinks.map((link, index) => {
        return (
          <li key={`nav-item-${index}`} className="nav__item">
            <DynamicLink className="nav__link" to={link.path}>
              {link.name}
            </DynamicLink>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Nav;