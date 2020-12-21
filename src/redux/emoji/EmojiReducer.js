import {EMOJI_CLOSE,EMOJI_OPEN} from "./EmojiTypes";

const initialState = {
  open: false
};

const emojiReducer = (state=initialState,action) => {
    switch(action.type){
        case EMOJI_OPEN: {
            return {
                open: true
            }
        }
        case EMOJI_CLOSE:{
            return {
                open: false
            }
        }
        default: return state
    }
};

export default emojiReducer;