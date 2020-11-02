import React, {Component} from 'react';
import Navigator from '_navigations';
import {Provider, connect} from 'react-redux';
import store from '_redux/store.js';
import {initAction} from '_redux/shared/authen'

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>    
        <Navigator/>
      </Provider>
    )
  }
}



