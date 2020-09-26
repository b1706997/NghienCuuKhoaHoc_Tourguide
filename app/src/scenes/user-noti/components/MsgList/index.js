import React,{Component} from 'react'
import { SafeAreaView } from 'react-native'
import CustomText from '_atoms/CustomText'
class MsgList extends Component {
    render() {
        return(
            <SafeAreaView>
                <CustomText  content={'Msg List'}/>
            </SafeAreaView>
        )
    }
}
export default MsgList