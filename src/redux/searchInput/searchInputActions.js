import {SET_SENTENCE} from "./searchInputTypes";

export const setSentence = (payload) => {
  return{
      type: SET_SENTENCE,
      payload: payload
  }
};