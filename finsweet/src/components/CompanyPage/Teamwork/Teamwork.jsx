import { useState } from "react";
import styles from "./Teamwork.module.scss"
import {persons} from "../../../mockupData/teamData"

const Teamwork = () => {
    const [data, setData] = useState(persons)
    return(
        <section className={styles.teamwork}>
            <div className={styles.teamwork_text}>
                <h6>MEET OUR TEAM</h6>
                <h3>Teamwork is the only way we work </h3>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
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