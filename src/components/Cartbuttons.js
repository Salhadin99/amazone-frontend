import React from 'react'
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../Contexts/products_context'

function CartButtons() {
  const { closeSidebar} = useProductsContext()

  return (
     <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' onClick={closeSidebar}>
        <span className='cart-container'>
          <FaShoppingCart />
          <sup className='cart-value'>12</sup>
        </span>
        Cart
      </Link>
      <button type="button" className='auth-btn'>
        Login <FaUserPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

   .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.8rem;
      margin-left: 58px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: 20px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`

export default CartButtons
