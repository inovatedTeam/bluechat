import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, userLogin } from './../../action';
import { Card, CardSection, Button, Input, Spinner } from './../common';

class LoginForm extends Component {
    // state = { email: '', password: '', error: '', loading: false } ;

    onLoginBtnPress() {
        const { email, password } = this.props;
        this.props.userLogin({ email, password });
    }

    // onLoginSuccess() {
    //     this.setState({
    //         email: '',
    //         password: '',
    //         error: '',
    //         loading: false
    //     });
    // }

    // onLoginFaild() {
    //     this.setState({
    //         error: 'Authentication error',
    //         loading: false
    //     });
    // }

    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }

    renderLoginButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
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
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input  
                        label="Password"
                        secureTextEntry
                        placeholder="Password"
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>
                <Text style={{ color: 'red', fontSize: 20, alignSelf: 'center' }}>
                    {this.props.error}
                </Text>
                <CardSection>
                    {this.renderLoginButton()} 
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, loading, error } = auth;
    return {
        email, password, loading, error
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, userLogin })(LoginForm);
