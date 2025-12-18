import React from 'react'
import HomeHero from '../components/homepage/HomeHero'
import HomeStats from '../components/homepage/HomeStats'
import HomeAbout from '../components/homepage/HomeAbout'
import HomeServices from '../components/homepage/HomeServices'
import HomeProjects from '../components/homepage/HomeProjects'
import HomeFaqs from '../components/homepage/HomeFaqs'
import HomeReviews from '../components/homepage/HomeReviews'

const Home = () => {
  return (
    <div className='md:pt-30 pt-19'>
      <HomeHero/>
      <HomeStats/>
      <HomeAbout/>
      <HomeServices/>
      <HomeProjects/>
      <HomeFaqs/>
      <HomeReviews/>
    </div>
  )
}

export default Home