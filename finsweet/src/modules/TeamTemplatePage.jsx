import React from 'react'
import MemberInfo from '../components/TeamTemplatePage/MemberInfo/MemberInfo'
import LatestNews from '../components/Homepage/LatestNews/LatestNews'
import {person} from "../mockupData/teamData"

const TeamTemplatePage = () => {
  return (
    <>
      <MemberInfo member={person}/>
      <LatestNews title="Blog posts from Javena"/>
    </>
  )
}

export default TeamTemplatePage