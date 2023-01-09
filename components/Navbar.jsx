import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { TbShirt } from "react-icons/tb";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import logo from "./../public/static/autodraw 1_9_2023.png"

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p id="logo-primary" className="logo">
        {/* <img  src={logo} width={25}
              height={25}
              className="product-image"/> */}
        <TbShirt width={25}/>
        <Link classname="navbar-logo" href="/">   B A R R A C K S</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
