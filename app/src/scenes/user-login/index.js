import React , {Component} from 'react'
import {initAction} from '_redux/shared/authen'
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import propTypes from 'prop-types'
import LoginForm from './components/LoginForm'
import stateToPropHOC from '_redux/components/stateToProp';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.props.init()
  }
  componentDidUpdate(prevProp,prevState,snapshot) {
    if(this.props.loggedIn)
      this.props.navigation.navigate('Home')
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
        <LoginForm navigation={this.props.navigation}/>
      </SafeAreaView>
    )
  }
}

LoginScreen.propTypes = {
  init:propTypes.func,
  loggedIn:propTypes.bool
}


const mapDispatchtoProp  =  dispatch => {
  return {
    init:() => {
      dispatch(initAction())
    }
  }
}

export default stateToPropHOC(["authen/loggedIn",'authen/username'])(mapDispatchtoProp)(LoginScreen)
