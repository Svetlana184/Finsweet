import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import styles from "./AboutUs.module.scss"
import about_1 from "../../../assets/home/about_1.png"
import about_2 from "../../../assets/home/about_2.png"
import about_3 from "../../../assets/home/about_3.png"
import shape_vert from "../../../assets/shapes/about_shape.svg"
import shape_hor from "../../../assets/shapes/about_vert.svg"
import arrow from "../../../assets/icons/right_arrow_black.svg"

const AboutUs = () => {
    const [data, setData] = useState(null);
    //const [svgUrl, setSvgUrl] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/api/metrics')
            .then(res => {
                const stepsData = res.data;
                setData(stepsData);
                console.log(stepsData);
                
                // // Проверяем, что данные существуют и это массив
                // if (stepsData && stepsData.length > 0 && stepsData[0].icon && stepsData[0].icon.data) {
                //     // Преобразуем массив чисел в строку
                //     const svgString = String.fromCharCode.apply(null, stepsData[0].icon.data);
                //     const encoded = encodeURIComponent(svgString);
                //     setSvgUrl(`data:image/svg+xml,${encoded}`);
                // }
            })
            .catch(console.error);
    }, []);

    return (
        <section className={styles.about_us}>
            <h6>ABOUT US</h6>
            <div className={styles.about_us_title}>
                <h3>The company leads entire webdesign process from concept to delivery.</h3>
                <div>
                    <h4>The Era Of Technology.</h4>
                    <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
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
                <div>
                    <Link to="/company">Read about us</Link>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;