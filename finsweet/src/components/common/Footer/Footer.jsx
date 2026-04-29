import logo from "../../../assets/common/logo_black.svg"
import twitter from "../../../assets/icons/twitter_black.svg"
import inst from "../../../assets/icons/inst_black.svg"
import facebook from "../../../assets/icons/facebook_black.svg"
import linked from "../../../assets/icons/linked_black.svg"
import contact_us from "../../../assets/shapes/contact_us.svg"
import arrow from "../../../assets/icons/right_arrow_black.svg"
import footer from "../../../assets/shapes/footer.svg"
import { Link } from 'react-router-dom'
import styles from "./Footer.module.scss"
import { footerPrimaryLinks, footerResourceLinks, footerServiceLinks } from '../../../mockupData/commonData'
import Title1 from "../Title1/Title1"

const Footer = () => {
  return (
    <footer className={styles.fotter_fin}>
          <div className={styles.fotter_top}>
            <img src={footer} alt="" />
          </div>
          <div className={styles.fotter_lists}>
            <div className={styles.fotter_lists_text}>
              <Title1 new_styles={{width: '70%'}} name="Let's make something special"/>
              <div>
                <h5>Let's talk! 🤙 </h5>
                <p>
                  020 7993 2905
                </p>
                <p>
                  hi@finsweet.com
                </p>
                <div></div>
                <p>DLF Cybercity, Bhubaneswar, India, &52050</p>
              </div>
            </div>
            <div className={styles.fotter_lists_bottom}>
              <div className={styles.fotter_lists_bottom_uls}>
                <ul>
                  {footerPrimaryLinks.map(({ to, label, isHeading }) => (
                    <li key={label}>
                      <Link to={to}>{isHeading ? <h6>{label}</h6> : <p>{label}</p>}</Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {footerServiceLinks.map(({ to, label, isHeading }) => (
                    <li key={label}>
                      <Link to={to}>{isHeading ? <h6>{label}</h6> : <p>{label}</p>}</Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {footerResourceLinks.map(({ to, label, isHeading }) => (
                    <li key={label}>
                      <Link to={to}>{isHeading ? <h6>{label}</h6> : <p>{label}</p>}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.fotter_lists_bottom_contact}>
                <img className={styles.shape} src={contact_us} alt="" />
                <p>Contact Us</p>
                <img src={arrow} alt="" />
              </div>
            </div>
        </div>
          <div className={styles.fotter_bottom}>
              <div className={styles.fotter_bottom_text}>
                  <img src={logo} alt="Finsweet" />
                 <p>©2021 Finsweet</p>
              </div>
              <ul>
                <li>
                  <Link><img src={facebook} alt="" /></Link>
                </li>
                <li>
                  <Link><img src={twitter} alt="" /></Link>
                </li>
                <li>
                  <Link><img src={inst} alt="" /></Link>
                </li>
                <li>
                  <Link><img src={linked} alt="" /></Link>
                </li>
              </ul>
          </div>
    </footer>
  )
}

export default Footer