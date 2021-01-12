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
  padding-top: 70px;
  @media (min-width: 768px) {
      padding-top: 50px;
   }
  }
`;
const Grid = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  justify-items: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3,1fr);
    grid-gap: 50px;
    margin: 50px;
  }
`;
const H1 = styled.h1`
  width: 100vw;
  text-align: center;
  font-size: 2rem;
  color: #F9B613;
  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin: 0;
  }
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
        <>
            <Logo/>
            <Menu/>
            <Nav/>
            <Container onClick={closeMenu} darkmode={darkmode}>
                <H1>Select by click</H1>
                <Grid>
                    {notesExample.map((el,i) => <Note key={i} titlecolor={el.titleColor} titlebg={el.titleBg} textcolor={el.textColor} textbg={el.textBg} border={el.border} font={el.font}/>)}
                </Grid>
            </Container>
        </>
    );
};

export default Touse;