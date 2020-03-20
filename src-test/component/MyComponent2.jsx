import React, {Fragment} from 'react'

const MyComponent2 = props => {
  return (
    <Fragment>
      <div>MyComponent2</div>
      <div>{props.children}...</div>
      <div dangerouslySetInnerHTML={{__html: '<h1>MyComponent2</h1>'}}/>
    </Fragment>
  )
}

export default MyComponent2