import React, { Fragment } from "react"
import { store, history } from "./redux/main.redux"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"

export default ({}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <Fragment />
        </ConnectedRouter>
      </BrowserRouter>
    </Provider>
  )
}
