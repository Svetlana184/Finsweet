import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import styles from "./AboutUs.module.scss"
import about_1 from "../../../assets/home/about_1.png"
import about_2 from "../../../assets/home/about_2.png"
import about_3 from "../../../assets/home/about_3.png"
import shape_vert from "../../../assets/shapes/about_shape.svg"
import shape_hor from "../../../assets/shapes/about_vert.svg"
import Title1 from '../../common/Title1/Title1';
import Title2 from '../../common/Title2/Title2';
import SimpleLink from "../../common/SimpleLink/SimpleLink"
import SimpleText from '../../common/SimpleText/SimpleText';
import SimpleTag from "../../common/SimpleTag/SimpleTag"

const AboutUs = () => {
    const [data, setData] = useState(null);
    //const [svgUrl, setSvgUrl] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/api/metrics')
            .then(res => {
                const stepsData = res.data;
                setData(stepsData);
                console.log(stepsData);
            })
            .catch(console.error);
    }, []);

    return (
        <section className={styles.about_us}>
            <SimpleTag tag="ABOUT US"/>
            <div className={styles.about_us_title}>
                <Title1 name="The company leads entire webdesign process from concept to delivery." />
                <div>
                    <Title2 name="The Era Of Technology."/>
                    <SimpleText text="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. "/>
                </div>
            </div>
            <div className={styles.about_us_images}>
                <img src={about_1} alt="" />
                <img src={about_2} alt="" />
                <div className={styles.about_us_image_last}>
                    <img src={about_3} alt="" />
                    <img src={shape_vert} alt="" />
                </div>
            </div>
            <div className={styles.about_us_bottom}>
                <ul>
                    {data && data.map(item => 
                    <li key={item.id_metric}>
                        <h5>{item.value}</h5>
                        <img src={shape_hor} alt="" />
                        <p>{item.description}</p>
                    </li>)}     
                </ul>
                <SimpleLink path="/company" text="Read about us"/>
            </div>
        </section>
    );
};

export default AboutUs;