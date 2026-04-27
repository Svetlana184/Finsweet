import React from 'react'
import Expertise from "../components/Homepage/Expertise/Expertise"
import Subscribe from "../components/common/Subscribe/Subscribe"
import LogoBar from '../components/CompanyPage/LogoBar/LogoBar'
import CompanyHeader from '../components/CompanyPage/CompanyHeader/CompanyHeader'
import Story from '../components/CompanyPage/Story/Story'
import Vision from '../components/CompanyPage/Vision/Vision'
import Teamwork from '../components/CompanyPage/Teamwork/Teamwork'

const CompanyPage = () => {
  return (
    <>
      <CompanyHeader/>
      <Story/>
      <LogoBar/>
      <Expertise/>
      <Vision/>
      <Teamwork/>
      <Subscribe/>
    </>
  )
}

export default CompanyPage