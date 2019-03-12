import React, {Component, Fragment} from 'react';
import Header from './common/header/index'
import {Globalstyle} from  './static/iconFont/iconfont'
import { Provider } from 'react-redux';
import store from './store/index';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle/>
        <Provider store={store}>
        <Header/>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
