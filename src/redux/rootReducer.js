import {combineReducers} from 'redux';
import startNowReducer from './startnow/startNowReducer';
import authReducer from "./auth/authReducer";
import dashmenuReducer from "./dashmenu/dashmenuReducer";
import NoteEditReducer from "./noteedit/NoteEditReducer";

const rootReducer = combineReducers({
    startnow: startNowReducer,
    auth: authReducer,
    dashmenu: dashmenuReducer,
    note: NoteEditReducer,
});

export default rootReducer