import {SET_SENTENCE} from "./searchInputTypes";

const initialState = {
  sentence: ""
};

const searchInputReducer = (state=initialState,action) => {
    switch(action.type){
        case SET_SENTENCE:{
            return {
                sentence: action.payload

            }
        }
        default: return state
    }
};

export default searchInputReducer