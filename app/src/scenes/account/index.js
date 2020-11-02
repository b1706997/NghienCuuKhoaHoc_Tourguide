import React,{Component} from 'react';
import CustomButton from '_atoms/Button'
import {logout} from './functions'
class AccountManagement extends Component {
  constructor(props)
  {
    super(props)
    
  }
  render()
  {
    return(
      <CustomButton onClick={()=>logout(this)} content="Logout"></CustomButton>
    )
  }
}

export default AccountManagement;