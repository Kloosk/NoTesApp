import{SET_DESC,SET_BORDER,SET_DESC_BG,SET_DESC_COLOR,SET_DESC_SIZE,SET_FONT,SET_TITLE,SET_TITLE_BG,SET_TITLE_COLOR,SET_TITLE_SIZE} from "./NoteEditTypes";

const initialState = {
    title:"Title",
    text: "Your text",
    titleColor:"#000",
    titleBg: "#fff",
    textColor:"#000",
    textBg:"#fff",
    border: "#000",
    font:"Arial",
    textSize: 1,
    titleSize: 1.2
};

const NoteEditReducer = (state=initialState,action) => {
    switch(action.type){
        case SET_DESC:{
            return{
                ...state,
                text: action.payload
            }
        }
        case SET_TITLE:{
            return{
                ...state,
                title: action.payload
            }
        }
        case SET_TITLE_SIZE:{
            console.log(action.payload);
            return{
                ...state,
                titleSize: state.titleSize+action.payload
            }
        }
        case SET_DESC_SIZE:{
            return{
                ...state,
                textSize: state.textSize+action.payload
            }
        }
        default: return state
    }
};

export default NoteEditReducer;