import React, { useState } from 'react';
import styles from "./ServiceProcess.module.scss";
import shape from "../../../assets/shapes/process_shape.svg";
import {steps} from "../../../mockupData/stepsData"
import ProcessSteps from './ProcessSteps';
import Title1 from "../../common/Title1/Title1"
import SimpleTag from '../../common/SimpleTag/SimpleTag';
import SimpleTextDark from "../../common/SimpleTextDark/SimpleTextDark"

const ServiceProcess = ({color = 'rgba(249, 249, 255, 1)'}) => {
    const [data, setData] = useState(steps);

  return (
    <section style={{backgroundColor: color}} className={styles.service_process}>
        <div className={styles.service_process_text}>
            <div>
                <SimpleTag tag="Our Process"/>
                <Title1 name="The process we are working With Our client Worldwide"/>
                <SimpleTextDark text="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable."/>
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