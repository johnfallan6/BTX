import React from 'react'
import NavBar from './NavBar'
import Hero from "./Hero";
import About from "./About";
import ProductCards from "./ProductCards";
import Contact from "./Contact";

const Main = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <ProductCards />
        <About />
        <Contact />
    </div>
  )
}

export default Main