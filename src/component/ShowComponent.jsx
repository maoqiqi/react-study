import React from 'react'

export const ShowComponent = props => (
  <div style={{border: '1px solid yellow'}}>
    <h3>ShowComponent</h3>
    {props.title && <h1>{props.title}</h1>}
    {props.content ? <div>{props.content}</div> : ''}
    {0 && <div>123</div>}
  </div>
)