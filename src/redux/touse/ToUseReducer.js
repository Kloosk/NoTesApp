import {TOUSE_FALSE,TOUSE_TRUE} from "./ToUseTypes";

const initialState = {
  touse: false
};

const toUseReducer = (state=initialState,action) => {
    switch(action.type){
        case TOUSE_TRUE:{
            return{
                touse: true
            }
        }
        case TOUSE_FALSE:{
            return{
                touse: false
            }
        }
        default: return state
    }
};

export default toUseReducer;