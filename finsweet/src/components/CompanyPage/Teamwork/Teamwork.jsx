import { useState } from "react";
import styles from "./Teamwork.module.scss"
import {persons} from "../../../mockupData/teamData"
import Title1 from "../../common/Title1/Title1"
import SimpleTag from "../../common/SimpleTag/SimpleTag";
import SimpleTextDark from "../../common/SimpleTextDark/SimpleTextDark";

const Teamwork = () => {
    const [data, setData] = useState(persons)
    return(
        <section className={styles.teamwork}>
            <div className={styles.teamwork_text}>
                <SimpleTag tag="MEET OUR TEAM"/>
                <Title1 new_styles={{width: '90%'}} name="Teamwork is the only way we work"/>
                <SimpleTextDark text="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable."/>
            </div>
            <div className={styles.teamwork_list}>
                {
                    data.map(item => <div key={item.id}><img src={item.img} alt="" /></div>)
                }
            </div>
        </section>
    )
};

export default Teamwork;