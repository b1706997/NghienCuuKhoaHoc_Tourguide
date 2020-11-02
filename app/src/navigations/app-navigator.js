import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import React from 'react'
import HomeScreen from '_scenes/home'
import CreateTour from '_scenes/user-tour'
import UserNotification from '_scenes/user-noti'
import AccountManagement from '_scenes/account'
import Icon from './components/Icon'
import BottomTabBar from './components/BottomTabBar'

// const TabNavigatorConfig = {
//   initialRouteName: 'Home',
//   defaultNavigationOptions: {
//     tabBarIcon: props => (<Icon {...props}/>)
//   },
//   tabBarComponent:props=>(<BottomTabBar {...props}/>)
// };
const TabNavigatorConfig = {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#eb4034',
    barStyle: { backgroundColor: '#694fad' },
    labeled :true,
    shifting:false
  };

const RouteConfigs = {
  Tour: {
    screen: CreateTour,
  },
  Home: {
    screen: HomeScreen,
  },
  Notification: {
    screen: UserNotification,
    // navigationOptions: {
    //   tabBarIcon: ({tintColor}) => (
    //     <View style={[{justifyContent:'space-between'},{alignItems:'center'},{flex:2},{flexDirection:'row'}]}>
    //       <Icon style={[{color:tintColor},{justifyContent:'center'},{alignItems:'center'}]} size={25} name={'ios-notifications-outline'}/>
    //     </View>
    //   ),
    //   tabBarBadge:3
    // }
  },
  Account: {
    screen:AccountManagement,
    navigationOptions: {
      tabBarBadge:1,
      tabBarColor:'#fcba03'
    }
    
  }
};

const AppNavigator = createMaterialBottomTabNavigator(RouteConfigs, TabNavigatorConfig)

export default AppNavigator