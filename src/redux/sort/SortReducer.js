import {SET_SORT} from "./SortTypes";

const initialState = {
  method: false  //false = newest, true = oldest
};

const sortReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_SORT:{
            return{
                method: action.payload
            }
        }
        default: return state
    }
};

export default sortReducer