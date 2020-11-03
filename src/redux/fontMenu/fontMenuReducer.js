import {FONT_ON,FONT_OFF} from "./fontMenuTypes";

const initialState = {
  menu: false
};

const fontMenuReducer = (state=initialState,action) => {
    switch(action.type){
        case FONT_OFF:{
            return{
                menu: false
            }
        }
        case FONT_ON:{
            return{
                menu: true
            }
        }
        default: return state
    }
};

export default fontMenuReducer