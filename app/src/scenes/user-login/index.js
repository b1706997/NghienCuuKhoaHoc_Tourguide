import React , {Component} from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import LoginForm from '_molecules/LoginForm'
import AsyncStorage from '@react-native-community/async-storage';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    AsyncStorage.getItem('@username') && this.props.navigation.navigate('Home')
  }
  navigation = this.props.navigation
  render() {
    return(
      <SafeAreaView >
        <Text>Screen: Login</Text>

    <TouchableHighlight onPress={() => this.navigation.navigate('Signup')}>
       <Text>Go to signup</Text>
     </TouchableHighlight>


     <TouchableHighlight onPress={() => this.navigation.navigate('Home')}>
       <Text>Go to home</Text>
     </TouchableHighlight>
        <LoginForm/>
      </SafeAreaView>
    )
  }
}

export default LoginScreen
