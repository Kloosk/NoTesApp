import { USER_LOADING,SET_CURRENT_USER,GET_ERRORS} from "./authTypes";

const isEmpty = require("is-empty");

const initalState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    error: []
};

const authReducer = (state=initalState,action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ERRORS: {
            return {
                ...state,
                error: action.payload
            }
        }
        default: return state
    }
};

export default authReducer;