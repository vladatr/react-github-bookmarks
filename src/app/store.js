// @flow
import { createStore } from 'redux'

import { middleware } from './middleware'
import { reducer } from './reducer'

export const store = createStore(reducer, 
                                middleware,
                                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store
