import React from 'react'
import SimpleButton from "../../common/SimpleButton/SimpleButton"
import styles from "./ServicesSection.module.scss"
import ServicesCard from "./ServicesCard"
import Title1 from "../../common/Title1/Title1"
import SimpleTag from '../../common/SimpleTag/SimpleTag'
import useSteps from '../../../hooks/getSteps'

const ServicesSection = () => {

  const { data, loading, error } = useSteps('services');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
    <section className={styles.services_section}>
        <div className={styles.services_text}>
            <SimpleTag tag="Our Services"/>
            <Title1 new_styles={{width: '80%'}} name="We build software solutions that solve client's business challenges"/>
            <SimpleButton name="Start a Project"/>
        </div>
        <div className={styles.services_list}>
            {data.map(item => <ServicesCard key={item.id_step} icon={item.icon_file_path} title={item.title} text={item.description}/>)}
        </div>
    </section>
  )
}

export default ServicesSection