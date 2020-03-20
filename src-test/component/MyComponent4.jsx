import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class MyComponent4 extends Component {
  static propTypes = {
    arr: PropTypes.array.isRequired,
  }

  static defaultProps = {
    arr: [1, 2, 3, 4, 5, 8],
  }

  render() {
    // const arr = [1, 2, 3, 4, 5, 8]
    return (
      <div>
        <ul>
          {this.props.arr.map((v) => <li key={v}>{v}</li>)}
        </ul>
        {this.props.children}
      </div>
    )
  }
}