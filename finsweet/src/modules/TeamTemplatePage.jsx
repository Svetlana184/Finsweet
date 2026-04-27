import React from 'react'
import MemberInfo from '../components/TeamTemplatePage/MemberInfo/MemberInfo'
import LatestNews from '../components/Homepage/LatestNews/LatestNews'
import {persons} from "../mockupData/teamData"
import { useParams } from 'react-router-dom'

const TeamTemplatePage = () => {
  let {id} = useParams();
  const person = persons.find(person => person.id == id);
  return (
    <>
      <MemberInfo member={person}/>
      <LatestNews title="Blog posts from Javena"/>
    </>
  )
}

export default TeamTemplatePage