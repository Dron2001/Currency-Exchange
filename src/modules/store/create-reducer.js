import { combineReducers } from 'redux'

import { STATE } from '../session/constants'
import { reducer } from '../session/reducers'

const createReducer = asyncReducers => {
  return (
    combineReducers({
      ...asyncReducers,
      [STATE]: reducer,
    })
  )
}

export default createReducer
