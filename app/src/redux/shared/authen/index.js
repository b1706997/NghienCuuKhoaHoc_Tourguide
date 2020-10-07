// LOGIN REDUCER
import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';

export const authenSlice = createSlice({
    name:'authen',
    initialState: {
        loggedIn:AsyncStorage.getItem('username')!=null?true:false,
        userId:AsyncStorage.getItem('username'),
    },
    reducers: {
        login: (state,action) => {
            state.loggedIn = true
            AsyncStorage.setItem('username',action.payload.username)
        },
        logout:(state,action) => {
            state.loggedIn = false
        },
    }
});

export const {login,logout} = authenSlice.actions;

export default authenSlice.reducer;