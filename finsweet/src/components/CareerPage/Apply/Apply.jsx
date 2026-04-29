import React from 'react'
import SimpleButton from "../../common/SimpleButton/SimpleButton"
import styles from "./Apply.module.scss"
import Title2 from '../../common/Title2/Title2'

const Apply = () => {
  return (
    <section className={styles.apply}>
        <Title2 name="Apply now"/>
        <form action="" type="submit">
            <div className={styles.div_input}>
                <input type="text" name="" id="" placeholder='First Name'/>
                <input type="text" name="" id="" placeholder='Last Name'/>
            </div>
            <div className={styles.div_input}>
                <input type="email" name="" id="" placeholder='Email Id'/>
                <input type="tel" name="" id="" placeholder='Mobile No'/>
            </div>
            <input className={styles.apply_big_input} type="text" name="" id="" placeholder='Why do you thing you are good fit for Ether?'/>
            <div className={styles.div_checkbox}>
                <input className={styles.checkbox_input} type="checkbox" name="" id="" />
                <label>
                    I agree to accept the privacy policy,  We will add your contact details provided in this form to our system for contacting you regarding your request.
                </label>
            </div>
            <SimpleButton name="Submit Application"/>
        </form>
        
    </section>
  )
}

export default Apply