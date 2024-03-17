import React from 'react'
import PageHero from '../components/PageHero'
import styled from 'styled-components'


function Productspage() {
  return (
    <main>
      <PageHero title='products'/>
      <Wrapper>
        <h1>Product</h1>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`
export default Productspage