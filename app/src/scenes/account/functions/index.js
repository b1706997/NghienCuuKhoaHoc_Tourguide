import AsyncStorage from '@react-native-community/async-storage';
import store from '_redux/store.js'
export async function logout(src) {
    await AsyncStorage.removeItem('username')
    store.dispatch({type:'authen/logout'})
    src.props.navigation.navigate('Login')
}