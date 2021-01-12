import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {dashClose, fontOff} from "../../redux";
import {useParams} from "react-router-dom";
import Logo from "../logo/Logo";
import Menu from "../navMobile/Menu";
import Nav from "../nav/Nav";
import SubmitEdit from "./submitEdit/SubmitEdit";
import NoteEdit from "../addNote/noteEdit/NoteEdit";
import NoteOptions from "../addNote/noteOptions/NoteOptions";
import Loading from "../loading/Loading";
import bg from "../../img/bgReg.jpg"
import LoadingAdd from "../loadingAdd/LoadingAdd";
import useEdit from "../../hooks/useEdit";

const Container = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
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
   margin: 40px 0 10px 0;
}
`;
const Grid = styled.div`
  padding-top: 13vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: flex-start;
    justify-items: center;
    padding: 0;
  }
`;
const Edit = () => {
    const {id} = useParams();
    const [darkmode,setDarkmode] = useState(false);
    const {status} = useEdit(id);
    const dispatch = useDispatch();
    const font = useSelector(state => state.fontmenu.menu);

    useEffect(() => {
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);

    const handleClick = () => {
        dispatch(dashClose()); // close mobile menu
        if(font) dispatch(fontOff());
    };
    return (
        <>
            {status === "success" && (
                <>
                    <LoadingAdd/>
                    <Logo path="/dashboard"/>
                    <Menu/>
                    <Nav/>

                    <Container onClick={handleClick} darkmode={darkmode}>
                        <Desktop><SubmitEdit edit={true}/></Desktop>
                        <Grid>
                            <NoteEdit edit={true}/>
                            <NoteOptions edit={true}/>
                        </Grid>
                    </Container>
                </>
            )}
            {status === "loading" && <Loading/>}
        </>
    );
};

export default Edit;