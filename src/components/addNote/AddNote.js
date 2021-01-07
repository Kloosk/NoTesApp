import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Logo from "../logo/Logo";
import NoteEdit from "./noteEdit/NoteEdit";
import {useDispatch, useSelector} from "react-redux";
import {dashClose, emojiClose, fontOff, menuDesktopClose, setTemplate, TouseFalse} from "../../redux";
import Menu from "../navMobile/Menu";
import Nav from "../nav/Nav";
import StepZeroDesktop from "./noteOptions/stepZero/desktop/StepZeroDesktop";
import {genereateOne} from "../../data/Data";
import NoteOptions from "./noteOptions/NoteOptions";
import bg from "../../img/bgReg.jpg"
import darkbg from "../../img/dark_theme.jpg"
import Loading from "../loading/Loading";
import LoadingAdd from "../loadingAdd/LoadingAdd";
import NoteToolbar from "../noteToolbar/noteToolbar";

const Div = styled.div`
  position: relative;
  overflow-x: hidden;
  background-image: ${props => props.darkmode ? `url(${darkbg})` : `url(${bg})`};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 100vh; 
  padding-top: 13vh;
  width: 100vw;
  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    padding: 0;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  @media (min-width: 768px) {
    min-height: auto;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: flex-start;
    justify-items: center;
    position: relative;
  }
`;
const Desktop = styled.div`
  display: none;
   @media (min-width: 768px) {
   display: block;
   width: 100vw;
   margin: 50px 0;
}
`;
const AddNote = () => {
    const dispatch = useDispatch();
    const [darkmode,setDarkmode] = useState(false);
    const [load,setLoad] = useState(false);
    const toUse = useSelector(state => state.touse.touse);
    const font = useSelector(state => state.fontmenu.menu);
    useEffect(() => {
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
        const obj = JSON.parse(localStorage.getItem('noteSave'));
        if(obj !== null && toUse === false){
            dispatch(setTemplate(obj));
        }else if(toUse === false){
            dispatch(setTemplate(genereateOne()));
        }
        toUse && dispatch(TouseFalse());
        setLoad(true);
    },[]);
    const handleClick = () => {
        if(font) dispatch(fontOff());
    };
    const closeMenu = () => {
        dispatch(dashClose());
        dispatch(menuDesktopClose());
        dispatch(emojiClose());
    };
    return (
       load ? <Div darkmode={darkmode}>
            <LoadingAdd/>
            <Logo path="/dashboard"/>
            <Menu num={1}/>
            <Nav num={1}/>
            <NoteToolbar/>
            <div onClick={closeMenu}>
                <Desktop><StepZeroDesktop/></Desktop>
                <Container onClick={handleClick}>
                    <NoteEdit/>
                    <NoteOptions/>
                </Container>
            </div>
        </Div> : <Loading/>
    );
};

export default AddNote;