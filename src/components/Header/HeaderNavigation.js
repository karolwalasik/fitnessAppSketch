import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/">
          Diary
        </NavLink>
      </li>
      <li>
        <NavLink to="records">Records</NavLink>
      </li>
    </ul>
  </nav>
);
export default HeaderNavigation;
