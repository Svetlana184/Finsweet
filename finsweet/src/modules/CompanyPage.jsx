import React from 'react'
import Expertise from "../components/Homepage/Expertise/Expertise"
import Subscribe from "../components/common/Subscribe/Subscribe"
import LogoBar from '../components/CompanyPage/LogoBar/LogoBar'
import CompanyHeader from '../components/CompanyPage/CompanyHeader/CompanyHeader'

const CompanyPage = () => {
  return (
    <>
      <CompanyHeader/>
      <LogoBar/>
      <Expertise/>
      <Subscribe/>
    </>
  )
}

export default CompanyPage