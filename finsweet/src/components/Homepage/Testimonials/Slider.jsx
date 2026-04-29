import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./Slider.module.scss"
import shape from "../../../assets/shapes/sub_2.svg"
import quote from "../../../assets/icons/quote.svg"


import { Pagination } from 'swiper/modules';

const Slider = ({reviews}) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={true}
      className={styles.swiper}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className={styles.swiper_slide}>
            <img className={styles.swiper_quote} src={quote} alt="" />
            <div className={styles.swiper_slide_main}>
                <img className={styles.swiper_shape} src={shape} alt="" />
                <div className={styles.swiper_slide_text}>
                    <p className={styles.swiper_slide_main_text}>{review.text}</p>
                    <div className={styles.swiper_slide_bottom}>
                        <div className={styles.swiper_slide_author}>
                            <img src={review.pic} alt="" />
                            <div>
                                <h6>{review.name}</h6>
                                <p>{review.position}, {review.company}</p>
                            </div>
                        </div>
                        <img src={review.company_logo} alt="" />
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider