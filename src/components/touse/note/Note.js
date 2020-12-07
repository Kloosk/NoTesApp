import React from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {setTemplate, TouseTrue} from "../../../redux";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 80vw;
  min-height: 200px;
  border: 2px solid ${props => props.border};
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 100%;
    cursor: pointer;
  }
`;
const Title = styled.div`
  min-height: 30px;
  padding: 5px;
  width: 100%;
  text-align: center;
  background: ${props => props.titlebg};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  color: ${props => props.titlecolor};
  font-family: ${props => props.font};
  font-size: 1.7rem;
`;
const Desc = styled.div`
  min-height: 170px;
  padding: 10px;
  width: 100%;
  background: ${props => props.textbg};
  @media (min-width: 768px) {
    height: 100%;
    cursor: pointer;

  }
`;
const P = styled.p`
  color: ${props => props.textcolor};
  font-family: ${props => props.font};
  font-size: 1rem;
`;
const Note = ({titlecolor,titlebg,textcolor,textbg,border,font}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleChoose = () => {
        const obj = {
            titleColor: titlecolor,
            titleBg: titlebg,
            textColor: textcolor,
            textBg:textbg,
            border,
            font,
        };
        dispatch(TouseTrue());
        dispatch(setTemplate(obj));
        history.push("/add");
    };
    return (
        <Container border={border} onClick={handleChoose}>
            <Title titlebg={titlebg}>
                <H1 titlecolor={titlecolor} font={font}>Title</H1>
            </Title>
            <Desc textbg={textbg}>
                    <P textcolor={textcolor} font={font}>Your Text</P>
            </Desc>
        </Container>
    );
};

export default Note;