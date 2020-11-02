import React, {useState} from 'react';
import styled from 'styled-components'
import StepZero from "./stepZero/StepZero";
import StepFirst from "./stepFirst/stepFirst";
import StepTwice from "./stepTwo/stepTwice";
import StepThird from "./stepThird/stepThird";
import StepFourth from "./stepFourth/StepFourth";
import {useDispatch, useSelector} from "react-redux";
import {leftFalse, leftTrue, rightFalse, rightTrue, setMove} from "../../../redux";

const Container = styled.div`
  width: 500vw;
  height: 50vh;
`;
const Left = styled.button`
  background: none;
  border: none;
  padding: 2px;
  display: ${props => props.leftArrow ? 'block' : 'none'};
  cursor: pointer;
  :hover{
    transform: translateX(-2px);
  }
`;
const Right = styled.button`
  background: none;
  border: none;
  padding: 2px;
  display: ${props => props.rightArrow ? 'block' : 'none'};
  cursor: pointer;
  :hover{
    transform: translateX(2px);
  }
`;
const Svg = styled.svg`
  width: 40px;
  height: 40px;
  color: #F9B613;
`;
//Zero

const ButtonAdd = styled.button`
  font-size: 1.2rem;
  margin: 3px 0;
  padding: 7px 14px;
  background: none;
  border: 2px solid #F9B613;
  color: #F9B613;
  min-width: 150px;
`;
const Arrows = styled.div`
  width: 100%;
  transition: opacity 0.5s ease; 
  opacity: ${props => props.move ? '1' : '0'};
  visibility: ${props => props.move ? 'visible' : 'hidden'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
`;

const Edit = () => {
    const dispatch = useDispatch();
    const {move,right,left} = useSelector(state => state.arrows);
    const moveRight = () => {
        dispatch(setMove(move-100));
        if(move === -300) dispatch(rightFalse());
        else{
            dispatch(rightTrue());
            dispatch(leftTrue());
        }
    };
    const moveLeft = () => {
        dispatch(setMove(move+100));
        if(move === 0) dispatch(leftFalse());
        else{
            dispatch(rightTrue());
            dispatch(leftTrue());
        }
    };
    return (
        <>

            <Arrows move={move}>
                <Left leftArrow={left} onClick={moveLeft}><Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path></Svg></Left>
                <Right rightArrow={right} onClick={moveRight}><Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></Svg></Right>
            </Arrows>

            <Container>
                <StepZero/>
                <StepFirst move={move}/>
                <StepTwice move={move}/>
                <StepThird move={move}/>
                <StepFourth move={move}/>
            </Container>
        </>
    );
};

export default Edit;