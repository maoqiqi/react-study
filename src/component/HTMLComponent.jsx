import React from 'react'

export const HTMLComponent = props => (
  <div style={{border: '1px solid red'}}>
    <div dangerouslySetInnerHTML={{__html: '<strong>HTMLComponent</strong>'}}/>
    <div>{props.children}</div>
  </div>
)