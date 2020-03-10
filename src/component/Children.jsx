import React, {Component} from 'react'

// 子组件
export default class Children extends Component {


  // handleClick = (key) => {
  //   const {onClick} = this.props
  //   // 向上调用事件
  //   onClick && onClick('按钮', key)
  // }

  handleClick = (key) => () => {
    const {onClick} = this.props
    // 向上调用事件
    onClick && onClick('按钮', key)
  }

  render() {
    return <button onClick={this.handleClick('123456')}>点击效果</button>
  }
}