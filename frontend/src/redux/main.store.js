import {createStore,combineReducers,applyMiddleware} from 'redux'
import { createHashHistory, createBrowserHistory } from 'history'
import {routerMiddleware,connectRouter} from 'connected-react-router'

import { composeWithDevTools } from 'redux-devtools-extension'

import {reducers} from './reducers/index'
import { reducer as formReducer } from 'redux-form'

export const history = createBrowserHistory()

const setupStore = () => {
    const rootReducer = combineReducers({
        form: formReducer,
        ...reducers
    })

    const middlewaresDev = () =>
        composeWithDevTools(applyMiddleware())
    const middlewaresProd = () => applyMiddleware()

    const middlewares = process.env.NODE_ENV !== 'production' ? middlewaresDev() : middlewaresProd()

    return createStore(connectRouter(history)(rootReducer),middlewares)
}

export default setupStore()