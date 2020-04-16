import React from 'react'
import List from './list'
import Add from './add'
import Search from './search'
import Users from './users'
import UsersComponent from './users2'
import CountComponent from './count'

import {connect} from 'react-redux'
import CommentAdd from './add2'
import CommentList from './list2'
import {getComments} from './redux'
import Count from './count2'

class App extends React.Component {

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

  componentDidMount() {
    // 模拟异步获取数据
    this.props.getComments()
  }

  delete = index => {
    const data = this.state.data
    data.splice(index, 1)
    this.setState({data})
  }

  add = item => {
    const data = this.state.data
    data.unshift(item)
    this.setState({data})
  }

  refreshName = searchName => {
    this.setState({searchName})
  }

  render() {
    console.log('app render')
    return (
      <div>
        <div className='group'>
          <h3>请发表对React的评论</h3>
          <List data={this.state.data} delete={this.delete}/>
          <Add add={this.add}/>
          <CountComponent/>
        </div>

        <div className='group'>
          <h3>请发表对React的评论</h3>
          <CommentList/>
          <CommentAdd/>
          <Count/>
        </div>

        <div className='group'>
          <Search refreshName={this.refreshName}/>
          <Users searchName={this.state.searchName}/>
          <UsersComponent searchName={this.state.searchName}/>
        </div>
      </div>
    )
  }
}

export default connect(null, {getComments})(App)