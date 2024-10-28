
import React from 'react'
import Hero from './components/Hero'
import Camp from './components/Camp'
import Guide from './components/Guide'
import Features from './components/Features'
import GetApp from './components/GetApp'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div className='h-auto'>
    <Hero/>
    <Camp/>
    <Guide/>
    <Features/>
    <GetApp/>
    <Footer/>
    </div>
  )
}

export default Home