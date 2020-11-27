import {LOADING_TRUE,LOADING_FALSE} from "./showLoadingAddTypes";

const initialState = {
  loading: false
};

const loadingAddReducer = (state=initialState,action) => {
    switch(action.type){
        case LOADING_FALSE: {
            return{
                ...state,
                loading: false
            }
        }
        case LOADING_TRUE: {
            return{
                ...state,
                loading: true
            }
        }
        default: return state
    }
};

export default loadingAddReducer;