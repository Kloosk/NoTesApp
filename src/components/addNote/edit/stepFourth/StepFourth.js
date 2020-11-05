import React from 'react';
import styled from 'styled-components'
import {rightTrue, setMove} from "../../../../redux";
import {useDispatch} from "react-redux";
import SendBtn from "../../sendBtn/SendBtn";
import SaveBtn from "../../saveBtn/saveBtn";

const Container = styled.div`
 left: 400vw;
 width: 100vw;
 transition: transform 0.5s ease; 
 transform: ${props => `translateX(${props.move}vw)`};
 position: absolute;
  @media (min-width: 768px) {
    display: none;
 }
`;
const H1 = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;
  text-align: center;
  color: #F9B613;
`;
const Span = styled.span`
  color: #0798DA;
`;
const Center = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  font-size: 1.2rem;
  margin: 3px 0;
  padding: 7px 14px;
  background: none;
  border: 2px solid #F9B613;
  color: #F9B613;
  position: relative;
  min-width: 150px;
  cursor: pointer;
  overflow: hidden;
  &::before{
    z-index: -1;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transition: transform 0.5s ease, opacity 0.5s ease;
    transform: translate(-50%,-50%) scaleX(0) skewX(4deg);
    opacity: 0;
    height: 100%;
    width: 10%;
    background-color: #0798DA;
  }
  &:hover::before{
    opacity: 1;
    transform: translate(-50%,-50%) scaleX(10) skewX(4deg);
  }
`;
const StepFourth = ({move}) => {
    const dispatch = useDispatch();
    const handleMove = () => {
        dispatch(setMove(-100));
        dispatch(rightTrue());
    };
    return (
        <Container move={move}>
            <H1><Span>I</Span>s everything correct?</H1>
                <Center>
                    <Button onClick={handleMove}>Edit</Button>
                    <SendBtn/>
                    <SaveBtn/>
                </Center>

        </Container>
    );
};

export default StepFourth;