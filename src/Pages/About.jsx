import React from 'react'
import Chatbot from '../Chatbot'
import AboutHero from '../AboutSections/AboutHero'
import OurMission from '../AboutSections/OurMission'
import OurVision from '../AboutSections/OurVision'
import WhyIQGalaxy from '../AboutSections/WhyIQGalaxy'
import TeamSection from '../AboutSections/TeamSection'
// import {TranslatedText} from './LanguageChanger'
import Footer from '../Sections/Footer'
const About = () => {
  return (
    // <TranslatedText>
      <div>
        {/* Hero Section */}
        <div className='relative top-[0px]'><AboutHero /></div>
        {/* OurMission */}
        <div className='relative top-[70px]'><OurMission /></div>
        {/* OurVision */}
        <div className='relative top-[70px]'><OurVision /></div>
        {/* WhyIQGalaxy */}
        <div className='relative top-[70px]'><WhyIQGalaxy /></div>
        {/* TeamSection */}
        <div className='relative top-[70px]'><TeamSection /></div>
        {/* Footer */}
        <div className='relative top-[80px]'><Footer /></div>
      </div>
    // </TranslatedText>
  )
}

export default About
