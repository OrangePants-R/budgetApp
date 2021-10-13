import { combineReducers } from 'redux'
import entriesReducer from './entries'

export const reducer = combineReducers({
  entries: entriesReducer,
})
