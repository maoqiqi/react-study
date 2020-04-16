import React, {Component} from 'react'
// 引入action函数
import {decrement, increment} from './redux'
// 引入连接函数
import {connect} from 'react-redux'

class Count extends Component {

  inputRef = React.createRef()

  increment = () => {
    const num = this.inputRef.current.value * 1
    this.props.increment(num)
  }

  decrement = () => {
    const num = this.inputRef.current.value * 1
    this.props.decrement(num)
  }

  incrementIfOdd = () => {
    const num = this.inputRef.current.value * 1
    let count = this.props.count
    if (count % 2 === 1) {
      this.props.increment(num)
    }
  }

  incrementAsync = () => {
    const num = this.inputRef.current.value * 1
    setTimeout(() => {
      this.props.increment(num)
    }, 1000)
  }

  render() {
    return (
      <div className='count'>
        <strong style={{fontSize: 20}}>累计 {' ' + this.props.count + ' 次 '}</strong>
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

export default connect(state => ({count: state.counterReducer}), {increment, decrement})(Count)
