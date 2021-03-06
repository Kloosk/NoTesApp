import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {dashClose, menuDesktopClose, setSentence, setShow} from "../../redux";
import Logo from "../logo/Logo";
import Menu from "../navMobile/Menu";
import Nav from "../nav/Nav";
import bg from "../../img/bgReg.webp";
import AllPublic from "./allPublic/allPublic";
import Loading from "../loading/Loading";
import usePublic from "../../hooks/usePublic";

const Container = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  background-image: ${props => props.darkmode ? "none" : `url(${bg})`};
  background-color: ${props => props.darkmode && `#231f20`};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;
const PublicNotes = () => {
    const {data,status} = usePublic();
    const [darkmode,setDarkmode] = useState(false);
    const dispatch = useDispatch();
    const closeMenu = () => {
        dispatch(dashClose());
        dispatch(menuDesktopClose());
        dispatch(setShow(false));

    };
    useEffect(() => {
        dispatch(setSentence(""));
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            {status === "loading" && <Loading/>}
            {status === "error" && <p>Error in fetching data</p>}
            {status === "success" && (
                <>
                    <Logo path="/dashboard"/>
                    <Menu num={3}/>
                    <Nav num={3}/>
                    <Container onClick={closeMenu} darkmode={darkmode}>
                        <AllPublic data={data}/>
                    </Container>
                </>
            )}
        </>
    )
};

export default PublicNotes;