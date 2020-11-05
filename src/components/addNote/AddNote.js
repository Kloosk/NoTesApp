import React, {useEffect} from 'react';
import styled from 'styled-components'
import Logo from "../logo/Logo";
import NoteEdit from "./noteEdit/NoteEdit";
import Edit from "./edit/Edit";
import {useDispatch, useSelector} from "react-redux";
import {dashClose, fontOff, setObj} from "../../redux";
import Menu from "../menu/Menu";
import Nav from "../nav/Nav";
import StepZeroDesktop from "./edit/stepZero/desktop/StepZeroDesktop";
import {genereateOne} from "../../data/Data";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13vh;
  @media (min-width: 768px) {
    min-height: auto;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: flex-start;
    justify-items: center;
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
    const font = useSelector(state => state.fontmenu.menu);
    useEffect(() => {
        const obj = JSON.parse(localStorage.getItem('noteSave'));
        if(obj !== null){
            dispatch(setObj(obj));
        }else dispatch(setObj(genereateOne()));

    },[]);
    const handleClick = () => {
        dispatch(dashClose()); // close mobile menu
        if(font) dispatch(fontOff());
    };
    return (
        <>
            <Logo/>
            <Menu num={1}/>
            <Nav num={1}/>
            <Desktop><StepZeroDesktop/></Desktop>
            <Container onClick={handleClick}>
                <NoteEdit/>
                <Edit/>
            </Container>
        </>
    );
};

export default AddNote;