import {SET_MOVE,LEFT_FALSE,LEFT_TRUE,RIGHT_FALSE,RIGHT_TRUE} from "./NoteArrowsTypes";

export const setMove = payload => {
  return{
      type: SET_MOVE,
      payload
  }
};
export const leftFalse = () => {
  return{
      type: LEFT_FALSE
  }
};
export const leftTrue = () => {
  return{
      type: LEFT_TRUE
  }
};
export const rightFalse = () => {
  return{
      type: RIGHT_FALSE
  }
};
export const rightTrue = () => {
    return{
        type: RIGHT_TRUE
    }
};