import React from 'react'
import Subscribe from '../components/common/Subscribe/Subscribe'
import JobTitle from '../components/CareerPage/JobTitle/JobTitle'
import {jobData} from "../mockupData/jobData"
import JobDetails from '../components/CareerPage/JobDetails/JobDetails'
import { details, requirements, responsibilities } from '../mockupData/jobData';
import Apply from '../components/CareerPage/Apply/Apply'

const InnerCareerPage = () => {
  return (
    <>
      <JobTitle job_description={jobData}/>
      <JobDetails details={details} requirements={requirements} responsibilities={responsibilities}/>
      <Apply/>
      <Subscribe/>
    </>
  )
}

export default InnerCareerPage