import React, {useEffect} from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {dashClose, emojiClose, fontOff, setObj} from "../../redux";
import {useParams} from "react-router-dom";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Nav from "../nav/Nav";
import SubmitEdit from "./submitEdit/SubmitEdit";
import NoteEdit from "../addNote/noteEdit/NoteEdit";
import NoteOptions from "../addNote/noteOptions/NoteOptions";
import Loading from "../loading/Loading";
import bg from "../../img/bgReg.jpg"
import LoadingAdd from "../loadingAdd/LoadingAdd";
import useEdit from "../../hooks/useEdit";
import NoteToolbar from "../../noteToolbar/noteToolbar";

const Bg = styled.div`
  position: relative;
  overflow-x: hidden;
  background-image: url(${bg});
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
  margin: 5vh 0;
  width: 100vw;
  display: none;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    display: flex;
  }
  
`;
const Edit = () => {
    const {id} = useParams();
    const {status} = useEdit(id);
    const dispatch = useDispatch();
    const font = useSelector(state => state.fontmenu.menu);
    const handleClick = () => {
        dispatch(dashClose()); // close mobile menu
        dispatch(emojiClose());
        if(font) dispatch(fontOff());
    };
    return (
        <>
            {status === "success" && (
                <Bg>
                    <LoadingAdd/>
                    <Logo/>
                    <Menu/>
                    <Nav/>
                    <NoteToolbar/>
                    <Desktop>
                        <SubmitEdit edit={true}/>
                    </Desktop>
                    <Container onClick={handleClick}>
                        <NoteEdit edit={true}/>
                        <NoteOptions edit={true}/>
                    </Container>
                </Bg>
            )}
            {status === "loading" && <Loading/>}
        </>
    );
};

export default Edit;