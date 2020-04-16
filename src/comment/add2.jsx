import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {add} from '../redux/actions'

const Add2 = props => {
  const username = useRef(null)
  const content = useRef(null)

  function add() {
    if (username.current.value && content.current.value) {
      let item = {
        username: username.current.value,
        content: content.current.value,
        id: Date.now() + 1,
      }
      props.add(item)
      // 清除输入的数据
      username.current.value = ''
      content.current.value = ''
    } else {
      console.log('请输入内容')
    }
  }

  return (
    <div style={{marginTop: 20}}>
      <label>
        <input type="text" placeholder="用户名" ref={username}/>
      </label>&nbsp;
      <label>
        <input placeholder="评论内容" ref={content}/>
      </label>&nbsp;
      <button type="button" onClick={add}>添加</button>
    </div>
  )
}

Add2.propTypes = {
  add: PropTypes.func.isRequired,
}

export default connect(null, {add})(Add2)