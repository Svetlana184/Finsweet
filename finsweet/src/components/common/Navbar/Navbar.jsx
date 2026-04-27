import styles from './Navbar.module.scss'
import logo from "../../../assets/common/logo_white.svg"
import arrow from "../../../assets/icons/right_arrow.svg"
import { Link } from "react-router-dom";
import { navbarLinks } from '../../../mockupData/commonData';
import Popup from "reactjs-popup"
import SignIn from "../../SignInModel/SignIn/SignIn"

const Navbar = () => {
  return (
    <nav className={styles.nav_fin}>
        <div className={styles.nav_fin_inner}>
             <Link className={styles.logo} to="/">
            <img src={logo} alt="Finsweet" />
        </Link>
        <ul>
            {navbarLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
            <li>
              <Popup trigger={<button>Sign In</button>} modal nested>
                <SignIn/>
              </Popup>
            </li>
            <li>
                <Link className={styles.clone_link} to="/">Clone project</Link>
                <img src={arrow} alt="" />
            </li>
            
        </ul>
        </div>
        
    </nav>
  )
}

export default Navbar