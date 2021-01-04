import {combineReducers} from 'redux';
import startNowReducer from './startnow/startNowReducer';
import authReducer from "./auth/authReducer";
import dashmenuReducer from "./dashmenu/dashmenuReducer";
import NoteEditReducer from "./noteedit/NoteEditReducer";
import noteArrowReducer from "./addNoteArrows/NoteArrowsReducer";
import fontMenuReducer from "./fontMenu/fontMenuReducer";
import alertDeleteReducer from "./alertDelete/alertDeleteReducer";
import menuDesktopReducer from "./menuDesktop/menuDesktopReducer";
import toUseReducer from "./touse/ToUseReducer";
import loadingAddReducer from "./showLoadingAdd/showLoadingAddReducer";
import emojiReducer from "./emoji/EmojiReducer";
import emojiFocusReducer from "./emojiFocus/emojiFocusReducer";
import searchInputReducer from "./searchInput/searchInputReducer";

const rootReducer = combineReducers({
    startnow: startNowReducer,
    auth: authReducer,
    dashmenu: dashmenuReducer,
    note: NoteEditReducer,
    arrows: noteArrowReducer,
    fontmenu: fontMenuReducer,
    alert: alertDeleteReducer,
    menudesktop: menuDesktopReducer,
    touse: toUseReducer,
    showLoading: loadingAddReducer,
    emoji: emojiReducer,
    emojiFocus: emojiFocusReducer,
    inputSentence: searchInputReducer,
});

export default rootReducer