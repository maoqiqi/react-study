import React, {useEffect, useState} from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './detail'

const Message = props => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setTimeout(() => {
      const data = [
        {id: 1, title: 'Message 001'},
        {id: 3, title: 'Message 003'},
        {id: 6, title: 'Message 006'},
      ]
      setMessages(data)
    }, 1000)
  }, [])

  const path = props.match.path

  return (
    <div>
      <ul>{
        messages.map((m, index) => {
          return (
            <li key={index}>
              <Link to={`${path}/${m.id}`}>{m.title}</Link>
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => props.history.push(`/home/message/${m.id}`)}>查看详情(push)</button>
              &nbsp;
              <button onClick={() => props.history.replace(`/home/message/${m.id}`)}>查看详情(replace)</button>
            </li>
          )
        })
      }</ul>
      <Route path={`${path}/:id`} component={Detail}/>
      <p>
        <button onClick={() => props.history.goBack()}>返回</button>
        <button onClick={() => props.history.goForward()}>前进</button>
      </p>
    </div>
  )
}

export default Message