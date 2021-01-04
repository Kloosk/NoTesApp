import {SET_SENTENCE,SET_SHOW} from "./searchInputTypes";

const initialState = {
    sentence: "",
    show: false
};

const searchInputReducer = (state=initialState,action) => {
    switch(action.type){
        case SET_SENTENCE:{
            return {
                ...state,
                sentence: action.payload

            }
        }
        case SET_SHOW:{
            return{
                ...state,
                show: action.payload
            }
        }
        default: return state
    }
};

export default searchInputReducer