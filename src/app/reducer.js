// @flow
import { combineReducers } from 'redux-immutable'
import searchReducer  from './Bookmarks/scenes/Overview/search/reducer'

export const reducer = combineReducers({
    results: searchReducer
})
