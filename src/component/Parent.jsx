import React, {Component} from 'react'
// 父组件
import Children from './Children'

export default class Parent extends Component {

  /**
   * 参数 name 是自己在Children 组件 onClick 绑定时候添加的参数
   * 参数 childrenName, key 是 Children 组件自己的点击事件传递的参数
   */
    // handleClick = (name, childrenName, key) => {
    //   console.log(name, childrenName, key)
    //   // name = 'parent' children = '按钮' key = '123456'
    // }

  handleClick = name => (childrenName, key) => {
    console.log(name, childrenName, key)
    // name = 'parent' children = '按钮' key = '123456'
  }

  render() {
    // 此处必需使用bind
    // return <Children onClick={this.handleClick('parent')}/>
    // return <Children onClick={this.handleClick.bind(this, 'parent')}/>
    return <Children onClick={this.handleClick('parent')}/>
  }
}