import { createStore, combineReducers, applyMiddleware } from "redux"
import { createBrowserHistory } from "history"
import { connectRouter, routerMiddleware } from "connected-react-router"
import { composeWithDevTools } from "redux-devtools-extension"
import { reducer as formReducer } from "redux-form"
import { reducers } from "./reducers/index"
import api from "./middlewares/api.middleware"
import { push } from "connected-react-router"

export const history = createBrowserHistory()

const prodMiddleware = [routerMiddleware(history), api]

const middlewares = composeWithDevTools(applyMiddleware(...prodMiddleware))

const rootReducer = combineReducers({
  form: formReducer,
  router: connectRouter(history),
  ...reducers
})

export const store = createStore(rootReducer, middlewares)

export const redirect = to => store.dispatch(push(to))
