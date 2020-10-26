import {DASH_CLOSE,DASH_OPEN} from "./dashmenuTypes";

export const dashOpen = () => {
  return{
      type: DASH_OPEN
  }
};
export const dashClose = () => {
  return{
      type: DASH_CLOSE
  }
};