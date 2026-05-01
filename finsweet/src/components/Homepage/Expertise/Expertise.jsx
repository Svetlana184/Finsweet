import React from 'react'
import styles from "./Expertise.module.scss"
import shape from "../../../assets/shapes/expertise.svg"
import CardExpertise from './CardExpertise'
import Title1 from "../../common/Title1/Title1"
import SimpleTag from "../../common/SimpleTag/SimpleTag"
import SimpleText from "../../common/SimpleText/SimpleText"
import useSteps from '../../../hooks/getSteps'

const Expertise = () => {

    const { data, loading, error } = useSteps('expertise');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
    <section className={styles.expertise}>
        <div className={styles.expertise_text}>
            <SimpleTag tag="Our expertise"/>
            <Title1 name="We want to get local identification in every corner of the world in this era of global citizenship" />
            <SimpleText text="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded."/>
        </div>
        <div className={styles.expertise_lists}>
            <div className={styles.expertise_square}>
            </div>
            <ul>
                {data.map(item => <CardExpertise key={item.id_step} icon={item.icon_file_path} title={item.title} text={item.description}/>)}
            </ul>
            <img className={styles.expertise_shape} src={shape} alt="" />
        </div>
    </section>
  )
}

export default Expertise