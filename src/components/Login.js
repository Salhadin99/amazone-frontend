import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useAuthContext } from "../Contexts/auth_context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Implement your form validation and login logic here
    // You can access email and password state variables here

    // Example validation
    if (!email || !password) {
      console.error("Email and password are required");
      return;
    }

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    // Assuming you have a login API endpoint at localhost:3000/users/login
    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
    })
      .then((response) => response.json()) // Parse response as JSON
      .then((data) => {
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        navigate("/");
      }) // Redirect to homepage on success)
      .catch((error) => console.error("Login error:", error));
  };

  return (
    <Wrapper>
      <div className="section-center">
        <h3>Sign up here </h3>
        <div className="content">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="email"
              placeholder="Enter email"
              className="form-input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Enter password"
              className="form-input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

// import React from "react";
// import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;
export default Login;
