import React from 'react'
import List from './list'
import Add from './add'

export default class App extends React.Component {

  state = {
    data: [],
  }

  componentDidMount() {
    // 模拟异步获取数据
    setTimeout(() => {
      const comments = [
        {
          username: 'Tom',
          content: 'ReactJS好难啊!',
          id: Date.now(),
        },
        {
          username: 'JACK',
          content: 'ReactJS还不错!',
          id: Date.now() + 1,
        },
      ]
      this.setState({comments})
    }, 1000)
  }

  delete = index => {
    let data = this.state.data
    data.splice(index, 1)
    this.setState({data})
  }

  add = (item) => {
    let data = this.state.data
    data.unshift(item)
    this.setState({data})
  }

  render() {
    return (
      <div>
        <h3>请发表对React的评论</h3>
        <List data={this.state.data} delete={this.delete}/>
        <Add add={this.add}/>
      </div>
    )
  }
}