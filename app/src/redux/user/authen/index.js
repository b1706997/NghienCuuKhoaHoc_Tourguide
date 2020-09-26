// LOGIN REDUCER
import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';

export const authenSlice = createSlice({
    name:'authen',
    initialState: {
        loggedIn:false,
        userId:'',
    },
    reducers: {
        login: (state,action) => {
            state.loggedIn = true
            AsyncStorage.setItem('@username',action.payload.username)
        }
    }
});

export const {login} = authenSlice.actions;

export default authenSlice.reducer;