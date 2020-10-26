import {DASH_OPEN,DASH_CLOSE} from "./dashmenuTypes";

const initalState = {
  open: false
};

const dashmenuReducer = (state=initalState,action) => {
  switch (action.type) {
      case DASH_OPEN:{
          return{
              ...state,
              open: true
          }
      }
      case DASH_CLOSE:{
          return{
              ...state,
              open: false
          }
      }
      default: return state
  }
};

export default dashmenuReducer