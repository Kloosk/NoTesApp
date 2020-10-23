import {combineReducers} from 'redux';
import startNowReducer from './startnow/startNowReducer';
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
    startnow: startNowReducer,
    auth: authReducer,
});

export default rootReducer