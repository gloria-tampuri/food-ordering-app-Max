import classes from './Input.module.css'

import React from 'react'

const Input = (props) => {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input id={props.input.id} {...props.input} type="text"/>
    </div>
  )
}

export default Input