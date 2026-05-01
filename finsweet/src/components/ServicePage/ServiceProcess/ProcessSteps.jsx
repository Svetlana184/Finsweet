import React from 'react';
import shape from "../../../assets/shapes/process_step.svg";
import styles from "./ProcessSteps.module.scss"

const ProcessSteps = ({order, icon, title, text, isFirst, isLast}) => {
  return (
    <div style={{justifyContent: isLast ? 'flex-start' : 'space-between' }} className={styles.process_steps}>
        <img className={styles.shape_top} style={{display: isLast == true ? 'block' : 'none'}} src={shape} alt="" />
        <div>
             <h6>0{order}</h6>
            <div>
                <div className={styles.icon} >
                    <img src={icon} alt="" />
                </div>
                <div className={styles.text}>
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </div>
        <img className={styles.shape_bottom} style={{display: isFirst == true ? 'block' : 'none'}} src={shape} alt="" />
    </div>
  )
}

export default ProcessSteps