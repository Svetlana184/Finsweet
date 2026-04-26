import React from 'react';
import Subscribe from "../components/common/Subscribe/Subscribe.jsx";
import ServicesInfo from "../components/ServicePage/ServicesInfo/ServicesInfo.jsx";
import ServiceTitle from "../components/ServicePage/ServiceTitle/ServiceTitle.jsx"
import ServiceProcess from '../components/ServicePage/ServiceProcess/ServiceProcess.jsx';


const ServicePage = () => {
  return (
    <>
      <ServiceTitle/>
      <ServiceProcess/>
      <ServicesInfo/>
      <Subscribe/>
    </>
  )
}

export default ServicePage