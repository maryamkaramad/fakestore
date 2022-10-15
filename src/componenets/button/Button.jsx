import React from 'react'
import './button-styles.scss'
import clsx from 'clsx';
const Button = ({children , btnPrimary,...rest}) => {
  return (
    <button className={clsx("Button",btnPrimary && "btnPrimary" )}{...rest}> {children} </button>
  )
}

export default Button