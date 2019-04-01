import { createStore, combineReducers, applyMiddleware } from "redux"
import { createBrowserHistory } from "history"
import { connectRouter, routerMiddleware } from "connected-react-router"

import { composeWithDevTools } from "redux-devtools-extension"

import { reducer as formReducer } from "redux-form"

import { reducers } from "./reducers/index"

export const history = createBrowserHistory()

const prodMiddleware = [routerMiddleware(history)]

const middlewares = composeWithDevTools(applyMiddleware(...prodMiddleware))

const rootReducer = combineReducers({
  form: formReducer,
  router: connectRouter(history),
  ...reducers
})

export const store = createStore(rootReducer, middlewares)
