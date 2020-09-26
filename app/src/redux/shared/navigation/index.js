// NAVIGATION REDUCER
import {createSlice} from '@reduxjs/toolkit';
export const navigation = createSlice({
    name:'navigation',
    initialState: {
        route:'',
        nestedRoute:''
    },
    reducers: {
        navigate: (state,action) => {
            console.log(this.props.navigation)
        }
    }
});

export const {login} = navigation.actions

export default navigation.reducer