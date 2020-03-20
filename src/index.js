import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom'
import {Button, Layout, Menu} from 'antd'
import {HomeOutlined, LinkOutlined, UserOutlined} from '@ant-design/icons'

import './index.css'
import Home from './view/home'
import User from './view/user'

const Main = () => {
  const [current, setCurrent] = useState('home')

  return (
    <BrowserRouter>
      <Layout>
        <Layout.Header className='march-header'>
          <Menu mode="horizontal" selectedKeys={[current]} onClick={(e) => setCurrent(e.key)}>
            <Menu.Item key="home">
              <Link to='/home'>
                <HomeOutlined/>
                <span className='march-icon-space'>首页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="user">
              <Link to='/user'>
                <UserOutlined/>
                <span className='march-icon-space'>个人中心</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='link'>
              <LinkOutlined/>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Menu.Item>
          </Menu>
          <div className='march-login-out'>
            <Button type="link" href="#">退出</Button>
          </div>
        </Layout.Header>
        <Layout.Content>
          <div className='march-content'>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/user' component={User}/>
              <Redirect to='/home'/>
            </Switch>
          </div>
        </Layout.Content>
      </Layout>
    </BrowserRouter>
  )
}

ReactDOM.render(<Main/>, document.getElementById('root'))