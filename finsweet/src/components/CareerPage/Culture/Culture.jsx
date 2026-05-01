import React from 'react';
import CultureCard from './CultureCard';
import styles from "./Culture.module.scss"
import SimpleTag from '../../common/SimpleTag/SimpleTag';
import Title2 from '../../common/Title2/Title2';
import SimpleText from '../../common/SimpleText/SimpleText';
import useSteps from "../../../hooks/getSteps"

const Culture = () => {
    const { data, loading, error } = useSteps('culture');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
    <section className={styles.culture}>
        <div className={styles.text}>
            <SimpleTag tag="OUR WORK & CULTURE"/>
            <Title2 name="Come and join a team of highly skilled professionals."/>
            <SimpleText text="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded."/>
        </div>
        <div className={styles.list}>
            {data.map(item => <CultureCard id={item.id_step} icon={item.emogi} title={item.title} text={item.description}/>)}
        </div>
    </section>
  )
}

export default Culture