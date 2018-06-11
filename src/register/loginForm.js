import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './../common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false } ;

    onLoginBtnPress() {
        const { email, password } = this.state;
        //const error = this.setState({ error: '' });
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this)) 
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this)) 
                    .catch(this.onLoginFaild.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFaild() {
        this.setState({
            error: 'Authentication error',
            loading: false
        });
    }

    renderLoginButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={this.onLoginBtnPress.bind(this)}>Login</Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input  
                        label="Email"
                        placeholder="user@email.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                     />
                </CardSection>
                <CardSection>
                    <Input  
                        label="Password"
                        secureTextEntry
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                     />
                </CardSection>
                <Text style={{ color: 'red', fontSize: 20, alignSelf: 'center' }}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderLoginButton()} 
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;