import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {dashClose, fontOff, setObj} from "../../redux";
import {useParams} from "react-router-dom";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Nav from "../nav/Nav";
import SubmitEdit from "./submitEdit/SubmitEdit";
import NoteEdit from "../addNote/noteEdit/NoteEdit";
import NoteOptions from "../addNote/noteOptions/NoteOptions";
import Loading from "../loading/Loading";
import bg from "../../img/bgReg.jpg"

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background: url(${bg}) center/cover no-repeat;
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
    const { id } = useParams();
    const dispatch = useDispatch();
    const font = useSelector(state => state.fontmenu.menu);
    const [load,setLoad] = useState(false);
    useEffect(() => {
        axios
            .get("https://notesappserver.herokuapp.com/api/users/edit", {
                headers: {
                    'auth-token': localStorage.getItem("jwtToken"),
                    'id': id
                },
            })
            .then(res => {
                console.log(res);
                dispatch(setObj(res.data.data));
                setLoad(true);
            })
            .catch(err => console.log(err));
    },[]);
    const handleClick = () => {
        dispatch(dashClose()); // close mobile menu
        if(font) dispatch(fontOff());
    };
    return (
        load ? <Bg>
            <Logo/>
            <Menu/>
            <Nav/>
            <Desktop>
                <SubmitEdit edit={true}/>
            </Desktop>
            <Container onClick={handleClick}>
                <NoteEdit/>
                <NoteOptions edit={true}/>
            </Container>
        </Bg> : <Loading/>
    );
};

export default Edit;