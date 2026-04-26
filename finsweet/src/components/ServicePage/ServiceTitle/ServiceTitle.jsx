import React from 'react';
import {Link} from "react-router-dom";
import styles from "./ServiceTitle.module.scss"
import SimpleButton from '../../common/SimpleButton/SimpleButton';
import arrow from "../../../assets/icons/right_arrow_black.svg"

const ServiceTitle = () => {
  return (
    <section className={styles.service_title}>
        <div className={styles.service_par}>
            <h6>Our Services</h6>
            <h3>We Build Software Solution that Solve Clients Business Challenges</h3>
            <p className={styles.service_par_text}>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
            <SimpleButton name="Request A Quote"/>
        </div>
        <ul>
            <li>
                <Link to="">Technical support</Link>
            </li>
            <li>
                <Link to="">
                    Development
                    <img src={arrow} alt="" />
                </Link>
            </li>
            <li>
                <Link to="">AWS/Azure</Link>
            </li>
            <li>
                <Link to="">Consulting</Link>
            </li>
            <li>
                <Link to="">Information Technology</Link>
            </li>
        </ul>
    </section>
  )
}

export default ServiceTitle