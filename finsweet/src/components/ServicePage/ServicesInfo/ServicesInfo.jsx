import React, { useState } from 'react'
import {servicesInfo} from "../../../mockupData/servicesData";
import ServicesParagraph from "../ServicesParagraph/ServicesParagraph"

const ServicesInfo = () => {
    const [data, setData] = useState(servicesInfo);
  return (
    <>
    {data.map(item => <ServicesParagraph key={item.id} id={item.id_name} title={item.title} text={item.text} tag={item.tag} img={item.img} direction={item.direction} color={item.color}/>)}
    </>
  )
}

export default ServicesInfo