import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ListComponent extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  static defaultProps = {
    items: [1, 2, 3, 4, 5, 8],
  }

  render() {
    return <div style={{border: '1px solid green'}}>{this.props.items.map(v => <i key={v}>==>{v} </i>)}</div>
  }
}