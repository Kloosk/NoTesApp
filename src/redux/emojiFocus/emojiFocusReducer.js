import {FOCUS_DESC,FOCUS_TITLE} from "./emojiFocusTypes";

/*
    Focus on Title = true
    Focus on Description = false
 */
const initialState = {
  focus: true
};

const emojiFocusReducer = (state=initialState,action) => {
    switch(action.type){
        case FOCUS_TITLE:{
            return{
                focus: true
            }
        }
        case FOCUS_DESC:{
            return{
                focus: false
            }
        }
        default: return state
    }
};

export default emojiFocusReducer;