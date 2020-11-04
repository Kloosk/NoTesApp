import React from 'react';
import styled from 'styled-components'
import Logo from "../logo/Logo";
import {notesExample} from "../../data/Data";
import Note from "./note/Note"
import Menu from "../dashboard/menu/Menu";
import Nav from "../nav/Nav";

const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  margin-top: 10vh;
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
  font-size: 3rem;
  color: #F9B613;
  margin: 5vh 0 0 0;
`;
const Span = styled.span`
  color: #0798DA;
`;
const Touse = () => {
    return (
        <>
            <Logo/>
            <Menu/>
            <Nav/>
            <H1><Span>C</Span>hoose</H1>
            <Container>
                {notesExample.map((el,i) => <Note key={i} title={el.title} text={el.text} titlecolor={el.titleColor} titlebg={el.titleBg} textcolor={el.textColor} textbg={el.textBg} border={el.border} font={el.font} textsize={el.textSize} titlesize={el.titleSize}/>)}
            </Container>
        </>
    );
};

export default Touse;