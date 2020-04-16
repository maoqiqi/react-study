import React from 'react'
import Item from './item'
import PropTypes from 'prop-types'

const List = props => {
  const display = props.data.length > 0 ? 'none' : 'block'
  return (
    <div>
      <strong style={{ display: display }}>暂无评论，添加评论！！！</strong>
      {props.data.map((item, i) => {
        return <Item key={item.id} item={item} index={i} delete={props.delete}/>
      })}
    </div>
  )
}

// 类型检查
List.propTypes = {
  data: PropTypes.array.isRequired,
  delete: PropTypes.func.isRequired,
}

export default List