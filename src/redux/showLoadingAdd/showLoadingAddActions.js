import {LOADING_FALSE,LOADING_TRUE} from "./showLoadingAddTypes";

export const loadingTrue = () => {
  return{
      type: LOADING_TRUE
  }
};
export const loadingFalse = () => {
    return{
        type: LOADING_FALSE
    }
};