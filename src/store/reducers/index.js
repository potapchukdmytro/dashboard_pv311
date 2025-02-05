import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./authReducer/authReducer";
import userReducer from "./userReducer/userReducer";
import themeReducer from "./themeReducer/themeReducer";
import roleReducer from "./roleReducer/roleReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    theme: themeReducer,
    role: roleReducer
})