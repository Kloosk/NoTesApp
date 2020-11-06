import {MENU_DESKTOP_CLOSE,MENU_DESKTOP_OPEN} from "./menuDesktopTypes";

export const menuDesktopClose = () => {
  return{
      type: MENU_DESKTOP_CLOSE
  }  
};
export const menuDesktopOpen = () => {
    return{
        type: MENU_DESKTOP_OPEN
    }
};