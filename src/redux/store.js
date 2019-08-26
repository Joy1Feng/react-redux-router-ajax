import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import counter from './reducers'

export default createStore(
  counter,
  composeWithDevTools(applyMiddleware(thunk))
)