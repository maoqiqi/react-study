import Link from '../views/link'
import {Redirect, Route, Switch} from 'react-router-dom'
import Home from '../views/home'
import {About} from '../views/about'
import React from 'react'

const Router = props => {
  return (
    <div>
      <h2>React Router Demo</h2>
      <div className='link'>
        {/*导航路由链接*/}
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
      <div>
        {/*可切换的路由组件*/}
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <Redirect to='/home'/>
        </Switch>
      </div>
    </div>
  )
}

export default Router