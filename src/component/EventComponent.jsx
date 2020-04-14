import React, {Component} from 'react'

export default class EventComponent extends Component {

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

  // 参数 name 是自己在 Children 组件 onClick 绑定时候添加的参数
  // 参数 childrenName, key 是 Children 组件自己的点击事件传递的参数
  handleClick3 = (name, childrenName, key) => {
    console.log(name, childrenName, key)// parent 按钮 Children
  }

  handleClick4 = name => (childrenName, key) => {
    console.log(name, childrenName, key) // parent 按钮 Children
  }

  render() {
    return (
      <div style={{border: '1px solid orange'}}>
        <h3>EventComponent</h3>
        <button onClick={this.handleClick1}>按钮1</button>
        <button onClick={this.handleClick2}>按钮2</button>
        <Children onClick={this.handleClick3.bind(this, 'parent')}/>
        <Children onClick={this.handleClick4('parent')}/>
      </div>
    )
  }
}

class Children extends Component {

  handleClick = (key) => () => {
    const {onClick} = this.props
    // 向上调用事件
    onClick && onClick('按钮', key)
  }

  render() {
    return <button onClick={this.handleClick('Children')}>按钮</button>
  }
}