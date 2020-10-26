import {combineReducers} from 'redux';
import startNowReducer from './startnow/startNowReducer';
import authReducer from "./auth/authReducer";
import dashmenuReducer from "./dashmenu/dashmenuReducer";

const rootReducer = combineReducers({
    startnow: startNowReducer,
    auth: authReducer,
    dashmenu: dashmenuReducer,
});

export default rootReducer