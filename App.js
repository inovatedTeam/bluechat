/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Card, CardSection, Spinner, Button } from './src/common';
import LoginForm from './src/register/loginForm';

type Props = {};

export default class App extends Component<Props> {
  state = { loggedIn: false };
  componentWillMount(){
    this.setState({ loggedIn: null });
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBVSPyQSBHFNbtu60IIk2iYuD-bZZtvaOA",
        authDomain: "firechat-ccc58.firebaseapp.com",
        databaseURL: "https://firechat-ccc58.firebaseio.com",
        projectId: "firechat-ccc58",
        storageBucket: "firechat-ccc58.appspot.com",
        messagingSenderId: "1081486264705"
      }
    );
    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true });  
      }else{
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
              <Button onPress={() => firebase.auth().signOut() } >Log Out</Button>
            </CardSection>
          </Card>
          );
      case false:
        return <LoginForm/>
    }
  }

  render() {
    return (
      <View style={style.contentStyle}>
        <Header title="Login" />
        {this.renderButton()}
      </View>
    );
  }
}

const style = {
  contentStyle: {
  }
}