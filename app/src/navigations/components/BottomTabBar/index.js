import React,{Component} from 'react'
import {View,Text} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Button from '_components/atoms/Button'
import Icon from 'react-native-vector-icons/Ionicons'
class BottomTabBar extends Component {
    constructor(props)
    {
        super(props)
        console.log(props)
        this.navigate = this.navigate.bind(this)
    }
    navigate(route) {
        this.props.navigation.navigate(route)
    }
    render() {
        return(
            <SafeAreaView style={[{flexDirection:'row'}]}>
                <View style={[{flex:1},{backgroundColor:'blue'}]}><Button onClick={()=>this.navigate('Tour')} content={'Tour'}/></View>
                <View style={[{flex:2},{backgroundColor:'red'},{flexDirection:'row'},{justifyContent:'center'}]}><Button onClick={()=>this.navigate('Home')} content={'HOME'}/></View>
                <View style={[{flex:1},{backgroundColor:'blue'}]}><Button onClick={()=>this.navigate('Notification')} content={'Notification'}/>
                    <Icon style={[{color:'red'},{justifyContent:'center'},{alignItems:'center'}]} size={25} name={'ios-outline'}/>
                </View>
            </SafeAreaView>
        )
    }

}

export default BottomTabBar