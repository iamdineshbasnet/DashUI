import { combineReducers } from "@reduxjs/toolkit";
import CommonReducer from "../../Components/Redux/commonSlice";


export const rootReducer = combineReducers({
    commonApp: CommonReducer,
})