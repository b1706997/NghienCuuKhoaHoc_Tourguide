import {createBottomTabNavigator} from 'react-navigation-tabs'
import React from 'react'
import HomeScreen from '_scenes/home';
import CreateTour from '_scenes/user-tour'
import UserNotification from '_scenes/user-noti'
import Icon from './components/Icon'
import BottomTabBar from './components/BottomTabBar'

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    tabBarIcon: props => (<Icon {...props}/>)
  },
  tabBarComponent:props=>(<BottomTabBar {...props}/>)
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
  }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;