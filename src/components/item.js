import React from 'react'
import PropTypes from 'prop-types'

const Item = props => {

  console.log('Item==>', '===========================================')

  function del() {
    const username = props.item.username
    if (window.confirm(`确定删除${username}的评论吗?`)) {
      props.delete(props.index)
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
Item.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  delete: PropTypes.func.isRequired,
}

export default Item