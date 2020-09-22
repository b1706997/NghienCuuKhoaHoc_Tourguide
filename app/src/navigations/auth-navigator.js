import {createStackNavigator} from 'react-navigation-stack';
// import SignupScreen from '_scenes/user-signup';
import LoginScreen from '_scenes/user-login';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login: LoginScreen,
  // Signup:SignupScreen
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;