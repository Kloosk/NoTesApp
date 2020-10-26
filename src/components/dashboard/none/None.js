import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.div`
  font-family: 'Grandstander', cursive;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90vw;
  transform: translate(-50%,-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
const H1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 40px;
  color: #F9B613;
  @media (min-width: 768px) {
    font-size: 3rem;
    width: 50%;
  }
`;
const Span = styled.span`
 color: #0798DA;
`;
const Linkk = styled(Link)`
  text-decoration: none;
`;
const Btn = styled.button`
  font-family: 'Grandstander', cursive;
  font-size: 2rem;
  color: #0798DA;
  background: #F9B613;
  padding: 7px 14px;
  border: 3px solid #F9B613;
  cursor: pointer;
  &:hover{
    border: 3px solid #0798DA;
  }
  &:focus{
    outline: none;
    border: 3px solid #0798DA;
  }
   @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
const None = () => {
    return (
        <Container>
            <H1><Span>L</Span>ooks like you don't have any no<Span>T</Span>es.</H1>
            <Linkk to="/edit"><Btn>Add now</Btn></Linkk>
        </Container>
    );
};

export default None;