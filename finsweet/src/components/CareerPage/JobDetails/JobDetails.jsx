import React, { useState } from 'react'
import styles from "./JobDetails.module.scss"

const JobDetails = ({responsibilities, requirements, details}) => {
    const [data, setData] = useState(details);
  return (
    <section className={styles.job_details}>
        <div>
            <button className={data==details ? styles.button_active : styles.button_unactive} onClick={()=>setData(details)}>Details</button>
            <button className={data==requirements ? styles.button_active : styles.button_unactive} onClick={()=>setData(requirements)}>Requirements</button>
            <button className={data==responsibilities ? styles.button_active : styles.button_unactive} onClick={()=>setData(responsibilities)}>Responsibilities</button>
        </div>
        <ul>
            {data.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
    </section>
  )
}

export default JobDetails