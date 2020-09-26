import store from '_services/redux/store.js'
import {post} from '_services'
export function login(uname,psw) {
    var response = post('test.php',{username:uname,password:psw})
    if(response.type=='success')
    {
        
    }
}