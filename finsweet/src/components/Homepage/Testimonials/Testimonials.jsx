import React from 'react'
import Slider from './Slider'
import styles from './Testimonials.module.scss'
import Title1 from "../../common/Title1/Title1"
import SimpleTextDark from '../../common/SimpleTextDark/SimpleTextDark'

const Testimonials = ({people, reviews, stats}) => {
  return (
    <section className={styles.testimonials}>
        <div className={styles.testimonials_text}>
            <div className={styles.square}></div>
            <Title1 name="Our customers love what we do"/>
            <h5>Transform your idea into reality with finsweet</h5>
            <SimpleTextDark text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
            <ul>
                {people.map(item => <li key={item.id}><img src={item.pic} alt="" /></li>)}
            </ul>
            <h6>{stats} Customer Reviews</h6>
        </div>
        <Slider reviews={reviews} />
    </section>
  )
}

export default Testimonials