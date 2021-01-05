import React, {useEffect} from 'react';
import styled from 'styled-components'
import Video from "./video/Video";
import Btn from "./btn/Btn";
import Logo from "../logo/Logo";
import NoteSection from "./notesection/NoteSection";
import LogAndReg from "./logandreg/LogAndReg";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import AuthorsLink from "../authors/authorsLink/AuthorsLink";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const Start = () => {
    const history = useHistory();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    useEffect(() => {
        if (isAuthenticated) {
            history.push("/dashboard"); // push user to dashboard when they login
        }
    },[isAuthenticated]);
    return (
        <Container>
            <Video/>
            <Btn/>
            <Logo path="/"/>
            <NoteSection/>
            <LogAndReg/>
            <AuthorsLink/>
        </Container>
    );
};

export default Start;