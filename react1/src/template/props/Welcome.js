import React from 'react'
import './Welcome.scss'

const Welcome = (props) => {
   
    const {firstName,lastName} = props;

  return (
    <h1>Welcome {firstName} {lastName}</h1>
  )
}

export default Welcome