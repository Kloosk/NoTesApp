import {SHOW_REG_AND_LOG} from "./startNowTypes";

const initialState = {
    startnow: false
};

const startNowReducer = (state=initialState,action) => {
    switch (action.type) {
        case SHOW_REG_AND_LOG:{
            return{
                ...state,
                startnow: true
            }
        }
        default: return state
    }
};

export default startNowReducer