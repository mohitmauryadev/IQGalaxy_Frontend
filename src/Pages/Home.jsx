import HomeHero from '../Sections/HomeHero'
import HomeConnection from '../Sections/HomeConnection'
import HomeAbout from '../Sections/HomeAbout'
import Features from '../Sections/Features'
import HomeHowItWork from '../Sections/HomeHowItWork'
import Rewards from '../Sections/Rewards'
import ParentsTeachers from '../Sections/ParentsTeachers'
import DemoPreview from '../Sections/DemoPreview'
import Testimonials from '../Sections/Testimonials'
import CommunityStats from '../Sections/CommunityStats' 
import FAQSection from '../Sections/FAQSection'   
import CTASection from '../Sections/CTASection'
import Footer from '../Sections/Footer'
import FloatingIcon from '../Sections/FloatingIcon'
const Home = () => {
  return (
    <div className=''>
      <div className='flex flex-col'>
        {/* Hero section */}
        <div className='relative top-[0px]'><HomeHero /></div>
        {/* <h1 className='relative top-[100px] text-2xl font-bold text-center'><span className='text-[#007bff]'>Why choose</span><span className='text-[#ffc107]'> IQGalaxy</span> ?</h1> */}
        <div className='relative top-[80px] mb-[50px]'><HomeConnection/></div>
        <div className='relative top-[80px]'><HomeAbout/></div>
        <div className='relative top-[80px]'><Features/></div>
        <div className='relative top-[80px]'><HomeHowItWork/></div>
        <div className='relative top-[80px]'><Rewards/></div>
        <div className='relative top-[80px]'><ParentsTeachers/></div>
        {/* <div className='relative top-[80px]'><FloatingIcon/></div> */}
        <div className='relative top-[80px]'><DemoPreview/></div>
        <div className='relative top-[80px]'><Testimonials/></div>
        <div className='relative top-[80px]'><CommunityStats/></div>
        <div className='relative top-[80px]'><FAQSection/></div>
        <div className='relative top-[80px]'><CTASection/></div>
        <div className='relative top-[80px]'><Footer/></div>
      </div>
    </div>
  )
}

export default Home
