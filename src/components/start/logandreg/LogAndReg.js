import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Container = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    top: 70%;
    flex-direction: row;
  }
`;
const Btn = styled.button`
  border: 4px solid #fff;
  background-color: transparent;
  font-size: 1.8rem;
  padding: 7px 14px;
  color: #fff;
  transition: border 1s ease,color 1s ease;
  cursor: pointer;
  &:hover{
    border: 4px solid #F9B613;
    color: #0798DA;
  }
  @media (min-width: 768px) {
    padding: 7px 14px;
    font-size: 2rem;
    width: 200px;
  }
`;
const Linkk = styled(Link)`
  text-decoration: none;
  transition: transform 0.9s 0.4s ease;
  &:nth-child(1){
    transform: ${props => props.startnoww ? 'translateX(0)' : 'translateX(-100vw)'}; 
  }
  &:last-child{
    transform: ${props => props.startnoww ? 'translateX(0)' : 'translateX(100vw)'}; 
  }
`;
const P = styled.p`
  margin: 12px 0;
  color: #0798DA;
  font-size: 1.5rem;
  transition: opacity 0.5s 1.5s ease;
  opacity: ${props => props.startnoww ? 1 : 0};
  @media (min-width: 768px) {
    margin: 0 30px;
    font-size: 4rem;
  }
`;
const Span = styled.span`
  color: #F9B613;
`;
const LogAndReg = () => {
    const startnow = useSelector(state => state.startnow.startnow);
    return (
       <Container>
            <Linkk to="/login" startnoww={startnow ? 1 : 0} ><Btn>Login</Btn></Linkk>
            <P startnoww={startnow ? 1 : 0}><Span>O</Span>R</P>
            <Linkk to="/register" startnoww={startnow ? 1 : 0} ><Btn>Register</Btn></Linkk>
        </Container>
    );
};

export default LogAndReg;