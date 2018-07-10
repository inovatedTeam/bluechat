import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, userRegister } from './../../action';
import { Card, CardSection, Button, Input, Spinner } from './../common';

class RegisterForm extends Component {

    static navigationOptions = {
        title: 'Register',
    };

    onRegisterBtnPress() {
        const { email, password } = this.props;
        this.props.userRegister({ email, password });
    }

    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }

    renderRegisterButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.onRegisterBtnPress.bind(this)}>Register</Button>
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
                    {this.renderRegisterButton()} 
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

export default connect(mapStateToProps, 
    { emailChanged, 
        passwordChanged, 
        userRegister 
    })(RegisterForm);
