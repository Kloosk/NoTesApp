import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Logo from "../logo/Logo";
import Menu from "../navMobile/Menu";
import Nav from "../nav/Nav";
import {dashClose, menuDesktopClose} from "../../redux";
import {useDispatch} from "react-redux";
import bg from "../../img/bgReg.jpg";
import NewName from "./newName/NewName";
import LocalSettings from "./localSettings/LocalSettings";
import DeleteAcc from "./deleteAcc/DeleteAcc";

const Container = styled.div`
  padding: 5vh 0 5vh 0;
  min-height: 100vh;
  overflow-x: hidden;
  background-image: ${props => props.darkmode ? "none" : `url(${bg})`};
  background-color: ${props => props.darkmode && `#231f20`};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;
const H1 = styled.h1`
  font-size: 1.7rem;
  color: #F9B613;
  margin: 5vh 0;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2rem;   
  }
`;
const Account = () => {
    const dispatch = useDispatch();
    const [darkmode,setDarkmode] = useState(false);
    const closeMenu = () => {
        dispatch(dashClose());
        dispatch(menuDesktopClose())
    };
    useEffect(() => {
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);
    return (
        <>
            <Logo path="/dashboard"/>
            <Menu num={4}/>
            <Nav num={4}/>
            <div onClick={closeMenu}>
                <Container darkmode={darkmode}>
                    <H1>Settings</H1>
                    <LocalSettings dark={darkmode}/>
                    <H1>Account</H1>
                    <NewName dark={darkmode}/>
                    <H1 style={{color: "red"}}>DANGER ZONE</H1>
                    <DeleteAcc dark={darkmode}/>
                </Container>
            </div>
        </>
    );
};

export default Account;