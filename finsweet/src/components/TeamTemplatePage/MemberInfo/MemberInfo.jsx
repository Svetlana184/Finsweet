import React from 'react'
import { Link } from 'react-router-dom'
import facebook from "../../../assets/icons/facebook_black.svg"
import twi from "../../../assets/icons/twitter_black.svg"
import inst from "../../../assets/icons/inst_black.svg"
import styles from "./MemberInfo.module.scss"
import Title2 from '../../common/Title2/Title2'

const MemberInfo = ({member}) => {
  return (
    <div className={styles.member_info}>
        <div>
            <img src={member.img} alt="" />
        </div>
        <h3>{member.name} {member.last_name}</h3>
        <h6>{member.position}</h6>
        <p>{member.desc}</p>
        <ul>
            <li>
                <Link to={member.facebook}><img src={facebook} alt="" /></Link>
            </li>
             <li>
                <Link to={member.twi}><img src={twi} alt="" /></Link>
            </li>
             <li>
                <Link to={member.inst}><img src={inst} alt="" /></Link>
            </li>
        </ul>
    </div>
  )
}

export default MemberInfo