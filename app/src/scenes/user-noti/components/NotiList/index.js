import React,{Component} from 'react'
import { SafeAreaView } from 'react-native'
import CustomText from '_atoms/CustomText'
class NotiList extends Component {
    render() {
        return(
            <SafeAreaView>
                <CustomText content={'Notification List'}/>
            </SafeAreaView>
        )
    }
}
export default NotiList