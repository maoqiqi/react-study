import {combineReducers} from 'redux'

// action-types
const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

// actions
export const add = (comment) => ({type: ADD_COMMENT, data: comment})
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})
const receiveComments = (comments) => ({type: RECEIVE_COMMENTS, data: comments})

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
      dispatch(receiveComments(comments))
    }, 1000)
  }
}

// reducers
function comments(state = [], action) {
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

export default combineReducers({comments})