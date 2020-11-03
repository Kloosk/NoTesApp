import React from 'react';
import styled from 'styled-components'
import Logo from "../logo/Logo";
import {notesExample} from "../../data/Data";
import Note from "./note/Note"

const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  margin-top: 10vh;
  justify-items: center;
`;
const H1 = styled.h1`
  font-size: 2rem;
  color: #F9B613;
  margin-bottom: 5vh;
`;
const Span = styled.span`
  color: #0798DA;
`;
const Touse = () => {
    return (
        <>
            <Logo/>
            <Container>
                <H1><Span>C</Span>hoose</H1>
                {notesExample.map((el,i) => <Note key={i} title={el.title} text={el.text} titlecolor={el.titleColor} titlebg={el.titleBg} textcolor={el.textColor} textbg={el.textBg} border={el.border} font={el.font} textsize={el.textSize} titlesize={el.titleSize}/>)}
            </Container>
        </>
    );
};

export default Touse;