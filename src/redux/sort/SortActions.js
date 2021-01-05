import {SET_SORT} from "./SortTypes";

export const setSort = (payload) => {
  return{
      type: SET_SORT,
      payload
  }
};
