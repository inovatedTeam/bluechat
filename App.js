/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { Header, Card, CardSection, Spinner, Button } from './src/components/common';
import LoginForm from './src/components/register/loginForm';
// import LibraryList from './src/components/LibraryList';

// type Props = {};
// <Props>

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  state = { loggedIn: false };
  componentWillMount() {
    this.setState({ loggedIn: null });
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });  
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderButton() {
    switch (this.state.loggedIn) {
      default:
        return (
          <Card>
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          </Card>
        );
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()} >Log Out</Button>
            </CardSection>
          </Card>
          );
      case false:
        return <LoginForm />;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={style.contentStyle}>
          <Header title="Login" />
          {this.renderButton()}
          {/* <LibraryList /> */}
        </View>
      </Provider>
    );
  }
}

const style = {
  contentStyle: {
    flex: 1
  }
};
