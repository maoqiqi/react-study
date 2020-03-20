import React, {Component} from 'react'

export default class MyComponent3 extends Component {
  render() {
    return (
      <div>
        {this.props.title && <h1>{this.props.title}</h1>}
        {this.props.content ? <div>{this.props.content}</div> : ''}
        {0 && <div>123</div>}
      </div>
    )
  }
}