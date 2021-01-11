import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Logo from "../logo/Logo";
import {notesExample} from "../../data/Data";
import Note from "./note/Note"
import Menu from "../navMobile/Menu";
import Nav from "../nav/Nav";
import {dashClose, menuDesktopClose} from "../../redux";
import {useDispatch} from "react-redux";
import bg from "../../img/bgReg.jpg"

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  background-image: ${props => props.darkmode ? "none" : `url(${bg})`};
  background-color: ${props => props.darkmode && `#231f20`};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  margin: 10vh 0;
  justify-items: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3,1fr);
    grid-gap: 50px;
    padding: 0 50px;
  }
`;
const H1 = styled.h1`
  width: 100vw;
  text-align: center;
  font-size: 2.2rem;
  color: #F9B613;
  margin: 10vh 0 0 0;
  @media (min-width: 768px) {
    font-size: 3rem;
    margin: 5vh 0 0 0;
  }
`;
const Span = styled.span`
  color: #0798DA;
`;
const Touse = () => {
   const dispatch = useDispatch();
    const [darkmode,setDarkmode] = useState(false);
    useEffect(() => {
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);

    const closeMenu = () => {
        dispatch(dashClose());
        dispatch(menuDesktopClose())
    };
    return (
        <Bg darkmode={darkmode}>
            <Logo/>
            <Menu/>
            <Nav/>
            <H1><Span>C</Span>hoose</H1>
            <Container onClick={closeMenu}>
                {notesExample.map((el,i) => <Note key={i} titlecolor={el.titleColor} titlebg={el.titleBg} textcolor={el.textColor} textbg={el.textBg} border={el.border} font={el.font}/>)}
            </Container>
        </Bg>
    );
};

export default Touse;