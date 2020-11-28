import {
    SET_DESC_TRANSFORM,
    SET_TITLE_TRANSFORM,
    SET_OBJ,
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
    SET_TEMPLATE,
    SET_STATUS
} from "./NoteEditTypes";

export const setDesc = payload => {
  return{
      type: SET_DESC,
      payload
  }
};
export const setBorder= payload => {
    return{
        type: SET_BORDER,
        payload
    }
};
export const setDescBg = payload => {
    return{
        type: SET_DESC_BG,
        payload
    }
};
export const setDescColor = payload => {
    return{
        type: SET_DESC_COLOR,
        payload
    }
};
export const setDescSize = payload => {
    return{
        type: SET_DESC_SIZE,
        payload
    }
};
export const setFont = payload => {
    return{
        type: SET_FONT,
        payload
    }
};
export const setTitle = payload => {
    return{
        type: SET_TITLE,
        payload
    }
};
export const setTitleColor = payload => {
    return{
        type: SET_TITLE_COLOR,
        payload
    }
};
export const setTitleBg = payload => {
    return{
        type: SET_TITLE_BG,
        payload
    }
};
export const setTitleSize = payload => {
    return{
        type: SET_TITLE_SIZE,
        payload
    }
};
export const setObj = payload => {
  return{
      type: SET_OBJ,
      payload
  }
};
export const setTitleTransform = payload => {
    return{
        type: SET_TITLE_TRANSFORM,
        payload
    }
};
export const setTextTransform = payload => {
    return{
        type: SET_DESC_TRANSFORM,
        payload
    }
};
export const setTemplate = payload => {
    return{
        type: SET_TEMPLATE,
        payload
    }
};
export const setStatus= payload => {
    return{
        type: SET_STATUS,
        payload
    }
};









