import React from 'react';
import styled from 'styled-components'
import Logo from "../logo/Logo";
import NoteEdit from "./noteEdit/NoteEdit";
import Edit from "./edit/Edit";
import {useDispatch, useSelector} from "react-redux";
import {fontOff} from "../../redux";
import Menu from "../dashboard/menu/Menu";
import Nav from "../nav/Nav";
import StepZeroDesktop from "./edit/stepZero/desktop/StepZeroDesktop";

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
    return (
        <>
            <Logo/>
            <Menu/>
            <Nav/>
            <Desktop><StepZeroDesktop/></Desktop>
            <Container onClick={() => {font && dispatch(fontOff())}}>
                <NoteEdit/>
                <Edit/>
            </Container>
        </>
    );
};

export default AddNote;