import SimpleButton from "../../common/SimpleButton/SimpleButton"
import styles from "./JobTitle.module.scss"

const JobTitle = ({job_description}) => {
    return (
        <section className={styles.job_title}>
            <div className={styles.job_left}>
                <h6>{job_description.location}</h6>
                <h3>{job_description.title}</h3>
                <p>{job_description.description}</p>
                <SimpleButton name="Apply Now"/>
            </div>
            <div className={styles.job_right}>
                <img src="" alt="" />
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