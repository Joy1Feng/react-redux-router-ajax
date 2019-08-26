import {INCREASE, DECREASE, GETMUSICLIST} from './action-type'
import {combineReducers} from 'redux'

function counter(state = 0, action) {
  switch (action.type){
    case INCREASE:
      return state + 1
    case DECREASE:
      return state - action.data
    default:
      return state
  }
}

function show(name = 'joy') {
  return name + 'feng'
}

function getMusicList(state = [], action) {
  switch (action.type){
    case GETMUSICLIST:
      return action.data
    default:
      return state
  }
}

export default combineReducers(
  {
    counter,
    show,
    getMusicList
  }
)

