import React from "react";
import HeaderNavigation from "./HeaderNavigation";

const Header = ({openModalFn}) => (
  <header>
    <h3>Fitness App</h3>
    <HeaderNavigation />
    <button onClick={openModalFn}>add</button>
  </header>
);

export default Header;
