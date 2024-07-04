import React from 'react'
import Profile from './Profile'

export default function Profiles(props) {
  return (
    <div>
        <Profile name={props.data[0].name} profession={props.data[0].profession}/>
        <Profile name={props.data[1].name} profession={props.data[1].profession}/>
        <Profile name={props.data[2].name} profession={props.data[2].profession}/>
    </div>
  )
}
