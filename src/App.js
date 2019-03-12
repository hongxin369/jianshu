import React, {Component, Fragment} from 'react';
import Header from './common/header/index'
import {Globalstyle} from  './static/iconFont/iconfont'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle/>
        <Header/>
      </Fragment>
    );
  }
}

export default App;
