import {MENU_DESKTOP_OPEN,MENU_DESKTOP_CLOSE} from "./menuDesktopTypes";

const initialState = {
  open: false
};

const menuDesktopReducer = (state=initialState,action) => {
    switch(action.type){
        case MENU_DESKTOP_CLOSE:{
            return{
                open: false
            }
        }
        case MENU_DESKTOP_OPEN:{
            return{
                open: true
            }
        }
        default: return state
    }
};

export default menuDesktopReducer;