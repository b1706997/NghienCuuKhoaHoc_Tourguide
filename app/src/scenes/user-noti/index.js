import React,{ Component } from "react";
import { SafeAreaView } from "react-native";
import CustomText from '_atoms/CustomText'
export default class UserNotification extends Component {
    render() {
        return(
            <SafeAreaView>
                <CustomText content={'User notification'}/>
            </SafeAreaView>
        )
    }
}