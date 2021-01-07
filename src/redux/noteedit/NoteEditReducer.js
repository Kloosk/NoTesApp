import {
    SET_DESC,
    SET_BORDER,
    SET_DESC_BG,
    SET_DESC_COLOR,
    SET_DESC_SIZE,
    SET_FONT,
    SET_TITLE,
    SET_TITLE_BG,
    SET_TITLE_COLOR,
    SET_TITLE_SIZE,
    SET_DESC_TRANSFORM,
    SET_TITLE_TRANSFORM,
    SET_STATUS,
    SET_OBJ,
    SET_TEMPLATE,
    SET_BORDER_SIZE,
    SET_ALIGN_DESC
} from "./NoteEditTypes";

const initialState = {
    title:"",
    text: "",
    titleColor:"#000",
    titleBg: "#fff",
    textColor:"#000",
    textBg:"#fff",
    border: "#000",
    borderSize: 3,
    font:"Lato",
    textSize: 1.0,
    titleSize: 1.7,
    titleTransform: "initial",
    textTransform: "initial",
    alignDesc: "left",
    status: true,
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
        case SET_TITLE_BG:{
            return{
                ...state,
                titleBg: action.payload
            }
        }
        case SET_TITLE_COLOR:{
            return{
                ...state,
                titleColor: action.payload
            }
        }
        case SET_DESC_COLOR:{
            return{
                ...state,
                textColor: action.payload
            }
        }
        case SET_DESC_BG:{
            return{
                ...state,
                textBg: action.payload
            }
        }
        case SET_BORDER:{
            return{
                ...state,
                border: action.payload
            }
        }
        case SET_FONT:{
            return{
                ...state,
                font: action.payload
            }
        }
        case SET_DESC_TRANSFORM:{
            return{
                ...state,
                textTransform: action.payload
            }
        }
        case SET_TITLE_TRANSFORM:{
            return{
                ...state,
                titleTransform: action.payload
            }
        }
        case SET_STATUS:{
            return{
                ...state,
                status: action.payload
            }
        }
        case SET_TEMPLATE:{
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_BORDER_SIZE:{
            return{
                ...state,
                borderSize: state.borderSize+action.payload
            }
        }
        case SET_ALIGN_DESC:{
            return{
                ...state,
                alignDesc: action.payload
            }
        }
        case SET_OBJ: return action.payload;
        default: return state
    }
};

export default NoteEditReducer;