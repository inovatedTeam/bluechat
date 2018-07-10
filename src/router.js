import { createStackNavigator } from 'react-navigation';
import LoginForm from './components/register/loginForm';
import RegisterForm from './components/register/RegisterForm';

const RootStack = createStackNavigator(
  {
    Login: LoginForm,
    Register: RegisterForm,
  },
  {
    initialRouteName: 'Login',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default RootStack;
