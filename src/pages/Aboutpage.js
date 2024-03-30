import React from "react";
import PageHero from "../components/PageHero";
import styled from "styled-components";

function Aboutpage() {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src="/spacejoy-umAXneH4GhA-unsplash.jpg" alt=" nice desk" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem aut repellat optio! Architecto minus debitis, quaerat
            repellat tenetur, ad laudantium eveniet autem consequuntur neque,
            fugiat adipisci esse ipsum sapiente. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Doloribus architecto molestias quos
            deserunt? Id rerum aperiam officia beatae quis corporis facere
            blanditiis ratione nostrum laboriosam eligendi, vitae ab. Molestias,
            atque.
          </p>
        </article>
      </Wrapper>
    </main>
  );
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Aboutpage;
