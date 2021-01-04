import React from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {dashClose, menuDesktopClose} from "../../redux";
import Logo from "../logo/Logo";
import Menu from "../navMobile/Menu";
import Nav from "../nav/Nav";
import bg from "../../img/bgReg.jpg";
import AllPublic from "./allPublic/allPublic";
import Loading from "../loading/Loading";
import usePublic from "../../hooks/usePublic";

const Div = styled.div`
  position: relative;
  overflow-x: hidden;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 100vh; 
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
  padding-top: 13vh;
`;
const PublicNotes = () => {
    const {data,status} = usePublic();
    const dispatch = useDispatch();
    const closeMenu = () => {
        dispatch(dashClose());
        dispatch(menuDesktopClose())
    };
    return (
        <>
            {status === "loading" && <Loading/>}
            {status === "error" && <p>Error in fetching data</p>}
            {status === "success" && (
                <Div>
                    <Logo/>
                    <Menu num={3}/>
                    <Nav num={3}/>
                    <Container onClick={closeMenu}>
                        <AllPublic data={data}/>
                    </Container>
                </Div>
            )}
        </>
    )
};

export default PublicNotes;