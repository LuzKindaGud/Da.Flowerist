import React from 'react'
import Navbar from './view/components/navbar'
import Home from './view/pages/home'
import Footer from './view/components/footer'
import CurvedLoop from './view/pages/curvedLoop'
import CTA from './view/pages/CTA'
import ProductSlider from './view/pages/productSlider'
import Introduce from './view/pages/introduce'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <CurvedLoop 
          marqueeText="&#x2022; SALE OFF 36% XMAS"
          speed={1}
          curveAmount={0}
          interactive={true}/>
      <Introduce />
      <ProductSlider />
      <CTA />
      <Footer />
    </>
  )
}

export default App
