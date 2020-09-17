import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import LoginForm from './components/LoginForm'

// const LoginScreen = ({navigation}) => (
  
//   // <SafeAreaView>  
//   //   <LoginForm login={login}/>
//   // </SafeAreaView>

      
//   <SafeAreaView>
//     <Text>Screen: Login</Text>

//     <TouchableHighlight onPress={() => navigation.navigate('Signup')}>
//       <Text>Go to signup</Text>
//     </TouchableHighlight>


//     <TouchableHighlight onPress={() => navigation.navigate('Home')}>
//       <Text>Go to home</Text>
//     </TouchableHighlight>

//     <LoginForm action={'user/login'}/>

    

//   </SafeAreaView>
// );


class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return(
      <SafeAreaView>
        <LoginForm/>
      </SafeAreaView>
    )
  }
}

