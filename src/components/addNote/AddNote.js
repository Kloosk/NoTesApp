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
import Loading from "../loading/Loading";
import NoteToolbar from "../noteToolbar/noteToolbar";
import LoadingAdd from "../loadingAdd/LoadingAdd";

const Container = styled.div`
  min-height: 100vh;
  background-image: ${props => props.darkmode ? "none" : `url(${bg})`};
  background-color: ${props => props.darkmode && `#231f20`};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  user-select: ${props => props.select ? 'none' : 'auto'};
`;
const Desktop = styled.div`
  display: none;
   @media (min-width: 768px) {
       display: block;
       padding: 40px 0 10px 0;
   }
`;
const Grid = styled.div`
  padding-top: 13vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: flex-start;
    justify-items: center;
    padding: 0;
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
    },[]);// eslint-disable-line react-hooks/exhaustive-deps
    const handleClick = () => {
        if(font) dispatch(fontOff());
    };
    const closeMenu = () => {
        dispatch(dashClose());
        dispatch(menuDesktopClose());
        dispatch(emojiClose());
    };
    return (
       load ? <>
            <LoadingAdd/>
            <Logo path="/dashboard"/>
            <Menu num={1}/>
            <Nav num={1}/>
            <NoteToolbar/>
            <div onClick={closeMenu}>
                <Container onClick={handleClick} darkmode={darkmode}>
                    <Desktop><StepZeroDesktop/></Desktop>
                    <Grid>
                        <NoteEdit/>
                        <NoteOptions/>
                    </Grid>
                </Container>
            </div>
        </> : <Loading/>
    );
};

export default AddNote;