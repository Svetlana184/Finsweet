import img from "../../../assets/company/company_vision.png"
import styles from "./Vision.module.scss"
import Title2 from "../../common/Title2/Title2"
import SimpleTag from "../../common/SimpleTag/SimpleTag";
import SimpleText from "../../common/SimpleText/SimpleText";

const Vision = () => {
    return(
        <section className={styles.vision}>
            <div>
                <SimpleTag tag="Our VISION"/>
                <Title2 name="We want to get local identification in every corner of the world in this era of global citizenship." />
                <SimpleText text="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded."/>
            </div>
            <img src={img} alt="" />
        </section>
    )
};

export default Vision;