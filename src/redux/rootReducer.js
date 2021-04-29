import cakeReducer from './cake/CakeReducer'
import cookieReducer from './cookie/CookieReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    cake : cakeReducer,
    cookie : cookieReducer
})

export default rootReducer;