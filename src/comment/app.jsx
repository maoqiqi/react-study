import React from 'react'
import {connect} from 'react-redux'
import CommentAdd from './add2'
import CommentList from './list2'
import {getComments} from './redux'
import Count from './count'

class App extends React.Component {

  componentDidMount() {
    // 模拟异步获取数据
    this.props.getComments()
  }

  render() {
    return (
      <div>
        <h3>请发表对React的评论</h3>
        <CommentAdd/>
        <CommentList/>
        <Count/>
      </div>
    )
  }
}

export default connect(null, {getComments})(App)