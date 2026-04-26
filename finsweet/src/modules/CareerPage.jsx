import React from 'react';
import Subscribe from "../components/common/Subscribe/Subscribe"
import CareerHeader from '../components/CareerPage/CareerHeader/CareerHeader';
import Culture from '../components/CareerPage/Culture/Culture';

const CareerPage = () => {
  return (
    <>
      <CareerHeader/>
      <Culture/>
      <Subscribe/>
    </>
  )
}

export default CareerPage