import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {deleteComment} from './redux'

const Item2 = props => {

  console.log('Item2==>', '===========================================')

  function del() {
    const username = props.item.username
    if (window.confirm(`确定删除${username}的评论吗?`)) {
      props.deleteComment(props.index)
    }
  }

  return (
    <div className='comment clear_fix'>
      <p>{props.item.username}说:{props.item.content}</p>
      <button onClick={del}>删除</button>
    </div>
  )
}

// 类型检查
Item2.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  deleteComment: PropTypes.func.isRequired,
}

export default connect(null, {deleteComment})(Item2)
