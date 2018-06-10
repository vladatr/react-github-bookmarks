// @flow
import { combineReducers } from 'redux-immutable'
import searchReducer  from './Bookmarks/scenes/Overview/search/reducer'
import bookmarksReducer  from './Bookmarks/scenes/Overview/bookmarks/reducer'

export const reducer = combineReducers({
    results: searchReducer,
    bookmarks: bookmarksReducer
})
