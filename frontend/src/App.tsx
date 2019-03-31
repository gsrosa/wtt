import React, { Component } from 'react';
import store,{history} from './redux/main.store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>

        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
