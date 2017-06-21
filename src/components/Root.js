import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import { Router, browserHistory } from 'react-router';
import  Routes from '../routes';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store);

export default class Root extends Component {
  render() {

    return (
      <Provider store={store}>
       <Router history={history} routes={Routes} />
      </Provider>
    )
  }
}