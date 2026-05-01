import React from 'react';
import styles from "./ServiceProcess.module.scss";
import shape from "../../../assets/shapes/process_shape.svg";
import ProcessSteps from './ProcessSteps';
import Title1 from "../../common/Title1/Title1"
import SimpleTag from '../../common/SimpleTag/SimpleTag';
import SimpleTextDark from "../../common/SimpleTextDark/SimpleTextDark"
import useSteps from '../../../hooks/getSteps'

const ServiceProcess = ({color = 'rgba(249, 249, 255, 1)'}) => {
    const { data, loading, error } = useSteps('process');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


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
            {data.map(item => <ProcessSteps key={item.id_step} order={item.order_step} icon={item.icon_file_path} title={item.title} text={item.description} isFirst={item.is_first} isLast={item.is_last}/>)}
        </div>
    </section>
  )
}

export default ServiceProcess