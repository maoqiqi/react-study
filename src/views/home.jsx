import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Link from './link'
import News from './news'
import Message from './message'

export default function Home() {
  return (
    <div>
      <h2>Home组件内容</h2>
      <div className='link'>
        <Link to='/home/news'>News</Link>
        <Link to="/home/message">Message</Link>
      </div>
      <div>
        <Switch>
          <Route path='/home/news' component={News}/>
          <Route path='/home/message' component={Message}/>
          <Redirect to='/home/news'/>
        </Switch>
      </div>
    </div>
  )
}