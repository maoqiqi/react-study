import React, {Component} from 'react'

export default class CountComponent extends Component {

  state = {count: 0}
  inputRef = React.createRef()

  increment = () => {
    const num = this.inputRef.current.value * 1
    const count = this.state.count + num
    this.setState({count})
  }

  decrement = () => {
    const num = this.inputRef.current.value * 1
    const count = this.state.count - num
    this.setState({count})
  }

  incrementIfOdd = () => {
    let {count} = this.state
    if (count % 2 === 1) {
      const num = this.inputRef.current.value * 1
      count += num
      this.setState({count})
    }
  }

  incrementAsync = () => {
    setTimeout(() => {
      const num = this.inputRef.current.value * 1
      const count = this.state.count + num
      this.setState({count})
    }, 1000)
  }

  render() {
    return (
      <div className='count'>
        <strong style={{fontSize: 20}}>累计 {' ' + this.state.count + ' 次 '}</strong>
        <select ref={this.inputRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}