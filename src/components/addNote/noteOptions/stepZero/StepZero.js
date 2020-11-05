import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {leftTrue, rightFalse, rightTrue, setMove, setObj} from "../../../../redux";
import {genereateOne} from "../../../../data/Data";
import SendBtn from "../../sendBtn/SendBtn";
import SubmitEdit from "../../../edit/submitEdit/SubmitEdit";

const Container =styled.div`
  width: 100vw;
  transition: transform 0.5s ease; 
  transform: ${props => `translateX(${props.move}vw)`};
  position: absolute;
  left: 0;
  margin-top: 50px;
  @media (min-width: 768px) {
    position: static;
    width: 100%;
    transform: none;
    transition: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Center = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-top: 0;
    width: 50vw;
    flex-direction: row;
    justify-content: space-between;
  }
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
   @media (min-width: 768px) {
    display: ${props => props.show ? 'none' : 'block'};
   }
`;
const Linkk = styled(Link)`
  text-decoration: none;
`;
const StepZero = ({edit}) => {
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
    const handleGenerate = () => {
        dispatch(setObj(genereateOne()));
    };

    return (
        <Container move={move}>
            <Center>
                <Button show={false} onClick={handleGenerate}>Generate</Button>
                <Linkk to="/touse"><Button>Use</Button></Linkk>
                <Button show={true} onClick={moveRight}>Create own</Button>
                <SendBtn edit={edit}/>
                <SubmitEdit edit={edit}/>
            </Center>
        </Container>
    );
};

export default StepZero;