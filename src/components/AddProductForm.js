import React, { useState } from "react";
import styled from "styled-components";
import { useAddProductContext } from "../Contexts/add_product_context";

const AddProductForm = () => {
  const { addProduct } = useAddProductContext();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageUrl: "",
    color: ["#000", "#ffb900"],
    company: "",
    description: "",
    category: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      color: ["#000", "#ffb900"],
    });
    console.log("product data", formData); // You can send this data to your backend or handle it as needed
    addProduct({
      ...formData,
      images: [{ url: formData.imageUrl, public_id: "" }],
    });
    setFormData({
      name: "",
      price: "",
      imageUrl: "",
      color: ["#000", "#ffb900"],
      company: "",
      description: "",
      category: "",
      quantity: "",
    });
  };

  return (
    <Wrapper>
      <div className="section-center">
        <h3>Add Products Here</h3>
        <div className="content">
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                className="form-input"
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={formData.price}
                className="form-input"
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Image URL:
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                className="form-input"
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Company:
              <input
                type="text"
                name="company"
                value={formData.company}
                className="form-input"
                onChange={handleChange}
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                className="form-input"
                onChange={handleChange}
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={formData.category}
                className="form-input"
                onChange={handleChange}
              />
            </label>
            <label>
              Quantity:
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                className="form-input"
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

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
  label {
    margin: 0.5rem 1rem;
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-items: center;
    gap: 1rem; /* Added gap for better spacing */
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
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
    grid-column: 1;
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

export default AddProductForm;
