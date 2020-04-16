import {combineReducers} from 'redux'

// action-types
const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
//
const INCREMENT = 'increment'
const DECREMENT = 'decrement'

// actions
export const add = (comment) => ({type: ADD_COMMENT, data: comment})
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})
const receive = (comments) => ({type: RECEIVE_COMMENTS, data: comments})
// 异步action
export const getComments = () => {
  return dispatch => {
    setTimeout(() => {
      const comments = [
        {
          username: 'Tom',
          content: 'ReactJS好难啊!',
          id: Date.now(),
        },
        {
          username: 'JACK',
          content: 'ReactJS还不错!',
          id: Date.now() + 1,
        },
      ]
      dispatch(receive(comments))
    }, 1000)
  }
}
//
export const increment = number => ({type: INCREMENT, number})
export const decrement = number => ({type: DECREMENT, number})
// 异步action creator(返回一个函数)
export const incrementAsync = number => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment(number))
    }, 1000)
  }
}

// reducers 根据老的state和指定action,处理返回一个新的state
function commentsReducer(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.data]
    case DELETE_COMMENT:
      return state.filter((c, index) => index !== action.data)
    case RECEIVE_COMMENTS:
      return action.data
    default:
      return state
  }
}
//
function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.number
    case DECREMENT:
      return state - action.number
    default:
      return state
  }
}

export default combineReducers({commentsReducer, counterReducer})