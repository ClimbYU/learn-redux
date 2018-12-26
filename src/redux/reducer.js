// import { combineReducers } from 'redux'
import { combineReducers } from '../mini-redux/mini-redux'
import user from './user'
import own from './own'

export default combineReducers({ user, own })