import React, { Fragment } from "react"
import { store, history } from "./redux/main.redux"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { Main } from "./main/main.components"
import "materialize-css/dist/js/materialize.min.js"
import "materialize-css/dist/css/materialize.min.css"

export default ({}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <Fragment>
            <Main />
          </Fragment>
        </ConnectedRouter>
      </BrowserRouter>
    </Provider>
  )
}
