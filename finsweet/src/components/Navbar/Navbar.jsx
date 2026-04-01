//import styles from './Navbar.module.scss'
import logo from "../../assets/common/logo_white.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="Finsweet" />
        <ul>
            <li>
                <Link to="/service">About Us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar