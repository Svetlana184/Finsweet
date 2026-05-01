import React from 'react'
import ServicesParagraph from "../ServicesParagraph/ServicesParagraph"
import useServices from '../../../hooks/getServices';
import useMediaQuery from '../../../hooks/useMediaQuery';

const ServicesInfo = () => {
    const { data, loading, error } = useServices();
    const isMobile = useMediaQuery('(max-width: 425px)');
    let direction = isMobile? "column" : "row";

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


  return (
    <>
    {
      data.map((item, index) => 
      <ServicesParagraph 
        key={item.id_service} 
        id={item.tag} 
        title={item.title} 
        text={item.text} 
        tag={item.tag} 
        img={item.pic_file_name} 
        direction={index%2 == 0 ? direction + "-reverse" : direction} 
        color={index%2 == 0 ? 'rgba(255, 255, 255, 1)' : 'rgba(236, 248, 249, 1)'}/>
    )}
    </>
  )
}

export default ServicesInfo