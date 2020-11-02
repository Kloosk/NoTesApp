import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {leftTrue, rightFalse, rightTrue, setMove} from "../../../../redux";

const Container =styled.div`
  width: 100vw;
  transition: transform 0.5s ease; 
  transform: ${props => `translateX(${props.move}vw)`};
  position: absolute;
  left: 0;
  margin-top: 50px;
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
const StepZero = () => {
    const dispatch = useDispatch();
    const move = useSelector(state => state.arrows.move);
    const moveRight = () => {
        dispatch(setMove(move-100));
        if(move === -300) dispatch(rightFalse());
        else{
            dispatch(rightTrue());
            dispatch(leftTrue());
        }
    };

    return (
        <Container move={move}>
            <Center>
                <Button>Generate</Button>
                <Link to="/touse"><Button>Use</Button></Link>
                <Button onClick={moveRight}>Create own</Button>
                <Button>Add</Button>
            </Center>
        </Container>
    );
};

export default StepZero;