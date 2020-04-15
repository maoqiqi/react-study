import React from 'react'
import List from './list'
import Add from './add'
import Search from './search'
import Users from './users'
import UsersComponent from './users2'

export default class App extends React.Component {

  state = {
    data: [
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
    ],
    searchName: '',
  }

  // componentDidMount() {
  //   // 模拟异步获取数据
  //   setTimeout(() => {
  //     const data = [
  //       {
  //         username: 'Tom',
  //         content: 'ReactJS好难啊!',
  //         id: Date.now(),
  //       },
  //       {
  //         username: 'JACK',
  //         content: 'ReactJS还不错!',
  //         id: Date.now() + 1,
  //       },
  //     ]
  //     this.setState({data})
  //   }, 1000)
  // }

  delete = index => {
    let data = this.state.data
    data.splice(index, 1)
    this.setState({data})
  }

  add = item => {
    let data = this.state.data
    data.unshift(item)
    this.setState({data})
  }

  refreshName = searchName => {
    this.setState({searchName})
  }

  render() {
    return (
      <div>
        <h3>请发表对React的评论</h3>
        <List data={this.state.data} delete={this.delete}/>
        <Add add={this.add}/>
        <Search refreshName={this.refreshName}/>
        <Users searchName={this.state.searchName}/>
        <UsersComponent searchName={this.state.searchName}/>
      </div>
    )
  }
}