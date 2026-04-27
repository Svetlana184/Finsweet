import React from 'react'
import Subscribe from '../components/common/Subscribe/Subscribe'
import JobTitle from '../components/CareerPage/JobTitle/JobTitle'
import {jobData} from "../mockupData/jobData"

const InnerCareerPage = () => {
  return (
    <>
      <JobTitle job_description={jobData}/>
      <Subscribe/>
    </>
  )
}

export default InnerCareerPage