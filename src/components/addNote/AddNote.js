import React from 'react';
import styled from 'styled-components'
import Logo from "../logo/Logo";
import NoteEdit from "./noteEdit/NoteEdit";
import Edit from "./edit/Edit";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13vh;
`;
const AddNote = () => {

    return (
        <>
            <Logo/>
            <Container>
                <NoteEdit/>
                <Edit/>
            </Container>
        </>
    );
};

export default AddNote;