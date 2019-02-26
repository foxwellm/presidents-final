import React from 'react'
import './Card.css'

export const Card = (props) => {


  return (
    <div className='card'>
      <h3>Number: {props.number}</h3>
      <h3>Name: {props.president}</h3>
      <h3>Born: {props.birth_year}</h3>
      <h3>Died: {props.death_year}</h3>
      <h3>Took office: {props.took_office}</h3>
      <h3>Left office: {props.left_office}</h3>
      <h3>Party: {props.party}</h3>
      </div>
  )
 }

 export default Card