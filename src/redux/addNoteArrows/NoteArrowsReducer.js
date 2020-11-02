import {SET_MOVE, LEFT_FALSE, LEFT_RIGHT, RIGHT_FALSE, RIGHT_TRUE, LEFT_TRUE} from "./NoteArrowsTypes";

const initialState = {
  move: 0,
  right: true,
  left: true
};

const noteArrowReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_MOVE:{
            return{
                ...state,
                move: action.payload
            }
        }
        case LEFT_FALSE:{
            return{
                ...state,
                left: false
            }
        }
        case LEFT_TRUE:{
            return{
                ...state,
                left: true
            }
        }
        case RIGHT_TRUE:{
            return{
                ...state,
                right: true
            }
        }
        case RIGHT_FALSE:{
            return{
                ...state,
                right: false
            }
        }
        default: return state
    }
};

export default noteArrowReducer
