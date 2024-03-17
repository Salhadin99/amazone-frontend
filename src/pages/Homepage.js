import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Services from '../components/Services'
import Contact from '../components/Contact'
import { ProductsProvider } from '../Contexts/products_context'
// import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <main>
      <Hero/>
      <ProductsProvider><FeaturedProducts/></ProductsProvider>
      <Services/>
      <Contact/>
    </main>
  )
}

export default Homepage