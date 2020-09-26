import React,{ Component } from "react";
import { SafeAreaView } from "react-native";
import CustomText from '_atoms/CustomText'
// import Navigator from './navigation'
import Container from "./navigation";
export default class UserNotification extends Component {
    render() {
        return(
            <SafeAreaView>
                <SafeAreaView style={[{flex:1},{flexDirection:"column"},{justifyContent:'center'},{alignItems:"center"},{paddingVertical:15}]}>
                    <CustomText type='header' content='Notifiations' />
                </SafeAreaView>
                
                <Container/>
                
            </SafeAreaView>
        )
    }
}