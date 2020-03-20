import React, {Component} from 'react'

export default class MyComponent5 extends Component {

  constructor(props) {
    super(props)
    this.handleClick1 = this.handleClick1.bind(this)
  }

  handleClick1() {
    console.log('handleClick1', this)
  }

  handleClick2 = () => {
    console.log('handleClick2', this)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>按钮1</button>
        <br/>
        <button onClick={this.handleClick2}>按钮2</button>
      </div>
    )
  }
}