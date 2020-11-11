import React from "react";
import DynamicLink from "./dynamic-link";
import NavLinksLeft from "../data/nav-links-left.json";
import NavLinksRight from "../data/nav-links-right.json";


const Nav = () => (
  <nav className="nav">
    <DynamicLink to="/" className=" nav__logo">
    </DynamicLink>

    <ul className="nav__list__left">
      {NavLinksLeft.map((link, index) => {
        return (
          <li key={`nav-item-${index}`} className="nav__item__left">
            <DynamicLink className="nav__link__left" to={link.path}>
              {link.name}
            </DynamicLink>
          </li>
        );
      })}
    </ul>
    <ul className="nav__list__right">
      {NavLinksRight.map((link, index) => {
        return (
          <li key={`nav-item-${index}`} className="nav__item__right">
            <DynamicLink className="nav__link__right" to={link.path}>
              {link.name}
            </DynamicLink>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Nav;