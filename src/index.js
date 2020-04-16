import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
// redux
import {applyMiddleware, createStore} from 'redux'
import reducers from './comment/redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// 测试
// import App from './component/App'
// import App from './components/app'
import './index.css'
import App from './comment/app'

// ReactDOM.render(<App/>, document.getElementById('root'))

// 根据counter函数创建store对象,应用上异步中间件
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'))
