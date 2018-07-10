/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootStack from './src/router';
import reducers from './src/reducers';

// type Props = {};
// <Props>

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyBVSPyQSBHFNbtu60IIk2iYuD-bZZtvaOA',
        authDomain: 'firechat-ccc58.firebaseapp.com',
        databaseURL: 'https://firechat-ccc58.firebaseio.com',
        projectId: 'firechat-ccc58',
        storageBucket: 'firechat-ccc58.appspot.com',
        messagingSenderId: '1081486264705'
      }
    );
  }

  render() {
    return (
      <Provider store={store}>
        <RootStack />
        {/* <View style={style.contentStyle}>
          <Header title="Login" />
          {this.renderButton()}
        </View> */}
      </Provider>
    );
  }
}
