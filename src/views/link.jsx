import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Link(props) {
  return <NavLink {...props} activeClassName='active'/>
}