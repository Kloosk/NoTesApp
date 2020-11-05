import {ALERT_ON,ALERT_OFF} from "./alertDeleteTypes";

const initialState = {
  alert: false,
  id: null
};

const alertDeleteReducer = (state=initialState,action) => {
  switch (action.type) {
      case ALERT_OFF: {
          return{
              ...state,
              alert: false
          }
      }
      case ALERT_ON: {
          return{
              alert: true,
              id: action.payload
          }
      }
      default: return state
  }  
};

export default alertDeleteReducer;