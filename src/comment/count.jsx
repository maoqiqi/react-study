import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as actions from './redux'

export default class Count extends Component {

  inputRef = React.createRef()

  increment = () => {
    const num = this.inputRef.current.value * 1
    this.props.store.dispatch(actions.increment(num))
  }

  decrement = () => {
    const num = this.inputRef.current.value * 1
    this.props.store.dispatch(actions.decrement(num))
  }

  incrementIfOdd = () => {
    const num = this.inputRef.current.value * 1
    let count = this.props.store.getState().counter
    if (count % 2 === 1) {
      this.props.store.dispatch(actions.increment(num))
    }
  }

  incrementAsync = () => {
    const num = this.inputRef.current.value * 1
    setTimeout(() => {
      this.props.store.dispatch(actions.increment(num))
    }, 1000)
  }

  render() {
    return (
      <div className='count'>
        <strong style={{fontSize: 20}}>累计 {' ' + this.props.store.getState().counter + ' 次 '}</strong>
        <p>click {} times {' '}</p>
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

Count.propTypes = {
  store: PropTypes.object.isRequired,
}