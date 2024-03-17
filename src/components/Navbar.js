import React from 'react';
import "./Navbar.css"
import styled from 'styled-components';
import { FaBars } from "react-icons/fa";
import { links } from '../Utils/Constants';
import { Link } from 'react-router-dom';
import CartButtons from './Cartbuttons';
import { useProductsContext } from '../Contexts/products_context'


function Navbar() {
  const { openSidebar} = useProductsContext()

  return (
    <NavContainer> 
        <div className="nav-center">
            <div className="nav-header">
                    <Link to='/'>
                        <img src='/download.jpg' alt='comfy-sloth'></img>
                    </Link>
                  <ul className="nav-links">
                        {links.map((link)=>{
                            const {id, text , url } = link
                            return (
                                <li key={id}>
                                    {/* {text} */}
                                    <Link to={url}>{text}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <CartButtons/>
                  <button className='nav-toggle' type='button' onClick={openSidebar}>
                    <FaBars/>
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
`;

export default Navbar;
