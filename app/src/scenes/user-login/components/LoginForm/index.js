import React, { Component } from 'react';
import Input from '_atoms/Input'
import { View ,Text } from 'react-native';
import propTypes from 'prop-types';
import Button from '_atoms/Button';
// import { connect } from 'react-redux';
import {login} from '../../functions'
import FormHOC from '_components/HOC/FormHOC'

const state = {
    username:'',
    password:''
}
const prop = {
    login:propTypes.func
}
class LoginForm extends Component {
    constructor (props) {
        super(props)
        this.state = this.props.state
    }
    render() {
        return(
            <View>
                <Input onChange={this.props.onChange} type='username' label='Username' />
                <Input onChange={this.props.onChange} type='password' label='Password'/>
                <Button content='Login' onClick={()=>login(this.props.username,this.props.password,this.props.navigation) }/>
            </View>
        )
    }
}

LoginForm.propTypes = prop

// // REDUX
// const mapDispatchToProps = dispatch => {
//     return {
//         login:(uname,psw) => {
//             dispatch({type:'authen/login',payload:{username:uname,password:psw}})
//         }
//     }
// }

// LoginForm = connect(null,mapDispatchToProps)(LoginForm)

LoginForm = FormHOC(state)()(LoginForm)

export default LoginForm

//   LoginFormRedux