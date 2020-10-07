import {configureStore,combineReducers} from '@reduxjs/toolkit';
import authenSlice from './shared/authen/index.js';
// import navigation from './shared/navigation'
const rootReducer = combineReducers({
    authen:authenSlice,
    // navigation:navigation
})
export default configureStore ({
    reducer:rootReducer
});
// export default configureStore({
//     reducer:{
//         authen:authenSlice
//     }
// })