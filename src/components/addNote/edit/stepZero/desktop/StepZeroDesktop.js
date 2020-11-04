import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setObj} from "../../../../../redux";
import {genereateOne} from "../../../../../data/Data";
import SendBtn from "../../../sendBtn/SendBtn";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  font-size: 1.2rem;
  margin: 3px 0;
  padding: 7px 14px;
  background: none;
  border: 2px solid #F9B613;
  color: #F9B613;
  position: relative;
  width: 100px;
  cursor: pointer;
  overflow: hidden;
  &:last-child{
    margin-left: 5px;
  }
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
const StepZeroDesktop = () => {
    const dispatch = useDispatch();
    const handleGenerate = () => {
        dispatch(setObj(genereateOne()));
    };
    return (
        <Container>
            <Center>
                <Button onClick={handleGenerate}>Random</Button>
                <Linkk to="/touse"><Button>Use</Button></Linkk>
            </Center>
            <SendBtn/>
        </Container>
    );
};

export default StepZeroDesktop;