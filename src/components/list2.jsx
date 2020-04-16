import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CommentItem from './item2'

const List2 = props => {
  console.log('List2==>', '===========================================')
  const display = props.data.length > 0 ? 'none' : 'block'
  return (
    <div>
      <strong style={{display: display}}>暂无评论，添加评论！！！</strong>
      {props.data.map((item, i) => {
        return <CommentItem key={item.id} item={item} index={i} delete={props.delete}/>
      })}
    </div>
  )
}

// 类型检查
List2.propTypes = {
  data: PropTypes.array.isRequired,
}

export default connect(state => ({data: state.commentsReducer}))(List2)