import store from '_redux/store.js'
import {post} from '_services'
import AsyncStorage from '@react-native-community/async-storage';
export async function login(uname,psw,navigation) {
    var response = await post('authen.php',{username:uname,password:psw})
    if(response.type=='success')
    {
        console.log(response)
        AsyncStorage.setItem('username',uname)
        store.dispatch({type:'authen/loggedIn',payload:{username:uname}})
        navigation.navigate('Home')
    }
}