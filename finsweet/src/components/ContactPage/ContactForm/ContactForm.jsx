import React from 'react';
import SimpleButton from "../../common/SimpleButton/SimpleButton";
import styles from "./ContactForm.module.scss";
import shape_vertical from "../../../assets/shapes/sub_2.svg";
import shape_hor from "../../../assets/shapes/contact_hor.png";
import facebook from "../../../assets/contactUs/facebook_white.svg";
import twi from "../../../assets/contactUs/twi_white.svg";
import inst from "../../../assets/contactUs/inst_white.svg";
import linked from "../../../assets/contactUs/linked_white.svg"

const ContactForm = () => {
  return (
    <section className={styles.contact_form}>
        <div className={styles.contact_left}>
            <div className={styles.contact_text}>
                <div className={styles.contact_square}></div>
                <h6>CONTACT US</h6>
                <h3>Have a Question ? Let’s Get in Touch with us 👋</h3>
                <p>
                    Fill up the Form  and ou team will get back to within 24 hrs
                </p>
            </div>
            <div className={styles.contact_form}>
                <p>Name</p>
                <form action="" method="get">
                    <input type="text" name="" id="" />
                </form>
            </div>
            <div className={styles.contact_form}>
                <p>E-mail</p>
                <form action="" method="get">
                    <input type="text" name="" id="" />
                </form>
            </div>
            <div className={styles.contact_form}>
                <p>Subject</p>
                <form action="" method="get">
                    <input type="text" name="" id="" />
                </form>
            </div>
            <div className={styles.contact_form_2}>
                <p>Messege</p>
                <form action="" method="get">
                    <input type="text" name="" id="" placeholder='Type your Messege'/>
                </form>
            </div>
            <SimpleButton name="Send Messege"/>
        </div>
        <div className={styles.contact_right}>
            <img className={styles.contact_shape_vertical} src={shape_vertical} alt="" />
            <div className={styles.contact_right_par}>
                <img className={styles.contact_shape_hor} src={shape_hor} alt="" />
                <div className={styles.contact_info}>
                        <p>Location</p>
                        <div className={styles.create_line}></div>
                        <h5>DLF Cybercity, Bhubaneswar, India, &52050</h5>

                        <p>Working Hour</p>
                        <div className={styles.create_line}></div>
                        <h5>Monday To Friday 9:00 AM to 8:00 PM </h5>
                        <p>Our Support Team is available 24Hrs</p>

                        <p>Contact Us</p>
                        <div className={styles.create_line}></div>
                        <h5>020 7993 2905</h5>
                        <p>Hello@ether.com</p>

                        <ul>
                            <li><img src={facebook} alt="" /></li>
                            <li><img src={twi} alt="" /></li>
                            <li><img src={inst} alt="" /></li>
                            <li><img src={linked} alt="" /></li>
                        </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm