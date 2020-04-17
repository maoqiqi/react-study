import React from 'react'

const messageDetails = [
  {id: 1, title: 'Message001', content: '我爱你, 中国'},
  {id: 3, title: 'Message003', content: '我爱你, 老婆'},
  {id: 6, title: 'Message006', content: '我爱你, 孩子'},
]

const Detail = props => {
  const id = props.match.params.id
  const msg = messageDetails.find(md => md.id === id * 1)
  return (
    <div className='detail'>
      <p>详情 ==> ID: {msg.id},TITLE: {msg.title},CONTENT: {msg.content}</p>
    </div>
  )
}

export default Detail