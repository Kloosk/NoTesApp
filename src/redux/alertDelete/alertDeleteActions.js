import {ALERT_OFF,ALERT_ON} from "./alertDeleteTypes";

export const alertOn = payload => {
  return{
      type: ALERT_ON,
      payload
  }
};
export const alertOff = () => {
    return{
        type: ALERT_OFF
    }
};