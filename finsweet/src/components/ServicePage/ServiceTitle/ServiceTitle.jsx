import React from 'react';
import {Link} from "react-router-dom";
import styles from "./ServiceTitle.module.scss"
import SimpleButton from '../../common/SimpleButton/SimpleButton';
import arrow from "../../../assets/icons/right_arrow_black.svg"
import Title1 from "../../common/Title1/Title1"
import SimpleTag from '../../common/SimpleTag/SimpleTag';
import SimpleText from '../../common/SimpleText/SimpleText';

const ServiceTitle = () => {
  return (
    <section className={styles.service_title}>
        <div className={styles.service_par}>
            <SimpleTag tag="Our Services"/>
            <Title1 new_styles={{width: '85%'}} name="We Build Software Solution that Solve Clients Business Challenges"/>
            <SimpleText text="Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic."/>
            <SimpleButton name="Request A Quote"/>
        </div>
        <ul>
            <li>
                <Link to="#support">Technical support</Link>
            </li>
            <li>
                <Link to="#development">
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