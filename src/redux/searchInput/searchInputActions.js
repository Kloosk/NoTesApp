import {SET_SENTENCE,SET_SHOW} from "./searchInputTypes";

export const setSentence = (payload) => {
  return{
      type: SET_SENTENCE,
      payload: payload
  }
};

export const setShow = (payload) => {
    return{
        type: SET_SHOW,
        payload: payload
    }
};