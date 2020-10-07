import React , {Component} from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import LoginForm from '_molecules/LoginForm'
// import AsyncStorage from '@react-native-community/async-storage';
import store from '_redux/store.js'
class LoginScreen extends Component {
  constructor(props) {
    super(props)
    // AsyncStorage.getItem('username') && this.props.navigation.navigate('Home')
    // console.log(store.getState())
    store.getState().authen.loggedIn && this.props.navigation.navigate('Home')
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


export default (LoginScreen)
