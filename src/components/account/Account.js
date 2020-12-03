import React from 'react';
import styled from 'styled-components'
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Nav from "../nav/Nav";
import {dashClose, menuDesktopClose} from "../../redux";
import {useDispatch} from "react-redux";
import bg from "../../img/bgReg.jpg";
import NewName from "./newName/NewName";
import LocalSettings from "./localSettings/LocalSettings";
import DeleteAcc from "./deleteAcc/DeleteAcc";

const Div = styled.div`
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
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-top: 13vh;   
  }
`;
const H1 = styled.h1`
  font-size: 1.7rem;
  color: #F9B613;
  margin: 5vh 0;
  @media (min-width: 768px) {
    font-size: 2rem;   
  }
`;
const Account = () => {
    const dispatch = useDispatch();
    const closeMenu = () => {
        dispatch(dashClose());
        dispatch(menuDesktopClose())
    };
    return (
        <Div>
            <Logo/>
            <Menu num={4}/>
            <Nav num={4}/>
            <div onClick={closeMenu}>
                <Container>
                    <H1>Local settings</H1>
                    <LocalSettings/>
                    <H1>Account</H1>
                    <NewName/>
                    <H1 style={{color: "red"}}>DANGER ZONE</H1>
                    <DeleteAcc/>
                </Container>
            </div>
        </Div>
    );
};

export default Account;