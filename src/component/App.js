import React from 'react'

import './App.css'
import logo from '../logo.svg'

import {HTMLComponent} from './HTMLComponent'
import {ShowComponent} from './ShowComponent'
import ListComponent from './ListComponent'
import EventComponent from './EventComponent'

function App() {
  const arr = ['a', 'b', 'c', 'd', 'e']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>

        <HTMLComponent/>
        <ShowComponent/>
        <ListComponent items={arr}/>
        <EventComponent/>
      </header>
    </div>
  )
}

export default App
