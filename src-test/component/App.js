import React from 'react'

import logo from '../logo.svg'
import './App.css'
import MyComponent1 from './MyComponent1'
import MyComponent2 from './MyComponent2'
import MyComponent3 from './MyComponent3'
import MyComponent4 from './MyComponent4'
import MyComponent5 from './MyComponent5'
import Parent from './Parent'

function App() {
  const name = 'Tom'
  const arr = ['a', 'b', 'c', 'd', 'e']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        <p style={{backgroundColor: 'red', color: 'white'}}>我 {name === 'Tom' ? '是' : '不是'} Tom</p>
        <MyComponent1/>
        <MyComponent2/>
        <MyComponent3/>
        <MyComponent4 arr={arr}/>
        <MyComponent5/>
        <Parent/>
      </header>
    </div>
  )
}

export default App
