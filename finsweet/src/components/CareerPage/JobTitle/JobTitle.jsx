import SimpleButton from "../../common/SimpleButton/SimpleButton"
import styles from "./JobTitle.module.scss"
import shape from "../../../assets/shapes/process_shape.svg"
import SimpleTag from "../../common/SimpleTag/SimpleTag";
import Title2 from "../../common/Title2/Title2";
import SimpleTextDark from "../../common/SimpleTextDark/SimpleTextDark";

const JobTitle = ({job_description}) => {
    return (
        <section className={styles.job_title}>
            <div className={styles.job_left}>
                <SimpleTag tag={job_description.location}/>
                <Title2 name={job_description.title}/>
                <SimpleTextDark text={job_description.description}/>
                <SimpleButton name="Apply Now"/>
            </div>
            <div className={styles.job_right}>
                <img src={shape} alt="" />
                <div>
                    <h4>
                        Job Description
                    </h4>
                    <div>
                        <p>{job_description.type}, {job_description.exp}</p>
                        <p>Department: {job_description.dep}</p>
                        <p>{job_description.time} {job_description.positions_avaliable}</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default JobTitle;