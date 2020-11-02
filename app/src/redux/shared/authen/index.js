// LOGIN REDUCER
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';


// First, create the thunk
export const initAction = createAsyncThunk(
    'authen/initAction',
    async () => {
      const result =  await AsyncStorage.getItem('username')
      return {username:result}
    }
  )


export const authenSlice = createSlice({
    name:'authen',
    initialState: {
        loggedIn:null,
        username:""
    },
    reducers: {
        loggedIn: (state,action) => {
            state.loggedIn = true
            state.username = action.payload.username
            // AsyncStorage.setItem('username',action.payload.username)
        },
        logout:(state) => {
            // AsyncStorage.removeItem('username')
            state.loggedIn = false
        },
    },
    extraReducers: {
        [initAction.fulfilled]: (state,action) => {
            console.log('sad')
            if(action.payload.username!=null) {
                state.loggedIn = true
                state.username = action.payload.username
            }
            else
            {
                state.loggedIn = false
            }
        }
    }
});

export const {login,logout} = authenSlice.actions;

export default authenSlice.reducer;