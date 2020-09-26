import { createAppContainer} from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import MsgList from '../components/MsgList'
import NotiList from '../components/NotiList'
const TabConfigs = {
    initialRouteName: 'MsgList',
}
const RouteConfigs = {
    MsgList:{
        screen: MsgList,
        navigationOptions:{
            tabBarLabel:"Messages"
        }
    },
    NotiList:{
        screen:NotiList,
        navigationOptions:{
            tabBarLabel:"Notifications"
        }
    }
}

const Navigator = createMaterialTopTabNavigator(RouteConfigs,TabConfigs)
export default createAppContainer(Navigator) 