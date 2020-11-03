import React from 'react';
import styled from 'styled-components'
import Logo from "../logo/Logo";
import NoteEdit from "./noteEdit/NoteEdit";
import Edit from "./edit/Edit";
import {useDispatch, useSelector} from "react-redux";
import {fontOff} from "../../redux";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13vh;
`;
const AddNote = () => {
    const dispatch = useDispatch();
    const font = useSelector(state => state.fontmenu.menu);
    return (
        <>
            <Logo/>
            <Container onClick={() => {font && dispatch(fontOff())}}>
                <NoteEdit/>
                <Edit/>
            </Container>
        </>
    );
};

export default AddNote;