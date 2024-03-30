import React from "react";
import styled from "styled-components";
import { useCartContext } from "../Contexts/cart_context";
import { useUserContext } from "../Contexts/user_context";
import { formatprice } from "../Utils/helpers";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Contexts/auth_context";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { isAuthenticated } = useAuthContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatprice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatprice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{" "}
            <span>{formatprice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {isAuthenticated ? (
          <Link to="/checkout" className="btn">
            proceed to checkout
          </Link>
        ) : (
          <Link type="button" className="btn" to="/login">
            login
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
