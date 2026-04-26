import React, { useState } from 'react';
import styles from "./ServiceProcess.module.scss";
import shape from "../../../assets/shapes/process_shape.svg";
import {steps} from "../../../mockupData/stepsData"
import ProcessSteps from './ProcessSteps';

const ServiceProcess = ({color = 'rgba(249, 249, 255, 1)'}) => {
    const [data, setData] = useState(steps);

  return (
    <section style={{backgroundColor: color}} className={styles.service_process}>
        <div className={styles.service_process_text}>
            <div>
                <h6>Our Process</h6>
                <h3>The process we are working With Our client Worldwide</h3>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
            </div>
            <img src={shape} alt="" />
        </div>
        <div className={styles.service_process_steps}>
            {data.map(item => <ProcessSteps order={item.order} icon={item.icon} title={item.title} text={item.text} isFirst={item.isFirst} isLast={item.isLast}/>)}
        </div>
    </section>
  )
}

export default ServiceProcess