import React from 'react';
import styled from 'styled-components'
import Video from "./video/Video";
import Btn from "./btn/Btn";
import Logo from "./logo/Logo";
import NoteSection from "./notesection/NoteSection";
import LogAndReg from "./logandreg/LogAndReg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const Start = () => {
    return (
        <Container>
            <Video/>
            <Btn/>
            <Logo/>
            <NoteSection/>
            <LogAndReg/>
        </Container>
    );
};

export default Start;