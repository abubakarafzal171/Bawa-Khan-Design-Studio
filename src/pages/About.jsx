import React from 'react'
import AboutHero from '../components/aboutpage/AboutHero'
import AboutLegacy from '../components/aboutpage/AboutLegacy'
import AboutExpertise from '../components/aboutpage/AboutExpertise'
import AboutGallery from '../components/aboutpage/AboutGallery'
import AboutCTA from '../components/aboutpage/AboutCTA'

const About = () => {
  return (
    <div className='md:pt-20 pt-19'>
    <AboutHero/>
    <AboutLegacy/>
    <AboutExpertise/>
    <AboutGallery/>
    <AboutCTA/>
    </div>
  )
}

export default About