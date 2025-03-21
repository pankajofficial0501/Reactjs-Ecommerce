import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShoecase from './CategoryShoecase'
import Register from './Register'
import LocationMap from './LocationMap'
import About from './About'
import AppSection from './AppSection'
import Sponsor from './Sponsor'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShoecase/>
      <Register/>
      <LocationMap/>
      <About/>
      <AppSection/>
      <Sponsor/>
    </div>
  )
}

export default Home
