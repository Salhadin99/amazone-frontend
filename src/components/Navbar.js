import React from "react";
import "./Navbar.css";
import styled from "styled-components";
import { FaBars, FaPlus, FaProductHunt, FaUserPlus } from "react-icons/fa";
import { links } from "../Utils/Constants";
import { Link } from "react-router-dom";
import CartButtons from "./Cartbuttons";
import { useProductsContext } from "../Contexts/products_context";
import { useUserContext } from "../Contexts/user_context";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src="/download.jpg" alt="comfy-sloth"></img>
          </Link>
          <ul className="nav-links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
            {myUser && (
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            )}
          </ul>
          <CartButtons />
          <Link to="/addproduct" className="cart-btn">
            Add-Product
            <span className="cart-container">
              <FaProductHunt />
            </span>
          </Link>
          <button className="nav-toggle" type="button" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
`;

export default Navbar;
