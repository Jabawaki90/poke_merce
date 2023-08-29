import React from "react";
import "./Navbar.scss";
import { Button, Image } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left-container">
        <div className="left">
          <p className="navbar-title-text">POKE</p>
          <p className="navbar-title-text">COMMERCE</p>
        </div>
        <div className="right">
          <Image
            width={80}
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          />
          <Image
            width={80}
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/7.png"
          />
          <Image
            width={80}
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png"
          />
        </div>
      </div>
      <div className="navbar-middle-container">
        <Button className="navbar-button" type="text">
          Profile
        </Button>
        {/* <p>Profile</p> */}
      </div>
      <div className="navbar-right-container">
        <Button className="navbar-button" type="text">
          Sign in
        </Button>
        <FontAwesomeIcon className="logo-cart" icon={faBagShopping} bounce />
      </div>
    </div>
  );
};

export default Navbar;
