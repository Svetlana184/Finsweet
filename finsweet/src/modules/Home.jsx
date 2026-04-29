import React from 'react'
import Subscribe from '../components/common/Subscribe/Subscribe'
import LatestNews from '../components/Homepage/LatestNews/LatestNews'
import ServiceProcess from '../components/ServicePage/ServiceProcess/ServiceProcess'
import Transform from '../components/Homepage/Transform/Transform'
import AboutUs from '../components/Homepage/AboutUs/AboutUs'
import Expertise from '../components/Homepage/Expertise/Expertise'
import ServicesSection from "../components/Homepage/ServicesSection/ServicesSection"
import Testimonials from '../components/Homepage/Testimonials/Testimonials'
import { people, reviews } from '../mockupData/reviewData'


const Home = () => {
  return (
    <>
     <Transform/>
     <AboutUs/>
     <Expertise/>
     <ServicesSection/>
     <ServiceProcess color='white'/>
     <Testimonials people={people} reviews={reviews} stats="30+"/>
     <LatestNews/>
     <Subscribe/>
    </>
  )
}

export default Home