import {combineReducers} from 'redux';
import startNowReducer from './startnow/startNowReducer';

const rootReducer = combineReducers({
    startnow: startNowReducer,
});

export default rootReducer