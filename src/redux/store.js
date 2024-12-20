import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./Slices/UserSlice"

const store=configureStore({
    reducer:{
        profile:profileReducer
        
    }
});
export default store;