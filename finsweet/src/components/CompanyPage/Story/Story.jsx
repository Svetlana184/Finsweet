import styles from "./Story.module.scss"
import Title2 from "../../common/Title2/Title2"
import SimpleTextDark from "../../common/SimpleTextDark/SimpleTextDark";


const Story = () => {
    return(
        <section className={styles.story}>
            <div className={styles.story_text}>
                <div></div>
                <h6>Our Story 👇 </h6>
                <Title2 name="From Startups to Titans of Industry"/>
                <SimpleTextDark text="Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up"/>
            </div>
            <ul className={styles.lists}>
                <li>

                </li>
            </ul>
        </section>
    )
};

export default Story;